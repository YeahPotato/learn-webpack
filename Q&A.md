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
