/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig
module.exports = {
  reactStrictMode: true,
  env: {
    REACT_MEDIA_KEY: process.env.REACT_MEDIA_KEY,
  }
};
