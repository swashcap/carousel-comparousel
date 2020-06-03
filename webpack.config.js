const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const fs = require('fs/promises');

const isProdEnv = process.env.NODE_ENV === 'production';

module.exports = async () => {
  const files = await fs.readdir(path.join(__dirname, 'src'));
  const stats = await Promise.all(
    files.map((file) => fs.stat(path.join(__dirname, 'src', file)))
  );

  const entries = files
    .map((file, index) => [file, stats[index]])
    .filter(([, stats]) => stats.isFile())
    .reduce(
      (memo, [file]) => ({
        ...memo,
        [path.basename(file, path.extname(file))]: path.join(
          __dirname,
          'src',
          file
        ),
      }),
      {}
    );

  return Object.keys(entries).map((key) => ({
    entry: entries[key],
    mode: isProdEnv ? 'production' : 'development',
    module: {
      rules: [
        {
          exclude: /node_modules/,
          test: /\.[t|j]sx?$/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        },
        {
          test: /\.css$/,
          use: [
            isProdEnv ? MiniCSSExtractPlugin.loader : 'style-loader',
            'css-loader',
          ],
        },
        {
          test: [/\.eot$/, /\.gif$/, /\.svg$/, /\.ttf$/, /\.woff2?$/],
          use: ['file-loader'],
        },
      ],
    },
    output: {
      filename: isProdEnv
        ? '[name].[contenthash].bundle.js'
        : '[name].bundle.js',
      path: path.join(__dirname, 'dist', key),
    },
    plugins: [
      new MiniCSSExtractPlugin(),
      new HTMLWebpackPlugin({
        meta: {
          charset: 'utf-8',
          viewport: 'width=device-width, initial-scale=1',
        },
        title: 'Carousel Comparousel',
      }),
    ],
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    },
  }));
};
