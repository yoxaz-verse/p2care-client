/** @type {import('next').NextConfig} */

export const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hf-matrimony.s3.eu-north-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
export default nextConfig;
