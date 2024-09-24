/** @type {import('next').NextConfig} */

export const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "p2care-web.s3.ap-southeast-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
export default nextConfig;
