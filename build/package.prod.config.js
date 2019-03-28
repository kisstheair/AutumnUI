/**
 * Created by fight on 2019/3/4.
 */

const webpack = require('webpack')
const merge = require('webpack-merge')
const config = require('../config')
const baseWebpackConfig = require('./package.config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractScss = new ExtractTextPlugin('autumn.min.css')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')


// 总共打包成2个文件 放到package目录里面，
    // [name].min.js
    // [name].min.css   css是从打包的文件中抽出来的，

module.exports = merge(baseWebpackConfig, {
    output: {
        filename: '[name].min.js'
    },
    module: {
        loaders: [{
            test: /\.scss$/i,
            loader: extractScss.extract(['css-loader','sass-loader'])
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            uglifyOptions: {
                ie8: false,
                output: {
                    comments: false,
                    beautify: false,
                },
                mangle: {
                    keep_fnames: true
                },
                compress: {
                    warnings: false,
                    drop_console: true
                }
            }
        }),
        extractScss,
        new OptimizeCSSPlugin({
            cssProcessorOptions: config.build.productionSourceMap
                ? {safe: true, map: {inline: false}}
                : {safe: true}
        }),
        new CopyWebpackPlugin([
            // {output}/file.txt
            {from: `./src/comps`, to: `./comps`}
        ]),
    ]
})