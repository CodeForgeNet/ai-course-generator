/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "img.clerk.com"],
  },
  devIndicators: false,
};

export default nextConfig;
