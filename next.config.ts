import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hjrsmail.my.id",
        pathname: "/storage/**",
      },
      {
        protocol: "https",
        hostname: "udipnldnuphxxwyurpfu.supabase.co", // ganti sesuai Supabase project kamu
        pathname: "/storage/v1/object/**",
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
