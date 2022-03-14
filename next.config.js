const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([], {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    styledComponents: true,
  },
});
