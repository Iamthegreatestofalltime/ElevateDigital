// next.config.js
module.exports = {
    reactStrictMode: true,
    images: {
      domains: ['assets-global.website-files.com', 'cdn.onlinewebfonts.com', 'clipart.info', 'purepng.com', 'cdn.prod.website-files.com'], // Add the hostname here
    },
    async rewrites() {
      return [
        {
          source: '/blogs/:slug*',
          destination: '/blogs/[slug]',
        },
      ];
    },
  };