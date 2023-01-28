const path = require('path');

module.exports = {
  entry: './frontend/index.js',
  output: {
    filename: 'main.js', // Webpack needs to know what to name its output
    path: path.resolve(__dirname, '..', 'dist'), // Webpack needs to know where to put its output
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
      },
    ],
  },
};