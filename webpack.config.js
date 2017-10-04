
const path = require('path');
 
module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './main.js',
  ],
  output: {
    path: path.join(__dirname),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            include: path.join(__dirname, 'src')
        },
        {
            test: /\.s?css$/,
            loader: 'style-loader!css-loader!sass-loader',
            include: path.join(__dirname, 'style')
        },
    ]
  },
};