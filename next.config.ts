import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://oteacher-avatars.s3.ir-thr-at1.arvanstorage.ir/**"),
    ],
  },
};

export default nextConfig;
