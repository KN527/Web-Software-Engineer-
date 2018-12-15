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
```
 li[style]{
 	text-decoration: underline;
 }
 ```
>2)、E[attr=value]:查找指定的拥有attr属性并且属性值为value的E标签，“=”是严格匹配。
```
 li[class=red]{
 	font-size: 30px;
 }
 ```
>3)、E[attr\*=value]:查找指定的拥有attr属性并且属性值中包含value（可以在任意位置）的E标签。
```
 li[class*=red]{
 	font-size: 30px;
 }
 class="red"\class="darkred"都有效
 ```
>4)、E[attr\^=value]:查找指定的拥有attr属性并且属性值以value开头的的E标签。
```
 li[class^=red]{
 	font-size: 30px;
 }
 class="red"\class="redyellow"都有效
```
>5)、E[attr\$=value]:查找指定的拥有attr属性并且属性值以value结尾的的E标签。
 ```
 li[class$=red]{
 	font-size: 30px;
 }
 class="red"\class="darkred"都有效
 ```  

 2、伪类选择器  
 a) `a:hover a:link a:active a:visited`  
 b) 以某元素相对于其父元素或兄弟元素的位置来获取无素的结构伪类  
> E:first-child:查找E这个元素的父元素的第一个子元素E
> E:last-child:最后一个子元素
> E:nth-child(n): 第n个子元素，计算方法是E元素的全部兄弟元素
> E:nth-last-child(n): 同E:nth-child(n) 相似，只是倒着计算
> E:nth-child(even): 所有的偶数
> E:nth-child(odd): 所有的奇数
> E:nth-of-type(n):指定类型
> \*重点说明：n遵循线性变化，其取值0、1、2、3、4、... 但是当n<=0时，选取无效
> E:empty 选中没有任何子节点的E元素，注意，空格也算子元素
> E:target 结合锚点进行使用，处于当前锚点的元素会被选中

 3.	伪元素选择器：  

> a)	重点：E::before、E::after  
>> i.	是一个行内元素，需要转换成块:display:block   float:**  position:  
>> ii.	必须添加content,哪怕不设置内容，也需要content:""   
>> iii.	E:after、E:before   在旧版本里是伪类，在新版本里是伪元素，新版本下E:after、E:before会被自动识别为E::after、E::before，按伪元素来对待，这样做的目的是用来做兼容处理  
>> iv.	E::before: 定义在一个元素的内容之前插入content属性定义的内容与样式  
>> v.	E::after: 定义在一个元素的内容之后插入content属性定义的内容与样式  
>> vi.	注意：  
>>> 1.	IE6、IE7与IE8（怪异模式Quirks mode）不支持此伪元素  
>>> 2.	CSS2中 E:before或者E:after，是属于伪类的，并且没有伪元素的概念，CSS3中 提出伪元素的概念    
E::before和E::after，并且归属到了伪元素当中，伪类里就不再存在E:before或者E:after伪类  
> b)	E::first-letter文本的第一个字母或字(不是词组)  
> c)	E::first-line 文本第一行  
> d)	E::selection 可改变选中文本的样式  
