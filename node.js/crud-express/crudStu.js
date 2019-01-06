/*crudStu.js
数据操作文件模块
职责： 操作文件中的数据，只处理数据，不关心业务
封装异步API（node的精华部分，奥义之所在）
*/

var fs = require('fs')

var dbPath = './db.json'

/*获取学生列表*/
exports.find = function (callback) {
	fs.readFile(dbPath, 'utf8', function (err, data) {
		if (err) {
			return callback(err)
		}
		callback(null, JSON.parse(data).students)
	})
}

/*获取指定ID的学生信息*/
exports.findById = function (id, callback) {
	fs.readFile(dbPath, 'utf8', function (err, data) {
		if (err) {
			return callback(err)
		}
		var students = JSON.parse(data).students
		var ret = students.find(function (item) {
			return item.id === parseInt(id)
		})
		callback(null, ret)
	})
}

/*保存新建学生数据*/
exports.save = function (student, callback) {
	fs.readFile(dbPath, 'utf8', function (err, data) {
		if (err) {
			return callback(err)
		}
		var students = JSON.parse(data).students

		//添加id，唯一不重复
		student.id = students[students.length - 1].id + 1

		// 处理性别
		student.gender === 0 ? student.gender = "男" : student.gender = "女"

		//把用户传递的对象保存到数组中
		students.push(student)

		//把对象数据转化为字符串
		var fileData = JSON.stringify({
			students: students
		})

		// 把字符串保存到文件中
		fs.writeFile(dbPath, fileData, function (err) {
			if (err) {
				return callback(err)
			}
			callback(null)
		})
	})
}

/*保存编辑学生信息*/
exports.updateById = function (student, callback) {
	fs.readFile(dbPath, 'utf8', function (err, data) {
		if (err) {
			return callback(err)
		}
		var students = JSON.parse(data).students
		/*注意：这里记得把id统一转换为数字类型*/
		student.id = parseInt(student.id)

		//需要修改谁，就把谁找出来
		//ES6中的一个数组方法：find
		//需要接受一个函数作为参数
		//当某个遍历项符合item.id === student.id 条件的时候，find终止查找，并返回该遍历项
		var oldStu = students.find(function (item) {
			return item.id === student.id
		})

		//遍历拷贝对象
		for (var key in student){
			oldStu[key] = student[key]
		}

		// 把对象数据转化为字符串
		var fileData = JSON.stringify({
			students: students
		})

		// 把字符串保存到文件中
		fs.writeFile(dbPath, fileData, function (err) {
			if (err) {
				return callback(err)
			}
			callback(null)
		})
	})
}

/*删除指定学生信息*/
exports.deleteById = function (id, callback) {
	fs.readFile(dbPath, 'utf8', function (err, data) {
		if (err) {
			return callback(err)
		}
		var students = JSON.parse(data).students

		//需要修改谁，就把谁找出来
		//ES6中的一个数组方法：find
		//需要接受一个函数作为参数
		//当某个遍历项符合item.id === student.id 条件的时候，find终止查找，并返回该遍历项
		var deleteId = students.findIndex(function (item) {
			return item.id === parseInt(id)
		})

		//删除指定对象
		students.splice(deleteId, 1)

		// 把对象数据转化为字符串
		var fileData = JSON.stringify({
			students: students
		})

		// 把字符串保存到文件中
		fs.writeFile(dbPath, fileData, function (err) {
			if (err) {
				return callback(err)
			}
			callback(null)
		})
	})
}