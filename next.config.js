/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n.js");

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

// module.exports = withNextIntl({ nextConfig });
export default withNextIntl(nextConfig);
