var http = require('http')
var server = http.createServer()

server.on('request', function (req,res) {
	//在服务端默认发送的数据，是utf8编码的内容
	//但是浏览器不知道，中文操作系统默认是gbk编码
	//解决方法就是正确告诉浏览器发送的内容是什么编码
	res.setHeader('Content-Type','text/plain; charset=utf-8')
	res.end('hello 世界')
})

server.listen(3000,function () {
	console.log('Server is running...')
})