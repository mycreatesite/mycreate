const path = require('path');

module.exports = {
	entry: './work/js/common/common.js',
	output: {
		path: path.resolve(__dirname, './common/js'),
		filename: 'common.js'
	},
	module: {
		rules: [
			{
				enforce: "pre",
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "eslint-loader"
			},
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env']
						}
					}
				],
				exclude: /node_modules/
			}
		]
	},
	externals: {
		jquery: 'jQuery'
	}
};