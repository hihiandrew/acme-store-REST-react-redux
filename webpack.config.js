// module.exports = {
//   entry: ['babel-polyfill', './src/index.js'],
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         loader: 'babel-loader',
//         exclude: /node_modules/,
//       },
//     ],
//   },
// };


const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.join(__dirname, '/public'), //where we want the output to be placed
    filename: 'bundle.js' //the name of the file that will contain our output
  },
  module: {
    rules: [{
      exclude: /node_modules/,
      test: /\.js$/,
      loader: 'babel-loader'
    }]
  }
};
