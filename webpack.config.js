const path = require('path')
var nodeModulesDir = path.resolve(__dirname, 'node_modules')
var config = {
  entry: path.join(__dirname, '/public/index.jsx'), // 唯一的入口文件
  output: {
    path: path.join(__dirname, '/disc'), // 打包后文件存放的目录
    filename:'bundle.js' // 打包后输入的文件名
  },
  devServer:{
    contentBase: './public', // 本地服务器所加载的页面所在的目录
    disableHostCheck: true,
    historyApiFallback: true, // 不跳转
    inline: true // 实时刷新
  },
  // 新增加部分
  module:{
    loaders:[],
    rules: []
  }
}
// JS,JSX
// ------------------------------------
config.module.loaders.push({
  test: /\.js?$/,
  exclude: [nodeModulesDir],
  loader: 'babel-loader'
})
config.module.rules.push({
  test: /\.jsx?$/,
  exclude: [nodeModulesDir],
  loader: 'babel-loader'
})
// SCSS
// ------------------------------------
config.module.rules.push({
  test: /\.scss$/,
  use: [{
    loader: 'style-loader'
  }, {
    loader: 'css-loader'
  }, {
    loader: 'sass-loader'
  }]
})

module.exports = config
