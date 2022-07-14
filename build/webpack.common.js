/* eslint-disable @typescript-eslint/no-var-requires */
/* global module, require, __dirname */

const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

const root = resolve(__dirname, '../');

module.exports = {
    entry: resolve(root, 'src/index.ts'),
    devtool: 'source-map',
    output: {
        filename: 'bundle.[contenthash].js',
        path: resolve(root, 'dist/'),
        hashFunction: 'xxhash64'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            component: resolve(root, 'component/'),
            app: resolve(root, 'app/'),
            css: resolve(root, 'css/')
        }
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                loader: 'esbuild-loader',
                options: {
                    implementation: require('esbuild'),
                    target: 'es2018',
                    loader: 'tsx'
                }
            },
            {
                test: /\.css$/,
                use: [MiniCSSExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[hash][ext]'
                }
            },

            {
                test: /\.(mp3|wav)$/,
                loader: 'asset/resource',
                options: {
                    name: 'audio/[hash][ext]'
                }
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[hash][ext]'
                }
            },
            {
                test: /\.(glsl|vs|fs|vert|frag)$/,
                use: ['glslify-import-loader', 'raw-loader', 'glslify-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(root, 'html/index.html')
        }),
        new CopyWebpackPlugin({
            patterns: [{ from: resolve(root, 'public/') }]
        }),
        new MiniCSSExtractPlugin()
    ]
};
