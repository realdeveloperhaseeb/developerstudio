import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allows the placeholder team avatars (SVG) to be served via next/image.
    // Safe here because all images are first-party assets in /public.
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
