import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { cities } from "@/data/cities";
import { services } from "@/data/services";
import { landingPages } from "@/data/landingPages";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/services",
    "/projects",
    "/locations",
    "/landing-pages",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const cityRoutes = cities.map((c) => ({
    url: `${site.url}/locations/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const cityServiceRoutes = cities.flatMap((c) =>
    services.map((s) => ({
      url: `${site.url}/locations/${c.slug}/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  const landingRoutes = landingPages.map((p) => ({
    url: `${site.url}/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...cityRoutes, ...cityServiceRoutes, ...landingRoutes];
}
