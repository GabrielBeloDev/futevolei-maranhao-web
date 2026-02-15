import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https" as const,
        hostname: "**.supabase.co",
      },
    ],
  },
};

export default nextConfig;
