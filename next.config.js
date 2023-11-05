module.exports = {
  env: {
    URL_ROOT: process.env.URL_ROOT,
  },
  trailingSlash: true,
  esModule: true,
  reactStrictMode: true,
  basePath: "",
  plugins: [["styled-components", { ssr: true }]],
  images: {
    loader: "akamai",
    path: "",
  },
};
