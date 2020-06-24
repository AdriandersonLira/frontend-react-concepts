const path = require('path')

module.exports = {
  // entry - diz qual o arquivo de entrada
  // da aplicação
  entry: path.resolve(__dirname, 'src', 'index.js'),
  // output - onde o arquivo vai ser gerado depois que for convertido.
  output: {
    // path - é o caminho do diretório
    path: path.resolve(__dirname, 'public'),
    // filename - nome do arquivo que vai recer o output
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader',
        }
      }
    ]
  },
};