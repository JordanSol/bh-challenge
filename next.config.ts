import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  images: {
    remotePatterns: [
      new URL("https://fe-tech-challenge-keqns.ondigitalocean.app/**"),
    ],
  },
};

export default nextConfig;
