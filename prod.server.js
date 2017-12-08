const express = require('express')
const path =require('path')
const  proxy = require('http-proxy-middleware')
const config = require('./config')
const app = express()
app.use(express.static(path.join(__dirname,'dist')))
// console.log(config.dev.proxyTable)
let proxyTable = config.dev.proxyTable
Object.keys(proxyTable).forEach(function (key,index,array) {
 app.use(key,proxy(proxyTable[key]))
})
// app.use(key,proxy(value))
app.listen(8080,() => {
  console.log('server is running in http://localhost:8080')
})
