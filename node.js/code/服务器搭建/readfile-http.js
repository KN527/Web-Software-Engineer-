var http = require('http')
var fs = require('fs')
var server = http.createServer()

server.on('request', function (req,res) {
	var url = req.url
	if (url === '/'){
		fs.readFile('./resource/cart/index.html', function (err,data) {
			if (err) {
				res.setHeader('Content-Type','text/html; charset=utf-8')
				res.end('文件读取失败，请稍后重试！')
			}else {
				// data 默认是二进制数据，可以通过.toString转为人类能识别的字符串
				// res.end()支持两种数据类型，一种字符串，另一种二进制
				res.setHeader('Content-Type','text/html; charset=utf-8')
				res.end(data)
			}
		})
	}
	
})

server.listen(3000,function () {
	console.log('Server is running...')
})