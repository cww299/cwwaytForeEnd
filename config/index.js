'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {  //开发模式下的环境
    assetsSubDirectory: 'static',  // 编译输出的二级目录
    assetsPublicPath: '/',      // 编译发布的根目录，可配置为资源服务器域名或 CDN 域名
    proxyTable: {      // 代理接口（可跨域）
     '/api': {   //替换代理地址名称 , 即/api/helloYt 接口代理为：http://localhost:8820/heollYt
        target: 'http://localhost:8820/',   //代理地址
        changeOrigin: true,             //开启代理、是否可跨域
        pathRewrite: { "^/api": "" }    //重写接口，去掉/api
      }
    },
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // 运行测试页面的端口
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    devtool: 'cheap-module-eval-source-map',

    cacheBusting: true,

    cssSourceMap: true
  },

  build: {   // production 环境
    index: path.resolve(__dirname, '../dist/index.html'), //编译输入的 index.html 文件

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'), // 编译输出的静态资源路径
    assetsSubDirectory: 'static', // 编译输出的二级目录
    assetsPublicPath: '/',    // 编译发布的根目录，可配置为资源服务器域名或 CDN 域名


    productionSourceMap: true,  // 是否开启 cssSourceMap

    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
