/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "cloudinary",
    // also tried prepending https:// to the path
    path: "res.cloudinary.com/xx-USER-xx",
  },
};

module.exports = nextConfig;
