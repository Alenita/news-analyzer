const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';
const CopyWebpackPlugin= require('copy-webpack-plugin');


module.exports = {
    entry: { 
        main: './src/index.js',
        about: './src/about/about.js',
        analitics: './src/analitics.js'

    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
   
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
      },
      devtool: 'source-map',
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
            test: /\.(gif|png|jpe?g|svg)$/i,//для работы с изображениями
            use: [
                'file-loader?name=../images/[name].[ext]',
                {
                loader: 'image-webpack-loader',
                options: {
                    name: '[name].[ext]'
                        },
                    },
                ],
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
            template: './src/analitics.html',
            filename: 'analitics.html'
        }),

        new CopyWebpackPlugin([{
            from: './src/fonts',
            to: './fonts'
          },
          {
            from: './src/favicon',
            to: './favicon'
          },
          {
            from: './src/images',
            to: './images'
          },

        ]),
        
        new WebpackMd5Hash()
    ]
}

