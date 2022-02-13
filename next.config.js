module.exports = {
  async redirects() {
    return [
      {
        source: "/docs",
        destination: "/docs/overview/introduction",
        permanent: false,
      },
    ];
  },
  eslint: {
    dirs: ["pages", "lib", "packages", "components", "data"],
  },
};
