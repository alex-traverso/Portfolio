/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ucyrznwsgzfevzoiddmn.supabase.co",
      },
    ],
  },
};

module.exports = nextConfig;
