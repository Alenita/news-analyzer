const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';


module.exports = {
    entry: { main: './src/index.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
      },

    module: {
        rules: [{ 
            test: /\.js$/, 
            use: { loader: "babel-loader" }, 
            exclude: /node_modules/ 
                },
        
        {
            test: /\.css$/i, 
            use: [
                (isDev ? 'style-loader' : MiniCssExtractPlugin.loader),
                'css-loader', 
                'postcss-loader'
            ]
        },

        {
            test: /\.(png|jpg|gif|ico|svg)$/,
            use: [
                    'file-loader?name=../images/[name].[ext]', // указали папку, куда складывать изображения
                    {
                            loader: 'image-webpack-loader',
                            options: {}
                    },
                ]
        },

        {
            test: /\.(eot|ttf|woff|woff2)$/, // для работы со шрифтами
            use: [
                    {
                        loader: 'file-loader?name=./vendor/fonts/[name].[ext]'
                    }
                ]
            },
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css',
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                    preset: ['default'],
            },
            canPrint: true
       }),
        new HtmlWebpackPlugin({ 
            inject: false,
            template: './src/index.html',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({ 
            inject: false,
            template: './src/about/about.html',
            filename: 'about.html'
        }),
        new HtmlWebpackPlugin({ 
            inject: false,
            template: './src/analitics/analitics.html',
            filename: 'analitics.html'
        }),
        
        new WebpackMd5Hash()
    ]
}

