const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/app.js', // Punto de entrada principal
  output: {
    filename: 'bundle.js', // Archivo de salida
    path: path.resolve(__dirname, 'dist'),
    clean: true // Limpia la carpeta dist antes de cada compilación
  },
  module: {
    rules: [
      {
        test: /\.scss$/, // Regla para procesar archivos SCSS
        use: [
          MiniCssExtractPlugin.loader, // Extrae el CSS en un archivo separado
          'css-loader', // Traduce CSS a JavaScript
          'sass-loader' // Compila SCSS a CSS
        ]
      },
      {
        test: /\.html$/, // Regla para procesar archivos HTML
        use: ['html-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Plantilla HTML de origen
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css', // Nombre del archivo CSS de salida
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // <- nuevo campo estático
    },
    compress: true,
    port: 9000,
    open: true,
    allowedHosts: 'all',
  },
  mode: 'development'
};
