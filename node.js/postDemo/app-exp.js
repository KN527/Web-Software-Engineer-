// 获取当前日期
var myDate = new Date()
var postDate = `${myDate.getFullYear()} - ${myDate.getMonth()+1} - ${myDate.getDate()}`
console.log(postDate)

var express = require('express')

var app = express()
// express中开放目录
app.use('/public/', express.static('./public/'))
// express中获取art模板引擎
app.engine('html', require('express-art-template'))

var comments = [
	{
		name : '张三',
		message : '今天天气不错',
		dateTime : '2018-12-24'
	},
	{
		name : '李四',
		message : '今天天气真好',
		dateTime : '2018-12-25'
	},
	{
		name : '王五',
		message : '今天天气太冷',
		dateTime : '2018-12-25'
	},
	{
		name : '陈六',
		message : '还是昨天快活',
		dateTime : '2018-12-26'
	},
	{
		name : '刘七',
		message : '只想去喝奶茶',
		dateTime : '2018-12-27'
	}
]

app.get('/', function (req, res) {
	res.render('index.html', {
		comments: comments
	})
})

app.get('/post', function (req, res) {
	res.render('post.html')
})

app.get('/notes', function (req, res) {
	var comment = req.query
	comment.dateTime = postDate
	comments.unshift(comment)
	// express中的重定向
	res.redirect('/')
})

app.listen(3000, function () {
	console.log('Server running...')
})
