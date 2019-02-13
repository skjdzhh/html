const path = require('path');
const webpack = require ('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    mode:'development',
    entry:{
        'xx':'./src/index.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlPlugin({
            hash:true,
            template:'./src/index.html'
        }),
        new ExtractTextPlugin('./index.css')
    ],
    module:
    {
        rules:
        [
            {
             test:/\.css$/,
            // use:['style-loader','css-loader']
            //}
            use:ExtractTextPlugin.extract({
                fallback:"style-loader",
                use:"css-loader"
            })
            },
            {
                test:/\.(jpg|png|gif)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:100,
                            outputPath:'imgs/'
                        }
                    }
                ]
            },
            {
                test:/\.html$/i,
                loader:'html-withimg-loader'
            },  
            {
                test:/\.scss$/,
                // use:['style-loader','css-loader','sass-loader']
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:["css-loader","sass-loader"]
                })
            }
           ]
    },
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        compress:true,
        port:8081,
        open:true,
        hot:true
    }

}
