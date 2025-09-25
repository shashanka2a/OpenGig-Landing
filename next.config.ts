import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Limit file tracing to this project to avoid scanning your home directory
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
