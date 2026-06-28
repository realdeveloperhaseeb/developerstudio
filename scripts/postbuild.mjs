// Postbuild step for `output: "standalone"`.
//
// Next.js generates a self-contained server at .next/standalone/server.js but
// does NOT copy static assets into the standalone folder — those have to be
// placed alongside the server manually (this is documented behaviour). Without
// these copies the server starts but every CSS / JS chunk / image returns 404
// and the page renders blank.
//
// We copy:
//   .next/static/  →  .next/standalone/.next/static/   (JS/CSS chunks)
//   public/        →  .next/standalone/public/         (images, favicons, etc.)
//
// Runs on every `npm run build` so Hostinger's deployment pipeline gets a
// ready-to-run standalone server with no extra wiring.

import { cpSync, existsSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const copies = [
  {
    from: resolve(root, ".next/static"),
    to: resolve(root, ".next/standalone/.next/static"),
    label: ".next/static → standalone/.next/static",
  },
  {
    from: resolve(root, "public"),
    to: resolve(root, ".next/standalone/public"),
    label: "public/ → standalone/public/",
  },
];

if (!existsSync(resolve(root, ".next/standalone"))) {
  console.error(
    "[postbuild] .next/standalone not found — is output: \"standalone\" set in next.config.ts?"
  );
  process.exit(1);
}

for (const { from, to, label } of copies) {
  if (!existsSync(from)) {
    console.warn(`[postbuild] skip ${label} — source missing (${from})`);
    continue;
  }
  mkdirSync(dirname(to), { recursive: true });
  cpSync(from, to, { recursive: true, force: true });
  console.log(`[postbuild] ok  ${label}`);
}

console.log("[postbuild] standalone build is ready: node .next/standalone/server.js");
