import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["local-origin.dev", "*.local-origin.dev"],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: "**",
        protocol: "https",
      },
    ],
  },
  output: "export",
  distDir: "dist",
  assetPrefix: "",
};

export default nextConfig;
