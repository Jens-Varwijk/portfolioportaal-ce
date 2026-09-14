import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const distDir = fileURLToPath(new URL("../dist", import.meta.url));
const port = 5173;

const mime = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".svg": "image/svg+xml",
  ".json": "application/json",
  ".png": "image/png",
};

const basePrefix = "/portfolioportaal-ce";

createServer(async (req, res) => {
  let urlPath = decodeURIComponent(req.url.split("?")[0]);
  if (urlPath.startsWith(basePrefix)) urlPath = urlPath.slice(basePrefix.length) || "/";
  let filePath = join(distDir, urlPath);
  try {
    const s = await stat(filePath);
    if (s.isDirectory()) filePath = join(filePath, "index.html");
  } catch {
    filePath = join(distDir, "index.html");
  }
  try {
    const data = await readFile(filePath);
    res.writeHead(200, { "Content-Type": mime[extname(filePath)] ?? "application/octet-stream" });
    res.end(data);
  } catch {
    res.writeHead(404);
    res.end("Not found");
  }
}).listen(port, () => console.log(`serving dist on http://localhost:${port}`));
