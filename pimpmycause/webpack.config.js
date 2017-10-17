var path = require('path')
var autoprefixer = require('autoprefixer')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  context: __dirname,
  entry: [
    './src/scripts/scripts.js',
    './src/sass/styles.scss'
  ],
  output: {
    filename: '[name]-[hash].js',
    path: path.resolve('../pimpmycause/static-bundles/')
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?sourceMap'
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(jpg|jpeg|gif|png|ico)$/,
        exclude: /node_modules/,
        loader: 'file-loader?name=[path][name].[ext]&context=./frontend/'
      },
      {
        test: /\.scss$/,
        use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
      },
      // {
      //   loader: 'postcss-loader', // postcss loader so we can use autoprefixer
      //   options: {
      //     config: {
      //       path: "postcss.config.js"
      //     }
      //   }
      // },
    ]
  },
  externals: ['window'],
  plugins: [
    new ExtractTextPlugin({ filename: '[name]-[hash].css', disable: false, allChunks: true }),
    new BundleTracker({filename: './webpack-stats.json'})
  ]
}
