const path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var autoprefixer = require('autoprefixer');
var precss = require('precss');

const CopyWebpackPluginConfig =new CopyWebpackPlugin([
    {
        from:'./images', to:'images'
    },
    {
        from:'./node_modules/jquery/**'
    },
    {
        from:'./node_modules/bootstrap/**'
    },
    {
        from:'./node_modules/font-awesome/**'
    }
]);


module.exports = {
    entry:{
        vendor:'./app/vendor.js',
        app:'./app/app.js',
    },
    output:{
        path:path.resolve('./../dist'),
        filename:`[name].js`
    },

    resolve: {
        extensions: ['', '.js', '.css', '.scss']
    },

    devServer:{
        contentBase: './public',
        publicPath:'http://localhost:3000/dist/'
    },
    module:{
        loaders:[
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test:/\.scss$/,
                loader:ExtractTextPlugin.extract('css-loader!sass-loader')
            },
            {
                test: /\.(woff|woff2)$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]"
            },
            {
                test: /\.(eot|ttf|svg|gif|png)$/,
                loader: "file-loader"
            }
        ]
    },
    resolve:{

    },
    plugins:[
        new HtmlWebpackPlugin({
            template :'./index.html',
            filename:'index.html',
            inject:'body'
        }),
        CopyWebpackPluginConfig,
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new webpack.HotModuleReplacementPlugin(),

        new ExtractTextPlugin({
            filename: 'dist/css/main.css',
            allChunks: true
        })
    ],
    watch :true

};
