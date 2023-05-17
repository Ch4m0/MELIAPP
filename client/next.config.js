/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "http2.mlstatic.com",
      },
      {
        protocol: "http",
        hostname: "http2.mlstatic.com",
      },
    ],
  },
};

module.exports = {
  sassOptions: {
    prependData: `@import "${path.join(
      __dirname,
      "styles/base/_index.module"
    )}";`,
  },
  ...nextConfig,
};
