module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/<repository-name>/' : '/',
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
};
