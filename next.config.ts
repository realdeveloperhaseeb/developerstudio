import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standalone Node build → .next/standalone/server.js
  // This is the leanest possible Next.js runtime: only the runtime files
  // the server actually needs are bundled, with their deps inlined. It's
  // what Hostinger's Next.js framework preset expects to find, uses far
  // less memory than `next start`, and avoids the broad-node_modules
  // class of startup failures.
  output: "standalone",
  images: {
    // Serve images straight from /public (e.g. /images/foo.png) instead of
    // routing through the /_next/image optimisation proxy. Hostinger's CDN
    // bot-protection was 403-ing every /_next/image request, so all <Image>
    // tags were appearing as broken on developerstudio.org. With unoptimized
    // they use the original paths, which Hostinger serves without issue.
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  /*
    ---- Cache headers ----
    Hostinger's CDN was applying `s-maxage=31536000` to HTML responses
    by default (visible in the response `Server: hcdn` from origin).
    That means the CDN held old HTML pointing at old chunk hashes for
    a YEAR — so visitors in normal browsers got broken layouts after
    every deploy (fresh HTML from origin only reached them on hard
    refresh, while incognito worked because it hit the origin directly).

    Overrides:
      · HTML pages       → browser always revalidates, CDN caches ≤60s,
                           stale-while-revalidate 5 min for smooth
                           deploy transitions.
      · /_next/static/*  → immutable, 1 year (chunk names are content-
                           hashed so cache is safe forever).
      · /images/*        → 30 days public (change filename to bust).
  */
  async headers() {
    return [
      {
        // All HTML routes — match everything that isn't a static asset
        source: "/:path((?!_next/static|_next/image|images|icon|manifest|robots|sitemap).*)",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=0, s-maxage=60, must-revalidate, stale-while-revalidate=300",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=2592000" },
        ],
      },
    ];
  },
  // 301-redirect legacy URL paths from the previous version of the site
  // to the closest new page, so old Google rankings and backlinks don't
  // dead-end on a 404.
  async redirects() {
    return [
      { source: "/law-firm-marketing", destination: "/services", permanent: true },
      { source: "/law-firm-seo", destination: "/services", permanent: true },
      { source: "/law-firm-web-design", destination: "/services", permanent: true },
      { source: "/financial-services-website-design", destination: "/services", permanent: true },
      { source: "/legal-content-writing-services-for-lawyers-in-uk", destination: "/services", permanent: true },
      { source: "/choose-the-right-law-firm-marketing-agency", destination: "/services", permanent: true },
      { source: "/the-ultimate-guide-to-digital-marketing-for-lawyers", destination: "/services", permanent: true },
      { source: "/why-law-firm-web-design-matters", destination: "/services", permanent: true },
      { source: "/work", destination: "/projects", permanent: true },
      { source: "/stories", destination: "/projects", permanent: true },
      { source: "/careers", destination: "/about", permanent: true },
      { source: "/process", destination: "/about", permanent: true },
    ];
  },
};

export default nextConfig;
