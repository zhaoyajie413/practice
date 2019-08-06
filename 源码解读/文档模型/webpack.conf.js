var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/parchment.ts'],
  output: {
    filename: 'parchment.js',
    library: 'Parchment',
    libraryTarget: 'umd',
    path: __dirname + '/dist',
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  module: {
    rules: [{ test: /\.ts$/, use: 'ts-loader' }],
  },
  devtool: 'source-map',
  /*plugins:[
    new htmlWebpackPlugin({
      //注意传的参数是一个对象
      template:'index.html'   //传一个模板，就是根目录下的index.html
    })
  ]*/
};
