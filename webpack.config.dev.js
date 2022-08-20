const path = require('path');
const htmlwpplugin = require('html-webpack-plugin');
const cssExtractPlugin = require('mini-css-extract-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const minimizerCss = require('css-minimizer-webpack-plugin');
const TerserPluginHtml = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {

  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './src/[contenthash].js',
    assetModuleFilename: './src/assets/images/[contenthash].[ext][query]',
  },
  mode: 'development',
  resolve: {
    extensions: [
      '.js'
    ],
    alias: {
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@style': path.resolve(__dirname, 'src/styles'),
      '@icons': path.resolve(__dirname, 'src/assets/icons'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
    }
  },
  module: {
    rules: [
      {
        test: /\.m?.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env"
            ],
            plugins: [
              "@babel/plugin-transform-runtime"
            ]
          }
        }
      },
      {
        test: /\.css$/i,
        use: [
            cssExtractPlugin.loader,
            'css-loader',
          ]
      },
      {
        test: /\.(svg|png|jpg)/,
        type: 'asset/resource',
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new cssExtractPlugin({
      filename: './src/assets/styles/[contenthash].css'
    }),
    new htmlwpplugin({
      inject: true,
      template: path.resolve(__dirname, 'public/index.html'),
      filename: './index.html'
    }),
    new copyWebpackPlugin({
      patterns: [
        {
          from: './src/assets/icons/',
          to: './src/assets/icons/',
        },
      ]
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
    port: 3006,
  }
}
