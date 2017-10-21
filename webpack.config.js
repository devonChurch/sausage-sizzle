const path = require('path');

module.exports = () => ({

  entry: './src/',

  output: {

    path: path.resolve(__dirname),

    filename: 'handler.js',

    libraryTarget: 'commonjs'

  },

  module: {
  
    rules: [

      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, 'src')],
        use: [{ loader: 'ts-loader' }],
      }
    
    ]

  },

  resolve: {
    
    extensions: [ '.tsx', '.ts', '.js' ]
  
  },

  devtool: 'inline-source-map'

});
