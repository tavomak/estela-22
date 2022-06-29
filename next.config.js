const nextTranslate = require('next-translate');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',
    ],
  },
  // async rewrites() {
  //   return {
  //     beforeFiles: [
  //       {
  //         source: '/es/servicios',
  //         destination: '/en/services',
  //         locale: false,
  //       },
  //     ],
  //   };
  // },
};

module.exports = nextConfig;
module.exports = nextTranslate();
