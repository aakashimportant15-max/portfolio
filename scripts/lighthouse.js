/** Runs Lighthouse (desktop) against ./out; starts/stops its own server. */
const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");
const http = require("http");

const MIME = {
  ".html": "text/html", ".js": "text/javascript", ".css": "text/css",
  ".png": "image/png", ".jpg": "image/jpeg", ".svg": "image/svg+xml",
  ".pdf": "application/pdf", ".woff2": "font/woff2",
};

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
    server.listen(4173, () => resolve(server));
  });
}

(async () => {
  const chromeDir = path.join(__dirname, "..", ".playwright-browsers");
  const chromePath =
    [
      path.join(chromeDir, "chromium_headless_shell-1255", "chrome-headless-shell-win64", "chrome-headless-shell.exe"),
      path.join(chromeDir, "chromium-1255", "chrome-win64", "chrome.exe"),
    ].find((p) => fs.existsSync(p)) || null;
  if (!chromePath) {
    console.error("chrome.exe not found under .playwright-browsers");
    process.exit(1);
  }
  const server = await startServer();
  try {
    execSync(
      `npx lighthouse http://localhost:4173 --output=json --output-path=lighthouse-report.json --chrome-flags="--headless=new --no-sandbox --disable-dev-shm-usage" --preset=desktop --only-categories=performance,accessibility,best-practices,seo --quiet`,
      {
        stdio: "inherit",
        env: { ...process.env, CHROME_PATH: chromePath },
        cwd: path.join(__dirname, ".."),
        timeout: 420000,
      }
    );
    const report = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "lighthouse-report.json"), "utf8"));
    console.log("---- Lighthouse (desktop) ----");
    for (const [k, v] of Object.entries(report.categories)) {
      console.log(k, Math.round(v.score * 100));
    }
  } catch (e) {
    console.log("Lighthouse failed:", e.message);
  }
  server.close();
})();
