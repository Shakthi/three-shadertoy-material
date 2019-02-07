var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (env) {
	let production= {
		devtool: 'none',
		mode: 'development',
		entry: './src/ShaderToyMaterial.js',
		externals: {
			three: {
				commonjs: 'three',
				commonjs2: 'three',
				amd: 'three',
				root: '_'
			},
		},

		output: {
			path: path.join(__dirname, 'dist'),
			filename: 'ShaderToyMaterial.js',
			libraryTarget: 'umd',
			library: 'ShaderToyMaterial',
			globalObject: 'this',
			libraryExport: "default"
		},
		module: {
			rules: [
				{
					test: /\.(glsl|frag|vert)$/,
					loader: 'raw-loader',
					exclude: /node_modules/
				}, {
					test: /\.(glsl|frag|vert)$/,
					loader: 'glslify-loader',
					exclude: /node_modules/
				}
			]
		}
	};

	if(env && env==='dev'){

		production=[production,{
			devtool: 'none',
			mode: 'development',
			entry: './test/testMaterial.js',
			output: {
				path: __dirname,
				filename: 'testMaterial.js',
			},
			plugins: [new HtmlWebpackPlugin()],
			module: {
			rules: [
				{
					test: /\.(txt)$/,
					loader: 'raw-loader',
					exclude: /node_modules/
				},
				{
					test: /\.(glsl|frag|vert)$/,
					loader: 'raw-loader',
					exclude: /node_modules/
				}, {
					test: /\.(glsl|frag|vert)$/,
					loader: 'glslify-loader',
					exclude: /node_modules/
				}
			]
		}


		}
	]
	}

	return production;
}
