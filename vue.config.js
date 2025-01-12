module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/<Portfolio>/' : '/',
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
};
