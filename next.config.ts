import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.googleapis.com",
      },
    ],
  },

  // ── Turbopack (Next.js 16 default bundler) ──
  turbopack: {},

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options",        value: "DENY" },
          {
            key:   "Permissions-Policy",
            value: "camera=*, microphone=*, geolocation=*",
          },
        ],
      },
    ];
  },
};

export default nextConfig;