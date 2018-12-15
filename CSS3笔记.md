# CSS3简介
- - -
### CSS3现状
 1、浏览器支持程度差，需要添加私有前缀（webkit moz）  
 2、移动端支持优于PC端  
 3、不断改进中：CSS能搞定之前需要JS的功能  
 4、应用相对广泛  
- - -
### 如何对待？
 1、坚持渐进增强原则（优雅降级-hack)  
 2、考虑用户群体  
 3、遵照产品的方案  
 4、听boss的。。。。。  
- - -
### 如何使用手册
 1、 [] 表示可选项  
 2、 || 表示或者  
 3、 |  表示多选一  
 4、 ?  0个或1个  
 5、 *  表示0个或多个  
 6、 {} 表示范围  

例如：
```
padding: [<length> | <percentage>]{1,4} 
border: <line-width> || <line-style> || <color>
box-shadow: none | <shadow> [, <shadow>] * 
```
- - -
### 选择器
 1、属性选择器
 属性是相对于标签而言，所谓属性选择器就是根据指定名称的属性的值来查找元素
>1)、E[attr]:查找指定的拥有attr属性的E标签。
>```
 li[style]{
 	text-decoration: underline;
 }
 ```
>2)、E[attr=value]:查找指定的拥有attr属性并且属性值为value的E标签，“=”是严格匹配。
>```
 li[class=red]{
 	font-size: 30px;
 }
 ```
>3)、E[attr\*=value]:查找指定的拥有attr属性并且属性值中包含value（可以在任意位置）的E标签。
>```
 li[class*=red]{
 	font-size: 30px;
 }
 class="red"\class="darkred"都有效
 ```
>4)、E[attr\^=value]:查找指定的拥有attr属性并且属性值以value开头的的E标签。
>```
 li[class^=red]{
 	font-size: 30px;
 }
 class="red"\class="redyellow"都有效
 ```
>5)、E[attr\$=value]:查找指定的拥有attr属性并且属性值以value结尾的的E标签。
>```
 li[class$=red]{
 	font-size: 30px;
 }
 class="red"\class="darkred"都有效
 ```

2、伪类选择器
a) `a:hover a:link a:active a:visited`
b) 以某元素相对于其父元素或兄弟元素的位置来获取无素的结构伪类
>1)、兄弟伪类
>+:获取当前元素相邻的满足条件的元素
>```
 .first + li{
 	color: blue;
 }
 必须是指定类型的元素和相邻的元素
 ```
>~:获取当前元素满足条件的兄弟元素
>```
 .first ~ li{
 	color: pink;
 }
 必须是满足条件的兄弟元素
 ```