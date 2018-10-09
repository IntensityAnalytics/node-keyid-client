const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: ['core-js/fn/promise', './src/index.js'],
  output: {
    libraryTarget: 'var',
    library: 'KeyID'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin({
      uglifyOptions: {
        cache:false,
        mangle: false,
        keep_classnames: true,
        keep_fnames: true
      }
    }),
    new CompressionPlugin()
  ]
};