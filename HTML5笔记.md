六、web存储
	sessionStorage的使用：存储数据到本地。存储的容量5mb左右
	tips：1、这个数据本质是存储在当前页面的内存中，意味其他页面和浏览器无法获取数据
		  2、sessionStorage的生命周期为关闭当前页面，关闭页面，数据会自动清除
	案例：
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>sessionStorage</title>
	</head>
	<body>
		<input type="text" id="userName"><br>
		<input type="button" value="setData" id="setData">
		<input type="button" value="getData" id="getData">
		<input type="button" value="deleteData" id="deleteData">
		<script>
			// 存储数据
			document.querySelector('#setData').onclick = function () {
				var name = document.querySelector('#userName').value
				window.sessionStorage.setItem(userName,name)
			}
			// 获取数据
			document.querySelector('#getData').onclick = function () {
				var name = window.sessionStorage.getItem("userName")
				alert(name)	
			}
			// 删除数据
			document.querySelector('#deleteData').onclick = function () {
				window.sessionStorage.removeData("userName")
			}
			//清除所有
			//clear()
		</script>
	</body>
	</html>
	
	
	localStorage的使用：存储数据到本地。存储的容量20mb左右
	tips：1、同一浏览器不同窗口可以共享数据，但是不同浏览器不可以
		  2、永久生效，这个数据本质是存储在硬盘上，不会随着页面或者浏览器的关闭而清楚，如果想清除必须手动
	
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>localStorage</title>
	</head>
	<body>
		<input type="text" id="userName"><br>
		<input type="button" value="setData" id="setData">
		<input type="button" value="getData" id="getData">
		<input type="button" value="deleteData" id="deleteData">
		<script>
			// 存储数据
			document.querySelector('#setData').onclick = function () {
				var name = document.querySelector('#userName').value
				window.localStorage.setItem(userName,name)
			}
			// 获取数据
			document.querySelector('#getData').onclick = function () {
				var name = window.localStorage.getItem("userName")
				alert(name)	
			}
			// 删除数据
			document.querySelector('#deleteData').onclick = function () {
				window.localStorage.removeData("userName")
			}
			//清除所有
			//clear()
		</script>
	</body>
	</html>

七、应用程序缓存
	1、概念：使用HTML5，通过创建cache manifest文件，可以轻松地创建web应用的离线版本
	2、优势：
		a) 可配置需要缓存的资源
		b) 网络无连接时应用仍然可用
		c) 本地读取缓存资源，提升访问速度，增强用户体验
		d) 减少请求次数，缓解服务器压力
	3、Cache Manifest基础
		如需启用应用程序缓存，请在文档的<html>标签中包含MANIFEST属性：
		<!DOCTYPE html>
		<html lang="en" manifest="demo.appcache">
		<head>
			<meta charset="UTF-8">
			<title>Document</title>
		</head>
		<body>
			<img src="./images/l1.jpg" alt="">
			<img src="./images/l2.jpg" alt="">
			<img src="./images/l3.jpg" alt="">
			<img src="./images/l4.jpg" alt="">
		</body>
		</html>
		
		demo.appacahe:
		CACHE MANIFEST
		#上面一句代码必须是当前文档的第一句
		（#号后面的为注释）

		#需要缓存的文件清单列表
		CACHE:
		../images/l1.jpg
		../images/l2.jpg
		# "*" :代表所有文件

		#配置每一次都需要重新从服务器获取的文件清单列表
		NETWORK:
		../images/l3.jpg

		#配置如果文件无法获取则使用指定的文件进行替代
		FALLBACK:
		../images/l4.jpg ../images/banner_1.jpg
		# "/" :代表所有文件
	
八、自定义播放器（接口说明和界面说明）
	![Image text](https://QQ图片20181213001142.png)
	<video src=""></video>
	1、常用方法：load()加载、play()播放、pause()暂停
	*jq没有提供对视频播放控件的方式，也就意味着如果要操作视频播放，必须使用原生的js方法 ———— dom元素*
	2、常用属性：
		a) currentTime 视频播放的当前进度
		b) duration 视频的总时间
		c) paused 视频播放的状态
	3、常用事件：
		a) oncanplay 事件在用户可以开始播放视频/音频(video/audio)时触发
		b) ontimeupdate 通过改时间来报告当前的播放进度
		c) onended 播放完时触发（重置）