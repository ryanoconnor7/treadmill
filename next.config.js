/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV !== "production";

module.exports = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  trailingSlash: true,
  basePath: isDev ? "" : "/treadmill",
  assetPrefix: isDev ? "" : "/treadmill/",
};
