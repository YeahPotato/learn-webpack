# Q&A

### 1:如何让babel支持ES7 asycs函数?
安装babel-plugin-trnasform-runtime

`.babelrc` 文件添加plugins
```javascript
    "plugins": [
        [
            "transform-runtime",
            {
                "helpers": false,
                "polyfill": false,
                "regenerator": true,
                "moduleName": "babel-runtime"
            }
        ]
    ]
```

### 2.添加图片等静态资源的时候，如果没有图片没有转base64，并且找不到资源，设置 `webpack` 的 `publicPath` 属性；

### 3.修改webpack-dev-server 端口

```javascript
    module.exports = {
        output: {...},
        devServer:{
            port:3332
        },
        module: {...}
    }
```

### 4.关于插件
```javascript
    plugins: [
        // 提取css到css文件
        new ExtractTextPlugin('css/style.[hash].css'),
        // 自动生成html
        new HtmlWebpackPlugin({
            title: "joke's html",
            template: "index.html"
        }),
        // 清除构建后重复的文件
        new CleanWebpackPlugin(
            ['build/css/style.*.css'],
            {
                root: __dirname,
                verbose: true,
                dry: false
            }
        ),
        // 压缩提取出的 CSS，并解决ExtractTextPlugin分离出的 JS 重复问题
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true
            }
        }),
        // 压缩 JS 代码
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
```