import { createReadStream, existsSync } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import path from "node:path";
import { spawn } from "node:child_process";

const port = Number(process.env.PORT || 4173);
const dist = path.join(process.cwd(), "dist");

await new Promise((resolve, reject) => {
  const child = spawn(process.execPath, ["scripts/build.mjs"], { stdio: "inherit" });
  child.on("exit", (code) => (code === 0 ? resolve() : reject(new Error(`Build failed with code ${code}`))));
});

const types = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".txt", "text/plain; charset=utf-8"],
  [".svg", "image/svg+xml; charset=utf-8"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".png", "image/png"],
  [".webp", "image/webp"],
  [".avif", "image/avif"],
  [".gif", "image/gif"]
]);

function isInsideDist(file) {
  const relative = path.relative(dist, file);
  return relative && !relative.startsWith("..") && !path.isAbsolute(relative);
}

const server = createServer(async (req, res) => {
  const url = new URL(req.url || "/", `http://localhost:${port}`);
  let pathname;
  try {
    pathname = decodeURIComponent(url.pathname);
  } catch {
    res.writeHead(400, { "content-type": "text/plain; charset=utf-8" });
    res.end("Bad Request");
    return;
  }

  if (pathname.endsWith("/")) pathname += "index.html";

  const file = path.normalize(path.join(dist, pathname));
  if (!isInsideDist(file)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  let target = file;
  if (!existsSync(target)) {
    const htmlFallback = path.join(dist, pathname, "index.html");
    if (existsSync(htmlFallback)) target = htmlFallback;
  }

  try {
    const info = await stat(target);
    if (!info.isFile()) throw new Error("Not a file");
    res.writeHead(200, { "content-type": types.get(path.extname(target)) || "application/octet-stream" });
    createReadStream(target).pipe(res);
  } catch {
    res.writeHead(404, { "content-type": "text/html; charset=utf-8" });
    const notFound = path.join(dist, "404.html");
    if (existsSync(notFound)) {
      createReadStream(notFound).pipe(res);
    } else {
      res.end("<h1>404</h1><p>Page not found.</p>");
    }
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Linux Command is running at http://localhost:${port}`);
});
