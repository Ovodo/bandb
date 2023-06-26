/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // output: "out",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3-alpha-sig.figma.com",
        port: "",
        pathname: "/img/**",
      },
      {
        protocol: "https",
        hostname: "scontent.fabv2-2.fna.fbcdn.net",
        port: "",
        pathname: "/v/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/**",
      },
    ],
  },
};

module.exports = nextConfig;
