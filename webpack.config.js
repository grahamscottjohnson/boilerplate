const path = require('path');

module.exports = {
    entry: ['babel-polyfill', './client/index.js'],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    mode: 'development',
    devtool: 'source-maps',
    module: {
        rules: [{
            test: /\.js(x?)$/,
            exclude: '/node_modules',
            use: {
                loader: 'babel-loader'
            }
        }]
    }
}