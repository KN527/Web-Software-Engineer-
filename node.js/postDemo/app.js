let http = require('http')
let fs = require('fs')
let url = require('url')
let template = require('art-template')

let comments = [
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

http
	.createServer(function (req, res) {
		let parseObj = url.parse(req.url, true)
		let pathname = parseObj.pathname

		if (pathname === '/') {
			fs.readFile('./views/index.html', function (err,data) {
				if (err) {
					return res.end('404 Not Found')
				}
				let htmlStr = template.render(data.toString(),{
					comments: comments
				})
				res.end(htmlStr)
			})
		}else if (pathname === '/post') {
			fs.readFile('./views/post.html', function (err,data) {
				if (err) {
					return res.end('404 Not Found')
				}
				res.end(data)
			})			
		}else if (pathname.indexOf('/public/') === 0) {
			fs.readFile('.' + pathname, function (err, data) {
				if (err) {
					return res.end('404 Not Found')
				}
				res.end(data)
			})
		}else if (pathname === '/notes') {
			let comment = parseObj.query
			comment.dateTime = '2018-12-27'
			comments.unshift(comment)
			//    1. 状态码设置为 302 临时重定向
      		//        statusCode
      		//    2. 在响应头中通过 Location 告诉客户端往哪儿重定向
      		//        setHeader
      		// 如果客户端发现收到服务器的响应的状态码是 302 就会自动去响应头中找 Location ，然后对该地址发起新的请求
      		// 所以你就能看到客户端自动跳转了
      		res.statusCode = 302
      		res.setHeader('Location', '/')
    		res.end()
		}else {
			res.end('404 Not Found')
		}
	})
	.listen(4000,function () {
		console.log ('Server running')
	})