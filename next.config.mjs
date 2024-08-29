/** @type {import('next').NextConfig} */

export const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "p2care.s3.ap-south-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
export default nextConfig;
