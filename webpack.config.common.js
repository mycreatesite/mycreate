const path = require('path');
const glob = require("glob");
const entries = {};
const entryDir = path.join(__dirname, 'work/js/common');

glob.sync("**/*.js", {
	cwd: entryDir
}).map(key => {
	entries[key] = path.resolve(entryDir, key)
});

module.exports = {
	entry: entries,
	output: {
		path: path.join(__dirname, "common/js"),
		filename: "[name]",
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