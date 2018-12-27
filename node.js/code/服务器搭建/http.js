// 1.加载HTTP核心模块
var http = require('http')

// 2.使用http.createServer()方法创建一个Web服务器
var server = http.createServer()

// 3.服务器要干嘛？
// 提供数据服务
// 发请求
// 接受请求
// 处理请求
// 发送响应
// server.on('request', function () {
// 	console.log("收到客户端请求")
// })
server.on('request', function (request, response) {
	console.log("收到客户端请求,请求路径是：" + request.url)
	console.log('请求我的客户端的端口号是：' , request.socket.remotePort)
	
	switch (request.url)
	{
		case "/login":
			response.end('登陆')
			break;
		case "/register":
			response.end('注册')
			break;
		case "/haha":
			response.end('哈哈哈')
			break;
		default:
			response.end('不晓得你在说什么吊东西')
	}
})

// 4.绑定端口号，启动服务器
server.listen(3000,function () {
	console.log("服务器已经启动，可以通过http://127.0.0.1:3000/来进行访问")
})