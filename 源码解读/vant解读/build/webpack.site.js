const path = require('path');
const config = require('./webpack.dev.js');

module.exports = Object.assign(config, {
  mode: 'production',
  output: {
    path: path.join(__dirname, '../docs/dist'),
    publicPath: 'https://b.yzcdn.cn/vant/',
    filename: '[name].[hash:8].js',
    chunkFilename: 'async_[name].[chunkhash:8].js'
  }
});
