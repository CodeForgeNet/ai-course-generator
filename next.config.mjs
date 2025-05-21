/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "img.clerk.com"],
  },
  devIndicators: false,
  experimental: {
    // In case next-devtools or vercel overlay are enabled
    instrumentationHook: false,
    turbo: false,
  },
};

export default nextConfig;
