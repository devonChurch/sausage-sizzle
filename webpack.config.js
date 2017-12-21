const path = require('path');
const { DefinePlugin } = require('webpack');

const { AWS_ACCESS_KEY_ID = '', AWS_SECRET_ACCESS_KEY = '' } = process.env;

module.exports = () => ({
  entry: './src/',

  output: {
    path: path.resolve(__dirname),

    filename: 'handler.js',

    libraryTarget: 'commonjs',
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, 'src')],
        enforce: 'pre',
        loader: 'tslint-loader',
      },

      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, 'src')],
        use: [{ loader: 'ts-loader' }],
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  plugins: [
    new DefinePlugin({
      AWS_ACCESS_KEY_ID: JSON.stringify(AWS_ACCESS_KEY_ID),
      AWS_SECRET_ACCESS_KEY: JSON.stringify(AWS_SECRET_ACCESS_KEY),
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production'),
    }),
  ],

  devtool: false, // 'inline-source-map',

  target: 'node',

  context: __dirname,
});
