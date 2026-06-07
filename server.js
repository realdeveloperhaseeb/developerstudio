// Custom Next.js server for Hostinger Node.js hosting.
//
// Hostinger's Node.js panel asks for an "Application startup file" — point it
// at this file. The app will listen on whatever PORT Hostinger assigns.
//
// (Vercel ignores this file — it uses next start directly.)
//
// IMPORTANT: this file is for PRODUCTION only. Use `npm run dev` for local
// development — never run server.js in dev mode.

// Force production mode. Hostinger's Node panel doesn't set NODE_ENV by
// default, and running Next in dev mode on a production host crashes it
// (requires dev deps + runtime compile = OOM / 503).
process.env.NODE_ENV = "production";

const { createServer } = require("http");
const next = require("next");

const hostname = process.env.HOSTNAME || "0.0.0.0";
const port = parseInt(process.env.PORT || "3000", 10);

const app = next({ dev: false, hostname, port });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    createServer(async (req, res) => {
      try {
        await handle(req, res);
      } catch (err) {
        console.error("Request error:", err);
        res.statusCode = 500;
        res.end("Internal Server Error");
      }
    })
      .listen(port, hostname, () => {
        console.log(`> Ready on http://${hostname}:${port}`);
      })
      .on("error", (err) => {
        console.error("Server failed to start:", err);
        process.exit(1);
      });
  })
  .catch((err) => {
    console.error("next.prepare() failed:", err);
    process.exit(1);
  });
