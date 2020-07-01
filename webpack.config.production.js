const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
	mode: 'production',
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					ecma: 6,
					compress: {
						drop_console: true
					},
					output: {
						comments: false,
						beautify: false
					}
				}
			})
		]
	}
});