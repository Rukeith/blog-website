const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'client/index.js'),
  output: {
    filename: '[hash].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      // {
      //   enforce: 'pre',
      //   test: /\.(js|jsx)$/,
      //   exclude: /node_modules/,
      //   loader: 'eslint-loader',
      //   options: {
      //     cache: true,
      //     emitError: true,
      //     emitWarning: true,
      //     failOnError: true,
      //     failOnWarning: true,
      //   },
      // },
      {
        type: 'javascript/auto',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
      {
        type: 'javascript/auto',
        test: /\.(scss|sass|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { sourceMap: true, minimize: true, importLoaders: 1 } },
            { loader: 'postcss-loader', options: { sourceMap: true } },
            { loader: 'sass-loader', options: { sourceMap: true } },
          ],
        }),
      },
      {
        type: 'javascript/auto',
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 1024 * 5,
          outputPath: '/images',
        },
      },
      {
        test: /\.(ttf|eot|woff)/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin({
      filename: '[hash].styles.css',
      disable: process.env.NODE_ENV !== 'production',
    }),
    new HtmlWebpackPlugin({
      title: 'Blog',
      inject: true,
      author: 'Rukeith',
      // favicon: './client/assets/favicon.ico',
      hash: process.env.NODE_ENV === 'production',
      template: path.resolve(__dirname, 'client/index.html'),
      minify: {
        removeComments: process.env.NODE_ENV === 'production',
        collapseWhitespace: process.env.NODE_ENV === 'production',
        preserveLineBreaks: process.env.NODE_ENV === 'production',
      },
    }),
    new PreloadWebpackPlugin({
      rel: 'preload',
      as(entry) {
        if (/\.css$/.test(entry)) return 'style';
        if (/\.(ttf|eot|woff)$/.test(entry)) return 'font';
        if (/\.(png|jpg|gif|svg)$/.test(entry)) return 'image';
        return 'script';
      },
    }),
  ],
};
