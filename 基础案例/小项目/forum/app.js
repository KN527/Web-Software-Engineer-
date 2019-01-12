var express = require('express')
var path = require('path')

var app = express()

app.use('/public', express.static(path.join(__dirname, './public/')))
app.use('/node_modules', express.static(path.join(__dirname, './node_modules/')))

app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, './views/'))// 默认的就是views目录

app.get('', function (req, res) {
	res.send('hello')
})

app.listen(3000, function () {
	console.log('Server running on 3000 ...')
})