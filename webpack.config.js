const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const fs = require('fs/promises');

const isProdEnv = process.env.NODE_ENV === 'production';
const extensions = ['.tsx', '.ts', '.jsx', '.js', '.json'];

module.exports = async () => {
  const files = await fs.readdir(path.join(__dirname, 'src'));
  const stats = await Promise.all(
    files.map((file) => fs.stat(path.join(__dirname, 'src', file)))
  );

  const entries = files
    .map((file, index) => [file, stats[index]])
    .filter(
      ([file, stats]) =>
        stats.isFile() && extensions.includes(path.extname(file))
    )
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
    externals: isProdEnv && {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
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
      new MiniCSSExtractPlugin({
        chunkFile: isProdEnv ? '[id].[contenthash].css' : '[id].css',
        filename: isProdEnv ? '[name].[contenthash].css' : '[name].css',
      }),
      new HTMLWebpackPlugin({
        meta: {
          charset: 'utf-8',
          viewport: 'width=device-width, initial-scale=1',
        },
        template: path.join(__dirname, 'src/template.ejs'),
        templateParameters: {
          NODE_ENV: isProdEnv ? 'production' : 'development',
        },
        title: 'Carousel Comparousel',
      }),
    ],
    resolve: {
      extensions,
    },
  }));
};
