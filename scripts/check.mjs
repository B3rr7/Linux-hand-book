import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const contentDir = path.join(root, "content", "commands");
const distDir = path.join(root, "dist");
const normalizeBasePath = (value = "/") => {
  const trimmed = String(value).trim();
  if (!trimmed || trimmed === "/") return "/";
  return `/${trimmed.replace(/^\/+|\/+$/g, "")}/`;
};
const siteBasePath = normalizeBasePath(process.env.SITE_BASE_PATH);
const requiredFields = ["name", "summary", "category", "tags", "popular"];
const sourceScripts = [
  "scripts/build.mjs",
  "scripts/check.mjs",
  "scripts/clean.mjs",
  "scripts/dev-server.mjs",
  "scripts/import-linux-command-coverage.mjs",
  "public/assets/search.js",
  "public/assets/theme.js",
  "public/assets/tools.js",
  "public/assets/tree.js"
];
const errors = [];

const slugify = (value) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9_]+/g, "-")
    .replace(/^-+|-+$/g, "");

function parseFrontmatter(source, file) {
  const normalized = source.replace(/\r\n/g, "\n");
  if (!normalized.startsWith("---\n")) {
    throw new Error(`${file}: missing frontmatter`);
  }

  const end = normalized.indexOf("\n---", 4);
  if (end === -1) {
    throw new Error(`${file}: unterminated frontmatter`);
  }

  const data = {};
  for (const line of normalized.slice(4, end).trim().split("\n")) {
    const index = line.indexOf(":");
    if (index === -1) continue;
    const key = line.slice(0, index).trim();
    const value = line.slice(index + 1).trim();
    data[key] = value.replace(/^["']|["']$/g, "");
  }

  return {
    data,
    body: normalized.slice(end + 4).trim()
  };
}

async function walk(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(fullPath)));
    else if (entry.isFile()) files.push(fullPath);
  }
  return files;
}

for (const script of sourceScripts) {
  const result = spawnSync(process.execPath, ["--check", script], {
    cwd: root,
    encoding: "utf8"
  });
  if (result.status !== 0) {
    errors.push(`${script}: JavaScript syntax check failed\n${result.stderr.trim()}`);
  }
}

const commandFiles = (await readdir(contentDir))
  .filter((file) => file.endsWith(".md"))
  .sort();
const names = new Map();
const slugs = new Map();

for (const file of commandFiles) {
  let parsed;
  try {
    parsed = parseFrontmatter(await readFile(path.join(contentDir, file), "utf8"), file);
  } catch (error) {
    errors.push(error.message);
    continue;
  }

  for (const field of requiredFields) {
    if (!parsed.data[field]) errors.push(`${file}: missing ${field}`);
  }

  const name = parsed.data.name || path.basename(file, ".md");
  const slug = slugify(name);
  const expectedSlug = path.basename(file, ".md");

  if (slug !== expectedSlug) {
    errors.push(`${file}: filename does not match generated slug "${slug}"`);
  }
  if ((parsed.body.match(/^```/gm) || []).length % 2 !== 0) {
    errors.push(`${file}: unclosed fenced code block`);
  }
  for (const heading of ["## Additional Notes", "## Syntax", "## Parameters", "## Examples", "## Practical Notes"]) {
    if (!parsed.body.includes(heading)) errors.push(`${file}: missing "${heading}" section`);
  }

  if (names.has(name)) errors.push(`${file}: duplicate command name also used by ${names.get(name)}`);
  else names.set(name, file);

  if (slugs.has(slug)) errors.push(`${file}: duplicate slug also used by ${slugs.get(slug)}`);
  else slugs.set(slug, file);
}

const generatedFiles = await walk(distDir);
const htmlFiles = generatedFiles.filter((file) => file.endsWith(".html"));
let localReferenceCount = 0;

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const reference = match[1];
    if (/^(?:https?:|mailto:|data:|#)/.test(reference)) continue;

    localReferenceCount += 1;
    const cleanReference = reference.split(/[?#]/)[0];
    let target;
    if (cleanReference.startsWith("/")) {
      if (siteBasePath !== "/" && !cleanReference.startsWith(siteBasePath)) {
        errors.push(`${path.relative(root, file)}: reference escapes site base path: ${reference}`);
        continue;
      }
      const siteRelative =
        siteBasePath === "/" ? cleanReference.slice(1) : cleanReference.slice(siteBasePath.length);
      target = path.join(distDir, siteRelative);
    } else {
      target = path.resolve(path.dirname(file), cleanReference);
    }

    try {
      const info = await stat(target);
      if (!info.isFile()) errors.push(`${path.relative(root, file)}: broken reference ${reference}`);
    } catch {
      errors.push(`${path.relative(root, file)}: broken reference ${reference}`);
    }
  }
}

if (errors.length) {
  console.error(`Validation failed with ${errors.length} issue${errors.length === 1 ? "" : "s"}:`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(
  `Validated ${commandFiles.length} command files, ${sourceScripts.length} scripts, ` +
    `${htmlFiles.length} generated HTML files, and ${localReferenceCount} local references.`
);
