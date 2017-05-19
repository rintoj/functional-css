/* eslint-disable no-console */
const path = require('path');
const chalk = require('chalk');
const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: '[name].min.css',
});

module.exports = {
  bail: true,
  entry: {
    'dark-theme': path.resolve('./scripts/dark-theme.js'),
    'light-theme': path.resolve('./scripts/dark-theme.js'),
    core: path.resolve('./scripts/core.js'),
    index: path.resolve('./scripts/index.js'),
    theme: path.resolve('./scripts/theme.js'),
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
    chunkFilename: '[id].js',
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'css-loader',
      options: {
        sourceMap: true
      }
    }, {
      exclude: [
        /\.html$/,
        /\.(js|jsx)(\?.*)?$/,
        /\.(ts|tsx)(\?.*)?$/,
        /\.css$/,
        /\.scss$/,
        /\.json$/,
        /\.svg$/,
      ],
      loader: 'url-loader',
      query: {
        limit: 10000,
        name: 'static/media/[name].[hash:8].[ext]',
      },
    }, {
      test: /\.s?css$/,
      loader: extractSass.extract({
        use: [{
          loader: 'css-loader',
        }, {
          loader: 'sass-loader',
        }],
        fallback: 'style-loader',
      }),
    }, {
      test: /\.svg$/,
      loader: 'file-loader',
      query: {
        name: 'static/media/[name].[hash:8].[ext]',
      },
    }],
  },
  plugins: [

    /** production only plugins */
    extractSass,
    new ProgressBarPlugin({
      format: `  :bar ${chalk.green.bold(':percent')} (:etas remaining) ${chalk.gray(':msg...')}`,
      incomplete: chalk.gray('░'),
      complete: chalk.yellow('█'),
      head: '»',
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false,
      },
      mangle: {
        screw_ie8: true,
      },
      output: {
        comments: false,
        screw_ie8: true,
      },
    }),
    new OptimizeCssAssetsPlugin({
      canPrint: false,
      assetNameRegExp: /\.min\.css$/,
      cssProcessorOptions: {
        discardComments: {
          removeAll: true,
        },
      },
    }),
  ],
};