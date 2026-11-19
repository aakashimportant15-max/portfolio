/** Overflow + console check across widths. Starts/stops its own server. */
const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");
const http = require("http");

const MIME = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".png": "image/png", ".jpg": "image/jpeg", ".svg": "image/svg+xml", ".pdf": "application/pdf", ".woff2": "font/woff2" };

function startServer() {
  const ROOT = path.join(__dirname, "..", "out");
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let p = decodeURIComponent(req.url.split("?")[0]);
      if (p.endsWith("/")) p += "index.html";
      const file = path.join(ROOT, p);
      if (!file.startsWith(ROOT) || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
        res.writeHead(200, { "Content-Type": "text/html" });
        return res.end(fs.readFileSync(path.join(ROOT, "index.html")));
      }
      res.writeHead(200, { "Content-Type": MIME[path.extname(file)] || "application/octet-stream" });
      res.end(fs.readFileSync(file));
    });
    server.listen(Number(process.env.PORT) || 4173, () => resolve(server));
  });
}

const PORT = Number(process.env.PORT) || 4173;

(async () => {
  const server = process.env.SKIP_SERVER ? null : await startServer();
  const browser = await chromium.launch();
  const results = [];
  for (const width of [390, 768, 1024, 1440]) {
    const ctx = await browser.newContext({ viewport: { width, height: 900 } });
    const page = await ctx.newPage();
    const errors = [];
    page.on("console", (m) => {
      if (m.type() === "error" || m.type() === "warning") errors.push(`${m.type()}: ${m.text()}`);
    });
    page.on("pageerror", (e) => errors.push("pageerror: " + e.message));
    await page.goto(`http://localhost:${PORT}`, { waitUntil: "networkidle" });
    await page.waitForTimeout(800);
    const scrollW = await page.evaluate(() => document.documentElement.scrollWidth);
    results.push({ width, scrollW, overflow: scrollW > width, errors });
    await ctx.close();
  }
  console.log(JSON.stringify(results, null, 2));
  await browser.close();
  if (server) server.close();
})();
