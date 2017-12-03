var path = require("path");
let webpack = require('webpack');
// let OpenBrowserPlugin = require('open-browser-webpack-plugin');
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

module.exports = {
  // 配置页面入口js文件
  entry: [
    './src/pages/app.js',
     hotMiddlewareScript
  ],
  cache: true,
  devtool: 'eval-source-map',
  output: {
     path: path.join(__dirname,"./public/js"),
     filename: "bundle.js",
  },  
  module: {
        loaders: [{
         test: /\.js$/,  
         loader: 'babel-loader', 
            query: {
               compact: false
            }
        },{
         test: /\.jsx$/,
         loader: 'babel-loader', 
         query: {
             presets: ['react', 'es2015']
         }
        },{
         test: /\.css$/, 
         loader: 'style-loader!css-loader'
        },{
         test: /\.(jpg|png|otf)$/, 
         loader: "url?limit=8192"
        },{
         test: /\.scss$/,
         loader: "style!css!sass"
        }]
 },
 plugins:[
    // new OpenBrowserPlugin({url: 'http://localhost:8900'}),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
 ]
}









