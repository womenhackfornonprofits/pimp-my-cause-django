const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleTracker = require('webpack-bundle-tracker');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        context: __dirname,
        entry: [
            './src/scripts/scripts.js',
            './src/sass/styles.scss',
        ],
        output: {
            filename: isProduction ? '[name]-[contenthash].js' : '[name]-[hash].js',
            path: path.resolve('./static-bundles/'),
            clean: true,
        },
        devtool: isProduction ? 'source-map' : 'eval-source-map',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    },
                },
                {
                    test: /\.css$/,
                    use: [
                        isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                    ],
                },
                {
                    test: /\.scss$/,
                    use: [
                        isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                    ],
                },
                {
                    test: /\.(jpg|jpeg|gif|png|ico|svg)$/,
                    type: 'asset/resource',
                    generator: {
                        filename: 'images/[name][ext]',
                    },
                },
            ],
        },
        externals: {
            'window': 'window',
        },
        plugins: [
            new BundleTracker({
                path: __dirname,
                filename: 'webpack-stats.json'
            }),
            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: ['./static-bundles/*'],
            }),
            new CopyWebpackPlugin({
                patterns: [
                    { from: 'src/img', to: './images' },
                    { from: 'src/tinymce', to: './tinymce' },
                ],
            }),
            new MiniCssExtractPlugin({
                filename: isProduction ? '[name].[contenthash].css' : '[name].[hash].css',
            }),
        ],
        resolve: {
            extensions: ['.js', '.json', '.scss', '.css'],
        },
    };
};
