let http = require('http')
let fs = require('fs')

let server = http.createServer()

server.on('request' , function (req,res) {
	let url = req.url
	let wwwDir = 'C:/Users/nnkk5/Documents/GitHub/Web-Software-Engineer-/node.js/code/www'
	let filePath = '/index.html'
	// 判断请求地址是否为空，如不为空，执行相应地址的文件；为空执行index.html
	if (url !== '/') {
		filePath = url
	}

	fs.readFile(wwwDir + filePath , function (err,data) {
			if (err) {
				return res.end('404,page not found')
			} else {
				res.end(data)
			}
		})
})

server.listen(3000,function () {
	console.log('Sever running...')
})	