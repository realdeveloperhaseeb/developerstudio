import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allows the placeholder team avatars (SVG) to be served via next/image.
    // Safe here because all images are first-party assets in /public.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
