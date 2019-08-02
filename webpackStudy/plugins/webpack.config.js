const path = require('path');
const ConsoleLogOnBuildWebpackPlugin=require("./ConsoleLogOnBuildWebpackPlugin.js")
const config = {
    output: {
        filename: 'output.js'
    },
    entry: './index.js',
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' }
        ]
    },
     plugins:[
        new ConsoleLogOnBuildWebpackPlugin()
     ]
};

module.exports = config;
