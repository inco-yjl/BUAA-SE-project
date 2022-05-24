const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/',
  devServer: {
    // can be overwritten by process.env.HOST
    host: 'localhost',
    port: 8080,
    proxy:{
      '/api/*':{
        target:'http://127.0.0.1:8081/api',
        changeOrigin: true, // true:开启代理，使接口 允许跨域
        secure:false
        /*
        pathRewrite: {
          '^/api': ' ' 
        }
        */
      }
    }
  },
  transpileDependencies: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('src', resolve('src'))
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'))
      .end()
  },
})

