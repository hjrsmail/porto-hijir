import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hjrsmail.my.id", 
        pathname: "/storage/**",
      },
    ],
  },
};

export default nextConfig;
