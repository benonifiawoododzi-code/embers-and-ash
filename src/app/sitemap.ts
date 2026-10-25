import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/services", "/projects", "/contact", "/privacy", ...projects.map((project) => `/projects/${project.slug}`)];
  const lastModified = new Date("2026-10-25");
  return paths.map((path) => ({
    url: `${siteConfig.url}${path || "/"}`,
    lastModified,
  }));
}
