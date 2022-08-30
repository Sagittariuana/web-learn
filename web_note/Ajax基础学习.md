# Ajax基础学习

## Day1

### 客户端与服务器

服务器：负责存放和对外提供资源的电脑

#### web服务器

apache：阿帕奇，目前使用人数最多

iis：微软的web服务器

tomcat：web服务器软件

Nginx：web服务器软件

客户端：负责获取和消费资源的电脑

### URL地址

#### url概念

URL（全称是Uniform Resource Locator）中文叫统一资源定位符，用于标识互联网上每个资源的唯一存放位置。浏览器只有通过URL地址，才能正确定位资源的存放位置，从而成功访问到对应的资源。

#### url组成部分

1. 客户端与服务器之间的通信协议
2. 存有该资源的服务器名称
3. 资源在服务器上具体的存放位置

![image-20220220145637971](C:\Users\Sagittarius\AppData\Roaming\Typora\typora-user-images\image-20220220145637971.png)

### 网页打开过程

| 客户端                       | 服务器                                     |
| ---------------------------- | ------------------------------------------ |
| 1.打开浏览器                 | 1.服务器接收到客户端发来的资源请求         |
| 2.输入要访问的网站地址       | 2.服务器在内部处理这次请求，找到相关的资源 |
| 3.回车，向服务器发起资源请求 | 3.服务器把找到的资源，响应（发送）给客户端 |

注意：

1. 客户端与服务器之间的通信过程，分为 请求 – 处理 – 响应 三个步骤。
2. 网页中的每一个资源，都是通过 请求 – 处理 – 响应 的方式从服务器获取回来的。

### 网页请求数据

如果要在网页中请求服务器上的数据资源，则需要用到 `XMLHttpRequest` 对象。

`XMLHttpRequest`（简称 xhr）是浏览器提供的 js 成员，通过它，可以请求服务器上的数据资源。

最简单的用法 ：

```js
var xhrObj = new XMLHttpRequest()
```

### 资源请求方式

客户端请求服务器时，请求的方式有很多种，最常见的两种请求方式分别为 `get` 和 `post` 请求。

-  `get` 请求通常用于获取服务端资源（向服务器要资源）

   例如：根据 URL 地址，从服务器获取 HTML 文件、css 文件、js文件、图片文件、数据资源等

- `post` 请求通常用于向服务器提交数据（往服务器发送资源）

  例如：登录时向服务器提交的登录信息、注册时向服务器提交的注册信息、添加用户时向服务器提交的用户信息等各种数据提交操作

### Ajax基础

#### 概念

Ajax 的全称是 Asynchronous JavaScript And XML（异步 JavaScript 和 XML）。

在网页不刷新的情况下向服务器发送http请求，得到http响应

Ajax不是新的编程语言，而是一种将现有的标准组合在一起使用的一种新方式

通俗的理解：在网页中利用 `XMLHttpRequest` 对象和服务器进行数据交互的方式，就是Ajax。

#### 典型应用场景

1. 用户名检测：注册用户时，通过 Ajax 的形式，动态检测用户名是否被占用
2. 搜索提示：当输入搜索关键字时，通过 Ajax 的形式，动态加载搜索提示列表
3. 数据分页显示：当点击页码值的时候，通过 Ajax 的形式，根据页码值动态刷新表格的数据
4. 数据的增删改查：数据的添加、删除、修改、查询操作，都需要通过 Ajax 的形式，来实现数据的交互

#### 使用步骤

 　1. 创建XMLHttpRequest异步对象
 　2. 设置回调函数

3. 使用open方法与服务器建立连接

4. 向服务器发送数据

5. 在回调函数中针对不同的响应状态进行处理

### jQuery中的Ajax

浏览器中提供的 `XMLHttpRequest` 用法比较复杂，所以 jQuery 对 `XMLHttpRequest` 进行了封装，提供了一系列 Ajax 相关的函数，极大地降低了 Ajax 的使用难度。

