import type { NextConfig } from "next";

import path from "path";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
