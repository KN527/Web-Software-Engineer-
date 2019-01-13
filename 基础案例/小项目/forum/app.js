var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var router = require('./router')

var app = express()

app.use('/public', express.static(path.join(__dirname, './public/')))
app.use('/node_modules', express.static(path.join(__dirname, './node_modules/')))

app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, './views/'))// 默认的就是views目录

//配置解析表单POST请求体插件
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })) 
// parse application/json
app.use(bodyParser.json())

// app.get('/', function (req, res) {
// 	res.render('index.html')
// })
app.use(router)

app.listen(3000, function () {
	console.log('Server running on 3000 ...')
})