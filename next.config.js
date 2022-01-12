module.exports = {
  reactStrictMode: true,
  basePath: '/reverse-proxy-basepath',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/reverse-proxy-basepath',
        permanent: true,
        basePath: false,
      },
    ];
  },
}
