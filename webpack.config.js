/**
 * Created by py on 2016/5/17.
 */
'use strict';
const webpack = require("webpack");
const path = require("path");
module.exports = {
    entry: [
        "webpack-dev-server/client?http://0.0.0.0:3000",
        "webpack/hot/only-dev-server",
        "./entry.js"
    ],
    output: {
        path: path.resolve(__dirname,"build"),
        filename: "bundle.js",
        publicPath: "/build"
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
            },
            { test: /\.(woff|woff2)$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf$/,    loader: "file-loader" },
            { test: /\.eot$/,    loader: "file-loader" },
            { test: /\.svg$/,    loader: "file-loader" },
            {
                test: /\/bootstrap\/js\//,
                loader: 'imports?jQuery=jquery'
            }
        ]
    },
    devServer: {
        contentBase: __dirname,
        port: 3000,
        inline: true,
        historyApiFallback: true,
        stats: { colors: true },
        hot: true
         /*proxy: {
         '*': 'http://127.0.0.1:3001',
         }*/
    }
};