// Hostinger entry point. Delegates to the Next.js standalone server.
//
// We build with `output: "standalone"` in next.config.ts, which produces a
// fully self-contained server at .next/standalone/server.js — it inlines its
// own dependency tree, listens on $PORT, and is the runtime Next.js itself
// recommends for non-Vercel Node hosting (Hostinger included).
//
// We keep this file as a thin wrapper so that Hostinger's "Application
// startup file" setting can stay pointed at `server.js` — no panel change
// needed when iterating on the underlying server.
//
// If you ever need to bypass this wrapper, the equivalent direct command is:
//   node .next/standalone/server.js

const path = require("node:path");
const fs = require("node:fs");

const standalone = path.join(__dirname, ".next", "standalone", "server.js");

if (!fs.existsSync(standalone)) {
  console.error(
    "[server.js] " + standalone + " not found. Did `npm run build` complete? " +
    "next.config.ts must have output: \"standalone\"."
  );
  process.exit(1);
}

process.env.NODE_ENV = process.env.NODE_ENV || "production";
process.env.HOSTNAME = process.env.HOSTNAME || "0.0.0.0";
// PORT is provided by Hostinger; the standalone server reads it.

require(standalone);
