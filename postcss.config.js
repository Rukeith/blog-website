module.exports = {
  parser: 'postcss-safe-parser',
  plugins: {
    autoprefixer: {
      grid: true,
    },
    colorguard: {},
    'css-mqpacker': {},
    stylefmt: {},
    cssnano: {},
    'immutable-css': {},
    lost: {},
    'postcss-assets': {},
    'postcss-color-short': {},
    'postcss-cssnext': {
      warnForDuplicates: false,
    },
    'postcss-easing-gradients': {},
    'postcss-font-magician': {},
    'postcss-grid-kiss': {},
    'postcss-pxtorem': {},
    'postcss-write-svg': {},
    'rucksack-css': {
      autoprefixer: true,
    },
  },
};
