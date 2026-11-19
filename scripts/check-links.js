/** HEAD-checks all external links found in src/data/*.ts */
const fs = require("fs");
const path = require("path");

function extractLinks(dir) {
  const links = new Set();
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      for (const l of extractLinks(full)) links.add(l);
    } else {
      const text = fs.readFileSync(full, "utf8");
      for (const m of text.matchAll(/https?:\/\/[^\s"'`)]+/g)) {
        links.add(m[0].replace(/[.,]+$/, ""));
      }
    }
  }
  return [...links];
}

(async () => {
  const links = extractLinks(path.join(__dirname, "..", "src"));
  for (const url of links) {
    try {
      const res = await fetch(url, { method: "HEAD", redirect: "follow", signal: AbortSignal.timeout(20000) });
      console.log(res.ok ? "OK  " : `HTTP ${res.status}`, url);
    } catch (e) {
      console.log("FAIL", url, "-", e.message);
    }
  }
})();
