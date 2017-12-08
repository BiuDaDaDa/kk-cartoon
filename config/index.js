'use strict'
// Template version: 1.2.3
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {
    env: require('./dev.env'),
    port: 8081,
    host: '0.0.0.0',
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/kuaikanv1': {
        target: 'http://api.kuaikanmanhua.com',
        pathRewrite: {
          '^/kuaikanv1': '/v1'
        },
        //可以是对象也可以是字符串
        // cookieDomainRewrite: "localhost",
        cookieDomainRewrite: "0.0.0.0",
        headers: {
          Host: 'api.kuaikanmanhua.com'
        }
      },
      '/kuaikanv2': {
        target: 'http://api.kuaikanmanhua.com',
        pathRewrite: {
          '^/kuaikanv2': '/v2'
        },
        cookieDomainRewrite: "0.0.0.0",
        headers: {
          Host: 'api.kuaikanmanhua.com'
        }
      },
      '/kuaikanv3': {
        target: 'http://api.kuaikanmanhua.com',
        pathRewrite: {
          '^/kuaikanv3': '/v3'
        },
        cookieDomainRewrite: "0.0.0.0",
        headers: {
          Host: 'api.kuaikanmanhua.com'
        }
      },
      '/kkv1': {
        target: 'https://api.kkmh.com',
        pathRewrite: {
          '^/kkv1': '/v1'
        },
        cookieDomainRewrite: "0.0.0.0",
        headers: {
          Host: 'api.kkmh.com'
        }
      },
      '/kkv2': {
        target: 'https://api.kkmh.com',
        pathRewrite: {
          '^/kkv2': '/v2'
        },
        cookieDomainRewrite: "0.0.0.0",
        headers: {
          Host: 'api.kkmh.com'
        }
      },
      '/kkv3': {
        target: 'https://api.kkmh.com',
        pathRewrite: {
          '^/kkv3': '/v3'
        },
        cookieDomainRewrite: "0.0.0.0",
        headers: {
          Host: 'api.kkmh.com'
        }
      },
      '/pcv1': {
        target: 'http://www.kuaikanmanhua.com',
        pathRewrite: {
          '^/pcv1': '/v1'
        },
        headers: {
          Host: 'www.kuaikanmanhua.com'
        }
      },
      '/pcv2': {
        target: 'http://www.kuaikanmanhua.com',
        pathRewrite: {
          '^/pcv2': '/v2'
        },
        headers: {
          Host: 'www.kuaikanmanhua.com'
        }
      },
      '/pcv3': {
        target: 'http://www.kuaikanmanhua.com',
        pathRewrite: {
          '^/pcv3': '/v3'
        },
        headers: {
          Host: 'www.kuaikanmanhua.com'
        }
      }
    }
  },
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
    },
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }

}
