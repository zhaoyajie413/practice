var htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
    devtool: 'source-map',
    output: {
        filename: 'index.js',
        // 将输出的文件都放在dist目录下
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    entry: './index.js',
    module: {

    },
    plugins:[
        new htmlWebpackPlugin({
            //注意传的参数是一个对象
            template:'index.html'   //传一个模板，就是根目录下的index.html
        })
    ],
    devServer: {
        clientLogLevel: 'warning',
        historyApiFallback: true,
        hot: true,
        compress: true,
        host: 'localhost',
        port: 7000
    }
};

module.exports = config;
