var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://192.168.33.10:8080',
        path.resolve(__dirname, 'app/main.jsx')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['react-hot', 'babel', 'eslint'],
            exclude: /(node_modules|bower_components)/
        }, {
            test: /\.css$/, // Only .css files
            loaders: [
                'style?sourceMap',
                'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
            ]
        },{
            test: /\.less$/,
            loader: ExtractTextPlugin.extract('style-loader?sourceMap', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!less-loader')
        }]
    },
    plugins: [
        new ExtractTextPlugin('style.css', { allChunks: true })
    ],
    devServer: {
        devtool: 'eval',
        progress: true,
        colors: true,
        hot: true,
        contentBase: 'build',
        host: '192.168.33.10'
    }
};