const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    proxy: {
        '/api/*': {
            //target: 'http://43.138.29.81:8080/api',
            target: 'http://127.0.0.1:8081/api',
            // ↑这个就是你的接口地址↑
            changeOrigin: true,
            pathRewrite: {
                '^/api': '/'
            }
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

