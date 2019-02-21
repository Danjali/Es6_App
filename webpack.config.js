const path = require('path'),
  webpack = require('webpack'),
  MinifyPlugin = require('babel-minify-webpack-plugin'),
  UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
  SRC_DIR = path.resolve(__dirname, 'src'),
  ROOT_PATH = path.resolve(`${SRC_DIR}/index.js`),
  DIST_DIR = path.resolve(__dirname, 'dist');

module.exports = (env) => {
  const isProduction = env.production === true;
  return {
    entry: ROOT_PATH,
    output: {
      filename: 'main.js',
      path: DIST_DIR,
    },
    plugins: [
      new MinifyPlugin(MinifyPlugin.minifyOpts, MinifyPlugin.pluginOpts)
    ],
    optimization: {
      occurrenceOrder: true,
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            mangle: true, // Note `mangle.properties` is `false` by default.
            keep_fnames: false,
          },
          cache: true,
          parallel: true,
          test: /\.js(\?.*)?$/i,
          include: /\/includes/,
          sourceMap: true,
        })
      ],
    },
    resolve: {
      extensions: ['.js', '.css'],
    },
    module: {
      rules: [{
          test: [/\.js$/],
          exclude: /node_modules/,
          loaders: ['babel-loader'],
        }
      ],
    },
    devtool: (() => {
      if (isProduction) {
        return 'cheap-source-map';
      }
      return 'eval-source-map';
    })(),
    mode: (() => {
      if (isProduction) {
        return 'production';
      }
      return 'development';
    })(),
  };
};
