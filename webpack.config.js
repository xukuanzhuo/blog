const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = (env, argv) => {
  const devMode = argv.mode !== 'production'

  return {
    entry: './src/app.js',
    output: {
      filename: 'main.[hash].js',
      chunkFilename: '[name].bundle.[hash].js',
      path: path.resolve(__dirname, 'build'),
      publicPath: '/'
    },
    resolve: {
      extensions: ['.js', '.jsx', '.css'],
      alias: {
        src: path.resolve(__dirname, 'src/'),
        styles: path.resolve(__dirname, 'src/styles/'),
        pages: path.resolve(__dirname, 'src/pages/'),
        utils: path.resolve(__dirname, 'src/utils/'),
        routes: path.resolve(__dirname, 'src/routes/'),
        store: path.resolve(__dirname, 'src/store/')
      }
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      },
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: false
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: "[name]_[local]_[hash:base64]",
                sourceMap: true,
                minimize: true
              }
            }
          ]
        },
        {
          test: /\.scss$/,
          exclude: path.resolve(__dirname, 'src/styles'),
          loader: 'style!css?modules&localIdentName=[name]__[local]!sass?sourceMap=true',
        }, {
          test: /\.scss$/,
          include: path.resolve(__dirname, 'src/styles'),
          loader: 'style!css!sass?sourceMap=true',
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./public/index.html",
        filename: "./index.html"
      }),
      new MiniCssExtractPlugin({
        filename: devMode ? '[name].css' : '[name].[hash].css',
        chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
      }),
      new Dotenv()
    ],
    devServer: {
      historyApiFallback: true
    }
  }
}
