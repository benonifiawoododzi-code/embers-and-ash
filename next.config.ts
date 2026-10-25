import type { NextConfig } from "next";

/**
 * Static export fits this site: there is no database, account system, or
 * submission API. The inquiry form validates in the browser and does not
 * post anywhere. Remove `output: "export"` before adding a server route.
 * `images.unoptimized` is required so next/image works without an image
 * optimizer at request time.
 */
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
