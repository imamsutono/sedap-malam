import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Thumbnail facade YouTube (lihat components/YouTubeEmbed.tsx).
    remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com" }],
  },
};

export default nextConfig;
