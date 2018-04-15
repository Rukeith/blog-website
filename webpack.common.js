module.exports = {
  entry: [
    // vendor: [
    //   'react',
    //   'react-dom',
    //   'redux',
    // ],
    // main: [
    'webpack-hot-middleware/client?reload=true',
    './client/index.js',
    // ],
  ],
  output: {
    publicPath: '/static/',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', 'scss'],
  },
  module: {
    rules: [
      {
        type: 'javascript/auto',
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
        },
      },
    ],
  },
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         chunks: 'all',
  //         test: /node_modules/, // you may add "vendor.js" here if you want to
  //         name: 'vendor',
  //       },
  //     },
  //   },
  //   runtimeChunk: {
  //     name: 'runtime',
  //   },
  // },
};
