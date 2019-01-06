/*app.js 入口模块
职责：
  創建服務
  做一些服務相關配置
    模板引擎
    body-parser 解析表單 post 请求体
    提供静态资源服务
  挂载路由
  监听端口启动服务
*/

var express = require('express')
var router = require('./router')
var bodyParser = require('body-parser')

var app = express()

app.use('/node_modules/', express.static('./node_modules'))
app.use('/public/', express.static('./public/'))

app.engine('html', require('express-art-template'))

// 配置模板引擎和body-parser一定要在app.use(router)挂载路由之前
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// 把路由容器挂载到 app 服务中
app.use(router)

app.listen(3000, function(){
	console.log('running 3000...')
})

module.exports = app