jQuery 中发起 Ajax 请求最常用的三个方法如下：

- $.get()
- $.post()
- $.ajax()

#### $.get()

##### $.get()函数语法

jQuery 中 $.get() 函数的功能单一，专门用来发起 get 请求，从而将服务器上的资源请求到客户端来进行使用。

$.get() 函数的语法如下：

```js
$.get(url,[data],[callback],[type])
```

| **参数名** | **参数类型**                            | **是否必选** | **说明**                 |
| ---------- | --------------------------------------- | ------------ | ------------------------ |
| url        | string                                  | 是           | 要请求的资源地址         |
| data       | object                                  | 否           | 请求资源期间要携带的参数 |
| callback   | function                                | 否           | 请求成功时的回调函数     |
| type       | xml, html, script, json, text, _default | 否           | 设置返回内容格式         |

##### $.get()发起不带参数的请求

使用 $.get() 函数发起不带参数的请求时，直接提供请求的 URL 地址和请求成功之后的回调函数即可

```js
$.get('http://www.liulongbin.top:3006/api/getbooks', function(res) {
    console.log(res) // 这里的 res 是服务器返回的数据
})
```

##### $.get()发起带参数的请求

```js
$.get('http://www.liulongbin.top:3006/api/getbooks', { id: 1 }, function(res) {
    console.log(res)
})
```

#### $.post()

##### $.post()函数语法

jQuery 中 $.post() 函数的功能单一，专门用来发起 post 请求，从而向服务器提交数据。

$.post() 函数的语法如下：

```js
$.post(url, [data], [callback],[type])
```

| **参数名** | **参数类型**                            | **是否必选** | **说明**                 |
| ---------- | --------------------------------------- | ------------ | ------------------------ |
| url        | string                                  | 是           | 提交数据的地址           |
| data       | object                                  | 否           | 要提交的数据             |
| callback   | function                                | 否           | 数据提交成功时的回调函数 |
| type       | xml, html, script, json, text, _default | 否           | 设置返回内容格式         |

##### $.post()向服务器提交数据

```js
$.post(
   'http://www.liulongbin.top:3006/api/addbook', // 请求的URL地址
   { bookname: '水浒传', author: '施耐庵', publisher: '上海图书出版社' }, // 提交的数据
   function(res) { // 回调函数
      console.log(res)
   }
)
```

#### $.ajax()

##### $.ajax()函数语法

相比于 $.get() 和 $.post() 函数，jQuery 中提供的 $.ajax() 函数，是一个功能比较综合的函数，它允许我们对 Ajax 请求进行更详细的配置。

$.ajax() 函数的基本语法如下：

```js
$.ajax({
   type: '', // 请求的方式，例如 GET 或 POST
   url: '',  // 请求的 URL 地址
   data: { },// 这次请求要携带的数据
   success: function(res) { } // 请求成功之后的回调函数
})

```

##### 使用$.ajax()发起GET请求

使用 $.ajax() 发起 GET 请求时，只需要将 type 属性的值设置为 'GET' 即可：

```js
$.ajax({
   type: 'GET', // 请求的方式
   url: 'http://www.liulongbin.top:3006/api/getbooks',  // 请求的 URL 地址
   data: { id: 1 },// 这次请求要携带的数据
   success: function(res) { // 请求成功之后的回调函数
       console.log(res)
   }
})

$.ajax({
    //url
    url :'http://127.0.0.1:8000/delay',
    //参数
    data: {a:100,b:200},
    //请求类型
    type:"GET",
    //响应体结果
    dataType: 'json',
    //成功回调
    success: function(data){
        console.log(data);
    }
    //超时时间
    timeout:2000,
    //失败回调
    error: function(){
    	console.log("error!!")
	}
});
```

##### 使用$.ajax()发起POST请求

使用 $.ajax() 发起 POST 请求时，只需要将 type 属性的值设置为 'POST' 即可：

