/** Minimal static file server for ./out (screenshots only). */
const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "out");
const PORT = process.env.PORT || 4173;

const MIME = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".pdf": "application/pdf",
  ".ico": "image/x-icon",
  ".txt": "text/plain",
  ".woff2": "font/woff2",
};

http
  .createServer((req, res) => {
    let urlPath = decodeURIComponent(req.url.split("?")[0]);
    if (urlPath.endsWith("/")) urlPath += "index.html";
    const file = path.join(ROOT, urlPath);
    if (!file.startsWith(ROOT) || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
      // fallback to index.html (SPA-ish)
      const index = path.join(ROOT, "index.html");
      res.writeHead(200, { "Content-Type": "text/html" });
      return res.end(fs.readFileSync(index));
    }
    res.writeHead(200, { "Content-Type": MIME[path.extname(file)] || "application/octet-stream" });
    res.end(fs.readFileSync(file));
  })
  .listen(PORT, () => console.log(`Serving ${ROOT} on http://localhost:${PORT}`));
