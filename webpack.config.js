const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 返回对象
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(), // 自动清理output指定的目录
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: 'index.html',
      inject: 'body',
      minify: { // 压缩
        removeComments: true, // 去除注释
        collapseWhitespace: true, // 去掉空格
        removeAttributeQuotes: true, // 去掉属性引号
        minifyCSS: true // 压缩css
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      }
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}