```JS
$.ajax({
   type: 'POST', // 请求的方式
   url: 'http://www.liulongbin.top:3006/api/addbook',  // 请求的 URL 地址
   data: { // 要提交给服务器的数据
      bookname: '水浒传',
      author: '施耐庵',
      publisher: '上海图书出版社'
    },
   success: function(res) { // 请求成功之后的回调函数
       console.log(res)
   }
})
```

### 接口文档

#### 概念

接口文档，顾名思义就是**接口的说明文档，它是我们调用接口的依据**。好的接口文档包含了对接口URL，参数以及输出内容的说明，我们参照接口文档就能方便的知道接口的作用，以及接口如何进行调用。

#### 组成

接口文档可以包含很多信息，也可以按需进行精简，不过，一个合格的接口文档，应该包含以下6项内容，从而为接口的调用提供依据：

1.  **接口名称**：用来标识各个接口的简单说明，如登录接口，获取图书列表接口等。
2.  **接口URL**：接口的调用地址。
3.  **调用方式**：接口的调用方式，如 GET 或 POST。
4.  **参数格式**：接口需要传递的参数，每个参数必须包含参数名称、参数类型、是否必选、参数说明这4项内容。
5.  **响应格式**：接口的返回值的详细描述，一般包含数据名称、数据类型、说明3项内容。
6. 返回示例（可选）：通过对象的形式，例举服务器返回数据的结构。

## Day 2

### XML简介

XML 可扩展标记语言

XML 被设计用来传输和储存数据

XML 和 HTML 类似，不同的是HTML中都是预定义标签，用来呈现数据，而XML中没有预定义标签，全都是自定义标签，用来表示一些数据

```xml
<student>
    <name>lisa</name>
    <age>18</age>
</student>
```

Ajax最初使用XML进行数据交互，现在用JSON

### Ajax的特点

#### 优点

1. 可以无需刷新页面而与服务器端进行通信。
2. 允许你根据用户事件来更新部分页面内容。  

#### 缺点

1. 没有浏览历史， 不能回退
2. 存在跨域问题(同源)，不可跨网站访问
3. SEO 不友好  （search engine optimization，搜索引擎优化），源代码中不存在ajax请求得到的数据

### HTTP协议

#### 概念

HTTP（hypertext transport protocol， 超文本传输协议）详细规定了浏览器和万维网服务器之间的相互通信的规则

#### 请求报文

重点是格式和参数

```http
行      POST、GET(请求类型)  /s?ie=utf-8(URL)  HTTP/1.1(版本号) 
头      Host: atguigu.com
        Cookie: name=guigu
        Content-type: application/x-www-form-urlencoded
        User-Agent: chrome 83
空行
体      username=admin&password=admin
```

#### 响应报文

```http
行      HTTP/1.1  200  OK
头      Content-Type: text/html;charset=utf-8(对响应体部分做相关描述)
        Content-length: 2048
        Content-encoding: gzip
空行    
体      <html>
            <head>
            </head>
            <body>
                <h1>尚硅谷</h1>
            </body>
        </html>
```

##### 响应码

| 状态码 | 原因短语                               | 代表含义                                                     |
| ------ | -------------------------------------- | ------------------------------------------------------------ |
| 404    | Not Found (未找到)                     | 服务器找不到所请求的资源.由于经常发生此种情况,所以该状态码在上网时是非常常见的. |
| 403    | Forbidden (禁止访问)                   | 客户端没有权利访问所请求内容,服务器拒绝本次请求.             |
| 401    | Unauthorized (未授权)                  | 需要身份验证后才能获取所请求的内容,类似于403错误.不同点是.401错误后,只要正确输入帐号密码,验证即可通过. |
| 500    | Internal Server Error (内部服务器错误) | 服务器遇到未知的无法解决的问题.                              |
| 200    | OK (成功)                              | 请求成功.成功的意义根据请求所使用的方法不同而不同.GET: 资源已被提取,并作为响应体传回客户端.HEAD: 实体头已作为响应头传回客户端POST: 经过服务器处理客户端传来的数据,适合的资源作为响应体传回客户端.TRACE: 服务器收到请求消息作为响应体传回客户端.PUT, DELETE, 和 OPTIONS 方法永远不会返回 200 状态码. |
| 304    | Not Modified (未修改)                  | 告诉客户端,所请求的内容距离上次访问并没有变化. 客户端可以直接从浏览器缓存里获取该资源. |
| 301    | Moved Permanently (永久移动)           | 该状态码表示所请求的URI资源路径已经改变,新的URL会在响应的`Location`:头字段里找到. |
| 302    | Found (临时移动)                       | 该状态码表示所请求的URI资源路径临时改变,并且还可能继续改变.因此客户端在以后访问时还得继续使用该URI.新的URL会在响应的`Location:`头字段里找到. |

