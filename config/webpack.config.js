const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// paths
const projectPath = path.resolve(__dirname, '..');
const buildPath = path.join(projectPath, 'build');
const srcPath = path.join(projectPath, 'src');

const config = {
  entry: {
    background: path.join(srcPath, 'background', 'index.ts'),
    options: path.join(srcPath, 'options', 'index.tsx'),
    popup: path.join(srcPath, 'popup', 'index.tsx')
  },
  output: {
    filename: '[name].js',
    path: buildPath
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: srcPath,
        loader: 'ts-loader'
      },
      {
        test: /\.(sass|scss)$/,
        include: projectPath,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,   // make sure sass-loader is used on imported assets
              localIdentName: '[local]---[hash:base64:5]'
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(css)$/,
        include: projectPath,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpeg|jpg|gif|svg)$/,
        include: projectPath,
        loader: 'url-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']  // order is important. give typescript precedence when js file already exists.
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: path.join(srcPath, 'manifest.json') }
    ]),
    new HtmlWebpackPlugin({
      template: path.join(srcPath, 'options', 'index.html'),
      chunks: ['options'],
      filename: 'options.html'
    }),
    new HtmlWebpackPlugin({
      template: path.join(srcPath, 'popup', 'index.html'),
      chunks: ['popup'],
      filename: 'popup.html'
    })
  ],
  devtool: 'source-map',
  mode: 'development'
};

module.exports = config;