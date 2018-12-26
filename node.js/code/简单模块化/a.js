// require是一个方法
// 用来加载模块
// 在Node中，模块有三种
// 具名的核心模块，例如fs、http
// 用户自己编写的文件模块
// 相对路径必须加./
// 在node中，没有全局作用域，只有模块作用域
// 外部访问不到内部，内部也访问不到外部
// 

console.log('a start')

var foo = 'aaa'
function add(x,y) {
	return x + y
}

require('./b.js')

console.log('a end')

console.log('foo的值是', foo)

