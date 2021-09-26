const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleTracker = require('webpack-bundle-tracker');

const extractSass = new ExtractTextPlugin({
    filename: '[name].[contenthash].css',
    disable: process.env.NODE_ENV === 'development',
});
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: [
        './src/scripts/scripts.js',
        './src/sass/styles.scss',
    ],
    output: {
        filename: '[name]-[hash].js',
        path: path.resolve('./static-bundles/'),
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?sourceMap',
                }),
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(jpg|jpeg|gif|png|ico)$/,
                exclude: /node_modules/,
                loader: 'file-loader?name=[path][name].[ext]&context=./frontend/',
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: 'css-loader', options: { minimize: true },
                    }, {
                        loader: 'sass-loader',
                    }],
                    // use style-loader in development
                    fallback: 'style-loader',
                }),
            },
        ],
    },
    externals: ['window'],
    plugins: [
        extractSass,
        new BundleTracker({ filename: './webpack-stats.json' }),
        new CleanWebpackPlugin(['./static-bundles/']),
        new CopyWebpackPlugin([
            { from: 'src/img', to: './images' },
        ]),
        new CopyWebpackPlugin([
            { from: 'src/tinymce', to: './tinymce' },
        ]),
    ],
};
