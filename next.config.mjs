/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: 'export',
  images: {
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
