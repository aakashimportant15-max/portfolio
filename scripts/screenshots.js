/**
 * Screenshot script. Run with:  npm run screenshots
 * Requires the production build (npm run build) and a static server
 * serving ./out on PORT (default 4173), e.g.:
 *   npx serve out   (or any static server)
 *
 * Set PLAYWRIGHT_BROWSERS_PATH if browsers are stored in the project
 * (e.g. .playwright-browsers).
 */
const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");
const http = require("http");

const OUT_DIR = path.join(__dirname, "..", "scr");
const PORT = Number(process.env.PORT) || 4173;
const BASE_URL = `http://localhost:${PORT}`;

// --- tiny static server for ./out, lives only while this script runs ---
const MIME = {
  ".html": "text/html", ".js": "text/javascript", ".css": "text/css",
  ".png": "image/png", ".jpg": "image/jpeg", ".svg": "image/svg+xml",
  ".pdf": "application/pdf", ".txt": "text/plain", ".woff2": "font/woff2",
};
function startServer() {
  const ROOT = path.join(__dirname, "..", "out");
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let urlPath = decodeURIComponent(req.url.split("?")[0]);
      if (urlPath.endsWith("/")) urlPath += "index.html";
      const file = path.join(ROOT, urlPath);
      if (!file.startsWith(ROOT) || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
        res.writeHead(200, { "Content-Type": "text/html" });
        return res.end(fs.readFileSync(path.join(ROOT, "index.html")));
      }
      res.writeHead(200, { "Content-Type": MIME[path.extname(file)] || "application/octet-stream" });
      res.end(fs.readFileSync(file));
    });
    server.listen(PORT, () => resolve(server));
  });
}

const sections = [
  ["01-hero", null],
  ["02-about", "#about"],
  ["03-projects", "#projects"],
  ["04-case-study", "#case-study"],
  ["05-experience", "#experience"],
  ["06-skills", "#skills"],
  ["07-achievements", "#achievements"],
  ["08-contact", "#contact"],
];

async function shootPage(page, prefix) {
  await page.goto(BASE_URL, { waitUntil: "networkidle" });
  await page.waitForTimeout(1200); // fonts/images settle; count-up finishes

  for (const [name, anchor] of sections) {
    if (anchor) {
      await page.evaluate((sel) => {
        document.querySelector(sel)?.scrollIntoView({ behavior: "instant", block: "start" });
      }, anchor);
      await page.waitForTimeout(400);
    } else {
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(300);
    }
    await page.screenshot({ path: path.join(OUT_DIR, `${prefix}-${name}.png`) });
  }

  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(OUT_DIR, `${prefix}-09-full-page.png`), fullPage: true });
}

async function setTheme(page, theme) {
  await page.evaluate((t) => {
    try {
      localStorage.setItem("theme", t);
    } catch {}
    document.documentElement.classList.toggle("dark", t === "dark");
  }, theme);
}

(async () => {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const server = process.env.SKIP_SERVER ? null : await startServer();
  const browser = await chromium.launch();

  // Desktop 1440x900, light + dark
  const desktopCtx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });
  const desktop = await desktopCtx.newPage();
  await shootPage(desktop, "desktop-light");
  await setTheme(desktop, "dark");
  await shootPage(desktop, "desktop-dark");

  // Resume dropdown open (desktop, light)
  await setTheme(desktop, "light");
  await desktop.evaluate(() => window.scrollTo(0, 0));
  await desktop.waitForTimeout(300);
  await desktop.click("nav button[aria-haspopup='menu']");
  await desktop.waitForTimeout(400);
  await desktop.screenshot({
    path: path.join(OUT_DIR, "desktop-resume-dropdown-open.png"),
  });
  await desktop.close();

  // Tablet 768x1024 light
  const tabletCtx = await browser.newContext({
    viewport: { width: 768, height: 1024 },
    deviceScaleFactor: 1,
  });
  const tablet = await tabletCtx.newPage();
  await shootPage(tablet, "tablet-light");
  await tablet.close();

  // Mobile 390x844
  const mobileCtx = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 1,
  });
  const mobile = await mobileCtx.newPage();
  await shootPage(mobile, "mobile-light");
  await setTheme(mobile, "dark");
  await mobile.evaluate(() => window.scrollTo(0, 0));
  await mobile.waitForTimeout(400);
  await mobile.screenshot({ path: path.join(OUT_DIR, "mobile-dark-hero.png") });
  await setTheme(mobile, "light");
  await mobile.evaluate(() => window.scrollTo(0, 0));
  await mobile.waitForTimeout(300);
  await mobile.evaluate(() => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "instant" });
  });
  await mobile.waitForTimeout(400);
  await mobile.screenshot({ path: path.join(OUT_DIR, "mobile-light-projects.png") });

  // Mobile menu open
  await mobile.evaluate(() => window.scrollTo(0, 0));
  await mobile.waitForTimeout(300);
  await mobile.click("nav button[aria-label='Open menu']");
  await mobile.waitForTimeout(400);
  await mobile.screenshot({ path: path.join(OUT_DIR, "mobile-menu-open.png") });
  await mobile.close();
  await tablet.close();
  await desktop.close();

  await browser.close();
  if (server) server.close();
  console.log("Screenshots saved to", OUT_DIR);
})();
