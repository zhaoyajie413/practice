const path = require('path');

const config = {
    output: {
        filename: 'output.js'
    },
    entry: './index.js',
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' }
        ]
    }
};

module.exports = config;
