import type { NextConfig } from "next";

const DEFAULT_LOCAL_API_ORIGIN = "http://localhost:5000";

const stripApiSuffix = (value: string) =>
  value
    .trim()
    .replace(/\/+$/, "")
    .replace(/\/api$/i, "");

const configuredApiOrigin = stripApiSuffix(
  process.env.API_URL ||
    process.env.NEXT_PUBLIC_API_URL ||
    DEFAULT_LOCAL_API_ORIGIN,
);

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${configuredApiOrigin}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
