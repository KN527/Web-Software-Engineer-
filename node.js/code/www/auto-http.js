let http = require('http')
let fs = require('fs')

let server = http.createServer()
const wwwDir = 'C:/Users/kk/Documents/GitHub/Web-Software-Engineer-/node.js/code/www'

server.on('request' , function (req,res) {
	let url = wwwDir
	if (url !== '/') {
		url = wwwDir + req.url	
		console.log(url)
	}
	fs.readFile(url,function (err,data) {
		console.log(err)
		if (err) {
			return console.log('数据未找到')
		} 
		res.end(data)
	})
})

server.listen(3000,function () {
	console.log('Server running...')
})