### Ajax的使用

#### 引用Express框架

1. 下载安装node.js
2. 在vs code中，需要使用express框架的文档外部打开终端，对npm进行初始化 `npm init --yes`
3. 安装express框架 `npm i express`

```js
//1. 引入express
const express = require('express');

//2. 创建应用对象
const app = express();

//3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/', (request, response)=>{
    //设置响应
    response.send('HELLO EXPRESS');
});

//4. 监听端口启动服务
app.listen(8000, ()=>{
    console.log("服务已经启动, 8000 端口监听中....");
});
```

#### 核心对象

`XMLHttpRequest`，AJAX 的所有操作都是通过该对象进行的

#### 使用步骤

1. 创建 `XMLHttpRequest` 对象 

   ```js
   var xhr = new XMLHttpRequest();
   ```

2. 设置请求信息

   ```js
    xhr.open(method, url); 
   //可以设置请求头，一般不设置
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
   ```

3. 发送请求 

   ```js
   xhr.send(body) ;//get 请求不传 body 参数，只有 post
   ```

4. 接收响应 

   ```js
   //xhr.responseXML 接收 xml 格式的响应数据 
   //xhr.responseText 接收文本格式的响应数据
   ```

```js
// on  when 当....时候
// readystate 是 xhr 对象中的属性, 表示状态 0:未初始化 1:open方法已经调用完毕 2:send方法已经调用完毕 3:服务端返回部分结果 4:服务端返回所有结果
// change  改变
xhr.onreadystatechange = function(){
    //判断 (服务端返回了所有的结果)
    if(xhr.readyState === 4){
        //判断响应状态码 200  404  403 401 500
        // 2xx 成功
        if(xhr.status >= 200 && xhr.status < 300){
            //处理结果  行 头 空行 体
            //响应 
            // console.log(xhr.status);//相应行里面的状态码
            // console.log(xhr.statusText);//状态字符串
            // console.log(xhr.getAllResponseHeaders());//所有响应头
            // console.log(xhr.response);//响应体
            //设置 result 的文本
            result.innerHTML = xhr.response;
        }else{

        }
    }
}
```

#### 发送GET请求

```js
//获取button元素
const btn = document.getElementsByTagName('button')[0];
const result = document.getElementById("result");
//绑定事件
btn.onclick = function(){
    //1. 创建对象
    const xhr = new XMLHttpRequest();
    //2. 初始化 设置请求方法和 url
    xhr.open('GET', 'http://127.0.0.1:8000/server?a=100&b=200&c=300');
    //3. 发送
    xhr.send();
    //4. 事件绑定 处理服务端返回的结果
    // on  when 当....时候
    // readystate 是 xhr 对象中的属性, 表示状态 0 1 2 3 4
    // change  改变
    xhr.onreadystatechange = function(){
        //判断 (服务端返回了所有的结果)
        if(xhr.readyState === 4){
            //判断响应状态码 200  404  403 401 500
            // 2xx 成功
            if(xhr.status >= 200 && xhr.status < 300){
                //处理结果  行 头 空行 体
                //响应 
                // console.log(xhr.status);//相应行里面的状态码
                // console.log(xhr.statusText);//状态字符串
                // console.log(xhr.getAllResponseHeaders());//所有响应头
                // console.log(xhr.response);//响应体
                //设置 result 的文本
                console.dir(xhr);
                result.innerHTML = xhr.response;
            }
        }
    }
}


//对应服务器
app.get('/server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    response.send('HELLO AJAX - 2');
});
```

