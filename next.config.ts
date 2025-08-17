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
  eslint: {
    ignoreDuringBuilds: true,
  },
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.glb$/,
  //     type: "asset/resource",
  //   });
  //   return config;
  // },
};

export default nextConfig;
