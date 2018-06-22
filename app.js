require('@babel/register')({
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
});
require.extensions['.css'] = () => {
  return true;
};
require.extensions['.scss'] = () => {
  return true;
};
require('@babel/polyfill');
require('./server/index.js');