#### 发送POST请求

```js
//获取元素对象
const result = document.getElementById("result");
//绑定事件
result.addEventListener("mouseover", function(){
    //1. 创建对象
    const xhr = new XMLHttpRequest();
    //2. 初始化 设置类型与 URL
    xhr.open('POST', 'http://127.0.0.1:8000/server');
    //设置请求头
    //Content-Type:设置请求体内容的类型
    //自定义头部属性时，对应服务器添加response.setHeader('Access-Control-Allow-Headers','*');
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xhr.setRequestHeader('name','atguigu');
    //3. 发送
    xhr.send();
    //设置请求体（格式灵活）
    xhr.send('a=100&b=200&c=300');
    xhr.send('a:100&b:200&c:300');
    xhr.send('1233211234567');

    //4. 事件绑定
    xhr.onreadystatechange = function(){
        //判断
        if(xhr.readyState === 4){
            if(xhr.status >= 200 && xhr.status < 300){
                //处理服务端返回的结果
                result.innerHTML = xhr.response;
            }
        }
    }
});

//服务器端
app.post('/server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    response.send('HELLO AJAX post');
});
```

#### 服务端响应JSON数据

```js
const result = document.getElementById('result');
//绑定键盘按下事件
window.onkeydown = function(){
    //发送请求
    const xhr = new XMLHttpRequest();
    //设置响应体数据的类型
    xhr.responseType = 'json';
    //初始化
    xhr.open('GET','http://127.0.0.1:8000/json-server');
    //发送
    xhr.send();
    //事件绑定
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status >= 200 && xhr.status < 300){
                //
                // console.log(xhr.response);
                // result.innerHTML = xhr.response;
                // 1. 手动对数据转化
                // let data = JSON.parse(xhr.response);
                // console.log(data);
                // result.innerHTML = data.name;
                // 2. 自动转换
                console.log(xhr.response);
                result.innerHTML = xhr.response.name;
            }
        }
    }
}

//服务器端
app.all('/json-server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应头 设置自定义属性时使用，将app.post改为app.all
    response.setHeader('Access-Control-Allow-Headers','*');
    //响应数据
    const data = {
        name:'lisa'
    }
    //对对象进行字符串转换
    let str = JSON.stringify(data);
    //设置响应体
    response.send(str);
});
```

## DAY 3

### 安装node.js

1. 官网下载安装包，按步骤依次安装

2. 可以执行 node -v 和 npm -v 分别查看node和npm的版本号

3. 这里配置自定义的全局模块安装目录，在node.js安装目录下新建两个文件夹 node_global和node_cache，然后在cmd命令下执行如下两个命令：

   `npm config set prefix "D:\Program Files\nodejs\node_global"`

   `npm config set cache "D:\Program Files\nodejs\node_cache"`

4. 然后在环境变量 -> 系统变量中新建一个变量名为 “NODE_PATH”， 值为“D:\Program Files\nodejs\node_modules”

5. 编辑用户变量里的Path，将相应npm的路径改为：D:\Program Files\nodejs\node_global

6. 更改完后需重新启动

### 安装nodemon

1. 在cmd或powershell中输入`npm i -g nodemon`

2. 按照以上步骤安装好，若能查到版本号，且提示如下：不是内部命令也不是外部命令

   则为nodemon配置环境变量：计算机--右键 -> 属性 -> 高级环境变量->环境变量

   选中path->编辑->新建，添加nodemon安装的路径

### 解决IE缓存问题 

#### 问题

