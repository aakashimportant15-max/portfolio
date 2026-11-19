import fs from "fs";
import path from "path";

/**
 * Build-time check whether a file exists under /public.
 * Must only be called from Server Components / data loading that runs
 * at build time (static export). Never import this from a client
 * component bundle.
 */
export function publicFileExists(relPath: string): boolean {
  try {
    const full = path.join(process.cwd(), "public", relPath.replace(/^\//, ""));
    return fs.existsSync(full) && fs.statSync(full).isFile();
  } catch {
    return false;
  }
}

/** Check several /public paths at once, returning a record of results. */
export function checkPublicFiles(paths: string[]): Record<string, boolean> {
  const out: Record<string, boolean> = {};
  for (const p of paths) out[p] = publicFileExists(p);
  return out;
}
