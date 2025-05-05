import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'files.stripe.com'
    ]
  }
};

export default nextConfig;
