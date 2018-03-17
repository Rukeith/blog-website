const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
      uglifyOptions: {
        ecma: 8,
        output: {
          ecma: 7,
          indent_level: 2,
        },
        compress: { ecma: 7 },
      },
    }),
  ],
});
