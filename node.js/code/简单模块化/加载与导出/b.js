console.log(exports)
// 可导出
exports.foo = 'hello'
exports.add = function (x,y) {
	return x + y
}
exports.age = 18
// 不可导出
var foo = 'bbb'
function add2(x,y) {
	return x - y
}
var age = 19
