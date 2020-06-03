module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    [
      '@babel/preset-typescript',
      {
        allExtensions: true,
        isTSX: true,
      },
    ],
  ],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-runtime',
  ],
};
