import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.excellenceauditing.com",
      },
    ],
  },
};

export default nextConfig;