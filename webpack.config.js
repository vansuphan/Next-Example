const Encore = require('@symfony/webpack-encore')

Encore
  .setOutputPath('public/build/')
  .setPublicPath('/build')
  .addStyleEntry('app', './css/app.css')
  .enablePostCssLoader()

module.exports = Encore.getWebpackConfig()