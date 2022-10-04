import path from 'path';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import webpack, { Configuration as WebpackConfiguration } from 'webpack';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import Dotenv from 'dotenv-webpack';

interface Configuration extends WebpackConfiguration {
	devServer?: WebpackDevServerConfiguration;
}
const isDevelopment = process.env.NODE_ENV !== 'production';

const config: Configuration = {
	name: 'boilerPlate',
	mode: isDevelopment ? 'development' : 'production',
	devtool: !isDevelopment ? 'hidden-source-map' : 'inline-source-map',
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
		alias: {
			'@components': path.resolve(__dirname, 'src/components'),
			'@hooks': path.resolve(__dirname, 'src/hooks'),
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@shared': path.resolve(__dirname, 'src/shared'),
			'@styles': path.resolve(__dirname, 'src/styles'),
			'@typings': path.resolve(__dirname, 'src/typings'),
			'@layouts': path.resolve(__dirname, 'src/layouts'),
		},
	},
	entry: {
		app: './src/index',
	},
	// target: ['web', 'es5'], // 이거 넣으면 안됨. FastRefresh..
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'babel-loader',
				options: {
					presets: [
						[
							'@babel/preset-env',
							{
								targets: { browsers: ['IE 10'] },
								debug: isDevelopment,
								useBuiltIns: 'usage',
								corejs: 3,
								shippedProposals: true,
							},
						],
						'@babel/preset-react',
						'@babel/preset-typescript',
					],
					plugins: ['@babel/plugin-syntax-dynamic-import'],
					env: {
						development: {
							plugins: [['@emotion/babel-plugin', { sourceMap: true }], require.resolve('react-refresh/babel')],
						},
						production: {
							plugins: ['@emotion/babel-plugin'],
						},
					},
				},
				exclude: path.join(__dirname, 'node_modules'),
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	plugins: [
		new ForkTsCheckerWebpackPlugin({ async: false }),
		new webpack.EnvironmentPlugin({
			NODE_ENV: isDevelopment ? 'development' : 'production',
			API_URL: isDevelopment ? 'http://localhost/api' : 'http://3.38.96.81',
		}),
		new CleanWebpackPlugin(),
		new Dotenv(),
		new HTMLWebpackPlugin({
			template: './src/index.html',
			minify: {
				collapseWhitespace: true,
				removeComments: true,
			},
		}),
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].bundle.js',
		publicPath: '/',
	},
	devServer: {
		contentBase: './src/',
		historyApiFallback: true,
		port: 3000,
		publicPath: '/',
	},
};

if (isDevelopment && config.plugins) {
	config.plugins.push(new webpack.HotModuleReplacementPlugin());
	config.plugins.push(
		new ReactRefreshWebpackPlugin({
			overlay: {
				useURLPolyfill: true,
			},
		}),
	);
	// config.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'server', openAnalyzer: false }));
}
if (!isDevelopment && config.plugins) {
	config.plugins.push(new webpack.LoaderOptionsPlugin({ minimize: true }));
	config.plugins.push(
		new CopyPlugin({
			patterns: [{ from: './src/assets', to: 'assets' }],
		}),
	);
	// config.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'static' }));
}

export default config;