在一些浏览器中(IE),由于缓存机制的存在，ajax 只会发送的第一次请求，剩 余多次请求不会在发送给浏览器而是直接加载缓存中的数据

#### 解决

浏览器的缓存是根据 url 地址来记录的，所以我们只需要修改 url 地址 即可避免缓存问题

```js
xhr.open("GET","http://127.0.0.1/ie?t="+Date.now())
```

### 网络请求超时与异常

```js
const btn = document.getElementsByTagName('button')[0];
const result = document.querySelector('#result');

btn.addEventListener('click', function(){
    const xhr = new XMLHttpRequest();
    //超时设置 2s 设置 超过2秒请求取消
    xhr.timeout = 2000;
    //超时回调
    xhr.ontimeout = function(){
        alert("网络异常, 请稍后重试!!");
    }
    //网络异常回调
    xhr.onerror = function(){
        alert("你的网络似乎出了一些问题!");
    }

    xhr.open("GET",'http://127.0.0.1:8000/delay');
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status >= 200 && xhr.status< 300){
                result.innerHTML = xhr.response;
            }
        }
    }
})
```

### Ajax取消请求

采用xhr对象里的abort()方法，手动取消发送

```js
//获取元素对象
const btns = document.querySelectorAll('button');
let x = null;

btns[0].onclick = function(){
    x = new XMLHttpRequest();
    x.open("GET",'http://127.0.0.1:8000/delay');
    x.send();
}

// abort方法属于xhr对象，手动取消发送
btns[1].onclick = function(){
    x.abort();
}
```

### Ajax重复请求发送问题

1. 设置一个判断变量 isSending 判断是否有正在发送的请求
2. 如果有正在发送的请求则 isSending = true
3. 如果 readyState === 4，则说明发送成功，修改 isSending = false
4. 如果 isSending = true，则立刻执行abort()方法

```js
//获取元素对象
const btns = document.querySelectorAll('button');
let x = null;
//标识变量
let isSending = false; // 是否正在发送AJAX请求

btns[0].onclick = function(){
    //判断标识变量
    if(isSending) x.abort();// 如果正在发送, 则取消该请求, 创建一个新的请求
    x = new XMLHttpRequest();
    //修改 标识变量的值
    isSending = true;
    x.open("GET",'http://127.0.0.1:8000/delay');
    x.send();
    x.onreadystatechange = function(){
        if(x.readyState === 4){
            //修改标识变量
            isSending = false;
        }
    }
}

// abort
btns[1].onclick = function(){
    x.abort();
}
```

### Axios发送Ajax请求

#### axios是什么

Axios 是一个基于 Promise 的 HTTP 库，可以用在浏览器和 node.js 中。本质上也是对原生XHR的封装，只不过它是Promise的实现版本，符合最新的ES规范。

#### axios有那些特性？

1. 在浏览器中创建 XMLHttpRequests
2. 在node.js则创建http请求
3. 支持Promise API
4. 支持拦截请求和响应
5. 转换请求和响应数据
6. 取消请求
7. 自动转换成JSON数据格式
8. 客户端支持防御CSRF（防止CSRF:就是让你的每个请求都带一个从cookie中拿到的key, 根据浏览器同源策略，假冒的网站是拿不到你cookie中得key的，这样，后台就可以轻松辨别出这个请求是否是用户在假冒网站上的误导输入，从而采取正确的策略。）

```js
//配置 baseURL
axios.defaults.baseURL = 'http://127.0.0.1:8000';

btns[0].onclick = function () {
    //GET 请求
    axios.get('/axios-server', {
        //url 参数
        params: {
            id: 100,
            vip: 7
        },
        //请求头信息
        headers: {
            name: 'atguigu',
            age: 20
        }
        //回调函数
    }).then(value => {
        console.log(value);
    });
}
//第一个参数是url
//第二个参数是请求体
//第三个参数是其他配置
btns[1].onclick = function () {
    axios.post('/axios-server', {
        //json格式字符串
        username: 'admin',
        password: 'admin'
    }, {
        //url 
        params: {
            id: 200,
            vip: 9
        },
        //请求头参数
        headers: {
            height: 180,
            weight: 180,
        }
    });
}
```

