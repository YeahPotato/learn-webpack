const path = require('path');
module.exports = {
	entry:'./index.js', // 入口文件,
	output:{
		path:path.resolve(__dirname,'build'),  // 绝对路径 输出文件夹
		filename:'bundle.js'
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				use:'babel-loader',
				exclude:/node_modules/
			}
		]
	}
}