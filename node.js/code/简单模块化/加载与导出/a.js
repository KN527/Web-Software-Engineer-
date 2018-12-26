// require方法有两个作用：
// 1、加载文件模块并执行里面的代码
// 2、拿到被夹在文件模块导出的接口对象
// 
// 在每个文件模块中提供一个对象：exports
// exports默认是一个空对象

var bExports = require('./b')
console.log(bExports.foo)
console.log(bExports.add(10,20))