### 用fetch函数发送Ajax请求

fetch号称是AJAX的替代品，是在ES6出现的，使用了ES6中的promise对象。Fetch是基于promise设计的。Fetch的代码结构比起ajax简单多了，参数有点像jQuery ajax。但是，一定记住**fetch不是ajax的进一步封装，而是原生js，没有使用XMLHttpRequest对象**。

#### 优点

1.  语法简洁，更加语义化
2.  基于标准 Promise 实现，支持 async/await
3.  同构方便，使用 [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch)
4.  更加底层，提供的API丰富（request, response）
5.  脱离了XHR(XMLHttpRequest)，是ES规范里新的实现方式

### 跨域

#### 同源策略

同源： 当前网页的url和ajax请求的目标资源url的协议、域名、端口号 必须完全相同。

ajax默认支持同源策略，违背同源策略就是跨域

跨域并不是请求发不出去，请求能发出去，**服务端能收到请求并正常返回结果，只是结果被浏览器拦截了**

#### 解决跨域：JSONP

##### JSONP 是什么 

JSONP (JSON with Padding)，是一个非官方的跨域解决方案，纯粹凭借程序员的聪明 才智开发出来，**只支持 get** 请求。

##### JSONP 怎么工作的 

在网页有一些标签天生具有跨域能力，比如：img link iframe script。 JSONP 就是利用 script 标签的跨域能力来发送请求的。 

##### JSONP 的使用 

1. 动态的创建一个 script 标签

   ```js
   var script = document.createElement("script")
   ```

2. 设置 script 的 src，设置回调函数

   ```js
   script.src = "http://localhost:3000/testAJAX?callback=abc";
   function abc(data) {
       alert(data.name);
   }
   ```

3. 将 script 添加到 body 

   ```js
   document.body.appendChild(script)
   ```

4. 服务器中路由的处理

   ```js
   router.get("/testAJAX" , function (req , res) {
       console.log("收到请求");
       var callback = req.query.callback;
       var obj = {
           name:"孙悟空", age:18
       }
       res.send(callback+"("+JSON.stringify(obj)+")");
   });
   ```

##### jquery使用JSONP

```js
//浏览器端
$('button').eq(0).click(function(){
    $.getJSON('http://127.0.0.1:8000/jquery-jsonp-server?callback=?', function(data){
        $('#result').html(`
                    名称: ${data.name}<br>
                    校区: ${data.city}
                `)
    });
});
//服务器端
app.all('/jquery-jsonp-server',(request, response) => {
    // response.send('console.log("hello jsonp")');
    const data = {
        name:'尚硅谷',
        city: ['北京','上海','深圳']
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //接收 callback 参数
    let cb = request.query.callback;

    //返回结果
    response.end(`${cb}(${str})`);
});
```

#### 解决跨域：[CORS](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS)

##### 什么是CORS

CORS（Cross-Origin Resource Sharing），跨域资源共享。CORS 是官方的跨域解决方 案，它的特点是不需要在客户端做任何特殊的操作，完全在服务器中进行处理，支持 get 和 post 请求。跨域资源共享标准新增了一组 HTTP 首部字段，允许服务器声明哪些 源站通过浏览器有权限访问哪些资源

##### CORS如何工作

CORS 是通过设置一个响应头来告诉浏览器，该请求允许跨域，浏览器收到该响应 以后就会对响应放行

##### CORS使用方式

主要是服务器端的设置：

```js
//服务器端
router.get("/testAJAX" , function (req , res) {
    //通过 res 来设置响应头，来允许跨域请求
    //res.set("Access-Control-Allow-Origin","http://127.0.0.1:3000");
    res.set("Access-Control-Allow-Origin","*");
    res.send("testAJAX 返回的响应");
})
```

