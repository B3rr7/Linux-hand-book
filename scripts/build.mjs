import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const contentDir = path.join(root, "content", "commands");
const publicDir = path.join(root, "public");
const distDir = path.join(root, "dist");

const site = {
  title: "Linux Command",
  description: "A fast searchable Linux command handbook for learners and daily reference."
};

const normalizeBasePath = (value = "/") => {
  const trimmed = String(value).trim();
  if (!trimmed || trimmed === "/") return "/";
  return `/${trimmed.replace(/^\/+|\/+$/g, "")}/`;
};

const siteBasePath = normalizeBasePath(process.env.SITE_BASE_PATH);

const wallpaperExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif", ".svg"]);

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const slugify = (value) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9_]+/g, "-")
    .replace(/^-+|-+$/g, "");

function parseFrontmatter(source, file) {
  const normalized = source.replace(/\r\n/g, "\n");
  if (!normalized.startsWith("---\n")) {
    throw new Error(`${file} is missing frontmatter`);
  }

  const end = normalized.indexOf("\n---", 4);
  if (end === -1) {
    throw new Error(`${file} has unterminated frontmatter`);
  }

  const raw = normalized.slice(4, end).trim();
  const body = normalized.slice(end + 4).trim();
  const data = {};

  for (const line of raw.split("\n")) {
    const index = line.indexOf(":");
    if (index === -1) continue;
    const key = line.slice(0, index).trim();
    const value = line.slice(index + 1).trim();

    if (value === "true") data[key] = true;
    else if (value === "false") data[key] = false;
    else if (key === "tags") data[key] = value.split(",").map((tag) => tag.trim()).filter(Boolean);
    else data[key] = value.replace(/^["']|["']$/g, "");
  }

  return { data, body };
}

function inlineMarkdown(text) {
  return escapeHtml(text)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
}

function renderMarkdown(markdown) {
  const lines = markdown.split(/\r?\n/);
  const html = [];
  let listOpen = false;
  let paragraph = [];
  let codeOpen = false;
  let codeLines = [];

  const closeParagraph = () => {
    if (paragraph.length) {
      html.push(`<p>${inlineMarkdown(paragraph.join(" "))}</p>`);
      paragraph = [];
    }
  };

  const closeList = () => {
    if (listOpen) {
      html.push("</ul>");
      listOpen = false;
    }
  };

  for (const line of lines) {
    if (line.startsWith("```")) {
      if (codeOpen) {
        html.push(`<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
        codeOpen = false;
        codeLines = [];
      } else {
        closeParagraph();
        closeList();
        codeOpen = true;
      }
      continue;
    }

    if (codeOpen) {
      codeLines.push(line);
      continue;
    }

    if (!line.trim()) {
      closeParagraph();
      closeList();
      continue;
    }

    const heading = line.match(/^(#{2,4})\s+(.+)$/);
    if (heading) {
      closeParagraph();
      closeList();
      const level = heading[1].length;
      const text = heading[2].trim();
      html.push(`<h${level} id="${slugify(text)}">${inlineMarkdown(text)}</h${level}>`);
      continue;
    }

    const item = line.match(/^\s*-\s+(.+)$/);
    if (item) {
      closeParagraph();
      if (!listOpen) {
        html.push("<ul>");
        listOpen = true;
      }
      html.push(`<li>${inlineMarkdown(item[1])}</li>`);
      continue;
    }

    paragraph.push(line.trim());
  }

  closeParagraph();
  closeList();

  return html.join("\n");
}

async function loadCommands() {
  let files;
  try {
    files = (await readdir(contentDir)).filter((file) => file.endsWith(".md")).sort();
  } catch {
    console.error(`Failed to read ${contentDir}`);
    return [];
  }

  const commands = [];

  for (const file of files) {
    const fullPath = path.join(contentDir, file);
    let source;
    try {
      source = await readFile(fullPath, "utf8");
    } catch {
      console.error(`Failed to read ${fullPath}, skipping`);
      continue;
    }
    let data, body;
    try {
      ({ data, body } = parseFrontmatter(source, file));
    } catch (err) {
      console.error(`Skipping ${file}: ${err.message}`);
      continue;
    }
    const name = String(data.name || path.basename(file, ".md"));
    const slug = slugify(name);

    commands.push({
      name,
      slug,
      summary: data.summary || "",
      category: data.category || "General",
      tags: Array.isArray(data.tags) ? data.tags : [],
      popular: Boolean(data.popular),
      body,
      html: renderMarkdown(body),
      searchText: [name, data.summary, data.category, ...(data.tags || []), body]
        .join(" ")
        .toLowerCase()
        .replace(/\s+/g, " ")
        .trim()
    });
  }

  return commands.sort((a, b) => a.name.localeCompare(b.name));
}

const relativePrefix = (depth) => (depth === 0 ? "" : "../".repeat(depth));

function layout({ title, description = site.description, body, current = "", depth = 0, prefixOverride = null }) {
  const prefix = prefixOverride ?? relativePrefix(depth);
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}">
    <link rel="icon" href="${prefix}favicon.svg" type="image/svg+xml">
    <script>
      (() => {
        const savedTheme = localStorage.getItem("linux-command-theme") || "default";
        const autoTheme = () => {
          const hour = new Date().getHours();
          if (hour >= 20 || hour < 5) {
            const saved = localStorage.getItem("linux-command-auto-dark");
            return saved === "moon" || saved === "electricity" ? saved : "moon";
          }
          if (hour >= 17) return "night";
          return "default";
        };
        document.documentElement.dataset.theme = savedTheme === "auto" ? autoTheme() : savedTheme;
      })();
    </script>
    <link rel="stylesheet" href="${prefix}assets/styles.css">
  </head>
  <body>
    <header class="site-header">
      <a class="brand" href="${prefix}index.html" aria-label="Linux Command home">
        <span class="brand-mark">$</span>
        <span>Linux Command</span>
      </a>
      <nav class="site-nav" aria-label="Main navigation">
        <a ${current === "home" ? 'aria-current="page"' : ""} href="${prefix}index.html">Home</a>
        <a ${current === "commands" ? 'aria-current="page"' : ""} href="${prefix}commands/index.html">Commands</a>
        <a ${current === "tree" ? 'aria-current="page"' : ""} href="${prefix}linux-tree/index.html">Linux Tree</a>
        <a ${current === "tools" ? 'aria-current="page"' : ""} href="${prefix}tools/index.html">Tools</a>
        <a ${current === "about" ? 'aria-current="page"' : ""} href="${prefix}about/index.html">About</a>
      </nav>
    </header>
    ${body}
    <aside class="penguin-theme" aria-label="Display theme switcher">
      <div class="penguin" aria-hidden="true">
        <span class="penguin-head"></span>
        <span class="penguin-face"></span>
        <span class="penguin-eye left"></span>
        <span class="penguin-eye right"></span>
        <span class="penguin-beak"></span>
        <span class="penguin-body"></span>
        <span class="penguin-belly"></span>
        <span class="penguin-foot left"></span>
        <span class="penguin-foot right"></span>
      </div>
      <button class="penguin-device" type="button" aria-expanded="false" aria-controls="theme-menu" data-theme-device>
        <span class="device-dot"></span>
        <span class="device-line"></span>
      </button>
      <div class="theme-menu" id="theme-menu" hidden data-theme-menu>
        <button type="button" data-theme-choice="auto">Auto</button>
        <button type="button" data-theme-choice="night">Night Mode</button>
        <button type="button" data-theme-choice="electricity">Dark Mode</button>
        <button type="button" data-theme-choice="moon">Moon Night</button>
        <button type="button" data-theme-choice="default">Default</button>
      </div>
      <div class="penguin-tip" hidden data-penguin-tip role="status" aria-live="polite"></div>
      <time class="penguin-clock" data-penguin-clock aria-label="Current time"></time>
    </aside>
    <button class="moon-wallpaper-hotspot" type="button" data-wallpaper-cycle aria-label="Change Moon Night wallpaper" title="Change Moon Night wallpaper"></button>
    <footer class="site-footer">
      <span>No ads. Markdown-powered. Built for quick reference.</span>
    </footer>
    <script>
      window.__SEARCH_INDEX__ = "${prefix}search-index.json";
      window.__TOOLS_INDEX__ = "${prefix}tools-index.json";
      window.__WALLPAPERS_INDEX__ = "${prefix}wallpapers-index.json";
      window.__SITE_ROOT__ = "${prefix}";
    </script>
    <script src="${prefix}assets/search.js" type="module"></script>
    <script src="${prefix}assets/tools.js" type="module"></script>
    <script src="${prefix}assets/tree.js" type="module"></script>
    <script src="${prefix}assets/theme.js" type="module"></script>
  </body>
</html>`;
}

function commandCard(command, prefix = "") {
  return `<a class="command-card" href="${prefix}commands/${command.slug}/index.html" data-command-card>
    <span class="command-name">${escapeHtml(command.name)}</span>
    <span class="command-summary">${escapeHtml(command.summary)}</span>
    <span class="tag-row">${command.tags.slice(0, 4).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</span>
  </a>`;
}

function homePage(commands) {
  const popular = commands.filter((command) => command.popular);
  return layout({
    title: `${site.title} - Searchable Linux command handbook`,
    current: "home",
    body: `<main>
      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">Quick Linux reference</p>
          <h1>Find the command you need without leaving the keyboard.</h1>
          <p>Search command names, options, examples, and notes from a clean markdown-backed handbook.</p>
        </div>
        <form class="search-panel" role="search" data-search-form>
          <label for="command-search">Search commands</label>
          <div class="search-box">
            <input id="command-search" data-search-input type="search" placeholder="Try ls, ssh, grep, permissions, logs..." autocomplete="off">
            <button type="reset" data-search-clear>Clear</button>
          </div>
        </form>
      </section>
      <section class="results-section" aria-live="polite">
        <div class="section-heading">
          <h2 data-results-title>Popular commands</h2>
          <p data-results-count>${popular.length} commands</p>
        </div>
        <div class="command-grid" data-results>
          ${popular.map((command) => commandCard(command)).join("\n")}
        </div>
        <div class="empty-state" data-empty-state hidden>
          <h2>No commands found</h2>
          <p>Try a command name, a task like "copy", or a topic like "logs".</p>
        </div>
      </section>
    </main>`
  });
}

function commandsPage(commands) {
  return layout({
    title: `All commands - ${site.title}`,
    current: "commands",
    depth: 1,
    body: `<main class="page-shell">
      <section class="page-intro">
        <p class="eyebrow">Command index</p>
        <h1>All Linux commands</h1>
        <form class="inline-search" role="search" data-search-form>
          <label for="index-search">Filter the index</label>
          <div class="search-box">
            <input id="index-search" data-search-input type="search" placeholder="Search names, examples, notes..." autocomplete="off">
            <button type="reset" data-search-clear>Clear</button>
          </div>
        </form>
      </section>
      <section class="results-section" aria-live="polite">
        <div class="section-heading">
          <h2 data-results-title>Command index</h2>
          <p data-results-count>${commands.length} commands</p>
        </div>
        <div class="command-grid" data-results>
          ${commands.map((command) => commandCard(command, "../")).join("\n")}
        </div>
        <div class="empty-state" data-empty-state hidden>
          <h2>No commands found</h2>
          <p>Try a broader term or clear the search to return to the full index.</p>
        </div>
      </section>
    </main>`
  });
}

function detailPage(command, commands) {
  const related = commands
    .filter((item) => item.slug !== command.slug && item.category === command.category)
    .slice(0, 4);

  return layout({
    title: `${command.name} command - ${site.title}`,
    description: command.summary,
    depth: 2,
    body: `<main class="detail-shell">
      <nav class="breadcrumb" aria-label="Breadcrumb"><a href="../index.html">Commands</a><span>/</span><span>${escapeHtml(command.name)}</span></nav>
      <article class="command-detail">
        <header class="detail-header">
          <p class="eyebrow">${escapeHtml(command.category)}</p>
          <h1>${escapeHtml(command.name)}</h1>
          <p>${escapeHtml(command.summary)}</p>
          <div class="tag-row">${command.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
        </header>
        <div class="prose">
          ${command.html}
        </div>
      </article>
      <aside class="related">
        <h2>Related commands</h2>
        ${related.length ? related.map((item) => `<a href="../${item.slug}/index.html"><strong>${escapeHtml(item.name)}</strong><span>${escapeHtml(item.summary)}</span></a>`).join("\n") : `<p>No related commands yet.</p>`}
      </aside>
    </main>`
  });
}

function aboutPage() {
  return layout({
    title: `About - ${site.title}`,
    description: "About Linux Command — a searchable handbook of 620+ Linux command references built from personal learning, open resources, and AI assistance.",
    current: "about",
    depth: 1,
    body: `<main class="about-shell">
      <section class="about-hero">
        <p class="eyebrow">About the project</p>
        <h1>Linux Command exists because I wanted one place to learn Linux without getting lost.</h1>
        <p>I started this project while trying to learn Linux seriously. I found many good pages and repositories, but the more I collected, the more confusing it became. Some were useful, some were incomplete, and some were in languages I could not read easily. I needed a clean learning resource that could grow with me.</p>
      </section>
      <section class="about-panels" aria-label="Project details">
        <article>
          <h2>Why it exists</h2>
          <p>Linux has many commands, paths, files, permissions, logs, tools, and small details. When I learned them only from search results or chat, the knowledge disappeared too fast. This site turns that learning into a searchable handbook I can open again later.</p>
        </article>
        <article>
          <h2>My learning story</h2>
          <p>I am not a formal student. I started learning Linux and cybersecurity near the end of 2021. In 2023 I stepped away because of personal pressure, no clear job market near me, and communication barriers when considering opportunities elsewhere.</p>
        </article>
        <article>
          <h2>Starting again</h2>
          <p>Stepping away taught me a hard truth: the more I learned about the field, the more I realized how difficult it was to break into it. In 2025 I joined a course under NIT Foundation and realized how much I had forgotten. At that time, the only Linux commands I clearly remembered were <code>apt update</code> and <code>apt upgrade</code>.</p>
        </article>
        <article>
          <h2>Why I continue</h2>
          <p>In 2025 I started again. I learned new things, used Linux more deeply, built a NetHunter kernel, customized tools, made a game file replacer with AI, explored local LLMs, experimented with custom ROMs, and tried device modding. That work was fun and gave me real happiness. This site is part of that second journey.</p>
        </article>
        <article>
          <h2>The Chinese repository</h2>
          <p>While searching, I found the Chinese open source repository <a href="https://github.com/jaywcjlove/linux-command" rel="noreferrer" target="_blank"><code>jaywcjlove/linux-command</code></a>. It had extensive command coverage and helped me see how big a Linux command reference could be. I used it for coverage comparison and inspiration.</p>
        </article>
        <article>
          <h2>Language problem</h2>
          <p>The repository was useful, but I could not understand everything clearly because of the language barrier. Translation alone was not enough for deep learning. I wanted simple English explanations, examples, categories, and notes that matched how I was studying.</p>
        </article>
        <article>
          <h2>AI helped build it</h2>
          <p>AI helped explain commands, rewrite confusing notes, compare ideas, organize data, build the static pages, improve the design, and turn the learning process into a real website. The goal was not just to ask AI questions, but to save the useful answers in a place I can search and practice from.</p>
        </article>
        <article>
          <h2>Learning path</h2>
          <p>While learning Linux, I also started learning about footprinting, cybersecurity tools, filesystems, and command-line workflows. This is why the site now includes command pages, the Linux tree, tool lists, operating systems, programming languages, and student security resources.</p>
        </article>
        <article>
          <h2>How it is built</h2>
          <p>Command pages live in <code>content/commands</code> as markdown, then the build script turns them into fast static pages inside <code>dist</code>. The project stays simple: no database, no backend framework, and no tracking. It is a personal learning project that can keep improving.</p>
        </article>
      </section>
    </main>`
  });
}

function notFoundPage() {
  return layout({
    title: `Page not found - ${site.title}`,
    description: "The requested Linux Command page could not be found.",
    prefixOverride: siteBasePath,
    body: `<main class="page-shell">
      <section class="page-intro">
        <p class="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>The page may have moved, or the URL may be typed incorrectly. Search the command index or return home.</p>
      </section>
      <section class="results-section">
        <div class="command-grid">
          <a class="command-card" href="${siteBasePath}index.html">
            <span class="command-name">Home</span>
            <span class="command-summary">Return to the main search page.</span>
          </a>
          <a class="command-card" href="${siteBasePath}commands/index.html">
            <span class="command-name">Commands</span>
            <span class="command-summary">Browse every Linux command page.</span>
          </a>
          <a class="command-card" href="${siteBasePath}linux-tree/index.html">
            <span class="command-name">Linux Tree</span>
            <span class="command-summary">Explore the Linux filesystem guide.</span>
          </a>
        </div>
      </section>
    </main>`
  });
}

function linuxTreePage() {
  return layout({
    title: `Linux Tree - ${site.title}`,
    description: "A visual guide to the Linux filesystem tree and what common top-level directories are for.",
    current: "tree",
    depth: 1,
    body: `<main class="linux-tree-shell">
      <section class="page-intro">
        <p class="eyebrow">Linux filesystem</p>
        <h1>See how the Linux directory tree is organized.</h1>
        <p>Linux starts from one root directory, written as <code>/</code>. Everything else branches below it: commands, user files, devices, logs, configuration, mounted disks, and live kernel information.</p>
      </section>
      <form class="tree-search" role="search" data-tree-search-form>
        <label for="tree-search">Find a file or directory</label>
        <div class="search-box">
          <input id="tree-search" data-tree-search-input type="search" placeholder="Try passwd, fstab, ls, log, /etc/passwd..." autocomplete="off">
          <button type="submit">Find</button>
        </div>
        <p class="tree-search-status" data-tree-search-status aria-live="polite"></p>
      </form>
      <section class="tree-visual-section" aria-label="Linux filesystem tree diagram">
        <div class="filesystem-tree" aria-label="Interactive tree diagram showing common Linux directories below root" data-tree-stage>
          <div class="tree-scroll" data-tree-scroll>
            <ul class="linux-file-tree">
              <li>
                <button class="tree-node tree-node-root" type="button" data-tree-path="/"><code>/</code><small>root filesystem</small></button>
                <ul>
                  <li>
                    <button class="tree-node" type="button" data-tree-path="/bin"><code>bin/</code><small>essential commands</small></button>
                    <ul>
                      <li><button class="tree-leaf" type="button" data-tree-path="/bin/ls"><code>ls</code></button></li>
                      <li><button class="tree-leaf" type="button" data-tree-path="/bin/cp"><code>cp</code></button></li>
                      <li><button class="tree-leaf" type="button" data-tree-path="/bin/sh"><code>sh</code></button></li>
                    </ul>
                  </li>
                  <li>
                    <button class="tree-node" type="button" data-tree-path="/etc"><code>etc/</code><small>system configuration</small></button>
                    <ul>
                      <li><button class="tree-leaf" type="button" data-tree-path="/etc/ssh"><code>ssh/</code></button></li>
                      <li><button class="tree-leaf" type="button" data-tree-path="/etc/passwd"><code>passwd</code></button></li>
                      <li><button class="tree-leaf" type="button" data-tree-path="/etc/shadow"><code>shadow</code></button></li>
                      <li><button class="tree-leaf" type="button" data-tree-path="/etc/fstab"><code>fstab</code></button></li>
                      <li><button class="tree-leaf" type="button" data-tree-path="/etc/hosts"><code>hosts</code></button></li>
                      <li><button class="tree-leaf" type="button" data-tree-path="/etc/systemd"><code>systemd/</code></button></li>
                    </ul>
                  </li>
                  <li>
                    <button class="tree-node" type="button" data-tree-path="/home"><code>home/</code><small>regular users</small></button>
                    <ul>
                      <li><button class="tree-leaf" type="button" data-tree-path="/home/rani"><code>rani/</code></button></li>
                      <li><button class="tree-leaf" type="button" data-tree-path="/home/guest"><code>guest/</code></button></li>
                      <li><button class="tree-leaf" type="button" data-tree-path="/home/rani/.config"><code>.config/</code></button></li>
                      <li><button class="tree-leaf" type="button" data-tree-path="/home/rani/Downloads"><code>Downloads/</code></button></li>
                    </ul>
                  </li>
                  <li>
                    <button class="tree-node" type="button" data-tree-path="/root"><code>root/</code><small>root user home</small></button>
                  </li>
                  <li>
                    <button class="tree-node" type="button" data-tree-path="/usr"><code>usr/</code><small>installed software</small></button>
                    <ul>
                      <li><button class="tree-leaf" type="button" data-tree-path="/usr/bin"><code>bin/</code></button></li>
                      <li><button class="tree-leaf" type="button" data-tree-path="/usr/sbin"><code>sbin/</code></button></li>
                      <li><button class="tree-leaf" type="button" data-tree-path="/usr/lib"><code>lib/</code></button></li>
                      <li><button class="tree-leaf" type="button" data-tree-path="/usr/include"><code>include/</code></button></li>
                      <li><button class="tree-leaf" type="button" data-tree-path="/usr/local"><code>local/</code></button></li>
                      <li><button class="tree-leaf" type="button" data-tree-path="/usr/share"><code>share/</code></button></li>
                      <li><button class="tree-leaf" type="button" data-tree-path="/usr/share/man"><code>share/man/</code></button></li>
                    </ul>
                  </li>
                  <li>
                    <button class="tree-node" type="button" data-tree-path="/var"><code>var/</code><small>changing data</small></button>
                    <ul>
                      <li><button class="tree-leaf" type="button" data-tree-path="/var/log"><code>log/</code></button></li>
                      <li><button class="tree-leaf" type="button" data-tree-path="/var/cache"><code>cache/</code></button></li>
                      <li><button class="tree-leaf" type="button" data-tree-path="/var/lib"><code>lib/</code></button></li>
                      <li><button class="tree-leaf" type="button" data-tree-path="/var/spool"><code>spool/</code></button></li>
                      <li><button class="tree-leaf" type="button" data-tree-path="/var/tmp"><code>tmp/</code></button></li>
                      <li><button class="tree-leaf" type="button" data-tree-path="/var/www"><code>www/</code></button></li>
                    </ul>
                  </li>
                  <li>
                    <button class="tree-node" type="button" data-tree-path="/dev"><code>dev/</code><small>device files</small></button>
                    <ul>
                      <li><button class="tree-leaf" type="button" data-tree-path="/dev/sda"><code>sda</code></button></li>
                      <li><button class="tree-leaf" type="button" data-tree-path="/dev/tty"><code>tty</code></button></li>
                      <li><button class="tree-leaf" type="button" data-tree-path="/dev/null"><code>null</code></button></li>
                    </ul>
                  </li>
                  <li>
                    <button class="tree-node" type="button" data-tree-path="/proc"><code>proc/</code><small>kernel and process info</small></button>
                    <ul>
                      <li><button class="tree-leaf" type="button" data-tree-path="/proc/cpuinfo"><code>cpuinfo</code></button></li>
                      <li><button class="tree-leaf" type="button" data-tree-path="/proc/meminfo"><code>meminfo</code></button></li>
                      <li><button class="tree-leaf" type="button" data-tree-path="/proc/1234"><code>1234/</code></button></li>
                    </ul>
                  </li>
                  <li>
                    <button class="tree-node" type="button" data-tree-path="/tmp"><code>tmp/</code><small>temporary files</small></button>
                  </li>
                  <li>
                    <button class="tree-node" type="button" data-tree-path="/boot"><code>boot/</code><small>boot files</small></button>
                    <ul>
                      <li><button class="tree-leaf" type="button" data-tree-path="/boot/vmlinuz"><code>vmlinuz</code></button></li>
                      <li><button class="tree-leaf" type="button" data-tree-path="/boot/grub"><code>grub/</code></button></li>
                    </ul>
                  </li>
                  <li>
                    <button class="tree-node" type="button" data-tree-path="/sbin"><code>sbin/</code><small>system commands</small></button>
                    <ul>
                      <li><button class="tree-leaf" type="button" data-tree-path="/sbin/ip"><code>ip</code></button></li>
                      <li><button class="tree-leaf" type="button" data-tree-path="/sbin/fsck"><code>fsck</code></button></li>
                    </ul>
                  </li>
                  <li>
                    <button class="tree-node" type="button" data-tree-path="/lib"><code>lib/</code><small>essential libraries</small></button>
                    <ul>
                      <li><button class="tree-leaf" type="button" data-tree-path="/lib/modules"><code>modules/</code></button></li>
                      <li><button class="tree-leaf" type="button" data-tree-path="/lib/ld-linux.so"><code>ld-linux.so</code></button></li>
                    </ul>
                  </li>
                  <li>
                    <button class="tree-node" type="button" data-tree-path="/run"><code>run/</code><small>runtime state</small></button>
                    <ul>
                      <li><button class="tree-leaf" type="button" data-tree-path="/run/user"><code>user/</code></button></li>
                      <li><button class="tree-leaf" type="button" data-tree-path="/run/lock"><code>lock/</code></button></li>
                    </ul>
                  </li>
                  <li>
                    <button class="tree-node" type="button" data-tree-path="/sys"><code>sys/</code><small>kernel devices</small></button>
                    <ul>
                      <li><button class="tree-leaf" type="button" data-tree-path="/sys/class"><code>class/</code></button></li>
                      <li><button class="tree-leaf" type="button" data-tree-path="/sys/block"><code>block/</code></button></li>
                    </ul>
                  </li>
                  <li>
                    <button class="tree-node" type="button" data-tree-path="/media"><code>media/</code><small>removable media</small></button>
                    <ul>
                      <li><button class="tree-leaf" type="button" data-tree-path="/media/usb"><code>usb/</code></button></li>
                    </ul>
                  </li>
                  <li>
                    <button class="tree-node" type="button" data-tree-path="/mnt"><code>mnt/</code><small>manual mounts</small></button>
                    <ul>
                      <li><button class="tree-leaf" type="button" data-tree-path="/mnt/backup"><code>backup/</code></button></li>
                    </ul>
                  </li>
                  <li>
                    <button class="tree-node" type="button" data-tree-path="/opt"><code>opt/</code><small>optional apps</small></button>
                    <ul>
                      <li><button class="tree-leaf" type="button" data-tree-path="/opt/app"><code>app/</code></button></li>
                    </ul>
                  </li>
                  <li>
                    <button class="tree-node" type="button" data-tree-path="/srv"><code>srv/</code><small>service data</small></button>
                    <ul>
                      <li><button class="tree-leaf" type="button" data-tree-path="/srv/www"><code>www/</code></button></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <svg class="tree-cable-layer" aria-hidden="true" hidden data-tree-cable>
            <path data-tree-cable-path></path>
          </svg>
          <aside class="tree-info-panel" aria-live="polite" hidden data-tree-panel>
            <button class="tree-info-close" type="button" aria-label="Close selected path details" data-tree-close>Close</button>
            <p class="eyebrow">Selected path</p>
            <h2 data-tree-title></h2>
            <p data-tree-description></p>
            <dl>
              <div>
                <dt>Kind</dt>
                <dd data-tree-kind></dd>
              </div>
              <div>
                <dt>Example</dt>
                <dd><code data-tree-example></code></dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>
      <section class="tree-explainer">
        <div>
          <p class="eyebrow">How it works</p>
          <h2>Paths describe where a file lives below root.</h2>
          <p>An absolute path starts at <code>/</code>, such as <code>/etc/ssh/sshd_config</code>. A relative path starts from your current directory. Use <code>pwd</code> to see where you are, <code>ls</code> to list files, and <code>cd</code> to move through the tree.</p>
        </div>
        <div>
          <p class="eyebrow">Mounts</p>
          <h2>Other filesystems attach into the same tree.</h2>
          <p>A disk, USB drive, network share, or virtual filesystem can be mounted at a directory like <code>/mnt/backup</code> or <code>/media/usb</code>. After mounting, it behaves like another branch of the same tree.</p>
        </div>
      </section>
    </main>`
  });
}

function cyberTools() {
  return [
    {
      name: "Hashcat",
      category: "Password Auditing",
      link: "https://hashcat.net/hashcat/",
      keywords: ["password", "passwd", "hash", "cracking", "audit", "gpu", "credential"],
      summary: "Advanced password recovery for authorized hash-auditing labs and defensive password-strength testing.",
      focus: "Use for understanding password policy weaknesses, hash exposure risk, and why strong password storage matters."
    },
    {
      name: "John the Ripper",
      category: "Password Auditing",
      link: "https://www.openwall.com/john/",
      keywords: ["password", "passwd", "hash", "cracking", "audit", "john", "credential"],
      summary: "Offline password auditing tool used to test password policy and hash exposure in controlled environments.",
      focus: "Good for learning classic password-auditing workflows in lab datasets and defensive policy checks."
    },
    {
      name: "Nmap",
      category: "Network Discovery",
      link: "https://nmap.org/",
      keywords: ["network", "scan", "ports", "service", "host", "discovery", "enumeration"],
      summary: "Network mapper for host discovery, service inventory, and security auditing on networks you are allowed to assess.",
      focus: "Use for building an inventory of hosts, ports, and services in an authorized lab or internal network."
    },
    {
      name: "Wireshark",
      category: "Packet Analysis",
      link: "https://www.wireshark.org/",
      keywords: ["network", "packet", "pcap", "traffic", "protocol", "analysis", "forensics"],
      summary: "Network protocol analyzer for learning traffic patterns, troubleshooting, and packet-level investigation.",
      focus: "Good for studying protocols, reading packet captures, and explaining what happened on the wire."
    },
    {
      name: "tcpdump",
      category: "Packet Analysis",
      link: "https://www.tcpdump.org/",
      keywords: ["network", "packet", "pcap", "capture", "traffic", "cli"],
      summary: "Command-line packet capture tool for collecting network evidence and troubleshooting traffic.",
      focus: "Useful when you need a lightweight capture workflow on servers or remote Linux systems."
    },
    {
      name: "OWASP ZAP",
      category: "Web Security",
      link: "https://www.zaproxy.org/",
      keywords: ["web", "http", "proxy", "scanner", "owasp", "appsec", "vulnerability"],
      summary: "Free web application security testing proxy and scanner from the OWASP ecosystem.",
      focus: "Good for learning web request inspection, passive findings, and defensive web testing basics."
    },
    {
      name: "Burp Suite Community",
      category: "Web Security",
      link: "https://portswigger.net/burp/communitydownload",
      keywords: ["web", "http", "proxy", "burp", "appsec", "request", "repeater"],
      summary: "Manual web testing proxy for learning request interception, replay, and application security workflows.",
      focus: "Best for understanding how browsers, APIs, sessions, and web requests behave during authorized testing."
    },
    {
      name: "sqlmap",
      category: "Web Security",
      link: "https://sqlmap.org/",
      keywords: ["web", "sql", "database", "injection", "scanner", "appsec"],
      summary: "Automated SQL injection testing tool for controlled labs and explicitly authorized assessments.",
      focus: "Use in training environments to understand SQL injection impact and validate remediation."
    },
    {
      name: "Nikto",
      category: "Web Security",
      link: "https://github.com/sullo/nikto",
      keywords: ["web", "server", "scanner", "headers", "misconfiguration"],
      summary: "Web server scanner for finding common server issues, risky files, and configuration problems.",
      focus: "Useful for learning baseline web-server checks before deeper manual testing."
    },
    {
      name: "Gobuster",
      category: "Web Discovery",
      link: "https://github.com/OJ/gobuster",
      keywords: ["web", "directory", "dns", "vhost", "content", "discovery", "enumeration"],
      summary: "Fast discovery tool for directories, DNS names, virtual hosts, and related web assets.",
      focus: "Use in labs to understand content discovery and why hidden paths still need access control."
    },
    {
      name: "CyberChef",
      category: "Analysis",
      link: "https://gchq.github.io/CyberChef/",
      keywords: ["decode", "encode", "hash", "base64", "analysis", "transform", "data"],
      summary: "Browser-based workspace for decoding, encoding, hashing, compression, and data transformation exercises.",
      focus: "Good for quick analysis of encoded strings, hashes, timestamps, and small data transformations."
    },
    {
      name: "Metasploit Framework",
      category: "Lab Validation",
      link: "https://docs.metasploit.com/",
      keywords: ["lab", "validation", "exploit", "module", "vulnerability", "metasploit"],
      summary: "Security testing framework best used in legal labs to understand vulnerability validation and remediation.",
      focus: "Use in intentionally vulnerable labs to understand risk, exploitability, and defensive fixes."
    },
    {
      name: "Ghidra",
      category: "Reverse Engineering",
      link: "https://github.com/NationalSecurityAgency/ghidra",
      keywords: ["reverse", "malware", "binary", "disassembly", "decompiler", "analysis"],
      summary: "Software reverse-engineering suite for binary analysis, disassembly, and decompilation learning.",
      focus: "Useful for malware-analysis labs and understanding compiled program behavior."
    },
    {
      name: "Volatility",
      category: "Forensics",
      link: "https://volatilityfoundation.org/",
      keywords: ["forensics", "memory", "ram", "malware", "incident", "analysis"],
      summary: "Memory forensics framework for analyzing RAM images during incident response and malware labs.",
      focus: "Good for learning how memory artifacts reveal processes, network traces, and suspicious activity."
    },
    {
      name: "Autopsy",
      category: "Forensics",
      link: "https://www.autopsy.com/",
      keywords: ["forensics", "disk", "image", "investigation", "timeline", "files"],
      summary: "Open source digital forensics platform for analyzing disk images, filesystems, and investigation artifacts.",
      focus: "Useful for student forensics cases involving disk images, timelines, and file recovery concepts."
    },
    {
      name: "The Sleuth Kit",
      category: "Forensics",
      link: "https://sleuthkit.org/",
      keywords: ["forensics", "disk", "filesystem", "image", "cli", "evidence"],
      summary: "Command-line forensic tools and libraries for analyzing disk images and filesystems.",
      focus: "Good for learning the lower-level tools behind many disk-forensics workflows."
    },
    {
      name: "Aircrack-ng",
      category: "Wireless Security",
      link: "https://www.aircrack-ng.org/",
      keywords: ["wifi", "wireless", "password", "passwd", "audit", "capture"],
      summary: "Wireless security assessment suite for authorized Wi-Fi labs and defensive wireless auditing.",
      focus: "Use only with networks you own or have permission to test; useful for understanding wireless security basics."
    },
    {
      name: "THC Hydra",
      category: "Authentication Testing",
      link: "https://github.com/vanhauser-thc/thc-hydra",
      keywords: ["password", "passwd", "login", "authentication", "credential", "audit"],
      summary: "Authentication testing tool for controlled labs and authorized checks of login hardening.",
      focus: "Use to learn why rate limiting, lockouts, MFA, and strong authentication controls matter."
    },
    {
      name: "Masscan",
      category: "Network Discovery",
      link: "https://github.com/robertdavidgraham/masscan",
      keywords: ["network", "scan", "ports", "large-scale", "recon", "inventory"],
      summary: "High-speed port scanner for large authorized address ranges before deeper service review.",
      focus: "Use for fast lab or internal inventory sweeps, then validate interesting hosts with slower detailed tools."
    },
    {
      name: "Netcat",
      category: "Network Utilities",
      link: "https://nc110.sourceforge.io/",
      keywords: ["network", "nc", "banner", "socket", "tcp", "udp", "troubleshooting"],
      summary: "Small networking utility for opening TCP/UDP connections, banner checks, and lab troubleshooting.",
      focus: "Good for learning how raw network connections behave and for simple service checks in safe environments."
    },
    {
      name: "Ncat",
      category: "Network Utilities",
      link: "https://nmap.org/ncat/",
      keywords: ["network", "ncat", "ssl", "proxy", "socket", "nmap"],
      summary: "Modern Netcat-style utility from the Nmap project with SSL, proxy, and connection brokering support.",
      focus: "Useful when basic socket testing needs encrypted connections or cleaner modern options."
    },
    {
      name: "Bettercap",
      category: "Network Security",
      link: "https://www.bettercap.org/",
      keywords: ["network", "mitm", "arp", "dns", "wifi", "traffic", "lab"],
      summary: "Network security framework for studying traffic interception and local-network attack paths in labs.",
      focus: "Use only on owned lab networks to understand why segmentation, encrypted protocols, and monitoring matter."
    },
    {
      name: "Responder",
      category: "Active Directory",
      link: "https://github.com/lgandx/Responder",
      keywords: ["windows", "active directory", "llmnr", "nbt-ns", "hash", "credential"],
      summary: "Windows network lab tool for demonstrating name-resolution poisoning and credential exposure risk.",
      focus: "Good for learning why LLMNR/NBT-NS hardening and credential protections are important in internal networks."
    },
    {
      name: "Scapy",
      category: "Network Security",
      link: "https://scapy.net/",
      keywords: ["python", "packet", "crafting", "fuzzing", "protocol", "network"],
      summary: "Python library for crafting, sending, receiving, and analyzing packets in custom network experiments.",
      focus: "Best for students writing small protocol labs, packet parsers, and defensive network experiments."
    },
    {
      name: "Kismet",
      category: "Wireless Security",
      link: "https://www.kismetwireless.net/",
      keywords: ["wifi", "wireless", "sniffer", "recon", "monitoring", "bluetooth"],
      summary: "Wireless network detector and sniffer for passive Wi-Fi and radio environment observation.",
      focus: "Use with your own equipment to learn wireless discovery, channel behavior, and passive monitoring."
    },
    {
      name: "Nuclei",
      category: "Vulnerability Scanning",
      link: "https://nuclei.projectdiscovery.io/",
      keywords: ["vulnerability", "scanner", "templates", "cve", "misconfiguration", "web"],
      summary: "Template-based scanner for quickly checking known exposures and misconfigurations in authorized scopes.",
      focus: "Good for repeatable defensive checks when you understand each template's purpose and validate findings manually."
    },
    {
      name: "ffuf",
      category: "Web Discovery",
      link: "https://github.com/ffuf/ffuf",
      keywords: ["web", "fuzz", "directory", "vhost", "parameter", "content", "discovery"],
      summary: "Fast web fuzzer for content discovery, virtual-host checks, and parameter testing in labs.",
      focus: "Use with safe wordlists and rate limits to learn how hidden paths and inputs should still be protected."
    },
    {
      name: "WFuzz",
      category: "Web Discovery",
      link: "https://github.com/xmendez/wfuzz",
      keywords: ["web", "fuzz", "headers", "cookies", "post", "parameters", "testing"],
      summary: "Flexible web fuzzer for experimenting with headers, cookies, forms, and request parameters.",
      focus: "Useful for learning controlled input testing patterns across authenticated and unauthenticated lab apps."
    },
    {
      name: "WPScan",
      category: "Web Security",
      link: "https://wpscan.com/wordpress-security-scanner",
      keywords: ["wordpress", "cms", "plugins", "themes", "users", "vulnerability"],
      summary: "WordPress security scanner for checking versions, plugins, themes, users, and known issues.",
      focus: "Use for defensive review of WordPress sites you manage and to understand common CMS risk patterns."
    },
    {
      name: "Commix",
      category: "Web Security",
      link: "https://github.com/commixproject/commix",
      keywords: ["web", "command injection", "testing", "appsec", "owasp"],
      summary: "Command-injection testing tool for controlled web application labs and authorized assessments.",
      focus: "Use to understand OS command injection impact and how input validation and command isolation reduce risk."
    },
    {
      name: "DVWA",
      category: "Practice Labs",
      link: "https://github.com/digininja/DVWA",
      keywords: ["web", "lab", "dvwa", "sqli", "xss", "csrf", "practice"],
      summary: "Intentionally vulnerable PHP/MySQL web app for practicing common web vulnerabilities locally.",
      focus: "Best for safe beginner practice before touching any real application or public target."
    },
    {
      name: "MSFvenom",
      category: "Lab Validation",
      link: "https://docs.metasploit.com/docs/using-metasploit/basics/how-to-use-msfvenom.html",
      keywords: ["metasploit", "payload", "shellcode", "lab", "validation", "exploit"],
      summary: "Metasploit payload generation utility for controlled exploit-development and detection labs.",
      focus: "Use in isolated training environments to understand payload formats, detection, and defensive controls."
    },
    {
      name: "pwntools",
      category: "Exploit Development",
      link: "https://docs.pwntools.com/",
      keywords: ["python", "ctf", "binary", "exploit", "rop", "debugging"],
      summary: "Python library that simplifies CTF exploit scripts, process interaction, and binary challenge automation.",
      focus: "Good for learning repeatable exploit-development workflows in legal CTF and classroom binaries."
    },
    {
      name: "ROPgadget",
      category: "Exploit Development",
      link: "https://github.com/JonathanSalwan/ROPgadget",
      keywords: ["rop", "binary", "exploit", "gadgets", "assembly", "ctf"],
      summary: "Binary analysis helper for finding return-oriented programming gadgets in exploit-development labs.",
      focus: "Use with vulnerable practice binaries to understand modern memory-protection bypass concepts."
    },
    {
      name: "GDB with GEF/pwndbg",
      category: "Exploit Development",
      link: "https://www.gnu.org/software/gdb/",
      keywords: ["gdb", "debugger", "gef", "pwndbg", "heap", "binary", "ctf"],
      summary: "GNU Debugger plus security-focused plugins for inspecting crashes, memory, registers, and heap state.",
      focus: "Essential for understanding vulnerable binaries and debugging your own CTF exploit attempts."
    },
    {
      name: "BeEF",
      category: "Web Security",
      link: "https://beefproject.com/",
      keywords: ["browser", "xss", "client-side", "web", "lab", "security"],
      summary: "Browser security framework for studying client-side risk in intentionally vulnerable web labs.",
      focus: "Use only in isolated training apps to understand why XSS and browser trust boundaries matter."
    },
    {
      name: "Exploit DB",
      category: "Research",
      link: "https://www.exploit-db.com/",
      keywords: ["exploit", "cve", "research", "searchsploit", "vulnerability", "reference"],
      summary: "Public exploit and proof-of-concept archive useful for vulnerability research and lab reproduction.",
      focus: "Use for studying known issues, checking affected versions, and learning how remediation is validated."
    },
    {
      name: "Impacket",
      category: "Active Directory",
      link: "https://github.com/fortra/impacket",
      keywords: ["windows", "active directory", "smb", "kerberos", "python", "protocol"],
      summary: "Python network protocol toolkit widely used for Windows and Active Directory security labs.",
      focus: "Good for learning protocol-level behavior and why AD hardening, logging, and least privilege matter."
    },
    {
      name: "Medusa",
      category: "Authentication Testing",
      link: "https://github.com/jmk-foofus/medusa",
      keywords: ["password", "login", "authentication", "audit", "network", "credential"],
      summary: "Parallel login-auditing tool for controlled checks against authorized lab services.",
      focus: "Use to compare authentication controls such as lockouts, MFA, rate limits, and logging."
    },
    {
      name: "SecLists",
      category: "Wordlists",
      link: "https://github.com/danielmiessler/SecLists",
      keywords: ["wordlist", "password", "directory", "dns", "payloads", "fuzzing"],
      summary: "Large collection of security testing wordlists for passwords, discovery, DNS, and fuzzing labs.",
      focus: "Use responsibly with rate limits and permission; it is a companion dataset for many tools."
    },
    {
      name: "RainbowCrack",
      category: "Password Auditing",
      link: "http://project-rainbowcrack.com/",
      keywords: ["password", "hash", "rainbow table", "legacy", "cracking"],
      summary: "Rainbow-table hash recovery tool mainly useful for understanding legacy unsalted hash weaknesses.",
      focus: "Good for demonstrating why salts and modern password hashing designs are necessary."
    },
    {
      name: "CrackStation",
      category: "Password Auditing",
      link: "https://crackstation.net/",
      keywords: ["password", "hash", "lookup", "ctf", "unsalted", "audit"],
      summary: "Online hash lookup resource for quick checks of common unsalted hashes in training contexts.",
      focus: "Useful for CTF triage and for explaining why common passwords and unsalted hashes fail quickly."
    },
    {
      name: "Kerbrute",
      category: "Active Directory",
      link: "https://github.com/ropnop/kerbrute",
      keywords: ["kerberos", "active directory", "username", "password", "spray", "windows"],
      summary: "Kerberos account-enumeration and authentication-testing tool for controlled AD lab environments.",
      focus: "Use to understand AD account exposure risk and why lockout policy and monitoring design matter."
    },
    {
      name: "Binwalk",
      category: "Forensics",
      link: "https://github.com/ReFirmLabs/binwalk",
      keywords: ["firmware", "forensics", "embedded", "iot", "extract", "reverse"],
      summary: "Firmware analysis utility for finding embedded filesystems, compressed data, and known signatures.",
      focus: "Useful for IoT and embedded security labs where firmware layout and extracted artifacts matter."
    },
    {
      name: "Foremost",
      category: "Forensics",
      link: "https://foremost.sourceforge.net/",
      keywords: ["forensics", "carving", "recovery", "deleted", "files", "disk"],
      summary: "File-carving tool for recovering known file types from raw images and damaged media.",
      focus: "Good for learning evidence recovery concepts and the limits of signature-based file carving."
    },
    {
      name: "ExifTool",
      category: "Forensics",
      link: "https://exiftool.org/",
      keywords: ["metadata", "forensics", "image", "pdf", "timestamp", "gps"],
      summary: "Metadata reader and writer for images, PDFs, documents, audio, and video files.",
      focus: "Use for evidence review, privacy checks, and learning what metadata can reveal."
    },
    {
      name: "FTK Imager",
      category: "Forensics",
      link: "https://www.exterro.com/ftk-imager",
      keywords: ["forensics", "disk", "image", "evidence", "hash", "collection"],
      summary: "Forensic imaging utility for creating and verifying disk images during evidence collection practice.",
      focus: "Good for learning careful acquisition, hashing, and chain-of-custody style workflows."
    },
    {
      name: "IDA Free",
      category: "Reverse Engineering",
      link: "https://hex-rays.com/ida-free/",
      keywords: ["reverse", "disassembler", "decompiler", "debugger", "binary", "malware"],
      summary: "Free edition of the IDA reverse-engineering platform for studying binaries and disassembly basics.",
      focus: "Useful for comparing professional RE workflows with Ghidra, Cutter, and debugger-based analysis."
    },
    {
      name: "Radare2",
      category: "Reverse Engineering",
      link: "https://rada.re/n/",
      keywords: ["reverse", "binary", "forensics", "disassembler", "cli", "scripting"],
      summary: "Scriptable open source reverse-engineering framework for binary analysis and low-level inspection.",
      focus: "Good for students who want a powerful command-line RE workflow and automation path."
    },
    {
      name: "Binary Ninja",
      category: "Reverse Engineering",
      link: "https://binary.ninja/",
      keywords: ["reverse", "binary", "decompiler", "api", "vulnerability", "analysis"],
      summary: "Commercial reverse-engineering platform with a strong API and modern binary-analysis workflow.",
      focus: "Useful for learning plugin-driven analysis and comparing decompiler output across tools."
    },
    {
      name: "x64dbg",
      category: "Reverse Engineering",
      link: "https://x64dbg.com/",
      keywords: ["windows", "debugger", "reverse", "malware", "binary", "dynamic"],
      summary: "Open source Windows debugger for dynamic analysis of x86 and x64 programs.",
      focus: "Best for Windows RE labs where stepping through behavior is more useful than static inspection alone."
    },
    {
      name: "Cutter",
      category: "Reverse Engineering",
      link: "https://cutter.re/",
      keywords: ["reverse", "radare2", "gui", "binary", "analysis", "decompiler"],
      summary: "Graphical reverse-engineering interface built around Radare2 and Rizin-style workflows.",
      focus: "Good bridge for students who want GUI assistance while learning command-line RE concepts."
    },
    {
      name: "PE-bear",
      category: "Reverse Engineering",
      link: "https://github.com/hasherezade/pe-bear",
      keywords: ["windows", "pe", "malware", "headers", "imports", "static"],
      summary: "Portable executable viewer and editor for inspecting Windows binary structure.",
      focus: "Useful for first-pass PE analysis, import review, section inspection, and malware triage."
    },
    {
      name: "DIE",
      category: "Reverse Engineering",
      link: "https://github.com/horsicq/Detect-It-Easy",
      keywords: ["detect it easy", "packer", "compiler", "binary", "malware", "triage"],
      summary: "Detect-It-Easy identifies compilers, packers, and file characteristics in unknown binaries.",
      focus: "Good first step before deeper malware or reverse-engineering analysis."
    },
    {
      name: "Maltego",
      category: "OSINT",
      link: "https://www.maltego.com/",
      keywords: ["osint", "graph", "recon", "domains", "people", "link analysis"],
      summary: "Graph-based OSINT platform for mapping relationships between infrastructure, identities, and public data.",
      focus: "Use for structured investigations where visual relationships help explain the evidence trail."
    },
    {
      name: "theHarvester",
      category: "OSINT",
      link: "https://github.com/laramies/theHarvester",
      keywords: ["osint", "email", "subdomain", "domain", "recon", "search"],
      summary: "Reconnaissance tool for collecting public emails, names, domains, hosts, and related metadata.",
      focus: "Good for learning first-pass external recon using only public, passive sources where possible."
    },
    {
      name: "Shodan",
      category: "OSINT",
      link: "https://www.shodan.io/",
      keywords: ["osint", "internet", "devices", "services", "exposure", "recon"],
      summary: "Search engine for internet-connected services, devices, banners, and exposed infrastructure.",
      focus: "Use for defensive exposure checks and to understand what public service banners reveal."
    },
    {
      name: "Censys",
      category: "OSINT",
      link: "https://censys.com/",
      keywords: ["osint", "internet", "certificates", "services", "cloud", "recon"],
      summary: "Internet search platform focused on exposed services, certificates, and infrastructure discovery.",
      focus: "Useful for mapping owned public assets and certificate-linked infrastructure."
    },
    {
      name: "Recon-ng",
      category: "OSINT",
      link: "https://github.com/lanmaster53/recon-ng",
      keywords: ["osint", "recon", "framework", "automation", "domain", "database"],
      summary: "Modular web reconnaissance framework for organizing repeatable OSINT collection workflows.",
      focus: "Good for learning how recon data is gathered, stored, and reused across an assessment."
    },
    {
      name: "SpiderFoot",
      category: "OSINT",
      link: "https://www.spiderfoot.net/",
      keywords: ["osint", "automation", "domain", "ip", "email", "breach"],
      summary: "Automated OSINT platform for collecting public information about domains, IPs, emails, and entities.",
      focus: "Use for broad defensive recon and then manually validate important findings."
    },
    {
      name: "Amass",
      category: "OSINT",
      link: "https://owasp.org/www-project-amass/",
      keywords: ["osint", "subdomain", "dns", "owasp", "recon", "enumeration"],
      summary: "OWASP tool for subdomain enumeration and external attack-surface discovery.",
      focus: "Useful for understanding public DNS exposure and keeping asset inventories current."
    },
    {
      name: "OSINT Framework",
      category: "OSINT",
      link: "https://osintframework.com/",
      keywords: ["osint", "reference", "directory", "people", "domains", "research"],
      summary: "Browser-based directory of OSINT resources organized by investigation category.",
      focus: "Good starting point when you need to choose the right public-data source for a research question."
    },
    {
      name: "ANY.RUN",
      category: "Malware Analysis",
      link: "https://any.run/",
      keywords: ["malware", "sandbox", "dynamic", "analysis", "ioc", "triage"],
      summary: "Interactive online malware sandbox for observing process, file, registry, and network behavior.",
      focus: "Use for triage and learning dynamic analysis concepts without running samples on your host."
    },
    {
      name: "Cuckoo Sandbox",
      category: "Malware Analysis",
      link: "https://cuckoosandbox.org/",
      keywords: ["malware", "sandbox", "dynamic", "analysis", "behavior", "report"],
      summary: "Self-hosted automated malware analysis sandbox for controlled behavioral reports.",
      focus: "Best for isolated lab setups where you control networking, samples, and generated artifacts."
    },
    {
      name: "Hybrid Analysis",
      category: "Malware Analysis",
      link: "https://www.hybrid-analysis.com/",
      keywords: ["malware", "sandbox", "dynamic", "analysis", "ioc", "mitre"],
      summary: "Online malware-analysis service for automated behavioral reports and indicator extraction.",
      focus: "Useful for quick triage when paired with careful handling of sensitive or private samples."
    },
    {
      name: "VirusTotal",
      category: "Malware Analysis",
      link: "https://www.virustotal.com/",
      keywords: ["malware", "hash", "url", "scanner", "ioc", "triage"],
      summary: "Multi-engine file, URL, domain, and hash triage platform for suspicious artifacts.",
      focus: "Use to enrich indicators, but avoid uploading private files that should not become shared intelligence."
    },
    {
      name: "YARA",
      category: "Malware Analysis",
      link: "https://virustotal.github.io/yara/",
      keywords: ["malware", "rules", "signature", "strings", "detection", "threat intel"],
      summary: "Pattern-matching language for writing detection rules based on strings and binary features.",
      focus: "Good for learning how analysts turn malware traits into reusable detection logic."
    },
    {
      name: "PEStudio",
      category: "Malware Analysis",
      link: "https://www.winitor.com/",
      keywords: ["malware", "windows", "pe", "static", "imports", "strings"],
      summary: "Static Windows executable triage tool for imports, strings, indicators, entropy, and PE metadata.",
      focus: "Useful as a safe first look at suspicious Windows binaries before dynamic analysis."
    },
    {
      name: "PE-sieve",
      category: "Malware Analysis",
      link: "https://github.com/hasherezade/pe-sieve",
      keywords: ["malware", "process", "injection", "memory", "windows", "forensics"],
      summary: "Process scanner for finding injected, replaced, or suspicious executable code in memory.",
      focus: "Use in malware labs and incident-response exercises to understand process injection artifacts."
    },
    {
      name: "FLOSS",
      category: "Malware Analysis",
      link: "https://github.com/mandiant/flare-floss",
      keywords: ["malware", "strings", "obfuscation", "flare", "static", "analysis"],
      summary: "Mandiant string-extraction tool for recovering obfuscated strings from malware samples.",
      focus: "Good for finding hidden indicators and configuration values during static malware triage."
    },
    {
      name: "Pacu",
      category: "Cloud Security",
      link: "https://github.com/RhinoSecurityLabs/pacu",
      keywords: ["aws", "cloud", "iam", "pentest", "lab", "misconfiguration"],
      summary: "AWS security testing framework for controlled cloud labs and authorized assessment workflows.",
      focus: "Use to understand IAM privilege paths and why least privilege matters in AWS environments."
    },
    {
      name: "ScoutSuite",
      category: "Cloud Security",
      link: "https://github.com/nccgroup/ScoutSuite",
      keywords: ["cloud", "aws", "azure", "gcp", "audit", "misconfiguration"],
      summary: "Multi-cloud security posture review tool that reports risky configuration and permission patterns.",
      focus: "Good for defensive cloud audits and student labs across AWS, Azure, and Google Cloud."
    },
    {
      name: "Prowler",
      category: "Cloud Security",
      link: "https://prowler.com/",
      keywords: ["cloud", "aws", "azure", "gcp", "compliance", "cis", "audit"],
      summary: "Cloud security and compliance assessment tool for common benchmark and best-practice checks.",
      focus: "Use to learn how cloud posture findings map to practical remediation work."
    },
    {
      name: "CloudMapper",
      category: "Cloud Security",
      link: "https://github.com/duo-labs/cloudmapper",
      keywords: ["aws", "cloud", "visualization", "network", "exposure", "audit"],
      summary: "AWS environment mapping tool for visualizing accounts, networks, and public exposure.",
      focus: "Useful for understanding cloud asset relationships and explaining attack paths defensively."
    },
    {
      name: "Trivy",
      category: "Container Security",
      link: "https://trivy.dev/",
      keywords: ["container", "docker", "kubernetes", "iac", "sbom", "vulnerability"],
      summary: "Scanner for container images, filesystems, IaC, dependencies, secrets, and SBOMs.",
      focus: "Good for adding practical security checks to Docker, Kubernetes, and CI/CD learning workflows."
    },
    {
      name: "Kube-hunter",
      category: "Container Security",
      link: "https://github.com/aquasecurity/kube-hunter",
      keywords: ["kubernetes", "container", "cluster", "security", "misconfiguration", "audit"],
      summary: "Kubernetes security tool for finding common cluster weaknesses in authorized environments.",
      focus: "Use in local or permitted clusters to learn Kubernetes hardening and exposure patterns."
    },
    {
      name: "CloudFox",
      category: "Cloud Security",
      link: "https://github.com/BishopFox/cloudfox",
      keywords: ["cloud", "aws", "attack path", "enumeration", "iam", "audit"],
      summary: "Cloud enumeration tool that helps identify potentially risky paths across AWS environments.",
      focus: "Useful for understanding how permissions combine into practical cloud attack paths."
    },
    {
      name: "S3Scanner",
      category: "Cloud Security",
      link: "https://github.com/sa7mon/S3Scanner",
      keywords: ["aws", "s3", "bucket", "cloud", "misconfiguration", "storage"],
      summary: "S3 bucket review tool for checking cloud storage exposure in authorized scopes.",
      focus: "Good for learning why public bucket policy, object ACLs, and data classification need review."
    },
    {
      name: "TryHackMe",
      category: "Practice Platforms",
      link: "https://tryhackme.com/",
      keywords: ["ctf", "practice", "beginner", "training", "labs", "cybersecurity"],
      summary: "Guided cybersecurity learning platform with browser labs and structured beginner-to-intermediate paths.",
      focus: "Strong first platform for building fundamentals before moving to less guided machines."
    },
    {
      name: "Hack The Box",
      category: "Practice Platforms",
      link: "https://www.hackthebox.com/",
      keywords: ["ctf", "practice", "machines", "academy", "pentest", "labs"],
      summary: "Hands-on security lab platform with vulnerable machines, challenges, and structured academy content.",
      focus: "Best after fundamentals, when you want realistic practice and a stronger portfolio signal."
    },
    {
      name: "picoCTF",
      category: "Practice Platforms",
      link: "https://picoctf.org/",
      keywords: ["ctf", "beginner", "students", "crypto", "forensics", "web"],
      summary: "Student-friendly CTF platform with a large archive of beginner and intermediate challenges.",
      focus: "Good for learning core categories like web, crypto, forensics, reverse engineering, and binary basics."
    },
    {
      name: "OverTheWire",
      category: "Practice Platforms",
      link: "https://overthewire.org/wargames/",
      keywords: ["linux", "wargame", "beginner", "ssh", "bandit", "practice"],
      summary: "SSH-based wargames for learning Linux, shell usage, permissions, and security basics.",
      focus: "Start with Bandit if you need practical Linux confidence before broader cybersecurity labs."
    },
    {
      name: "pwn.college",
      category: "Practice Platforms",
      link: "https://pwn.college/",
      keywords: ["ctf", "binary", "systems", "exploitation", "education", "practice"],
      summary: "Systems security education platform focused on binary exploitation and low-level security.",
      focus: "Best for students moving into exploit development, reverse engineering, and systems security."
    },
    {
      name: "VulnHub",
      category: "Practice Platforms",
      link: "https://www.vulnhub.com/",
      keywords: ["ctf", "vm", "practice", "vulnerable", "offline", "lab"],
      summary: "Archive of intentionally vulnerable virtual machines for offline local lab practice.",
      focus: "Useful when you want full local control, snapshots, and no dependency on a remote lab platform."
    },
    {
      name: "Root-Me",
      category: "Practice Platforms",
      link: "https://www.root-me.org/",
      keywords: ["ctf", "practice", "web", "network", "forensics", "reverse"],
      summary: "Challenge platform covering web, network, forensics, cryptography, reverse engineering, and more.",
      focus: "Good for targeted practice when you want many small challenges by category."
    },
    {
      name: "WebGoat",
      category: "Practice Labs",
      link: "https://owasp.org/www-project-webgoat/",
      keywords: ["web", "owasp", "lab", "training", "vulnerable", "java"],
      summary: "OWASP intentionally vulnerable web application with lessons for common web security flaws.",
      focus: "Use locally to study OWASP Top 10 concepts with explanations and repeatable exercises."
    },
    {
      name: "Metasploitable",
      category: "Practice Labs",
      link: "https://docs.rapid7.com/metasploit/metasploitable-2/",
      keywords: ["lab", "vulnerable", "vm", "metasploit", "practice", "training"],
      summary: "Intentionally vulnerable Linux VM commonly used for safe Metasploit and network-security practice.",
      focus: "Good beginner target for local labs, snapshots, and understanding vulnerable service exposure."
    },
    {
      name: "Git + GitHub",
      category: "Workflow Essentials",
      link: "https://git-scm.com/",
      keywords: ["git", "github", "version control", "portfolio", "notes", "scripts"],
      summary: "Version-control workflow for storing scripts, notes, reports, and a public learning portfolio.",
      focus: "Use from the start so your tools, writeups, and learning progress are organized and reviewable."
    },
    {
      name: "Docker",
      category: "Workflow Essentials",
      link: "https://www.docker.com/",
      keywords: ["docker", "container", "lab", "environment", "devops", "isolation"],
      summary: "Container platform for running tools, vulnerable apps, databases, and repeatable lab environments.",
      focus: "Useful for lightweight local labs, but still treat containers as shared-kernel isolation."
    },
    {
      name: "tmux",
      category: "Workflow Essentials",
      link: "https://github.com/tmux/tmux/wiki",
      keywords: ["terminal", "multiplexer", "linux", "sessions", "ssh", "workflow"],
      summary: "Terminal multiplexer for persistent sessions, panes, and organized command-line workflows.",
      focus: "Good for long labs, remote SSH work, and keeping notes, scans, and shells organized."
    },
    {
      name: "VS Code",
      category: "Workflow Essentials",
      link: "https://code.visualstudio.com/",
      keywords: ["editor", "code", "python", "bash", "remote ssh", "notes", "debugging"],
      summary: "Extensible code editor useful for security scripts, notes, remote editing, and lab automation.",
      focus: "Good daily editor for Python, Bash, markdown notes, API testing, and remote lab work."
    },
    {
      name: "Obsidian",
      category: "Workflow Essentials",
      link: "https://obsidian.md/",
      keywords: ["notes", "markdown", "knowledge base", "writeups", "learning", "ctf"],
      summary: "Local markdown note-taking app for linked cybersecurity notes, CTF writeups, and study maps.",
      focus: "Use to turn labs into searchable long-term memory instead of disconnected screenshots."
    },
    {
      name: "OpenSSL",
      category: "Cryptography",
      link: "https://www.openssl.org/",
      keywords: ["tls", "ssl", "certificates", "crypto", "keys", "hash", "openssl"],
      summary: "Command-line toolkit for TLS, certificates, keys, hashes, and cryptographic troubleshooting.",
      focus: "Essential for understanding certificates, testing TLS behavior, and practicing safe crypto operations."
    },
    {
      name: "Flameshot",
      category: "Workflow Essentials",
      link: "https://flameshot.org/",
      keywords: ["screenshot", "reporting", "annotation", "redaction", "notes", "evidence"],
      summary: "Screenshot and annotation tool useful for clean lab notes, reports, and CTF documentation.",
      focus: "Use for clear evidence capture while avoiding accidental exposure of secrets or private data."
    },
    {
      name: "KeePassXC",
      category: "Workflow Essentials",
      link: "https://keepassxc.org/",
      keywords: ["password", "manager", "secrets", "keys", "vault", "security"],
      summary: "Offline password manager for lab credentials, API keys, SSH passphrases, and account hygiene.",
      focus: "Good default habit: unique credentials, local vaults, and no reused passwords even in labs."
    },
    {
      name: "Swagger UI",
      category: "API Security",
      link: "https://swagger.io/tools/swagger-ui/",
      keywords: ["api", "swagger", "openapi", "testing", "documentation", "web"],
      summary: "Interactive OpenAPI documentation interface for understanding and testing API behavior.",
      focus: "Useful for learning API structure before security testing, validation review, and authorization checks."
    },
    {
      name: "OWASP Top 10 for LLM Applications",
      category: "AI Security",
      link: "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
      keywords: ["ai", "llm", "owasp", "prompt injection", "agent", "governance", "risk"],
      summary: "Community risk framework for understanding common security failures in LLM-powered applications.",
      focus: "Use as the baseline checklist for AI app threat modeling, reviews, testing plans, and remediation notes."
    },
    {
      name: "garak",
      category: "AI Security",
      link: "https://garak.ai/",
      keywords: ["ai", "llm", "scanner", "red team", "prompt injection", "jailbreak", "vulnerability"],
      summary: "Open source LLM vulnerability scanner for probing model and chatbot failure modes.",
      focus: "Good for authorized AI red-team labs that test hallucination, leakage, jailbreak, toxicity, and prompt-injection risk."
    },
    {
      name: "PyRIT",
      category: "AI Security",
      link: "https://github.com/microsoft/PyRIT",
      keywords: ["ai", "llm", "red team", "microsoft", "risk", "automation", "generative ai"],
      summary: "Microsoft's Python Risk Identification Tool for structured generative-AI red-team automation.",
      focus: "Use to organize repeatable AI risk tests, prompts, targets, scoring, and evidence in controlled assessments."
    },
    {
      name: "Promptfoo",
      category: "AI Security",
      link: "https://www.promptfoo.dev/security/",
      keywords: ["ai", "llm", "prompt", "evals", "testing", "red team", "ci"],
      summary: "LLM testing and security platform for prompt evaluation, regression tests, and adversarial checks.",
      focus: "Useful for adding AI behavior tests to development workflows before deploying prompts or agents."
    },
    {
      name: "Giskard",
      category: "AI Security",
      link: "https://www.giskard.ai/",
      keywords: ["ai", "llm", "agent", "evaluation", "red team", "hallucination", "security"],
      summary: "AI agent evaluation and red-teaming platform for finding security, hallucination, and business-failure risks.",
      focus: "Good for learning how AI systems are tested beyond accuracy, including safety, robustness, and policy failures."
    },
    {
      name: "NeMo Guardrails",
      category: "AI Security",
      link: "https://docs.nvidia.com/nemo/guardrails/latest/about/overview.html",
      keywords: ["ai", "llm", "guardrails", "nvidia", "prompt injection", "rag", "safety"],
      summary: "NVIDIA open source Python toolkit for adding programmable guardrails to LLM applications.",
      focus: "Use to study input/output controls, topic boundaries, RAG grounding, jailbreak prevention, and policy enforcement."
    },
    {
      name: "ModelScan",
      category: "AI Security",
      link: "https://github.com/protectai/modelscan",
      keywords: ["ai", "ml", "model", "scanner", "pickle", "supply chain", "serialization"],
      summary: "ML model security scanner focused on detecting risky model serialization artifacts.",
      focus: "Useful for learning AI supply-chain risk before loading models from hubs, vendors, or unknown sources."
    },
    {
      name: "LLM Guard",
      category: "AI Security",
      link: "https://github.com/protectai/llm-guard",
      keywords: ["ai", "llm", "guardrails", "prompt injection", "pii", "security", "filtering"],
      summary: "Security toolkit for scanning and sanitizing LLM inputs and outputs.",
      focus: "Use to understand practical controls around prompt injection, secret leakage, PII handling, and response filtering."
    },
    {
      name: "Llama Guard",
      category: "AI Security",
      link: "https://github.com/meta-llama/llama-recipes/tree/main/recipes/responsible_ai/llama_guard",
      keywords: ["ai", "llm", "safety", "moderation", "classifier", "meta", "guardrail"],
      summary: "Meta safety model family and recipes for classifying human-AI conversation safety risks.",
      focus: "Good for studying how model-based input/output moderation can support, but not replace, app security controls."
    },
    {
      name: "MITRE ATLAS",
      category: "AI Security",
      link: "https://atlas.mitre.org/",
      keywords: ["ai", "ml", "threat model", "mitre", "atlas", "tactics", "techniques"],
      summary: "Knowledge base of adversary tactics and techniques against AI-enabled systems.",
      focus: "Use as a threat-modeling reference when mapping AI system risks, controls, and detection opportunities."
    }
  ];
}

function cyberOperatingSystems() {
  return [
    {
      name: "Kali Linux",
      base: "Debian",
      use: "General penetration testing, CTF practice, web testing, wireless labs, and security training.",
      fit: "Start here when you want the most common learning environment and broad documentation.",
      link: "https://www.kali.org/"
    },
    {
      name: "Parrot OS",
      base: "Debian",
      use: "Security labs, privacy-aware desktop work, forensics basics, and development.",
      fit: "Good when you want a security-focused daily lab desktop with privacy tools included.",
      link: "https://parrotsec.org/"
    },
    {
      name: "BlackArch Linux",
      base: "Arch Linux",
      use: "Large penetration-testing tool repository, Arch-based labs, and advanced tool exploration.",
      fit: "Best for users already comfortable with Arch Linux and manual system maintenance.",
      link: "https://blackarch.org/"
    },
    {
      name: "Pentoo",
      base: "Gentoo",
      use: "Live security testing environment, wireless work, exploit development, and low-level tuning.",
      fit: "Useful when you want a Gentoo-based security distro and are comfortable with deeper Linux control.",
      link: "https://www.pentoo.ch/"
    },
    {
      name: "BackBox Linux",
      base: "Ubuntu",
      use: "Security assessment, analysis, privacy, and lightweight lab workflows.",
      fit: "Good for learners who prefer an Ubuntu-based desktop with selected security tools.",
      link: "https://www.backbox.org/"
    },
    {
      name: "CAINE",
      base: "Ubuntu",
      use: "Digital forensics, evidence handling, incident analysis, and recovery labs.",
      fit: "Choose this for forensic workflows instead of general penetration testing.",
      link: "https://www.caine-live.net/"
    },
    {
      name: "REMnux",
      base: "Ubuntu",
      use: "Malware analysis, reverse engineering support, suspicious document analysis, and memory artifacts.",
      fit: "Use in an isolated lab when studying malware behavior and analysis tooling.",
      link: "https://remnux.org/"
    },
    {
      name: "FLARE VM",
      base: "Windows",
      use: "Windows malware analysis, reverse engineering, forensics, debugging, and suspicious-file triage.",
      fit: "Choose this when your lab needs Windows-native malware and reverse-engineering tools.",
      link: "https://github.com/mandiant/flare-vm"
    },
    {
      name: "Ubuntu / Debian",
      base: "Debian family",
      use: "General Linux learning, manual tool installation, scripting, networking, and server fundamentals.",
      fit: "Best when you want to build Linux understanding before relying on a preloaded security distro.",
      link: "https://www.debian.org/"
    },
    {
      name: "SIFT Workstation",
      base: "Ubuntu",
      use: "Incident response, disk forensics, memory forensics, and timeline analysis.",
      fit: "Best for blue-team investigation labs and structured forensic case work.",
      link: "https://www.sans.org/tools/sift-workstation/"
    },
    {
      name: "Security Onion",
      base: "Ubuntu",
      use: "Network security monitoring, IDS workflows, packet capture, logs, and threat hunting.",
      fit: "Use when you want to build a defensive monitoring lab instead of a pentest desktop.",
      link: "https://securityonion.net/"
    },
    {
      name: "Tails",
      base: "Debian",
      use: "Amnesic live sessions, privacy practice, Tor workflows, and sensitive browsing labs.",
      fit: "Good for learning privacy concepts; not a full penetration-testing distribution.",
      link: "https://tails.net/"
    },
    {
      name: "Whonix",
      base: "Debian",
      use: "Tor isolation, privacy research, compartmentalized browsing, and anonymity education.",
      fit: "Use when traffic isolation and privacy architecture are the main learning goal.",
      link: "https://www.whonix.org/"
    },
    {
      name: "Qubes OS",
      base: "Fedora-based compartments",
      use: "Security compartmentalization, isolated workflows, and high-risk research separation.",
      fit: "Best for advanced users who want strong isolation between tasks and virtual machines.",
      link: "https://www.qubes-os.org/"
    },
    {
      name: "Commando VM",
      base: "Windows",
      use: "Windows-based offensive security labs, Active Directory testing, and Windows tooling.",
      fit: "Choose this when your lab needs Windows-native tools instead of a Linux distro.",
      link: "https://github.com/mandiant/commando-vm"
    }
  ];
}

function virtualLabPlatforms() {
  return [
    {
      name: "VirtualBox",
      type: "Free desktop hypervisor",
      use: "Run Kali, Parrot, BlackArch, REMnux, Windows, and other lab machines on one computer.",
      fit: "Best first choice for students because it is free, common, and easy to use for snapshots and practice VMs.",
      link: "https://www.virtualbox.org/"
    },
    {
      name: "VMware Workstation",
      type: "Desktop hypervisor",
      use: "Run Linux, Windows, and BSD virtual machines with strong VM management for cybersecurity labs.",
      fit: "Good when you want a polished VM experience, stable networking options, and compatibility with many prebuilt lab images.",
      link: "https://www.vmware.com/products/desktop-hypervisor"
    },
    {
      name: "VMware Fusion",
      type: "macOS desktop hypervisor",
      use: "Run Kali, Windows, REMnux, and other lab VMs on macOS hosts.",
      fit: "Best for Mac users who need a VMware-style VM workflow for local cybersecurity labs.",
      link: "https://www.vmware.com/products/desktop-hypervisor"
    },
    {
      name: "QEMU + KVM",
      type: "Linux-native virtualization",
      use: "Run hardware-accelerated virtual machines on Linux hosts with strong performance and control.",
      fit: "Good for Linux users who want fast local labs and are comfortable with deeper VM configuration.",
      link: "https://www.qemu.org/"
    },
    {
      name: "Proxmox VE",
      type: "Bare-metal lab hypervisor",
      use: "Build a dedicated home lab server with full VMs, LXC containers, snapshots, and virtual networks.",
      fit: "Best when you have spare hardware and want a more realistic multi-machine lab environment.",
      link: "https://www.proxmox.com/en/proxmox-virtual-environment/overview"
    },
    {
      name: "Hyper-V",
      type: "Windows virtualization",
      use: "Run Windows and Linux lab VMs on supported Windows Pro, Enterprise, and Education systems.",
      fit: "Good for Windows-first labs, WSL2 users, and Microsoft ecosystem practice.",
      link: "https://learn.microsoft.com/en-us/virtualization/hyper-v-on-windows/about/"
    }
  ];
}

function programmingLanguages() {
  return [
    {
      name: "Python 3",
      priority: "Must learn",
      use: "All areas",
      why: "Used for exploit scripts, automation, network tools, fuzzers, data analysis, and security libraries like Scapy, pwntools, and Impacket.",
      fit: "Start here for cybersecurity scripting, automation, and fast proof-of-concept work."
    },
    {
      name: "Bash / Shell",
      priority: "Must learn",
      use: "Linux, automation",
      why: "Essential for Linux automation, command pipelines, recon one-liners, log parsing, and quick lab harnesses.",
      fit: "Learn early because nearly every Linux security workflow touches the shell."
    },
    {
      name: "C / C++",
      priority: "Important",
      use: "Exploit development, reverse engineering",
      why: "Low-level languages for understanding memory, buffer overflows, shellcode, OS internals, firmware, and network stacks.",
      fit: "Pick this when moving into systems security, binary exploitation, firmware, or vulnerability research."
    },
    {
      name: "x86 Assembly",
      priority: "Important",
      use: "Reverse engineering, malware analysis",
      why: "Helps you read disassembly, understand CPU-level behavior, debug binaries, and reason about ROP chains.",
      fit: "Learn enough to follow Ghidra, IDA, x64dbg, and debugger output during RE labs."
    },
    {
      name: "JavaScript",
      priority: "Important",
      use: "Web hacking",
      why: "Core client-side language for understanding XSS, DOM-based bugs, browser behavior, and modern web app attack surface.",
      fit: "Focus here if you want web app testing, bug bounty, or frontend security skills."
    },
    {
      name: "SQL",
      priority: "Important",
      use: "Web hacking, databases",
      why: "Needed to understand SQL injection, joins, UNION queries, stored procedures, and secure database access patterns.",
      fit: "Learn alongside web security so you can both exploit and fix data-layer vulnerabilities."
    },
    {
      name: "PowerShell",
      priority: "Useful",
      use: "Windows, red team, defense",
      why: "Used for Windows administration, Active Directory enumeration, automation, incident response, and living-off-the-land concepts.",
      fit: "Important for Windows security, SOC work, Active Directory labs, and enterprise environments."
    },
    {
      name: "Go",
      priority: "Useful",
      use: "Tool development",
      why: "Compiles to standalone binaries and is used by many modern security tools such as Nuclei, Naabu, and Gobuster.",
      fit: "Good when you want fast, portable security tooling and simple deployment."
    },
    {
      name: "Rust",
      priority: "Useful",
      use: "Systems, secure development",
      why: "Memory-safe systems language useful for secure tooling, systems programming, and reducing memory-corruption bugs.",
      fit: "Good long-term choice for safer systems software and modern security engineering."
    },
    {
      name: "PHP",
      priority: "Useful",
      use: "Web hacking",
      why: "Common server-side web language where issues like file inclusion, injection, deserialization, and legacy CMS risks appear.",
      fit: "Useful for WordPress, older web apps, CTFs, and understanding common server-side vulnerability classes."
    }
  ];
}

function toolCard(tool, prefix = "../") {
  const searchText = [tool.name, tool.category, tool.summary, tool.focus, ...tool.keywords].join(" ").toLowerCase();
  return `<article class="tool-card" data-tool-card data-search="${escapeHtml(searchText)}">
    <div>
      <p class="tool-category">${escapeHtml(tool.category)}</p>
      <h3>${escapeHtml(tool.name)}</h3>
      <p>${escapeHtml(tool.summary)}</p>
    </div>
    <div class="tool-actions">
      <a href="${prefix}tools/${tool.slug}/index.html">Open details</a>
      <a href="${escapeHtml(tool.link)}" rel="noreferrer" target="_blank">Official site</a>
    </div>
  </article>`;
}

function osCard(os) {
  const searchText = ["operating system", "os", "security distro", os.name, os.base, os.use, os.fit].join(" ").toLowerCase();
  return `<article class="os-card" data-os-card data-search="${escapeHtml(searchText)}">
    <div>
      <p class="os-base">${escapeHtml(os.base)}</p>
      <h3>${escapeHtml(os.name)}</h3>
      <p>${escapeHtml(os.use)}</p>
    </div>
    <div>
      <strong>Best fit</strong>
      <p>${escapeHtml(os.fit)}</p>
      <a href="${escapeHtml(os.link)}" rel="noreferrer" target="_blank">Official site</a>
    </div>
  </article>`;
}

function virtualLabCard(platform) {
  const searchText = ["virtual machine", "vm", "hypervisor", "virtual lab", platform.name, platform.type, platform.use, platform.fit].join(" ").toLowerCase();
  return `<article class="virtual-lab-card" data-virtual-lab-card data-search="${escapeHtml(searchText)}">
    <div>
      <p class="os-base">${escapeHtml(platform.type)}</p>
      <h3>${escapeHtml(platform.name)}</h3>
      <p>${escapeHtml(platform.use)}</p>
    </div>
    <div>
      <strong>Best fit</strong>
      <p>${escapeHtml(platform.fit)}</p>
      <a href="${escapeHtml(platform.link)}" rel="noreferrer" target="_blank">Official site</a>
    </div>
  </article>`;
}

function languageCard(language) {
  const searchText = ["programming language", "language", "code", "coding", language.name, language.priority, language.use, language.why, language.fit].join(" ").toLowerCase();
  return `<article class="language-card" data-language-card data-search="${escapeHtml(searchText)}">
    <div>
      <p class="os-base">${escapeHtml(language.priority)}</p>
      <h3>${escapeHtml(language.name)}</h3>
      <p>${escapeHtml(language.why)}</p>
    </div>
    <div>
      <strong>${escapeHtml(language.use)}</strong>
      <p>${escapeHtml(language.fit)}</p>
    </div>
  </article>`;
}

function toolsPage() {
  const tools = cyberTools().map((tool) => ({ ...tool, slug: slugify(tool.name) }));
  const categories = [...new Set(tools.map((tool) => tool.category))];
  const operatingSystems = cyberOperatingSystems();
  const virtualLabs = virtualLabPlatforms();
  const languages = programmingLanguages();

  return layout({
    title: `Cybersecurity Tools - ${site.title}`,
    description: "A student-friendly cybersecurity tools directory for authorized lab work and defensive learning.",
    current: "tools",
    depth: 1,
    body: `<main class="tools-shell">
      <section class="tools-hero">
        <p class="eyebrow">Cybersecurity student tools</p>
        <h1>Find the right tool for authorized practice and defensive work.</h1>
        <p>This directory groups common security tools by learning workflow. Use them only in labs, owned systems, CTFs, or environments where you have explicit permission.</p>
      </section>
      <form class="tool-search" role="search" data-tool-search-form>
        <label for="tool-search">Search tools</label>
        <div class="search-box">
          <input id="tool-search" data-tool-search-input type="search" placeholder="Try password, passwd, network, web, forensics..." autocomplete="off">
          <button type="submit">Search</button>
        </div>
      </form>
      <section class="tool-categories" aria-label="Tool categories">
        ${categories.map((category) => `<a href="#${slugify(category)}">${escapeHtml(category)}</a>`).join("\n")}
      </section>
      <section class="ethics-note" aria-label="Responsible use note">
        <strong>Responsible use:</strong>
        <span>These tools can be dual-use. The descriptions here stay high level and focus on legal education, analysis, and defensive security.</span>
      </section>
      <section class="os-section" aria-label="Cybersecurity operating systems">
        <div class="section-heading">
          <h2>Cybersecurity operating systems</h2>
          <p>${operatingSystems.length} options</p>
        </div>
        <div class="os-grid">
          ${operatingSystems.map((os) => osCard(os)).join("\n")}
        </div>
      </section>
      <section class="virtual-lab-section" aria-label="Virtual lab platforms">
        <div class="section-heading">
          <h2>Virtual lab platforms</h2>
          <p>${virtualLabs.length} options</p>
        </div>
        <div class="virtual-lab-grid">
          ${virtualLabs.map((platform) => virtualLabCard(platform)).join("\n")}
        </div>
      </section>
      <section class="language-section" aria-label="Programming languages">
        <div class="section-heading">
          <h2>Programming languages</h2>
          <p>${languages.length} languages</p>
        </div>
        <div class="language-grid">
          ${languages.map((language) => languageCard(language)).join("\n")}
        </div>
      </section>
      <section class="tool-results" data-tool-results-section hidden>
        <div class="section-heading">
          <h2 data-tool-results-title>Tool results</h2>
          <p data-tool-results-count></p>
        </div>
        <div class="tool-grid" data-tool-results></div>
        <div class="empty-state" data-tool-empty hidden>
          <h2>No tools found</h2>
          <p>Try broader terms like password, network, web, packet, forensics, or analysis.</p>
        </div>
      </section>
      ${categories.map((category) => `<section class="tool-section" id="${slugify(category)}">
        <div class="section-heading">
          <h2>${escapeHtml(category)}</h2>
          <p>${tools.filter((tool) => tool.category === category).length} tools</p>
        </div>
        <div class="tool-grid">
          ${tools.filter((tool) => tool.category === category).map((tool) => toolCard(tool)).join("\n")}
        </div>
      </section>`).join("\n")}
    </main>`
  });
}

function toolDetailPage(tool) {
  return layout({
    title: `${tool.name} - Cybersecurity Tools - ${site.title}`,
    description: tool.summary,
    current: "tools",
    depth: 2,
    body: `<main class="detail-shell tool-detail-shell">
      <nav class="breadcrumb" aria-label="Breadcrumb"><a href="../index.html">Tools</a><span>/</span><span>${escapeHtml(tool.name)}</span></nav>
      <article class="command-detail">
        <header class="detail-header">
          <p class="eyebrow">${escapeHtml(tool.category)}</p>
          <h1>${escapeHtml(tool.name)}</h1>
          <p>${escapeHtml(tool.summary)}</p>
          <div class="tag-row">${tool.keywords.slice(0, 6).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
        </header>
        <div class="prose">
          <h2>Best For</h2>
          <p>${escapeHtml(tool.focus)}</p>
          <h2>Responsible Use</h2>
          <p>Use this tool only in owned environments, classroom labs, CTFs, or engagements where you have explicit written permission. Keep notes focused on findings, risk, and remediation.</p>
          <h2>Official Resource</h2>
          <p><a href="${escapeHtml(tool.link)}" rel="noreferrer" target="_blank">${escapeHtml(tool.link)}</a></p>
        </div>
      </article>
      <aside class="related">
        <h2>Search Hints</h2>
        <p>${tool.keywords.map((keyword) => escapeHtml(keyword)).join(", ")}</p>
      </aside>
    </main>`
  });
}

async function copyPublicFiles() {
  const entries = await readdir(publicDir, { recursive: true, withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isFile()) continue;
    const relative = path.relative(publicDir, path.join(entry.parentPath, entry.name));
    const source = path.join(publicDir, relative);
    const target = path.join(distDir, relative);
    await mkdir(path.dirname(target), { recursive: true });
    await writeFile(target, await readFile(source));
  }
}

async function loadWallpapers() {
  const wallpapersDir = path.join(publicDir, "wallpapers");
  let entries = [];

  try {
    entries = await readdir(wallpapersDir, { withFileTypes: true });
  } catch {
    return [];
  }

  return entries
    .filter((entry) => entry.isFile() && wallpaperExtensions.has(path.extname(entry.name).toLowerCase()))
    .map((entry) => `wallpapers/${entry.name}`)
    .sort();
}

const commands = await loadCommands();
const tools = cyberTools().map((tool) => ({ ...tool, slug: slugify(tool.name) }));
const wallpapers = await loadWallpapers();

await rm(distDir, { recursive: true, force: true });
await mkdir(path.join(distDir, "commands"), { recursive: true });
await mkdir(path.join(distDir, "about"), { recursive: true });
await mkdir(path.join(distDir, "linux-tree"), { recursive: true });
await mkdir(path.join(distDir, "tools"), { recursive: true });
await copyPublicFiles();

await writeFile(path.join(distDir, "index.html"), homePage(commands));
await writeFile(path.join(distDir, "commands", "index.html"), commandsPage(commands));
await writeFile(path.join(distDir, "about", "index.html"), aboutPage());
await writeFile(path.join(distDir, "404.html"), notFoundPage());
await writeFile(path.join(distDir, "linux-tree", "index.html"), linuxTreePage());
await writeFile(path.join(distDir, "tools", "index.html"), toolsPage());
await writeFile(
  path.join(distDir, "tools-index.json"),
  JSON.stringify(
    tools.map((tool) => ({
      name: tool.name,
      slug: tool.slug,
      category: tool.category,
      summary: tool.summary,
      focus: tool.focus,
      keywords: tool.keywords,
      link: tool.link,
      searchText: [tool.name, tool.category, tool.summary, tool.focus, ...tool.keywords].join(" ").toLowerCase()
    })),
    null,
    2
  )
);
await writeFile(path.join(distDir, "wallpapers-index.json"), JSON.stringify(wallpapers, null, 2));
await writeFile(
  path.join(distDir, "search-index.json"),
  JSON.stringify(
    commands.map(({ name, slug, summary, category, tags, popular, searchText }) => ({
      name,
      slug,
      summary,
      category,
      tags,
      popular,
      searchText
    })),
    null,
    2
  )
);

for (const command of commands) {
  const dir = path.join(distDir, "commands", command.slug);
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, "index.html"), detailPage(command, commands));
}

for (const tool of tools) {
  const dir = path.join(distDir, "tools", tool.slug);
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, "index.html"), toolDetailPage(tool));
}

console.log(`Built ${commands.length} command pages and ${tools.length} tool pages in dist/`);
