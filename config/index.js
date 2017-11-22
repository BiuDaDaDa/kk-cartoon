'use strict'
// Template version: 1.2.3
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {
    env: require('./dev.env'),
    port: 8081,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/kuaikanv1': {
        target: 'http://api.kuaikanmanhua.com',
        pathRewrite: {
          '^/kuaikanv1': '/v1'
        },
        headers: {
          Host: 'api.kuaikanmanhua.com'
        }
      },
<<<<<<< HEAD
      '/kuaikanv2': {
=======
<<<<<<< HEAD
      '/v2': {
        target: 'http://api.kuaikanmanhua.com',
        pathRewrite: {
          '^/v2': '/v2'
        },
        headers: {
          Host: 'api.kuaikanmanhua.com'
        }
      },
      '/cartonUser': {
        target: 'https://api.kkmh.com',
=======
      '/api': {
>>>>>>> 22ee3b28944382fd5bf9fc3f3b6b4bdc5360b53b
        target: 'http://api.kuaikanmanhua.com',
>>>>>>> f653208b72f459cc5b75943213e9537568b1522b
        pathRewrite: {
          '^/kuaikanv2': '/v2'
        },
        headers: {
          Host: 'api.kuaikanmanhua.com'
        }
      },
      '/kuaikanv3': {
        target: 'http://api.kuaikanmanhua.com',
        pathRewrite: {
          '^/kuaikanv3': '/v3'
        },
        headers: {
          Host: 'api.kuaikanmanhua.com'
        }
      },
      '/kkv1': {
        target: 'https://api.kkmh.com',
        pathRewrite: {
          '^/kkv1': '/v1'
        },
        headers: {
          Host: 'api.kkmh.com'
        }
      },
      '/kkv2': {
        target: 'https://api.kkmh.com',
        pathRewrite: {
          '^/kkv2': '/v2'
        },
        headers: {
          Host: 'api.kkmh.com'
        }
      },
      '/kkv3': {
        target: 'https://api.kkmh.com',
        pathRewrite: {
          '^/kkv3': '/v3'
        },
        headers: {
          Host: 'api.kkmh.com'
        }
      }
    }
  },
<<<<<<< HEAD
  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),
    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    /**
     * Source Maps
     */
    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',
    build: {
      // Template for index.html
      index: path.resolve(__dirname, '../dist/index.html'),
=======

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),
>>>>>>> f653208b72f459cc5b75943213e9537568b1522b

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
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
<<<<<<< HEAD
    }
  },
      // Run the build command with an extra argument to
      // View the bundle analyzer report after build finishes:
      // `npm run build --report`
      // Set to `true` or `false` to always turn it on or off
      bundleAnalyzerReport: process.env.npm_config_report
=======
>>>>>>> f653208b72f459cc5b75943213e9537568b1522b
  }

}


