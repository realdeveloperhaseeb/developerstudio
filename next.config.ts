import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pure static HTML export to /out. NO Node runtime needed at the host —
  // Hostinger just serves files. Eliminates the "Node app crashed = 503"
  // class of failures entirely. Vercel handles static exports natively.
  output: "export",
  trailingSlash: true, // /services → /services/index.html (Apache-friendly)
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
  // 301-redirect retired WordPress URLs to the closest new page so old
  // indexed links and backlinks don't dead-end on a 404.
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
