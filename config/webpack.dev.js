var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var path = require('path');

module.exports = webpackMerge(commonConfig, {

    devtools: 'source-map', // Enable sourcemaps for debugging webpack's output.

    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'http://localhost:8080/',
        filename: './dist/bundle.js',
    },

    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
});
