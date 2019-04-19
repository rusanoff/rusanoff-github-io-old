const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackMd5Hash = require('webpack-md5-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const __DEV__ = process.env.NODE_ENV !== 'production';

const config = {
  mode: __DEV__ ? 'development' : 'production',
  bail: !__DEV__,
  devtool: __DEV__ ? 'eval-source-map' : 'source-map',
  entry: {
    main: path.resolve(__dirname, 'src', 'index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: __DEV__ ? '/' : './',
    filename: __DEV__ ? '[name].js' : 'js/[name].[chunkhash:8].js',
    chunkFilename: __DEV__ ? '[name].js' : 'js/[chunkhash:8].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
    modules: [path.resolve(__dirname, 'node_modules')],
    alias: {
      components: path.resolve(__dirname, 'src', 'app', 'components'),
      containers: path.resolve(__dirname, 'src', 'app', 'containers'),
      constants: path.resolve(__dirname, 'src', 'app', 'constants'),
      services: path.resolve(__dirname, 'src', 'app', 'services'),
      types: path.resolve(__dirname, 'src', 'app', 'types'),
      assets: path.resolve(__dirname, 'src', 'assets'),
    },
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(tsx?|jsx?)$/,
        include: [path.resolve(__dirname, 'src')],
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.(sa|sc|c|le)ss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        exclude: path.resolve(__dirname, 'src', 'assets', 'fonts'),
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: `assets/img/[name]${__DEV__ ? '' : '-[hash:8]'}.[ext]`,
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
            },
          },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/fonts/[folder]/[name].[ext]',
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css'
    }),
    new WebpackMd5Hash(),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
  },
};

module.exports = config;
