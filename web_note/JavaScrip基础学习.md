# JavaScrip基础学习

## JavaScript书写位置

1. 行内式

   ```
   <input type="botton" value="click" onclick="alert('Hello World')"/>
   ```

   - 可以将少量的JS代码写在HTML标签的时间属性中（以on开头的属性）
   - 注意单双引号的使用：在HTML中推荐使用双引号，JS中推荐使用单引号
   - 可读性差
   - 引号易错
   - 特殊情况使用

2. 内嵌

   ```html
   <script>
   	alert('Hello World!')
   <script>
   ```

   - 可将多行代码写到`<script>`标签中
   - 适合学习

3. 外部

   ```html
   <script src="my.js"></script>
   ```

   - 将大量js代码独立到html页面之外，美观，方便复用
   - 引用外部js文件的script标签中间不可写代码
   - 适合js代码量大的情况

## 输入输出语句

- 输入框 prompt()
- 弹出警示框 alert()
- 控制台输出 console.log()

## 变量

### 什么是变量

变量用于存放数据的容器，通过变量名获取数据。

本质：变量是程序在内存中申请的一块用来存放数据的空间

### 变量的使用

#### 1.声明变量

```javascript
//声明变量
//var 声明作用域：使用 var 操作符定义的变量会成为包含它的函数的局部变量
//var 声明提升：使用var关键字声明的变量会自动提升到函数作用域顶部
var myname;//声明一个名称为name的变量
```

#### 2.赋值

```javascript
myname = 'tom';
```

#### 3.变量初始化

```js
//变量的初始化就是声明加赋值
var myname = 'tom';
```

#### 4.let和const

ES2015(ES6) 新增加了两个重要的 JavaScript 关键字: **let** 和 **const**。

let 声明的变量只在 let 命令所在的代码块内有效。

const 声明一个只读的常量，一旦声明，常量的值就不能改变。

##### JavaScript 块级作用域(Block Scope)

使用 var 关键字声明的变量不具备块级作用域的特性，它在 {} 外依然能被访问到。

```js
{ 
    var x = 2; 
}
// 这里可以使用 x 变量
//使用var关键字重新声明变量会带来问题：在块中重新声明变量也会重新声明块外的变量
```

在 ES6 之前，是没有块级作用域的概念的。

ES6 可以使用 let 关键字来实现块级作用域。

let 声明的变量只在 let 命令所在的代码块 **{}** 内有效，在 **{}** 之外不能访问。

```js
{ 
    let x = 2;
}
// 这里不能使用 x 变量
```

##### HTML 代码中使用全局变量

在 JavaScript 中, 全局作用域是针对 JavaScript 环境。

在 HTML 中, 全局作用域是针对 window 对象。

使用 **var** 关键字声明的全局作用域变量属于 window 对象:

```js
var carName = "Volvo";
// 可以使用 window.carName 访问变量
```

使用 **let** 关键字声明的全局作用域变量不属于 window 对象:

```js
let carName = "Volvo";
// 不能使用 window.carName 访问变量
```

##### 变量提升

let 关键字定义的变量则不可以在使用后声明，也就是变量需要先声明再使用。

```js
// 在这里不可以使用 carName 变量

let carName;
```

##### const关键字

const 用于声明一个或多个常量，声明时必须进行初始化，且初始化后值不可再修改：

```js
const PI = 3.141592653589793;
PI = 3.14;      // 报错
PI = PI + 10;   // 报错
```

`const`定义常量与使用`let` 定义的变量相似：

- 二者都是块级作用域
- 都不能和它所在作用域内的其他变量或函数拥有相同的名称

两者还有以下两点区别：

- `const` 声明的常量必须初始化，而`let`声明的变量不用
- `const` 定义常量的值不能通过再赋值修改，也不能再次声明。而 let 定义的变量值可以修改。

### 变量命名规范

- 由字母，数字，下划线(_)，美元符号($)组成
- 严格区分大小写
- 不能以数字开头
- 不能是关键字、保留字，特殊情况：name最好不要用
- 变量名必须有意义
- 遵守驼峰命名法，首字母小写，后面单词的首字母需大写

### 数据类型

js的变量数据类型是只有程序在运行过程中，根据等号右边的值来确定的

JavaScript拥有动态类型，变量的数据类型可变化

#### 数据类型的分类

- 简单数据类型

  | 简单数据类型 | 说明                     | 默认值    |
  | ------------ | ------------------------ | --------- |
  | Number       | 数字型，包括整形，浮点型 | 0         |
  | Boolean      | 布尔值类型               | false     |
  | String       | 字符串类型               | “”        |
  | Undefined    | var声明了变量但是没赋值  | undefined |
  | Null         | 空值                     | null      |

  - 数字型

    1. 八进制 0~7 程序里面数字前面加 0 表示八进制
    2. 十六进制 0~9 A~F 数字前面加0x 表示十六进制
    3. 最大值 Number.max_value
    4. 最小值 Number.min_value
    5. 验证是否是数字的方法 isNaN()

  - 字符串型String

    1. 必须使用单双引号，推荐使用单引号

    2. 转义符

       | 转义符 | 说明                     |
       | ------ | ------------------------ |
       | \n     | 换行符，n是newline的意思 |
       | \\\    | 斜杠\                    |
       | \\"    | 双引号                   |
       | \\'    | 单引号                   |
       | \t     | tab缩进                  |
       | \b     | 空格，b是blank的意思     |

    3. 检测获取字符串的长度 length

    4. 字符串的拼接

       多个字符串可使用+进行拼接，字符串和其他类型相拼接，结果是字符串类型

    5. undefined+数值结果为NaN

    6. null加数值为数值本身 

#### 检测变量的数据类型typeof 

#### 数据类型转换

1. 转换为字符串

   | 方式                        | 说明                         | 案例                                |
   | --------------------------- | ---------------------------- | ----------------------------------- |
   | toString()                  | 转换成字符串                 | var num = 1；alert(num.toString())  |
   | String()                    | 转换成字符串                 | var num = 1；alert(String(num))     |
   | **加号拼接字符串 隐式转换** | 任何类型加字符串结果为字符串 | var num = 1； alert(num + 'string') |

2. 转换为数字型

   | 方法                    | 说明                     | 案例                |
   | ----------------------- | ------------------------ | ------------------- |
   | **parseInt(变量)**      | 转换成整型               | parseInt('120px');  |
   | **parseFloat(变量)**    | 转换成浮点型             | parseFloat('3.14'); |
   | Number()                | 转换成数值型             | Number(str);        |
   | - * / 算术运算 隐式转换 | 利用算术隐式转换为数值型 | '12' - 0;           |

3. 转换成布尔型

   | 方式      | 说明         | 案例            |
   | --------- | ------------ | --------------- |
   | Boolean() | 转换为布尔型 | Boolean('true') |

## 标识符、关键字、保留字

### 标识符

标识符：开发人员为变量、属性、函数、参数取的名字（不可是关键字或保留字）

### 关键字

关键字：JS本身已经使用了的字，不能再用他们充当变量名、方法名。

### 保留字

保留字：预留的关键字。

## 运算符(operator)

### 算术运算符

| 运算符 | 描述 |
| ------ | ---- |
| +      | 加   |
| -      | 减   |
| *      | 乘   |
| /      | 除   |
| %      | 取模 |

注：**不要直接判断两个浮点数是否相等！**

### 递增和递减运算符

递增（++）和递减（--）：

放在变量前为前置递增（递减）运算符；放在后面为后置递增（递减）运算符。

注：递增和递减运算符必须和变量配合使用

**前置**：先加1 后返回值

**后置**：先返回原值，后自加

注：前置自增和后置自增如果单独使用，效果相同，都是num = num + 1

### 逻辑运算符

#### 短路运算（**逻辑中断**）

逻辑与短路：表达式1 && 表达式2

1. 如果表达式1 结果为真 则返回表达式2
2. 如果表达式1 结果为假 则返回表达式1

逻辑或短路：表达式1 || 表达式2

1. 如果表达式1 结果为真 则返回表达式1
2. 如果表达式1 结果为假 则返回表达式2

### 运算符优先级

| 优先级 | 运算符     | 顺序            |
| ------ | ---------- | --------------- |
| 1      | 小括号     | ()              |
| 2      | 一元运算符 | ++  -- !        |
| 3      | 算术运算符 | 先* / 后+-      |
| 4      | 关系运算符 | >  >=  <  <=    |
| 5      | 相等运算符 | ==  !=  === !== |
| 6      | 逻辑运算符 | 先&& 后\|\|     |
| 7      | 赋值运算符 | =               |
| 8      | 逗号运算符 | ，              |

## 流程控制-分支

流程控制结构：顺序结构、分支结构、循环结构

### 分支流程控制

#### if语句

##### 1.语法结构

```js
if(条件表达式){
    //执行语句1
} else{
    //执行语句2
}
```

```js
if(条件表达式1){
    //执行语句1
} else if(条件表达式2){
    //执行语句2
} else if(条件表达式3){
	//执行语句3
} else{
	//最后语句
}
```



##### 2.执行思路

如果if里面的条件表达式结果为真true 则执行大括号里面的执行语句；如果 if 条件表达式结果为假， 则不执行大括号里面的语句 执行if语句之后的代码

##### 3.三元表达式

`条件表达式 ？表达式1 ：表达式２`：如果条件表达式为真，则返回表达式１的值；如果为假，则返回表达式２的值

#### switch语句

##### 1.语法结构

```js
switch(表达式){
	case value1:
		执行语句1;
		break;
	case value2:
		执行语句1;
		break;
	...
	default:
		执行最后语句;
}
```

##### 2.if-else if 和 switch语句的区别

1. switch语句通常处理case为比较确定的情况，而if语句更加灵活，作用范围判断
2. switch语句进行条件判断后直接执行到程序的条件句，效率较高、而if语句有几种条件，就得判断几次。
3. 分支较小时，if语句效率更高；分支较多，switch语句效率更高

## 流程控制-循环

### 循环流程控制

#### for循环

##### 1.语法结构

```js
for(初始化变量;条件表达式;操作表达式){
	//循环体
}
```

##### 2.双重for循环

```js
for(初始化变量1;条件表达式1;操作表达式1){
	//循环体
	for(初始化变量2;条件表达式2;操作表达式2){
	//循环体
	}
}
```

注：

1. 双重for循环，外层循环一次，内层for循环全部执行
2. for循环的循环条件和数字直接相关的循环

#### while循环

##### 1.语法结构

```js

while(条件表达式){
	//循环体
}
```

##### 2.注意事项

1. 当条件表达式结果为true 则执行循环体，否则退出循环
2. 里面应该也有计数器，初始化变量
3. 里面应该也有操作表达式，完成计数器的更新，防止死循环

#### do-while循环

##### 1.语法结构

```
do{
	//循环体
}while(条件表达式)
```

##### 2.执行思路

跟while不同的地方在于，do-while先执行一次循环体，在判断条件，如果条件表达式结果为真，则继续执行循环体，否则退出循环

#### continue break

##### continue关键字

用于立即**跳出本次循环**，**继续下一次循环**（本次循环体中continue之后的代码就少执行一次）

##### break关键字

用于**直接跳出整个循环**

## 数组（Array）

### 概念

一组数据的集合，在数组中可存放任意类型的元素，数组是一种将一组数据存储在单个变量名下

### 创建数组

#### 利用new关键字创建

```js
var arr = new Array();
```

#### 利用数组字面量创建

```js
//数组里的数据用逗号隔开
//数组里的数据叫做数组元素
var arr = [];
```

### 获取数组元素

#### 数组索引

**索引（下标）**：用来访问数组元素的序号（从0开始）

**使用方式**：数组名[索引]

#### 遍历数组

```js
//arr.length等于索引号加一
var arr = [数组内容];
for(i = 0 ; i < arr.length; i++){
	console.log(arr[i]);
}
```

#### 新增元素

- 通过修改length长度

- 通过修改索引号

  如果索引号没有，追加数组元素

  如果索引号已有，则替换数组元素

### 数组排序（冒泡排序）

思路：

1. 每次都是交换相邻2个元素
2. 一共交换arr.length-1轮
3. 每一轮交换arr.length-第i轮-1次

例：

```
	   [10,4,2,3,1,7]
第一轮：[4,2,3,1,7,10]
第二轮：[2,3,1,4,7,10]
第三轮：[2,1,3,4,7,10]
第四轮：[1,2,3,4,7,10]
第五轮：[1,2,3,4,7,10]
```

代码：

```js
var arr = [10,4,2,3,1,6];
        for(i = 0; i <= arr.length-1; i ++){
            //外层循环管趟数
            for (j = 0 ;j <= arr.length -i -1; j++ ){
                //里层循环管每趟交换次数
                //内部交换2个变量的值，前一个和后一个数组元素比较
                if(arr[j]> arr[j+1]){
                    var temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1]=temp; 
                }
            }
        }
```

## 函数（function）

### 函数使用

#### 声明函数

```js
//第一种
function 函数名(形参1,形参2,...){
	//函数体
    return 需要返回的结果
}
//调用
函数名(实参1,实参2,...)；
    
//第二种（匿名函数）
var 变量名 = function(){};
var fun = function(){};
```

注：

1. 函数不调用自己不执行
2. 第二种声明方式，fun不是函数名
3. 函数表达式声明方式跟声明变量差不多，只不过变量里面存的是值，函数表达式里存的是函数
4. 函数表达式也可以进行传递参数 

**函数封装**：把一个或者多个功能通过函数的方式封装起来，对外只提供一个简单的函数接口

#### 参数

**形参**：在声明函数的小括号里，形式上的参数，**函数定义**的时候传递的参数

**实参**：在函数调用的小括号里，实际的参数，**函数调用**时传递的参数

##### 形参和实参个数不匹配问题

如果实参的个数多于形参的个数，会取到形参的个数

如果实参的个数小于形参的个数，多余的形参定义为undefined

#### 返回值

1. 函数知识实现某种功能，最终的结果需要返回给函数的调用者函数名()，通过return实现
2. 函数名() = return 结果 
3. arguments的使用：当我们不确定有多少个参数传递时，可以用**arguments**。在JavaScript种，arguments实际上他是当前函数的一个**内置对象**，所有函数都内置了一个arguments对象，arguments对象中**存储了传递的所有实参**

**arguments**:

1. 伪数组，不是真正意义上的数组
2. 具有数组的length属性
3. 按照索引的方式进行存储
4. 没有真正数组的一些方法 pop()、push()

## JavaScript作用域

### 作用域

1. 代码名字在某个范围内起作用和效果，目的是为了提高程序的可靠性，更重要的是减少命名冲突
2. js的作用域（es6）之前：全局作用域 局部作用域
3. 全局作用域：整个script标签，或者一个单独的js文件
4. 局部作用域（函数作用域）：在函数内部就是局部作用域，这个代码的名字之在函数内部起效果和作用

### 变量作用域

1. 全局变量：在全局作用域下的变量，在全局下都可以使用

   注：在函数内部，没有声明就直接赋值的变量也属于全局变量

2. 局部变量：在局部作用域下的变量，只有在函数内部使用

   注：函数的形参也是局部变量

3. 从执行效率来看全局变量和局部变量

   - 全局变量只有浏览器馆的时候才会销毁，比较占内存资源
   - 局部变量当我们程序执行完毕后就会销毁，比较节约资源

4. 作用域链：根据在内部函数可以访问外部函数变量的这种机制，用链式查找决定哪些数据能被内部函数访问（谁离我近，我就执行谁）

## JavaScript预解析

1. js引擎运行js分为两步：预解析，代码执行
   - 预解析：js引擎会把js里面所有的var，还有function提升到当前作用域的最前面
   - 代码执行：按照大妈书写的顺序从上往下执行
2. 预解析分为：变量预解析（变量提升）和函数预解析（函数提升）
   - 变量提升：把所有的变量声明提升至当前作用域前，不提升赋值操作
   - 函数提升：把所有的函数声明提升至当前作用域前，不提升调用

**案例**：

```js
f1();
console.log(c);
console.log(b);
console.log(a);
function f1(){
    var a = b = c = 9;
    console.log(a);
    console.log(b);
    console.log(c);
}
```

**预解析**：

```js
function f1(){
    var a = b = c = 9;
    //相当于 var a = 9; b = 9; c = 9;
    //集体生明 var a = 9, b = 9, c = 9;
    //a为局部变量，b和c为全局变量
    console.log(a);//9
    console.log(b);//9
    console.log(c);//9
}
f1();
console.log(c);//9
console.log(b);//9
console.log(a);//undefine
```

## JavaScript对象（object）

**对象：**对象是一组无序的相关**属性**和**方法**的集合，可以保存多个值（一组值）

### 创建对象的三种方式

#### 利用字面量创建对象

**对象字面量**：花括号{}里面包含了表达这个具体事物（对象）的属性和方法

```js
var obj = {};//创建了一个空的对象
var obj = {
    uname:'lisa',
    age:18,
    sex:'woman',
    sayHi:function(){
        console.log('hi~');
    }
}
```

1. 里面的属性或方法我们采取键值对的形式，键 属性名 ：值　属性值
2. 多个属性或方法用逗号隔开
3. 方法冒号后面跟的是一个匿名函数

**使用对象**：

1. 调用对象的属性，我们采取　对象名.属性名  或者 对象名['属性名']
2. 调用对象的函数，对象名.方法名()

**变量、属性：**

1. 变量，单独声明并赋值，使用的时候直接写变量名，单独存在
2. 属性，在对象里面的不需要声明，使用的时候必须是 对象.属性
3. 相同点：都是存放数据的

**函数、方法**：

1. 函数是单独声明的，且调用的函数名()单独存在
2. 方法，在对象里面，调用的时候，对象.方法 ()
3. 相同点：都是实现某种功能

#### 利用new Object创建对象

```js
var obj = new Object();
obj.uname = 'lisa';
obj.age = 18;
obj.sex = 'woman';
obj.sayHi = function(){
    console.log('hi~');
}
```

#### 利用构造函数创建对象

前两种创建对象的方式一次只能创建一个，所以采用构造函数的方式。构造函数就是把我们对象里面的一些相同属性和方法抽象出来封装到函数里面

```js
function 构造函数名(){
	this.属性 = 值；
	this.方法 = function(){}
}
new 构造函数名(); 
```

注：

1. 构造函数名字首字母要大写
2. 构造函数不需要return就可返回结果
3. 调用构造函数必须使用new
4. 属性前必须加this

#### new关键字执行过程

1. new构造函数可以在内存中创建一个空的对象
2. 让this指向这个新的对象
3. 执行构造函数里的代码，给这个新对象添加属性
4. 返回这个新对象（所以构造函数不需要return）

#### for_in遍历对象

```js
var obj = {
	name = 'lisa';
    age = 18;
    sex = 'woman';
}
for(key i in obj){
    console.log(k);// k 变量输出的是属性名
    console.log(obj[k]);// obj[k] 输出的是属性值
}
```

### JavaScript内置对象

JavaScript中的对象分为3种：自定义对象、内置对象、浏览器对象

#### Math对象

| 方法          | 作用                   |
| ------------- | ---------------------- |
| Math.abs()    | 绝对值                 |
| Math.floor()  | 向下取整               |
| Math.ceil()   | 向上取整               |
| Math.round()  | 四舍五入（.5往大了取） |
| Math.random() | 随机数                 |

注：

Math.random()：返回一个[0,1)的随即小数

- 得到一个两数之间的随机数

  ```js
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  ```

- 得到一个两数之间的随机整数

  ```js
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
  }
  ```

- 得到一个两数之间的随机整数，且包含两数

  ```js
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
  }
  ```

#### Date对象

Date()日期对象是一个构造函数，必须使用new来调用创建我们的日期对象

1. 使用Date，如果没有参数，返回当前系统的时间
2. 参数常用的写法：数字型 2019，10，01 或者是字符串型'2019-10-1 8:8:8'

##### 日期格式化

| 方法名        | 说明                                       |
| ------------- | ------------------------------------------ |
| getFullYear() | 获取当年                                   |
| getMonth()    | 获取当月（0-11），返回月份小一个月，记得+1 |
| getDate()     | 获取当天日期                               |
| getDay()      | 获取当天周几，周日返回的是0                |
| getHours()    | 获取当前小时                               |
| getMinutes()  | 获取当前分钟                               |
| getSeconds()  | 获取当前秒钟                               |

##### 获取Date总的毫秒数（距离1970年1月1日）

1. 通过valueOf()，getTime()
2. 直接打印
3. H5新增获得总的毫秒数，Date.new()

##### 案例：倒计时

###### 分析：

1. 核心算法：输入的时间减去现在的时间就是剩余时间

2. 用时间戳来实现，用户输入时间总的毫秒数减去现在时间的总的毫秒数

3. 把剩余时间总的毫秒数转换为天、时、分、秒

   转换公式如下：

   - d = parseInt(总秒数/60/60/24) //计算天数
   - h = parseInt(总秒数/60/60%24) //计算小时
   - m = parseInt(总秒数/60%60) //计算分数
   - s = parseInt(总秒数%60) //计算秒数   

###### 代码：

```js
function timeReverse(time){
            var timeNow = +new Date();
            var times = +new Date(time);
            var timeLeft = (times - timeNow)/1000;
            var d = parseInt(timeLeft/60/60/24);
            d = d < 10 ? '0'+d : d;
            var h = parseInt(timeLeft/60/60%24);
            h = h < 10 ? '0'+h : h;
            var m = parseInt(timeLeft/60%60);
            m = m < 10 ? '0'+m : m;
            var s = parseInt(timeLeft%60);
            s = s < 10 ? '0'+s : s;
            var res = d + '天' + h +'时' + m + '分' + s + '秒';
            return res;
        }
var res = timeReverse('2022-1-29 21:00');
alert(res);
```



#### Array对象

Array()数组对象是一个构造函数，必须使用new来调用创建我们的数组对象

1. `var arr = new Array(num);`

   括号中的num表示数组长度

   `var arr = new Array(num1,num2,...);`

   表示存放在数组里的具体元素

2. 判断是否是一个数组

   intenseOf 运算符

   Array.isArray(参数) H5新增的方法

##### 数组排序

```js
var arr = [1,4,7,13,2,90]
arr.sort(function(a,b){
    return a - b;//升序
    return b - a;//降序
})
```

##### 数组索引方法

| 方法名                            | 说明                                                         | 返回值                                             |
| --------------------------------- | ------------------------------------------------------------ | -------------------------------------------------- |
| indexOf()                         | 数组中查找给定元素的第一个索引                               | 若存在，返回索引，不存在返回-1                     |
| lastIndexOf()                     | 在数组中的给定元素最后一个索引                               | 若存在，返回索引，不存在返回-1                     |
| slice(start,end)                  | start是截取的开始数组索引，end是要取的最后一个字符的位置值加上1（可选）,含头不含尾 | 对数组进行部分截取，并返回一个数组副本             |
| splice(start,deleteCount,item...) | start是从数组arr中移除元素的开始位置。deleteCount是要移除的元素的个数。item是替换数组 | 从数组中移除一个或多个元素，并用新的item替换它们。 |

##### 重点案例（数组去重）

###### 分析：

遍历旧数组，然后那这就数组元素去查询新数组，如果该元素在新数组里不存在则添加，否则不添加

###### 代码：

```js
function noRepeat(arr){
     var newArray = new Array();
     for(i = 0 ;i < arr.length; i++){
         if(newArray.indexOf(arr[i]) == -1){
             newArray.push(arr[i]);
         }
     }
     return newArray;
}
var arr = [1,2,3,2,1];
var newArray = noRepeat(arr);
console.log(newArray);
```

##### 数组转换为字符串

1. toString()
2. join(分隔符)

### 字符串对象

**基本包装类型**：把简单数据类型包装成复杂数据类型，这样基本数据类型就有了属性和方法

**注**：字符串是不可变的，每次都会开辟新的内存空间存储字符串

##### 案例（查找字符串指定字母出现的位置及次数）：

###### 分析：

1. 先查找第一个字母出现的位置，如果indexOf 返回值不为-1 则继续查找
2. 后面的查找需要index +1

###### 代码：

```js
var str = 'abosdoshtoso';
var index = str.indexOf('o');
var i = 0 ;
while(index !== -1){
    console.log(index);
    index = str.indexOf('o', index+1);
    i++;
}
console.log(i);
```

##### 根据位置返回字符

| 方法名            | 说明                      | 使用              |
| ----------------- | ------------------------- | ----------------- |
| charAt(index)     | 返回指定位置的字符        | str.charAt(0)     |
| charCodeAt(index) | 返回指定位置字符的ASCII码 | str.charCodeAt(0) |
| str[index]        | 返回指定位置的字符        | HTML5,IE8+支持    |

##### 获取字符串中出现最多次数的字符

```js
var str = 'abfcccfhejchdhcd';
//创建对象保存每个字符出现的次数
var obj = {};
for(i = 0 ; i < str.length; i ++){
    var chars = charAt(i);
    if(obj[chars]){
        obj[chars]++
    }else{
        obj[chars] = 1;
    }
}
var max = 0;
var ch = '';
for(var key in obj){
    //key是属性名
    //obj[key]是属性值
    if(obj[key] >max){
        max = obj[key];
        ch = key;
    }
}
```

##### 字符串操作方法

| 方法名                | 说明                                                       |
| --------------------- | ---------------------------------------------------------- |
| concat(str1,str2,...) | 用于连接两个或多个字符串，等效于 +                         |
| substr(start, length) | 从start位置开始，length取的个数,提取字符串中指定数目的字符 |
| slice(start,end)      | 从start开始，end结束，不包含end，提取字符串的某个部分      |
| substring(start,end)  | 从start开始，end结束，不包含end,提取字符串的某个部分       |
| replace(str1,str2)    | 将str1替换成str2（替换多个要循环）                         |
| split('分隔符')       | 将str根据分隔符转换为数组                                  |

## 简单数据类型与复杂数据类型

简单数据类型又叫**基本数据类型**或**值类型**

- 值类型：string ，number， Boolean， undefined ，null（返回object）
- 引用类型：在存储是变量中存储的仅仅是地址，通过new关键字创建的对象

# Web API

## Web APIs 和 JS 基础关联性

### JS的组成

![image-20220130112953413](C:\Users\Sagittarius\AppData\Roaming\Typora\typora-user-images\image-20220130112953413.png)

### API

API（Application Programming Interface，应用程序接口）是一些预先定义的函数，目的是提供应用程序于开发人员基于某软件或硬件得以访问一组例程的能力，而又无需访问源码。

### Web API

WEb API 是浏览器提供的一套操作浏览器功能和页面元素的API（BOM和DOM）

## DOM

DOM（Document Object Model，文档对象模型），是W3C组织推荐的处理可扩展标记语言（HTML或XML）的标准编程接口

### 简介

#### DOM树

- 文档：一个页面就是一个文档，DOM用document表示
- 元素：页面中的所有标签都是元素，用element表示
- 节点：网页中的所有内容都是节点（标签，属性，文本，注释），用node表示

#### 获取元素

- ##### 根据ID获取

  使用`document.getElementsById('idName')`方法可以获取带有ID的元素对象

  文档页面从上往下加载，所以得先有标签，因此script写到标签下面

  参数是大小写敏感的字符串

  返回的是一个元素对象

  `console.dir()` 打印元素对象，更好的查看里面的属性和方法

- ##### 根据标签名获取

  - 使用`document.getElementsByTagName('TagName')`方法可以返回带有指定标签名的对象集合

    返回的是，获取过来元素对象得集合，以伪数组的形式存储

    我们想要依次打印里面得元素对象，我们可以采取遍历得方式

    如果页面中只有一个li，返回的还是伪数组的形式

  - 可获取某个元素（父元素）内部所有指定标签名的子元素 `element.getElementsByTagName`('标签名');

    **注**：父元素必须是**单个对象（必须指明是哪个元素对象）**。获取元素对象的时候不包括父元素自己

- ##### 通过html5新增方法获取

  - `document.getElementsByClassName()`可以根据类名得到元素集合

  - `document.querySelector()`返回指定选择器的第一个元素对象

    ```html5
    <body>
        <div class = 'box'>
            盒子1
        </div>
        <div class = 'box'>
            盒子2
        </div>
       	<div id = 'nav'>
            导航
        </div>
    </body>
    <script>
        //.类名 #id名
    	var firstBox = document.querySelector('.box');
        var nav = document.querySelector('#nav')
    </script>
    ```

  - `document.querySelectorAll()`根据指定选择器返回所有元素对象

- ##### 获取body元素

  - `document.body;`

- ##### 获取html元素

  - `document.documentElement;`	

### 事件基础

#### 事件概述

事件是可以被JavaScript侦测到的行为，简单理解：触发---响应机制。

事件三要素：事件源 事件类型 事件处理程序

1. 事件源：事件被触发的对象
2. 事件类型：如何触发（鼠标点击：onclick，鼠标经过，按键按下等）
3. 事件处理程序：通过一个函数赋值的方式完成

#### 执行事件的步骤

1. 获取事件源
2. 注册事件（绑定事件）
3. 添加事件处理程序（采取函数赋值形式）

##### 常见的鼠标事件

| 鼠标事件    | 触发条件         |
| ----------- | ---------------- |
| onclick     | 鼠标点击左键触发 |
| onmouseover | 鼠标经过触发     |
| onmouseout  | 鼠标离开触发     |
| onfocus     | 获得鼠标焦点触发 |
| onblur      | 失去鼠标焦点触发 |
| onmousemove | 鼠标移动触发     |
| onmouseup   | 鼠标弹起触发     |
| onmousedown | 鼠标按下触发     |

1. 禁止鼠标右键菜单

   contextmenu主要控制应该何时显示上下文菜单，主要用于程序员取消默认的上下文菜单

   ```js
   document.addEventListener('contextmenu',function(e){
   	e.preventDefault();
   })
   ```

2. 禁止鼠标选中（selectstart 开始选中）

   ```js
   document.addEventListener('selectstart',function(e){
   	e.preventDefault();
   })
   ```

### 操作元素

JavaScript的DOM操作可以改变网页内容、结构和样式，可以利用DOM操作元素来改变元素里面的内容、属性等

#### 改变元素内容

- `element.innerText`从起始位置到终止位置的内容，除去html标签，同时空格和换行也去掉
- `element.innerHTML`从起始位置到终止位置的内容，包括html标签，同时保留空格与换行

#### 修改元素属性

```html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        img {
            width: 300px;
        }
    </style>
</head>

<body>
    <button id="ldh">刘德华</button>
    <button id="zxy">张学友</button> <br>
    <img src="images/ldh.jpg" alt="" title="刘德华">

    <script>
        // 修改元素属性  src
        // 1. 获取元素
        var ldh = document.getElementById('ldh');
        var zxy = document.getElementById('zxy');
        var img = document.querySelector('img');
        // 2. 注册事件  处理程序
        zxy.onclick = function() {
            img.src = 'images/zxy.jpg';
            img.title = '张学友思密达';
        }
        ldh.onclick = function() {
            img.src = 'images/ldh.jpg';
            img.title = '刘德华';
        }
    </script>
</body>

</html>
```

###### 分时问候案例

```html
<body>
    <img src="images/s.gif" alt="">
    <div>上午好</div>
    <script>
        // 根据系统不同时间来判断，所以需要用到日期内置对象
        // 利用多分支语句来设置不同的图片
        // 需要一个图片，并且根据时间修改图片，就需要用到操作元素src属性
        // 需要一个div元素，显示不同问候语，修改元素内容即可
        // 1.获取元素
        var img = document.querySelector('img');
        var div = document.querySelector('div');
        // 2. 得到当前的小时数
        var date = new Date();
        var h = date.getHours();
        // 3. 判断小时数改变图片和文字信息
        if (h < 12) {
            img.src = 'images/s.gif';
            div.innerHTML = '亲，上午好，好好写代码';
        } else if (h < 18) {
            img.src = 'images/x.gif';
            div.innerHTML = '亲，下午好，好好写代码';
        } else {
            img.src = 'images/w.gif';
            div.innerHTML = '亲，晚上好，好好写代码';

        }
    </script>
</body>
```

#### 表单属性修改

```html
<body>
    <button>按钮</button>
    <input type="text" value="输入内容">
    <script>
        // 1. 获取元素
        var btn = document.querySelector('button');
        var input = document.querySelector('input');
        // 2. 注册事件 处理程序
        btn.onclick = function() {
            // input.innerHTML = '点击了';  这个是 普通盒子 比如 div 标签里面的内容
            // 表单里面的值 文字内容是通过 value 来修改的
            input.value = '被点击了';
            // 如果想要某个表单被禁用 不能再点击 disabled  我们想要这个按钮 button禁用
            // btn.disabled = true;
            this.disabled = true;
            // this 指向的是事件函数的调用者 btn
        }
    </script>
```

###### 仿京东隐藏密码案例

```html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .box {
            position: relative;
            width: 400px;
            border-bottom: 1px solid #ccc;
            margin: 100px auto;
        }
        
        .box input {
            width: 370px;
            height: 30px;
            border: 0;
            outline: none;
        }
        
        .box img {
            position: absolute;
            top: 2px;
            right: 2px;
            width: 24px;
        }
    </style>
</head>

<body>
    <div class="box">
        <label for="">
            <img src="images/close.png" alt="" id="eye">
        </label>
        <input type="password" name="" id="pwd">
    </div>
    <script>
        // 1. 获取元素
        var eye = document.getElementById('eye');
        var pwd = document.getElementById('pwd');
        // 2. 注册事件 处理程序
        var flag = 0;
        eye.onclick = function() {
            // 点击一次之后， flag 一定要变化
            if (flag == 0) {
                pwd.type = 'text';
                eye.src = 'images/open.png';
                flag = 1; // 赋值操作
            } else {
                pwd.type = 'password';
                eye.src = 'images/close.png';
                flag = 0;
            }

        }
    </script>
</body>

</html>
```

#### 修改样式属性

`element.style`:行内属性修改

`element.className`:类名样式修改

**注**：

1. JavaScript中属性采用驼峰命名法，如fontSize、backgroundColor
2. JavaScript修改后的属性为行内属性，css层级较高

###### 关闭淘宝二维码案例

```html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .box {
            position: relative;
            width: 74px;
            height: 88px;
            border: 1px solid #ccc;
            margin: 100px auto;
            font-size: 12px;
            text-align: center;
            color: #f40;
            /* display: block; */
        }
        
        .box img {
            width: 60px;
            margin-top: 5px;
        }
        
        .close-btn {
            position: absolute;
            top: -1px;
            left: -16px;
            width: 14px;
            height: 14px;
            border: 1px solid #ccc;
            line-height: 14px;
            font-family: Arial, Helvetica, sans-serif;
            cursor: pointer;
        }
    </style>
</head>

<body>
    <div class="box">
        淘宝二维码
        <img src="images/tao.png" alt="">
        <i class="close-btn">×</i>
    </div>
    <script>
        // 1. 获取元素 
        var btn = document.querySelector('.close-btn');
        var box = document.querySelector('.box');
        // 2.注册事件 程序处理
        btn.onclick = function() {
            box.style.display = 'none';//通过none隐藏盒子
        }
    </script>
</body>

</html>
```

###### 循环精灵图

```html
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <style>
            * {
                margin: 0;
                padding: 0;
            }
            
            li {
                list-style-type: none;
            }
            
            .box {
                width: 250px;
                margin: 100px auto;
            }
            
            .box li {
                float: left;
                width: 24px;
                height: 24px;
                background-color: pink;
                margin: 15px;
                background: url(../../jsapis_material/第一天/images/sprite.png) no-repeat;
            }
        </style>
    </head>

    <body>
        <div class="box">
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <script>
            //1.获取元素
            var lis = document.querySelectorAll('li');
            for(i = 0 ;i < lis.length; i++){
                //让索引号乘以44就是每个li的背景图
                var index = i*44
                lis[i].style.backgroundPosition = '0 -'+index+'px';
            }
        </script>
    </body>
</html>
```

###### 显示隐藏文本框的内容

**分析**：

1. 首先表单需要2个新事件，获得焦点onfocus和失去焦点onblur
2. 获得焦点，判断表单里面内容是否为默认文字，若为默认文字，就清空表单

```html
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>

        <style>
            input{
                color: #ccc;
                outline: none;
            }
        </style>
    </head>
    <body>
        <input type="text" value="手机">
    </body>
    <script>
        //1.获取元素
        var text = document.querySelector('input')
        //2.注册事件 获得焦点事件 onfocus
        text.onfocus = function(){
            if(text.value == '手机'){
                text.value = ''
            }
            //获得焦点需要将文本框里的文字颜色变黑
            text.style.color = '#333'
        }
        text.onblur = function(){
            if(text.value == ''){
                text.value = '手机'
                
            } 
            text.style.color = '#ccc'   
        } 
    </script>
</html>
```

#### 类名样式修改

```html
<style>
    change{
        background-color:purple;
        margin-top:100px;
        color:#fff;
        font-size:24px;
    }
</style>
<body>
    <div>
        文字
    </div>
    <script>
        var div = document.querySelector('div');
        div.onclick = function(){
            this.className = 'change';
        }
      
    </script>
</body>

```

###### 仿新浪注册案例

```html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        div {
            width: 600px;
            margin: 100px auto;
        }
        
        .message {
            display: inline-block;
            font-size: 12px;
            color: #999;
            background: url(images/mess.png) no-repeat left center;
            padding-left: 20px;
        }
        
        .wrong {
            color: red;
            background-image: url(images/wrong.png);
        }
        
        .right {
            color: green;
            background-image: url(images/right.png);
        }
    </style>
</head>

<body>
    <div class="register">
        <input type="password" class="ipt">
        <p class="message">请输入6~16位密码</p>
    </div>
    <script>
        // 首先判断的事件是表单失去焦点 onblur
        // 如果输入正确则提示正确的信息颜色为绿色小图标变化
        // 如果输入不是6到16位，则提示错误信息颜色为红色 小图标变化
        // 因为里面变化样式较多，我们采取className修改样式
        // 1.获取元素
        var ipt = document.querySelector('.ipt');
        var message = document.querySelector('.message');
        //2. 注册事件 失去焦点
        ipt.onblur = function() {
            // 根据表单里面值的长度 ipt.value.length
            if (this.value.length < 6 || this.value.length > 16) {
                // console.log('错误');
                message.className = 'message wrong';
                message.innerHTML = '您输入的位数不对要求6~16位';
            } else {
                message.className = 'message right';
                message.innerHTML = '您输入的正确';
            }
        }
    </script>
</body>

</html>
```

#### 排他思想（算法）

如果有同一组元素，我们想要某一个元素实现某种样式，需要用到循环的排他思想：

1. 所有元素全部清除样式
2. 给当前元素设置样式
3. 注意顺序不能颠倒

###### 换肤案例

1. 这个案例练习的是给一组元素注册事件
2. 给4个小图片利用循环注册点击事件
3. 当点击了这个图片，让页面背景改为当前图片
4. 核心算法：把当前图片的src路径取过来作为body的background

```html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        
        body {
            background: url(images/1.jpg) no-repeat center top;
        }
        
        li {
            list-style: none;
        }
        
        .baidu {
            overflow: hidden;
            margin: 100px auto;
            background-color: #fff;
            width: 410px;
            padding-top: 3px;
        }
        
        .baidu li {
            float: left;
            margin: 0 1px;
            cursor: pointer;
        }
        
        .baidu img {
            width: 100px;
        }
    </style>
</head>

<body>
    <ul class="baidu">
        <li><img src="images/1.jpg"></li>
        <li><img src="images/2.jpg"></li>
        <li><img src="images/3.jpg"></li>
        <li><img src="images/4.jpg"></li>
    </ul>
    <script>
        // 1. 获取元素 
        var imgs = document.querySelector('.baidu').querySelectorAll('img');
        // console.log(imgs);
        // 2. 循环注册事件 
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].onclick = function() {
                // this.src 就是我们点击图片的路径   images/2.jpg
                // console.log(this.src);
                // 把这个路径 this.src 给body 就可以了
                document.body.style.backgroundImage = 'url(' + this.src + ')';
            }
        }
    </script>
</body>

</html>
```

###### 表格隔行变色

1. 用到新的鼠标事件，鼠标经过onmouseover，鼠标离开onmouseout
2. 核心思路：鼠标经过tr行，当前的行变背景颜色，鼠标离开去掉当前背景颜色
3. 注意：thead不需要变换颜色，获取的是tbody里面的行

```html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        table {
            width: 800px;
            margin: 100px auto;
            text-align: center;
            border-collapse: collapse;
            font-size: 14px;
        }
        
        thead tr {
            height: 30px;
            background-color: skyblue;
        }
        
        tbody tr {
            height: 30px;
        }
        
        tbody td {
            border-bottom: 1px solid #d7d7d7;
            font-size: 12px;
            color: blue;
        }
        
        .bg {
            background-color: pink;
        }
    </style>
</head>

<body>
    <table>
        <thead>
            <tr>
                <th>代码</th>
                <th>名称</th>
                <th>最新公布净值</th>
                <th>累计净值</th>
                <th>前单位净值</th>
                <th>净值增长率</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>003526</td>
                <td>农银金穗3个月定期开放债券</td>
                <td>1.075</td>
                <td>1.079</td>
                <td>1.074</td>
                <td>+0.047%</td>
            </tr>
            <tr>
                <td>003526</td>
                <td>农银金穗3个月定期开放债券</td>
                <td>1.075</td>
                <td>1.079</td>
                <td>1.074</td>
                <td>+0.047%</td>
            </tr>
            <tr>
                <td>003526</td>
                <td>农银金穗3个月定期开放债券</td>
                <td>1.075</td>
                <td>1.079</td>
                <td>1.074</td>
                <td>+0.047%</td>
            </tr>
            <tr>
                <td>003526</td>
                <td>农银金穗3个月定期开放债券</td>
                <td>1.075</td>
                <td>1.079</td>
                <td>1.074</td>
                <td>+0.047%</td>
            </tr>
            <tr>
                <td>003526</td>
                <td>农银金穗3个月定期开放债券</td>
                <td>1.075</td>
                <td>1.079</td>
                <td>1.074</td>
                <td>+0.047%</td>
            </tr>
            <tr>
                <td>003526</td>
                <td>农银金穗3个月定期开放债券</td>
                <td>1.075</td>
                <td>1.079</td>
                <td>1.074</td>
                <td>+0.047%</td>
            </tr>
        </tbody>
    </table>
    <script>
        // 1.获取元素 获取的是 tbody 里面所有的行
        var trs = document.querySelector('tbody').querySelectorAll('tr');
        // 2. 利用循环绑定注册事件
        for (var i = 0; i < trs.length; i++) {
            // 3. 鼠标经过事件 onmouseover
            trs[i].onmouseover = function() {
                    // console.log(11);
                    this.className = 'bg';
                }
                // 4. 鼠标离开事件 onmouseout
            trs[i].onmouseout = function() {
                this.className = '';
            }
        }
    </script>
</body>

</html>
```

###### 全选按钮案例

1. 全选和全不选：让下面所有复选框的checked属性（选中状态）跟随全选按钮即可
2. 下面复选框需要全部选中，上面全选才能选中：给下面每个复选框绑定点击事件，每次点击都要循环查看下面所有的复选框是否有没选中的，如果有上面全选则不选中

```html

<!DOCTYPE html>
<html>

<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        * {
            padding: 0;
            margin: 0;
        }
        
        .wrap {
            width: 300px;
            margin: 100px auto 0;
        }
        
        table {
            border-collapse: collapse;
            border-spacing: 0;
            border: 1px solid #c0c0c0;
            width: 300px;
        }
        
        th,
        td {
            border: 1px solid #d0d0d0;
            color: #404060;
            padding: 10px;
        }
        
        th {
            background-color: #09c;
            font: bold 16px "微软雅黑";
            color: #fff;
        }
        
        td {
            font: 14px "微软雅黑";
        }
        
        tbody tr {
            background-color: #f0f0f0;
        }
        
        tbody tr:hover {
            cursor: pointer;
            background-color: #fafafa;
        }
    </style>

</head>

<body>
    <div class="wrap">
        <table>
            <thead>
                <tr>
                    <th>
                        <input type="checkbox" id="j_cbAll" />
                    </th>
                    <th>商品</th>
                    <th>价钱</th>
                </tr>
            </thead>
            <tbody id="j_tb">
                <tr>
                    <td>
                        <input type="checkbox" />
                    </td>
                    <td>iPhone8</td>
                    <td>8000</td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" />
                    </td>
                    <td>iPad Pro</td>
                    <td>5000</td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" />
                    </td>
                    <td>iPad Air</td>
                    <td>2000</td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" />
                    </td>
                    <td>Apple Watch</td>
                    <td>2000</td>
                </tr>

            </tbody>
        </table>
    </div>
    <script>
        // 1. 全选和取消全选做法：  让下面所有复选框的checked属性（选中状态） 跟随 全选按钮即可
        // 获取元素
        var j_cbAll = document.getElementById('j_cbAll'); // 全选按钮
        var j_tbs = document.getElementById('j_tb').getElementsByTagName('input'); // 下面所有的复选框
        // 注册事件
        j_cbAll.onclick = function() {
                // this.checked 它可以得到当前复选框的选中状态如果是true 就是选中，如果是false 就是未选中
                console.log(this.checked);
                for (var i = 0; i < j_tbs.length; i++) {
                    j_tbs[i].checked = this.checked;
                }
            }
            // 2. 下面复选框需要全部选中， 上面全选才能选中做法： 给下面所有复选框绑定点击事件，每次点击，都要循环查看下面所有的复选框是否有没选中的，如果有一个没选中的， 上面全选就不选中。
        for (var i = 0; i < j_tbs.length; i++) {
            j_tbs[i].onclick = function() {
                // flag 控制全选按钮是否选中
                var flag = true;
                // 每次点击下面的复选框都要循环检查者4个小按钮是否全被选中
                for (var i = 0; i < j_tbs.length; i++) {
                    if (!j_tbs[i].checked) {
                        flag = false;
                        break; // 退出for循环 这样可以提高执行效率 因为只要有一个没有选中，剩下的就无需循环判断了
                    }
                }
                j_cbAll.checked = flag;
            }
        }
    </script>
</body>

</html>
```

#### 自定义属性操作

##### 1.获取元素属性值

- element.属性：只可获取内置属性
- element.getAttribute('属性')：可获取自定义属性

##### 2.设置属性值

- element.属性 = ‘值'：设置内置属性值
- element.setAttribute('属性'，'值')：设置自定义属性

##### 3.移除属性

- element.removeAttribute('属性')：删除属性

###### tab栏切换案例

1. tab栏切换有2个大的模块
2. 上面模块的选项卡点击某一个，底色会是红色，其余不变（排他思想）修改类名方式
3. 下面模块内容跟随上面的选项卡变化，所以下面模块变化写到点击事件里面
4. 规律：下面的模块显示内容和上面的选项卡一一对应
5. 核心思路：给上面的tab_list里面的所有li添加自定义属性，属性值从0开始
6. 当我们点击tab_list里面某个小li，让tab_con里面对应序号的内容显示，其余隐蔽 

```html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        
        li {
            list-style-type: none;
        }
        
        .tab {
            width: 978px;
            margin: 100px auto;
        }
        
        .tab_list {
            height: 39px;
            border: 1px solid #ccc;
            background-color: #f1f1f1;
        }
        
        .tab_list li {
            float: left;
            height: 39px;
            line-height: 39px;
            padding: 0 20px;
            text-align: center;
            cursor: pointer;
        }
        
        .tab_list .current {
            background-color: #c81623;
            color: #fff;
        }
        
        .item_info {
            padding: 20px 0 0 20px;
        }
        
        .item {
            display: none;
        }
    </style>
</head>

<body>
    <div class="tab">
        <div class="tab_list">
            <ul>
                <li class="current">商品介绍</li>
                <li>规格与包装</li>
                <li>售后保障</li>
                <li>商品评价（50000）</li>
                <li>手机社区</li>
            </ul>
        </div>
        <div class="tab_con">
            <div class="item" style="display: block;">
                商品介绍模块内容
            </div>
            <div class="item">
                规格与包装模块内容
            </div>
            <div class="item">
                售后保障模块内容
            </div>
            <div class="item">
                商品评价（50000）模块内容
            </div>
            <div class="item">
                手机社区模块内容
            </div>

        </div>
    </div>
    <script>
        // 获取元素
        var tab_list = document.querySelector('.tab_list');
        var lis = tab_list.querySelectorAll('li');
        var items = document.querySelectorAll('.item');
        // for循环绑定点击事件
        for (var i = 0; i < lis.length; i++) {
            // 开始给5个小li 设置索引号 
            lis[i].setAttribute('index', i);
            lis[i].onclick = function() {
                // 1. 上的模块选项卡，点击某一个，当前这一个底色会是红色，其余不变（排他思想） 修改类名的方式

                // 干掉所有人 其余的li清除 class 这个类
                for (var i = 0; i < lis.length; i++) {
                    lis[i].className = '';
                }
                // 留下我自己 
                this.className = 'current';
                // 2. 下面的显示内容模块
                var index = this.getAttribute('index');
                console.log(index);
                // 干掉所有人 让其余的item 这些div 隐藏
                for (var i = 0; i < items.length; i++) {
                    items[i].style.display = 'none';
                }
                // 留下我自己 让对应的item 显示出来
                items[index].style.display = 'block';
            }
        }
    </script>
</body>

</html>
```

##### 4.H5自定义属性

**自定义属性的目的**：为了保存并使用数据，有些数据可以保存到页面中和不用保存到数据库中

1. **设置H5自定义属性**

   H5规定自定义属性data-开头作为属性名并赋值

   ```html
   <div data-index = "1"></div>
   ```

2. **获取H5自定义属性**

   - 兼容性获取 `element.getAttribute('data-index')`
   - `element.dataset.index` 或 `element.dataset['index']` ie11以上
   - 如果自定义属性里面有多个-连接的单词，获取时采用驼峰命名法

#### 节点操作

##### 节点概述

一般的，节点至少拥有nodeType、nodeName、nodeValue三个基本属性

- 元素节点 nodeType = 1
- 属性节点 nodeType = 2
- 文本节点 nodeType = 3 （文本节点包含文字、空格、换行）

##### 节点层级

1. 父级节点

   ```html
   node.parentNode
   ```

   - parentNode 属性可返回某节点的亲父结点
   - 若指定的节点无父节点则返回null

2. 子节点

   ```javascript
   parentNode.childNodes(标准)//childNodes包含元素节点，文本节点等等
   parentNode.children//获得所有的子元素节点
   parentNode.firstChild//第一个子节点，不管时文本节点还是元素节点
   parentNode.firstElementChild//第一个子元素节点，找不到则返回null，ie9以上
   parentNode.lastElementChild//最后子元素节点，找不到则返回null，ie9以上
   
   //实际写法
   parentNode.children[0]
   parentNode.children[parentNode.children.length-1]
   ```

3. 兄弟节点

   ```javascript
   node.nextSibling//下一个兄弟节点，包括元素节点或文本节点
   node.previousSibling//上一个兄弟节点
   node.nextElementSibling//下一个兄弟元素节点
   node.previousElementSibling//上一个兄弟元素节点，ie9以上
   ```

4. 创建节点

   ```javascript
   document.creatElement('tagName')//动态创建元素节点
   ```

5. 添加节点

   ```javascript
   node.appendChlid(child)//将创建的元素节点添加到父节点node的尾部
   node.insertBefore(child,指定元素)//将节点添加至指定元素的前面
   ```

6. 删除节点

   ```js
   node.removeChild(child)//删除父元素中的子节点
   ```

7. 复制节点

   ```js
   node.cloneNode()//返回该方法节点的副本
   ```

   - 如果括号参数为**空或false**，则为**浅拷贝**，只克隆复制节点本身标签，不克隆里面的子节点
   - 如果括号参数为**true**，则为**深拷贝**，克隆复制节点里的标签和内容

###### 下拉菜单案例

1. 导航栏里面的li都要有鼠标经过效果，需要循环注册鼠标经过事件
2. 核心原理：鼠标经过li里面的第二个孩子ul显示，鼠标离开则隐藏

```html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        
        li {
            list-style-type: none;
        }
        
        a {
            text-decoration: none;
            font-size: 14px;
        }
        
        .nav {
            margin: 100px;
        }
        
        .nav>li {
            position: relative;
            float: left;
            width: 80px;
            height: 41px;
            text-align: center;
        }
        
        .nav li a {
            display: block;
            width: 100%;
            height: 100%;
            line-height: 41px;
            color: #333;
        }
        
        .nav>li>a:hover {
            background-color: #eee;
        }
        
        .nav ul {
            display: none;
            position: absolute;
            top: 41px;
            left: 0;
            width: 100%;
            border-left: 1px solid #FECC5B;
            border-right: 1px solid #FECC5B;
        }
        
        .nav ul li {
            border-bottom: 1px solid #FECC5B;
        }
        
        .nav ul li a:hover {
            background-color: #FFF5DA;
        }
    </style>
</head>

<body>
    <ul class="nav">
        <li>
            <a href="#">微博</a>
            <ul>
                <li>
                    <a href="">私信</a>
                </li>
                <li>
                    <a href="">评论</a>
                </li>
                <li>
                    <a href="">@我</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#">微博</a>
            <ul>
                <li>
                    <a href="">私信</a>
                </li>
                <li>
                    <a href="">评论</a>
                </li>
                <li>
                    <a href="">@我</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#">微博</a>
            <ul>
                <li>
                    <a href="">私信</a>
                </li>
                <li>
                    <a href="">评论</a>
                </li>
                <li>
                    <a href="">@我</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#">微博</a>
            <ul>
                <li>
                    <a href="">私信</a>
                </li>
                <li>
                    <a href="">评论</a>
                </li>
                <li>
                    <a href="">@我</a>
                </li>
            </ul>
        </li>
    </ul>
    <script>
        // 1. 获取元素
        var nav = document.querySelector('.nav');
        var lis = nav.children; // 得到4个小li
        // 2.循环注册事件
        for (var i = 0; i < lis.length; i++) {
            lis[i].onmouseover = function() {
                this.children[1].style.display = 'block';
            }
            lis[i].onmouseout = function() {
                this.children[1].style.display = 'none';
            }
        }
    </script>
</body>

</html>
```

###### 简单文本发布案例

1. 核心思路：点击按钮之后，就动态创建一个li，添加到ul
2. 创建li的同时，将文本域里的值通过li.innerHTML赋值给li

```html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        
        body {
            padding: 100px;
        }
        
        textarea {
            width: 200px;
            height: 100px;
            border: 1px solid pink;
            outline: none;
            resize: none;
        }
        
        ul {
            margin-top: 50px;
        }
        
        li {
            width: 300px;
            padding: 5px;
            background-color: rgb(245, 209, 243);
            color: red;
            font-size: 14px;
            margin: 15px 0;
        }
    </style>
</head>

<body>
    <textarea name="" id=""></textarea>
    <button>发布</button>
    <ul>

    </ul>
    <script>
        // 1. 获取元素
        var btn = document.querySelector('button');
        var text = document.querySelector('textarea');
        var ul = document.querySelector('ul');
        // 2. 注册事件
        btn.onclick = function() {
            if (text.value == '') {
                alert('您没有输入内容');
                return false;
            } else {
                // console.log(text.value);
                // (1) 创建元素
                var li = document.createElement('li');
                // 先有li 才能赋值
                li.innerHTML = text.value;
                // (2) 添加元素
                // ul.appendChild(li);
                ul.insertBefore(li, ul.children[0]);
            }
        }
    </script>
</body>

</html>
```

###### 删除留言案例

1. 把文本域里的值赋值给li的时候，添加一个删除的链接
2. 需要把所有的链接获取过来，当我们点击当前链接的时候，删除当前链接所在的li
3. 阻止链接跳转需要添加javascript:void(0);或者 javascript:;

```html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        
        body {
            padding: 100px;
        }
        
        textarea {
            width: 200px;
            height: 100px;
            border: 1px solid pink;
            outline: none;
            resize: none;
        }
        
        ul {
            margin-top: 50px;
        }
        
        li {
            width: 300px;
            padding: 5px;
            background-color: rgb(245, 209, 243);
            color: red;
            font-size: 14px;
            margin: 15px 0;
        }
        
        li a {
            float: right;
        }
    </style>
</head>

<body>
    <textarea name="" id=""></textarea>
    <button>发布</button>
    <ul>

    </ul>
    <script>
        // 1. 获取元素
        var btn = document.querySelector('button');
        var text = document.querySelector('textarea');
        var ul = document.querySelector('ul');
        // 2. 注册事件
        btn.onclick = function() {
            if (text.value == '') {
                alert('您没有输入内容');
                return false;
            } else {
                // console.log(text.value);
                // (1) 创建元素
                var li = document.createElement('li');
                // 先有li 才能赋值
                li.innerHTML = text.value + "<a href='javascript:;'>删除</a>";
                // (2) 添加元素
                // ul.appendChild(li);
                ul.insertBefore(li, ul.children[0]);
                // (3) 删除元素 删除的是当前链接的li  它的父亲
                var as = document.querySelectorAll('a');
                for (var i = 0; i < as.length; i++) {
                    as[i].onclick = function() {
                        // node.removeChild(child); 删除的是 li 当前a所在的li  this.parentNode;
                        ul.removeChild(this.parentNode);
                    }
                }
            }
        }
    </script>
</body>

</html>
```

###### 动态生成表格案例

1. 采取对象形式存储，放入数组
2. 所有的数据都是放入tbody中的行里面
3. 创建行数与人数相同

```html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        table {
            width: 500px;
            margin: 100px auto;
            border-collapse: collapse;
            text-align: center;
        }
        
        td,
        th {
            border: 1px solid #333;
        }
        
        thead tr {
            height: 40px;
            background-color: #ccc;
        }
    </style>
</head>

<body>
    <table cellspacing="0">
        <thead>
            <tr>
                <th>姓名</th>
                <th>科目</th>
                <th>成绩</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>

        </tbody>
    </table>
    <script>
        // 1.先去准备好学生的数据
        var datas = [{
            name: '魏璎珞',
            subject: 'JavaScript',
            score: 100
        }, {
            name: '弘历',
            subject: 'JavaScript',
            score: 98
        }, {
            name: '傅恒',
            subject: 'JavaScript',
            score: 99
        }, {
            name: '明玉',
            subject: 'JavaScript',
            score: 88
        }, {
            name: '大猪蹄子',
            subject: 'JavaScript',
            score: 0
        }];
        // 2. 往tbody 里面创建行： 有几个人（通过数组的长度）我们就创建几行
        var tbody = document.querySelector('tbody');
        for (var i = 0; i < datas.length; i++) { // 外面的for循环管行 tr
            // 1. 创建 tr行
            var tr = document.createElement('tr');
            tbody.appendChild(tr);
            // 2. 行里面创建单元格(跟数据有关系的3个单元格) td 单元格的数量取决于每个对象里面的属性个数  for循环遍历对象 datas[i]
            for (var k in datas[i]) { // 里面的for循环管列 td
                // 创建单元格 
                var td = document.createElement('td');
                // 把对象里面的属性值 datas[i][k] 给 td  
                // console.log(datas[i][k]);
                td.innerHTML = datas[i][k];
                tr.appendChild(td);
            }
            // 3. 创建有删除2个字的单元格 
            var td = document.createElement('td');
            td.innerHTML = '<a href="javascript:;">删除 </a>';
            tr.appendChild(td);

        }
        // 4. 删除操作 开始 
        var as = document.querySelectorAll('a');
        for (var i = 0; i < as.length; i++) {
            as[i].onclick = function() {
                // 点击a 删除 当前a 所在的行(链接的爸爸的爸爸)  node.removeChild(child)  
                tbody.removeChild(this.parentNode.parentNode)
            }
        }
        // for(var k in obj) {
        //     k 得到的是属性名
        //     obj[k] 得到是属性值
        // }
    </script>
</body>

</html>
```

##### 三种动态创建元素的区别

- document.write()：直接将内容写入页面内容流，但是文档流执行完毕，在调用这句话会导致页面重绘

- element.innerHTML()：是将内容写入某个DOM节点，不会导致页面全部重绘；创建多个元素效率更高（不要采用拼接字符串，采取数组形式拼接）

  ```html
  <div></div>
  <script>
      var div = document.querySelector('div');
      var arr = []
      for(var i = 0; i < 1000; i++){
          arr.push('<a href="#">baidu</a>');
      }
      div.innerHTML = arr.join('');
  </script>
  ```

- document.createElement()：创建多个元素效率稍低，但是结构清晰

### DOM重点核心

#### 创建

- document.write
- element.innerHTML
- document.createElement

#### 增

- node.appendChild
- insertBefore

#### 删

- removeChild

#### 改

- 修改元素属性：src href title 
- 修改普通元素内容：innerHTML innerText
- 修改表单内容：value type disabled
- 修改元素样式：style className

#### 查

获取dom元素

- DOM提供的API方法：getElementById、getElementByTagName 古老方法不推荐
- H5提供方法：querySeletor、querySelectorAll
- 利用节点操作：父节点(parentNode)、子(children)、兄(previousElementSibling、nextElementSibling)

#### 属性操作

针对自定义属性

- setAttribute：设置dom属性
- getAttribute：获得dom属性
- removeAttribute：移除属性

### 事件高级

#### 注册事件概述

注册事件有两种方式：传统方式和方法监听注册方式

##### 传统注册方式

- 利用on开头的事件
- 特点：注册事件的唯一性
- 同一个元素同一个事件只能设置一个处理函数，最后注册的处理函数会覆盖前面注册的处理函数

##### 方法监听注册方式

- w3c标准 推荐方式
- addEventListener()是一个方法
- ie9以前 attachEvent()
- 特点：同一个元素同一个事件可以注册多个监听器
- 按注册事件顺序依次执行

##### addEventListener

```js
eventTarget.addEventListener(type,listener[,useCapture])
```

将指定的监听器注册到eventTarget上，当对象触发指定事件是，就会执行事件处理函数。

参数：

- **type**：事件类型字符串，如click、mouseover，不带on加引号
- **listener**：事件处理函数，事件发生就会调用该函数，调用时不需要加小括号
- **useCapture**：可选参数，是个布尔值，默认false

#### 删除事件

##### 删除事件方式

- 传统方式：element.onclick = 'none'

- 方法监听注册方式：

  ```js
  eventTarget.removeEventListener(type,listener[,useCapture])
  eventTarget.detachEvent(ontype,callback)
  ```

#### DOM事件流

**事件流**描述的是从页面中接收事件的顺序

事件发生时会在元素节点之间按照特定的顺序传播，这个**传播过程**即**DOM事件流**

**注**：

1. js代码中只能执行捕获或冒泡一种阶段
2. onclick和attachEvent只能得到冒泡阶段
3. addEventListener中的参数useCapture若为false则是冒泡阶段，若是true就是捕获阶段
4. 有些事件没有冒泡，如：onfocus、onblur、onmouseenter、onmouseleave

![image-20220207173212246](C:\Users\Sagittarius\AppData\Roaming\Typora\typora-user-images\image-20220207173212246.png)

- 事件冒泡：时间开始时由最具体的元素接受，然后逐级向上传播到DOM最顶层节点的过程
- 事件捕获：由DOM最顶层结点开始，然后逐级向下传播到最具体的元素接收的过程

#### 事件冒泡和事件捕获的区别

- 事件冒泡：目标元素事件先触发，然后父元素事件触发
- 事件捕获：父元素事件先触发，然后目标元素事件触发

**事件执行顺序是：**

- 先事件捕获（从 Windows -> document 依次往下）
- 再是目标事件处理
- 最后是事件冒泡

#### 事件对象

1. **event对象**：代表事件的状态，比如事件在其中发生的元素、键盘按键的状态、鼠标的位置、鼠标按钮的状态。
2. event对象写到监听函数的小括号里面，当形参来看
3. 事件对象只有有了事件才会存在，它是系统给我们自动创建的，不需要我们传递参数
4. 兼容性问题 ie678 通过window.event

##### 事件对象的常见属性和方法

| 属性              | 描述                                                         |
| :---------------- | :----------------------------------------------------------- |
| target            | 返回触发此事件的元素（事件的目标节点）。e.target 返回的是触发事件的对象，this 返回的是绑定事件的对象 |
| srcElement        | 对于生成事件的 Window 对象、Document 对象或 Element 对象的引用 |
| currentTarget     | 返回其事件监听器触发该事件的元素。（this）                   |
| type              | 返回当前 Event 对象表示的事件的名称。                        |
| bubbles           | 返回布尔值，指示事件是否是起泡事件类型。                     |
| preventDefault()  | 通知浏览器不要执行与事件关联的默认动作。                     |
| returnValue       | 如果设置了该属性，它的值比事件句柄的返回值优先级高。把这个属性设置为 fasle，可以取消发生事件的源元素的默认动作。 |
| stopPropagation() | 不再派发事件。                                               |
| cancelBubble      | 如果事件句柄想阻止事件传播到包容对象，必须把该属性设为true ie6-8 |
| cancelable        | 返回布尔值，指示事件是否可拥可取消的默认动作。               |
| eventPhase        | 返回事件传播的当前阶段。                                     |
| timeStamp         | 返回事件生成的日期和时间。                                   |
| initEvent()       | 初始化新创建的 Event 对象的属性。                            |

##### 阻止事件冒泡的两种方式

- 标准写法：利用事件对象里面的stopPropagation()方法
- ie6-8：利用事件的cancelBubble属性

##### 事件委托（代理、委派）

事件委托也成为事件代理，在jQuery里面成为事件委派

##### 事件委托的原理

事件委托（即事件代理），是利用**事件冒泡原理**，把事件监听绑定在元素的父级上。当元素被点击时，父级上绑定的点击事件就会被触发，事件触发函数里通过判断 e.target 上的 data-name 或 class 等标识来执行不同的逻辑。<u>不是每个子节点都设置事件监听器，而是事件监听器设置在其父节点上，然后利用冒泡原理影响设置每个子节点</u>

##### 事件委托的作用

我们只操作了一次DOM，提高了程序的性能

##### 优点

1. 减少事件注册，节省内存。比如，在table上代理所有td的click事件。在ul上代理所有li的click事件。
2. 简化了dom节点更新时，相应事件的更新。比如不用在新添加的li上绑定click事件。当删除某个li时，不用移解绑上面的click事件。

##### 缺点

1. 事件委托基于冒泡，对于不冒泡的事件不支持。
2. 层级过多，冒泡过程中，可能会被某层阻止掉（event.stopPropagation）。
3. 理论上委托会导致浏览器频繁调用处理函数，虽然很可能不需要处理。所以建议就近委托，比如在table上代理td，而不是在document上代理td。
4. 把所有事件都用代理就可能会出现事件误判。比如，在document中代理了所有button的click事件，另外的人在引用改js时，可能不知道，造成单击button触发了两个click事件。

#### 鼠标，键盘事件属性

| 属性                                                         | 描述                                             |
| :----------------------------------------------------------- | :----------------------------------------------- |
| [clientX](https://www.w3school.com.cn/htmldom/event_clientx.asp) | 返回当事件被触发时，鼠标指针在可视区的水平坐标。 |
| [clientY](https://www.w3school.com.cn/htmldom/event_clienty.asp) | 返回当事件被触发时，鼠标指针在可视区的垂直坐标。 |
| pageX                                                        | 返回鼠标相对于文档页面的x坐标 ie9+支持           |
| pageY                                                        | 返回鼠标相对于文档页面的y坐标 ie9+支持           |
| [screenX](https://www.w3school.com.cn/htmldom/event_screenx.asp) | 返回当事件被触发，鼠标指针对电脑屏幕的水平坐标。 |
| [screenY](https://www.w3school.com.cn/htmldom/event_screeny.asp) | 返回当事件被触发，鼠标指针对电脑屏幕的垂直坐标。 |
| [altKey](https://www.w3school.com.cn/htmldom/event_altkey.asp) | 返回当事件被触发时，"ALT" 是否被按下。           |
| [button](https://www.w3school.com.cn/htmldom/event_button.asp) | 返回当事件被触发时，哪个鼠标按钮被点击。         |
| [ctrlKey](https://www.w3school.com.cn/htmldom/event_ctrlkey.asp) | 返回当事件被触发时，"CTRL" 键是否被按下。        |
| [metaKey](https://www.w3school.com.cn/htmldom/event_metakey.asp) | 返回当事件被触发时，"meta" 键是否被按下。        |
| [relatedTarget](https://www.w3school.com.cn/htmldom/event_relatedtarget.asp) | 返回与事件的目标节点相关的节点。                 |
| [shiftKey](https://www.w3school.com.cn/htmldom/event_shiftkey.asp) | 返回当事件被触发时，"SHIFT" 键是否被按下。       |

###### 跟随鼠标的天使案例

1. 鼠标不断移动，使用鼠标移动事件：mousemove
2. 在页面中移动，给document注册事件
3. 图片要移动距离，而且不占位置，我们使用绝对定位即可
4. 核心原理：鼠标每次一移动，都会获得鼠标的新坐标，把这个x和y坐标作为图片的top和left的值

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        img {
            position: absolute;
            top: 2px;
        }
    </style>
</head>

<body>
    <img src="images/angel.gif" alt="">
    <script>
        var pic = document.querySelector('img');
        document.addEventListener('mousemove', function(e) {
            // 1. mousemove只要我们鼠标移动1px 就会触发这个事件
            // console.log(1);
            // 2.核心原理： 每次鼠标移动，我们都会获得最新的鼠标坐标， 把这个x和y坐标做为图片的top和left 值就可以移动图片
            var x = e.pageX;
            var y = e.pageY;
            console.log('x坐标是' + x, 'y坐标是' + y);
            //3 . 千万不要忘记给left 和top 添加px 单位
            pic.style.left = x - 50 + 'px';
            pic.style.top = y - 40 + 'px';


        });
    </script>
</body>

</html>
```

#### 常用的键盘事件

| 键盘事件                                                     | 触发条件                                                     |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [onkeyup](https://www.w3school.com.cn/htmldom/event_onkeyup.asp) | 某个键盘按键被松开。3 ，不区分大小写                         |
| [onkeydown](https://www.w3school.com.cn/htmldom/event_onkeydown.asp) | 某个键盘按键被按下。一直按着不松开 执行顺序1，不区分大小写，得到大写的ASCII |
| [onkeypress](https://www.w3school.com.cn/htmldom/event_onkeypress.asp) | 某个键盘按键被按下并松开。不识别功能键2，区分大小写          |

###### 京东按键输入案例

1. 核心思路：检测用户是否按下s键，如果按下，就把光标定位到搜索
2. 使用键盘事件对象里面的keyCode判断用户是否按下s键
3. 搜索框获得焦点，使用js里面的focus()方法

```html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <input type="text">
    <script>
        // 核心思路： 检测用户是否按下了s 键，如果按下s 键，就把光标定位到搜索框里面
        // 使用键盘事件对象里面的keyCode 判断用户按下的是否是s键
        // 搜索框获得焦点： 使用 js 里面的 focus() 方法
        var search = document.querySelector('input');
        document.addEventListener('keyup', function(e) {
            // console.log(e.keyCode);
            if (e.keyCode === 83) {
                search.focus();
            }
        })
    </script>
</body>

</html>
```

###### 模拟京东快递单号查询案例

1. 快递单号输入内容时，上面的大号字体盒子（con）显示
2. 表单检测用户输入：给表单添加键盘输入事件
3. 同时把快递单号里面的值（value）赋值给con盒子（innerHTML）作为内容
4. 如果快递单号为空，隐藏盒子

```html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        
        .search {
            position: relative;
            width: 178px;
            margin: 100px;
        }
        
        .con {
            display: none;
            position: absolute;
            top: -40px;
            width: 171px;
            border: 1px solid rgba(0, 0, 0, .2);
            box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
            padding: 5px 0;
            font-size: 18px;
            line-height: 20px;
            color: #333;
        }
        
        .con::before {
            content: '';
            width: 0;
            height: 0;
            position: absolute;
            top: 28px;
            left: 18px;
            border: 8px solid #000;
            border-style: solid dashed dashed;
            border-color: #fff transparent transparent;
        }
    </style>
</head>

<body>
    <div class="search">
        <div class="con">123</div>
        <input type="text" placeholder="请输入您的快递单号" class="jd">
    </div>
    <script>
        // 快递单号输入内容时， 上面的大号字体盒子（con）显示(这里面的字号更大）
        // 表单检测用户输入： 给表单添加键盘事件
        // 同时把快递单号里面的值（value）获取过来赋值给 con盒子（innerText）做为内容
        // 如果快递单号里面内容为空，则隐藏大号字体盒子(con)盒子
        var con = document.querySelector('.con');
        var jd_input = document.querySelector('.jd');
        jd_input.addEventListener('keyup', function() {
                // console.log('输入内容啦');
                if (this.value == '') {
                    con.style.display = 'none';
                } else {
                    con.style.display = 'block';
                    con.innerText = this.value;
                }
            })
            // 当我们失去焦点，就隐藏这个con盒子
        jd_input.addEventListener('blur', function() {
                con.style.display = 'none';
            })
            // 当我们获得焦点，就显示这个con盒子
        jd_input.addEventListener('focus', function() {
            if (this.value !== '') {
                con.style.display = 'block';
            }
        })
    </script>
</body>
```

## BOM

### BOM概述

BOM（Browser Object Model）**浏览器对象模型**，它提供了独立于内容而**与浏览器窗口进行交互的对象**，其核心对象时window

| DOM                      | BOM                                        |
| ------------------------ | ------------------------------------------ |
| 文档对象模型             | 浏览器对象模型                             |
| 把文档当作一个对象       | 把浏览器当作一个对象                       |
| 顶级对象是**document**   | 顶级对象是**window**                       |
| 主要学习的是操作页面元素 | 学习的是浏览器窗口交互的一些对象           |
| W3C标准规范              | 浏览器厂商在各自浏览器上定义的，兼容性较差 |

window对象是浏览器的顶级对象，它具有双重角色

1. 它是js访问浏览器窗口的一个接口
2. 它是一个全局对象，定义在全局作用域中的变量，函数会变成window对象的属性和方法
3. window下的一个特殊属性window.name

### window对象常见事件

#### 窗口加载事件

```js
window.onload = function(){}
window.addEventListener('load',function(){})
```

页面全部加载完后在执行触发事件

传统方式只能写一次，如果有多个，会以最后一个window.onload为准

使用addEventListener则没有限制

```js
document.addEventListener('DOMContentLoaded',function(){})
```

DOMContentLoaded事件触发时，仅当DOM加载完成，不包括样式表，图片，flash等，ie9以上支持

load 等页面内容全部加载完毕，包含页面dom元素，图片，flash，css等

DOMContentLoaded 是DOM加载完毕，加载速度比load更快

##### 区别

1. DOMContentLoaded事件

   页面dom加载完成触发，无需等待后续图片等资源

2. load事件

   整个页面所有资源加载完成之后触发；load一定在DOMContentLoaded之后触发

#### 调整窗口大小事件

```js
window.onresize = function(){}
window.addEventListener('resize',function(){})
```

window.innerWidth() 获得窗口宽度尺寸

### 定时器

#### 两种定时器

- setTimeout()
- setInterval()

#### setTimeout()定时器

```js
window.setTimeout(调用函数，[延迟的毫秒数]);
var timer = setTimeout()
```

设置一个定时器，该定时器在定时器到期后执行调用函数，**只调用一次**

1. 这个window在调用时可以省略
2. 这个延时时间单位是毫秒，省略不写则为0
3. 可以直接写函数，也可以使用函数名
4. 页面中可能有很多的定时器，我们给定时器加标识符

##### 停止setTimeout()定时器

```js
window.clearTimeout(timeoutID)
```

#### setInterval()定时器

```
window.setInterval(调用函数，[延迟的毫秒数]);
```

重复调用一个回调函数，每隔这个时间就去调用一次，**调用多次**

##### 停止setInterval()定时器

```js
window.clearInterval(timeoutID)
```

###### 5秒自动关闭广告案例

```html
<body>
    <img src ="" alt = "" class = "">
    <script>
        var img = document.querySelector('img')
        function callback(){
            img.style.display = 'none'
        }
    	setTimeout(callback,5000)
    </script>

</body>
```

###### 倒计时案例

1. 倒计时是不断变化的，因此需要定时器来自动变化(setInterval)
2. 3个盒子分别存放时分秒
3. 三个黑色盒子利用innerHTML放入计算的小时分钟秒数
4. 开启定时器之前先调用一次countDown()

```html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        div {
            margin: 200px;
        }
        
        span {
            display: inline-block;
            width: 40px;
            height: 40px;
            background-color: #333;
            font-size: 20px;
            color: #fff;
            text-align: center;
            line-height: 40px;
        }
    </style>
</head>

<body>
    <div>
        <span class="hour">1</span>
        <span class="minute">2</span>
        <span class="second">3</span>
    </div>
    <script>
        // 1. 获取元素 
        var hour = document.querySelector('.hour'); // 小时的黑色盒子
        var minute = document.querySelector('.minute'); // 分钟的黑色盒子
        var second = document.querySelector('.second'); // 秒数的黑色盒子
        var inputTime = +new Date('2019-5-1 18:00:00'); // 返回的是用户输入时间总的毫秒数
        countDown(); // 我们先调用一次这个函数，防止第一次刷新页面有空白 
        // 2. 开启定时器
        setInterval(countDown, 1000);

        function countDown() {
            var nowTime = +new Date(); // 返回的是当前时间总的毫秒数
            var times = (inputTime - nowTime) / 1000; // times是剩余时间总的秒数 
            var h = parseInt(times / 60 / 60 % 24); //时
            h = h < 10 ? '0' + h : h;
            hour.innerHTML = h; // 把剩余的小时给 小时黑色盒子
            var m = parseInt(times / 60 % 60); // 分
            m = m < 10 ? '0' + m : m;
            minute.innerHTML = m;
            var s = parseInt(times % 60); // 当前的秒
            s = s < 10 ? '0' + s : s;
            second.innerHTML = s;
        }
    </script>
</body>

</html>
```

###### 发送短信案例

1. 按点击之后，立刻将按钮禁用 disabled=true
2. 按钮里的内容会发生变化，注意button里面的内容通过innerHTML修改
3. 里面的秒数有变化，需要定时器
4. 定义一个变量，在定时器里不断递减
5. 若变量为0 ，停止定时器，并复原按钮

```html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    手机号码： <input type="number"> <button>发送</button>
    <script>
        // 按钮点击之后，会禁用 disabled 为true 
        // 同时按钮里面的内容会变化， 注意 button 里面的内容通过 innerHTML修改
        // 里面秒数是有变化的，因此需要用到定时器
        // 定义一个变量，在定时器里面，不断递减
        // 如果变量为0 说明到了时间，我们需要停止定时器，并且复原按钮初始状态
        var btn = document.querySelector('button');
        var time = 3; // 定义剩下的秒数
        btn.addEventListener('click', function() {
            btn.disabled = true;
            var timer = setInterval(function() {
                if (time == 0) {
                    // 清除定时器和复原按钮
                    clearInterval(timer);
                    btn.disabled = false;
                    btn.innerHTML = '发送';
                } else {
                    btn.innerHTML = '还剩下' + time + '秒';
                    time--;
                }
            }, 1000);

        })
    </script>
</body>

</html>
```

#### this

this的指向在函数定义的时候是确定不了的，只有函数执行的时候才能确定this到底指向谁，一般情况下this的最终指向是哪个调用它的对象

1. 全局作用域或者普通函数中this指向全局对象window（注意定时器里面的this指向window）
2. 方法调用中谁调用指向谁
3. 构造函数中，this指向构造函数的实例

### JS执行机制

#### JS单线程

JavaScript语言的一大特点就是单线程，同一时间只能做一件事。

产生问题：如果JS执行的时间过长，这样就会造成页面渲染不连贯

#### 同步和异步

HTML5提出Web Worker标准，允许JavaScript脚本创建多个线程

##### 同步

前一个任务结束后再执行后一个任务，程序的执行顺序与任务的排列顺序一致

##### 同步任务

同步任务都放在了主线程上执行，形成一个**执行栈**

##### 异步

执行一个任务的同时执行其他任务

##### 异步任务

js的异步是通过**回调函数**实现的：

1. 普通事件：click resize
2. 资源加载：load error
3. 定时器：setInterval setTimeout

异步任务将任务放入任务队列（消息队列）

#### JS执行机制

1. 先执行**执行栈中的同步任务**
2. 异步任务（回调函数）放入任务队列中
3. 一旦执行栈中的所有同步任务执行完毕，系统就会按次序读取任务队列中的异步任务，于是被读取的异步任务结束等待状态，进入执行栈，开始执行

![image-20220208165029915](C:\Users\Sagittarius\AppData\Roaming\Typora\typora-user-images\image-20220208165029915.png)

### location对象

#### 概述

window对象给我们提供了一个**location属性**，用于**获取或设置窗体的URL**，并且可以用于**解析URL**。因为这个属性返回的是一个对象，所以我们将这个属性也称为**location对象**

#### URL

**统一资源定位符（Uniform Resource Locator）**是互联网上标准资源的地址，互联网上的每个文件都有一个唯一的URL，它包含的信息指出文件的位置以及浏览器应该怎么处理他

一般语法格式：

```
protocol://host[:port]/path/[?query]#fragment
http://www.itcast.cn/index.html?name=andy&age=18#link
```

| 组成     | 说明                                                         |
| -------- | ------------------------------------------------------------ |
| protocol | 通常协议，常用http、ftp、maito等                             |
| host     | 主机（域名）                                                 |
| port     | 端口号 可选，省略是使用方案的默认端口，如http的默认端口为80  |
| path     | 路径 由0或多个'/'符号隔开的字符串，一般用来表示主机上的一个目录或文件地址 |
| query    | 参数 以键值对的形式，通过&符号分隔开                         |
| fragment | 片段 #后面的内容常见于链接 锚点                              |

#### location对象属性

| 属性              | 描述                                                |
| :---------------- | :-------------------------------------------------- |
| location.href     | 设置或返回完整的 URL。                              |
| location.host     | 设置或返回主机名和当前 URL 的端口号。               |
| location.port     | 设置或返回当前 URL 的端口号。                       |
| location.search   | 设置或返回从问号 (?) 开始的 URL（查询部分，参数）。 |
| location.hash     | 设置或返回从井号 (#) 开始的 URL（锚）。             |
| location.hostname | 设置或返回当前 URL 的主机名。                       |
| location.pathname | 设置或返回当前 URL 的路径部分。                     |
| location.protocol | 设置或返回当前 URL 的协议。                         |

###### 5秒中自动跳转页面案例

1. 利用定时器做倒计时效果
2. 利用location.href实现跳转效果

```html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <button>点击</button>
    <div></div>
    <script>
        var btn = document.querySelector('button');
        var div = document.querySelector('div');
        btn.addEventListener('click', function() {
            // console.log(location.href);
            location.href = 'http://www.itcast.cn';
        })
        var timer = 5;
        function time() {
            if (timer == 0) {
                location.href = 'http://www.itcast.cn';
            } else {
                div.innerHTML = '您将在' + timer + '秒钟之后跳转到首页';
                timer--;
            }

        }
        time();
        setInterval(time, 1000);
    </script>
</body>

</html>
```

###### 获取URL案例

1. 第一个登录页面，里面有提交表单，action提交到index.html页面
2. 第二个页面，可以使用第一个页面的参数，实现了一个数据不同页面之间传递的效果
3. 第二个页面之所以可以使用第一个页面的数据，是利用了URL里面的location.search参数
4. 在第二个页面中，需要把这个参数提取
5. 第一步去调？ 利用substr
6. 第二步 利用=号分割键和值 split('=')

#### location对象方法

| 属性               | 描述                                                         |
| :----------------- | :----------------------------------------------------------- |
| location.assign()  | 加载新的文档，可跳转页面，记录浏览历史，可使用后退功能       |
| location.reload()  | 重新加载当前文档，相当于刷新按钮或f5，如果参数为true，强制刷新 ctrl+f5。 |
| location.replace() | 用新的文档替换当前文档，不记录浏览历史。                     |

### navigator对象

navigator对象包含有关浏览器的信息，他有很多属性，我们最常用的是userAgent，该属性可以返回由客户机发送服务器的user-agent头部的值

### history对象

window对象给我们提供了一个history对象，与浏览器历史记录进行交互，该对象包含用户（在浏览器窗口中）

| 方法              | 描述                                |
| :---------------- | :---------------------------------- |
| history.back()    | 加载 history 列表中的前一个 URL。   |
| history.forward() | 加载 history 列表中的下一个 URL。   |
| history.go()      | 加载 history 列表中的某个具体页面。 |

## PC端网页特效

### 元素偏移量offset系列

#### offset概述

我们使用偏移量offset系列相关属性，可以动态地得到该元素的位置（偏移）、大小等

- 获得元素距离带有定位父元素的距离
- 获得元素自身的大小（宽度高度）
- 注意：返回的数值都不带单位

offset常用属性：

| offset系列属性       | 作用                                                         |
| -------------------- | ------------------------------------------------------------ |
| element.offsetParent | 返回作为该元素带有定位（position）的父级元素，如果父级都没有定位则返回body |
| element.offsetTop    | 返回元素相对带有定位父级元素上方的偏移                       |
| element.offsetLeft   | 返回元素相对带有定位父级元素左边框的偏移                     |
| element.offsetWidth  | 返回自身包括padding，边框，内容区的宽度，返回数值不带单位    |
| element.offsetHeight | 返回自身包括padding，边框，内容区的高度，返回数值不带单位    |

###### 代码案例

```html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        
        .father {
            /* position: relative; */
            width: 200px;
            height: 200px;
            background-color: pink;
            margin: 150px;
        }
        
        .son {
            width: 100px;
            height: 100px;
            background-color: purple;
            margin-left: 45px;
        }
        
        .w {
            height: 200px;
            background-color: skyblue;
            margin: 0 auto 200px;
            padding: 10px;
            border: 15px solid red;
        }
    </style>
</head>

<body>
    <div class="father">
        <div class="son"></div>
    </div>
    <div class="w"></div>
    <script>
        // offset 系列
        var father = document.querySelector('.father');
        var son = document.querySelector('.son');
        // 1.可以得到元素的偏移 位置 返回的不带单位的数值  
        console.log(father.offsetTop);
        console.log(father.offsetLeft);
        // 它以带有定位的父亲为准  如果么有父亲或者父亲没有定位 则以 body 为准
        console.log(son.offsetLeft);
        var w = document.querySelector('.w');
        // 2.可以得到元素的大小 宽度和高度 是包含padding + border + width 
        console.log(w.offsetWidth);
        console.log(w.offsetHeight);
        // 3. 返回带有定位的父亲 否则返回的是body
        console.log(son.offsetParent); // 返回带有定位的父亲 否则返回的是body
        console.log(son.parentNode); // 返回父亲 是最近一级的父亲 亲爸爸 不管父亲有没有定位
    </script>
</body>

</html>
```

#### offset和style区别

| offset                                        | style                               |
| --------------------------------------------- | ----------------------------------- |
| offset可以得到任意样式表中的样式值            | style只能得到行内样式表中的样式值   |
| offset系列获得的数值是没有单位的              | style.width获得的是带有单位的字符串 |
| offsetWidth包含padding border width           | style.width不包含padding border     |
| offsetWidth等属性是只读属性，只能获取不能赋值 | style.width可读写属性，可获值赋值   |

###### 获取盒子内鼠标坐标案例

1. 我们在盒子内点击，想要得到鼠标距离盒子左上的距离
2. 首先得到鼠标在页面中的坐标(e.pageX,e.pageY)
3. 其次得到盒子在页面中的距离(box.offsetLeft,box.offsetTop)

```html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .box {
            width: 300px;
            height: 300px;
            background-color: pink;
            margin: 200px;
        }
    </style>
</head>

<body>
    <div class="box"></div>
    <script>
        // 我们在盒子内点击， 想要得到鼠标距离盒子左右的距离。
        // 首先得到鼠标在页面中的坐标（ e.pageX, e.pageY）
        // 其次得到盒子在页面中的距离(box.offsetLeft, box.offsetTop)
        // 用鼠标距离页面的坐标减去盒子在页面中的距离， 得到 鼠标在盒子内的坐标
        var box = document.querySelector('.box');
        box.addEventListener('mousemove', function(e) {
            // console.log(e.pageX);
            // console.log(e.pageY);
            // console.log(box.offsetLeft);
            var x = e.pageX - this.offsetLeft;
            var y = e.pageY - this.offsetTop;
            this.innerHTML = 'x坐标是' + x + ' y坐标是' + y;
        })
    </script>
</body>

</html>
```

###### 模态框推拽案例

**效果分析**：

弹出框，又称模态框。

- 点击弹出层，会弹出模态框，并且显示灰色半透明的遮挡层
- 点击关闭按钮，可以关闭模态框，并且同时关闭灰色半透明遮挡层
- 鼠标放到模态框最上面一行，可以按住鼠标拖拽模态框在页面中移动
- 鼠标松开，可以停止拖动

**思路分析**：

1. 点击弹出层，模态框和遮挡层就会显示出来 display:block;
2. 点击关闭层，模态框和遮挡层就隐藏起来 display:none;
3. 页面中拖拽原理：鼠标按下并且移动，之后松开鼠标
4. 触发事件：mousedown mousemove mouseup
5. 鼠标在移动过程中获得最新的值赋值给模态框的left和top值
6. 事件源为login-title
7. mousedown，得到鼠标在盒子中的坐标
8. mousemove，静态框的坐标设置为鼠标坐标-鼠标在盒子中的坐标，事件一定在mousedown内部
9. mouseup，停止拖拽，让鼠标移动解绑

```html

<!DOCTYPE html>
<html>

<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        .login-header {
            width: 100%;
            text-align: center;
            height: 30px;
            font-size: 24px;
            line-height: 30px;
        }
        
        ul,
        li,
        ol,
        dl,
        dt,
        dd,
        div,
        p,
        span,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        a {
            padding: 0px;
            margin: 0px;
        }
        
        .login {
            display: none;
            width: 512px;
            height: 280px;
            position: fixed;
            border: #ebebeb solid 1px;
            left: 50%;
            top: 50%;
            background: #ffffff;
            box-shadow: 0px 0px 20px #ddd;
            z-index: 9999;
            transform: translate(-50%, -50%);
        }
        
        .login-title {
            width: 100%;
            margin: 10px 0px 0px 0px;
            text-align: center;
            line-height: 40px;
            height: 40px;
            font-size: 18px;
            position: relative;
            cursor: move;
        }
        
        .login-input-content {
            margin-top: 20px;
        }
        
        .login-button {
            width: 50%;
            margin: 30px auto 0px auto;
            line-height: 40px;
            font-size: 14px;
            border: #ebebeb 1px solid;
            text-align: center;
        }
        
        .login-bg {
            display: none;
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0px;
            left: 0px;
            background: rgba(0, 0, 0, .3);
        }
        
        a {
            text-decoration: none;
            color: #000000;
        }
        
        .login-button a {
            display: block;
        }
        
        .login-input input.list-input {
            float: left;
            line-height: 35px;
            height: 35px;
            width: 350px;
            border: #ebebeb 1px solid;
            text-indent: 5px;
        }
        
        .login-input {
            overflow: hidden;
            margin: 0px 0px 20px 0px;
        }
        
        .login-input label {
            float: left;
            width: 90px;
            padding-right: 10px;
            text-align: right;
            line-height: 35px;
            height: 35px;
            font-size: 14px;
        }
        
        .login-title span {
            position: absolute;
            font-size: 12px;
            right: -20px;
            top: -30px;
            background: #ffffff;
            border: #ebebeb solid 1px;
            width: 40px;
            height: 40px;
            border-radius: 20px;
        }
    </style>
</head>

<body>
    <div class="login-header"><a id="link" href="javascript:;">点击，弹出登录框</a></div>
    <div id="login" class="login">
        <div id="title" class="login-title">登录会员
            <span><a id="closeBtn" href="javascript:void(0);" class="close-login">关闭</a></span>
        </div>
        <div class="login-input-content">
            <div class="login-input">
                <label>用户名：</label>
                <input type="text" placeholder="请输入用户名" name="info[username]" id="username" class="list-input">
            </div>
            <div class="login-input">
                <label>登录密码：</label>
                <input type="password" placeholder="请输入登录密码" name="info[password]" id="password" class="list-input">
            </div>
        </div>
        <div id="loginBtn" class="login-button"><a href="javascript:void(0);" id="login-button-submit">登录会员</a></div>
    </div>
    <!-- 遮盖层 -->
    <div id="bg" class="login-bg"></div>
    <script>
        // 1. 获取元素
        var login = document.querySelector('.login');
        var mask = document.querySelector('.login-bg');
        var link = document.querySelector('#link');
        var closeBtn = document.querySelector('#closeBtn');
        var title = document.querySelector('#title');
        // 2. 点击弹出层这个链接 link  让mask 和login 显示出来
        link.addEventListener('click', function() {
                mask.style.display = 'block';
                login.style.display = 'block';
            })
            // 3. 点击 closeBtn 就隐藏 mask 和 login 
        closeBtn.addEventListener('click', function() {
                mask.style.display = 'none';
                login.style.display = 'none';
            })
            // 4. 开始拖拽
            // (1) 当我们鼠标按下， 就获得鼠标在盒子内的坐标
        title.addEventListener('mousedown', function(e) {
            var x = e.pageX - login.offsetLeft;
            var y = e.pageY - login.offsetTop;
            // (2) 鼠标移动的时候，把鼠标在页面中的坐标，减去 鼠标在盒子内的坐标就是模态框的left和top值
            document.addEventListener('mousemove', move)

            function move(e) {
                login.style.left = e.pageX - x + 'px';
                login.style.top = e.pageY - y + 'px';
            }
            // (3) 鼠标弹起，就让鼠标移动事件移除
            document.addEventListener('mouseup', function() {
                document.removeEventListener('mousemove', move);
            })
        })
    </script>
</body>

</html>
```

###### 京东放大镜案例

1. 整个案例可以分为3个功能模块

2. 鼠标经过小图片盒子，黄色的遮挡层和大图片盒子显示，离开隐藏2个盒子功能

   - mask.style.display = 'block'/'none'
   - big.style.display = 'block'/'none'

3. 黄色的遮挡层跟随鼠标移动

   - 遮挡层坐标 = 鼠标在盒子内坐标(e.pageX - previous_img.offsetLeft)
   - 遮挡层坐标范围 = （0，previou_img.offsetWidth - mask.offsetWidth)

4. 移动黄色遮挡层，大图片跟随移动功能

   - 大图片移动距离
     $$
     \frac{遮挡层移动距离}{遮挡层最大移动距离}=\frac{大图片移动距离}{大图片最大移动距离}\\
     \\大图片移动距离 = \frac{遮挡层移动距离*大图片最大移动距离}{遮挡层最大移动距离}
     $$

```js
window.addEventListener('load', function() {
    var preview_img = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    // 1. 当我们鼠标经过 preview_img 就显示和隐藏 mask 遮挡层 和 big 大盒子
    preview_img.addEventListener('mouseover', function() {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    preview_img.addEventListener('mouseout', function() {
            mask.style.display = 'none';
            big.style.display = 'none';
        })
        // 2. 鼠标移动的时候，让黄色的盒子跟着鼠标来走
    preview_img.addEventListener('mousemove', function(e) {
        // (1). 先计算出鼠标在盒子内的坐标
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        // console.log(x, y);
        // (2) 减去盒子高度 300的一半 是 150 就是我们mask 的最终 left 和top值了
        // (3) 我们mask 移动的距离
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        // (4) 如果x 坐标小于了0 就让他停在0 的位置
        // 遮挡层的最大移动距离
        var maskMax = preview_img.offsetWidth - mask.offsetWidth;
        if (maskX <= 0) {
            maskX = 0;
        } else if (maskX >= maskMax) {
            maskX = maskMax;
        }
        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY >= maskMax) {
            maskY = maskMax;
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        // 3. 大图片的移动距离 = 遮挡层移动距离 * 大图片最大移动距离 / 遮挡层的最大移动距离
        // 大图
        var bigIMg = document.querySelector('.bigImg');
        // 大图片最大移动距离
        var bigMax = bigIMg.offsetWidth - big.offsetWidth;
        // 大图片的移动距离 X Y
        var bigX = maskX * bigMax / maskMax;
        var bigY = maskY * bigMax / maskMax;
        bigIMg.style.left = -bigX + 'px';
        bigIMg.style.top = -bigY + 'px';

    })

})
```

### 元素可视区client系列

client系列属性来获取元素可视区的相关信息，通过client系列的相关属性可以动态的得到该元素的边框大小、元素大小等。

| client系列属性       | 作用                                                         |
| -------------------- | ------------------------------------------------------------ |
| element.clientTop    | 返回元素上边框的大小                                         |
| element.clientLeft   | 返回元素下边框的大小                                         |
| element.clientWidth  | 返回自身包括padding 内容区宽度，不包含border，返回值不带单位 |
| element.clientHeight | 返回自身包括padding 内容区高度，不包含border，返回值不带单位 |

###### flexible.js源码分析案例

```js
(function flexible(window, document) {
    // 获取的html 的根元素
    var docEl = document.documentElement
        // dpr 物理像素比
    var dpr = window.devicePixelRatio || 1

    // adjust body font size  设置我们body 的字体大小
    function setBodyFontSize() {
        // 如果页面中有body 这个元素 就设置body的字体大小
        if (document.body) {
            document.body.style.fontSize = (12 * dpr) + 'px'
        } else {
            // 如果页面中没有body 这个元素，则等着 我们页面主要的DOM元素加载完毕再去设置body
            // 的字体大小
            document.addEventListener('DOMContentLoaded', setBodyFontSize)
        }
    }
    setBodyFontSize();

    // set 1rem = viewWidth / 10    设置我们html 元素的文字大小
    function setRemUnit() {
        var rem = docEl.clientWidth / 10
        docEl.style.fontSize = rem + 'px'
    }

    setRemUnit()

    // reset rem unit on page resize  当我们页面尺寸大小发生变化的时候，要重新设置下rem 的大小
    window.addEventListener('resize', setRemUnit)
        // pageshow 是我们重新加载页面触发的事件
    	//load在火狐浏览器中存在“往返缓存”，这个缓存不仅保存着页面数据，还保存了DOM和JavaScript的状态，实际是整个页面都存储在内存中
    window.addEventListener('pageshow', function(e) {
        // e.persisted 返回的是true 就是说如果这个页面是从缓存取过来的页面，也需要从新计算一下rem 的大小
        if (e.persisted) {
            setRemUnit()
        }
    })

    // detect 0.5px supports  有些移动端的浏览器不支持0.5像素的写法
    if (dpr >= 2) {
        var fakeBody = document.createElement('body')
        var testElement = document.createElement('div')
        testElement.style.border = '.5px solid transparent'
        fakeBody.appendChild(testElement)
        docEl.appendChild(fakeBody)
        if (testElement.offsetHeight === 1) {
            docEl.classList.add('hairlines')
        }
        docEl.removeChild(fakeBody)
    }
}(window, document))
```

立即执行函数 (function(){})() 或者 (function(){}())，不需要调用，立马能够自己执行的函数,第二个小括号可以看作是调用函数，可以传递参数

主要作用：创建一个独立的作用域，函数内部的所有变量都是局部变量

### 元素滚动scoll系列

利用scroll属性动态得到该元素的大小，滚动距离

| scroll系列属性       | 作用                                             |
| -------------------- | ------------------------------------------------ |
| element.scrollTop    | 返回被卷去的上侧距离，返回数值不带单位           |
| element.scrollLeft   | 返回被卷去的左侧距离，返回数值不带单位           |
| element.scrollWidth  | 返回自身实际的宽度，不包含border，返回值不带单位 |
| element.scrollHeight | 返回自身实际的高度，不包含border，返回值不带单位 |

###### 仿淘宝固定右侧侧边栏案例

**效果**：

- 原先侧边栏是绝对定位
- 当页面滚动到一定位置，侧边栏改为固定定位
- 页面继续滚动，会让返回顶部显示出来

**分析**：

1. 需要用到页面滚动事件 onscroll，因为是页面滚动，所以事件源是document
2. 滚动到某个位置，就是判断页面被卷去的上部值
3. 页面被卷去的头部：可以通过`window.pageYOffset` 获得，左侧 `window.pageXOffset`
4. 注意：元素被卷去的头部是`element.scrollTop`，页面被卷去的头部是`window.pageYOffset`

```html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .slider-bar {
            position: absolute;
            left: 50%;
            top: 300px;
            margin-left: 600px;
            width: 45px;
            height: 130px;
            background-color: pink;
        }
        
        .w {
            width: 1200px;
            margin: 10px auto;
        }
        
        .header {
            height: 150px;
            background-color: purple;
        }
        
        .banner {
            height: 250px;
            background-color: skyblue;
        }
        
        .main {
            height: 1000px;
            background-color: yellowgreen;
        }
        
        span {
            display: none;
            position: absolute;
            bottom: 0;
        }
    </style>
</head>

<body>
    <div class="slider-bar">
        <span class="goBack">返回顶部</span>
    </div>
    <div class="header w">头部区域</div>
    <div class="banner w">banner区域</div>
    <div class="main w">主体部分</div>
    <script>
        //1. 获取元素
        var sliderbar = document.querySelector('.slider-bar');
        var banner = document.querySelector('.banner');
        // banner.offestTop 就是被卷去头部的大小 一定要写到滚动的外面
        var bannerTop = banner.offsetTop
            // 当我们侧边栏固定定位之后应该变化的数值
        var sliderbarTop = sliderbar.offsetTop - bannerTop;
        // 获取main 主体元素
        var main = document.querySelector('.main');
        var goBack = document.querySelector('.goBack');
        var mainTop = main.offsetTop;
        // 2. 页面滚动事件 scroll
        document.addEventListener('scroll', function() {
            // console.log(11);
            // window.pageYOffset 页面被卷去的头部
            // console.log(window.pageYOffset);
            // 3 .当我们页面被卷去的头部大于等于了 172 此时 侧边栏就要改为固定定位
            if (window.pageYOffset >= bannerTop) {
                sliderbar.style.position = 'fixed';
                sliderbar.style.top = sliderbarTop + 'px';
            } else {
                sliderbar.style.position = 'absolute';
                sliderbar.style.top = '300px';
            }
            // 4. 当我们页面滚动到main盒子，就显示 goback模块
            if (window.pageYOffset >= mainTop) {
                goBack.style.display = 'block';
            } else {
                goBack.style.display = 'none';
            }

        })
    </script>
</body>

</html>
```

### 三大系列总结

| 三大系列对比        | 作用                                                         |
| ------------------- | ------------------------------------------------------------ |
| element.offsetWidth | 返回自身包括padding，边框，内容区的宽度，返回数值不带单位    |
| element.clientWidth | 返回自身包括padding 内容区宽度，不包含border，返回值不带单位 |
| element.scrollWidth | 返回自身实际的宽度，不包含border，返回值不带单位             |

### mouseover和mouseenter的区别

mouseover 鼠标经过自身盒子会触发，经过子盒子还会触发

mouseenter只会经过自身盒子触发，没有冒泡概念

与mouseenter搭配使用mouseleave

### 动画函数封装

#### 实现原理

核心：通过定时器setInterval()不断移动盒子位置

实现步骤：

1. 获得盒子当前的位置
2. 让盒子在当前位置上加1个移动距离
3. 利用定时器不断重复这个操作
4. 加一个结束定时器的条件
5. 注意此元素要添加定位，才能使用element.style.left

#### 封装

```js
function animate(obj,target){
    //给不同的元素制定了不同的定时器
    //元素只有一个定时器执行，先清除以前的定时器在执行新的定时器
	obj.timer = document.setInterval(function(){
        clearInterval(obj.timer);
        if(obj.offsetLeft >= target){
            clearInterval(obj.timer);
        }
        obj.sytle.left = obj.offsetLeft + 1 +'px';
    },30)
}
```

#### 缓动效果

思路：

1. 盒子移动的距离慢慢变小
2. 核心算法：（目标值-现在的位置）/10 作为每次移动的距离步长

```js
function animate(obj,target){
    //给不同的元素制定了不同的定时器
    //元素只有一个定时器执行，先清除以前的定时器在执行新的定时器
	obj.timer = document.setInterval(function(){
        var step = (target - obj.offsetLeft)/10;
        step = step > 0 ? Math.ceil((target - obj.offsetLeft)/10) : Math.floor((target - obj.offsetLeft)/10)
        clearInterval(obj.timer);
        if(obj.offsetLeft >= target){
            clearInterval(obj.timer);
        }
        obj.sytle.left = obj.offsetLeft + step +'px';
    },30)
}
```

匀速运动 ：盒子当前位置 + 固定值

缓动动画 ：盒子当前位置 + 变化的值

#### 动画函数添加回调函数

**回调函数原理**：函数可以作为一个参数，将这个函数作为参数传到两一个函数里面，当那个函数执行完之后，再执行传进去的这个函数，这个过程叫做回调

###### 网页轮播图案例

功能需求：

1. 鼠标经过轮播图模块，左右按钮显示，离开隐藏左右按钮

2. 点击右侧按钮，向右播放一次，左侧相同

   声明一个变量num，点击一次，自增1，让这个变量乘以图片宽度，就是ul滚动的距离

   图片无缝滚动的原理：把ul的第一个li复制一份，放到ul最后；当图片滚动到克隆的最后一张图时，让ul快速的切换到第一个li

3. 图片播放时，下面小圆圈跟随变化

   小圆圈的排他思想

4. 点击小圆圈切换对应图

   核心算法：点击某个小圆圈，就让图片滚动小圆圈的索引号乘以图片宽度作为ul移动距离

5. 鼠标离开自动播放轮播图

```js
window.addEventListener('load', function() {
    // 1. 获取元素
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;
    // 2. 鼠标经过focus 就显示隐藏左右按钮
    focus.addEventListener('mouseenter', function() {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null; // 清除定时器变量
    });
    focus.addEventListener('mouseleave', function() {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(function() {
            //手动调用点击事件
            arrow_r.click();
        }, 2000);
    });
    // 3. 动态生成小圆圈  有几张图片，我就生成几个小圆圈
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    // console.log(ul.children.length);
    for (var i = 0; i < ul.children.length; i++) {
        // 创建一个小li 
        var li = document.createElement('li');
        // 记录当前小圆圈的索引号 通过自定义属性来做 
        li.setAttribute('index', i);
        // 把小li插入到ol 里面
        ol.appendChild(li);
        // 4. 小圆圈的排他思想 我们可以直接在生成小圆圈的同时直接绑定点击事件
        li.addEventListener('click', function() {
            // 干掉所有人 把所有的小li 清除 current 类名
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            // 留下我自己  当前的小li 设置current 类名
            this.className = 'current';
            // 5. 点击小圆圈，移动图片 当然移动的是 ul 
            // ul 的移动距离 小圆圈的索引号 乘以 图片的宽度 注意是负值
            // 当我们点击了某个小li 就拿到当前小li 的索引号
            var index = this.getAttribute('index');
            // 当我们点击了某个小li 就要把这个li 的索引号给 num  
            num = index;
            // 当我们点击了某个小li 就要把这个li 的索引号给 circle  
            circle = index;
            // num = circle = index;
            console.log(focusWidth);
            console.log(index);

            animate(ul, -index * focusWidth);
        })
    }
    // 把ol里面的第一个小li设置类名为 current
    ol.children[0].className = 'current';
    // 6. 克隆第一张图片(li)放到ul 最后面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    // 7. 点击右侧按钮， 图片滚动一张
    var num = 0;
    // circle 控制小圆圈的播放
    var circle = 0;
    // flag 节流阀
    var flag = true;
    arrow_r.addEventListener('click', function() {
        if (flag) {
            flag = false; // 关闭节流阀
            // 如果走到了最后复制的一张图片，此时 我们的ul 要快速复原 left 改为 0
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth, function() {
                flag = true; // 打开节流阀
            });
            // 8. 点击右侧按钮，小圆圈跟随一起变化 可以再声明一个变量控制小圆圈的播放
            circle++;
            // 如果circle == 4 说明走到最后我们克隆的这张图片了 我们就复原
            if (circle == ol.children.length) {
                circle = 0;
            }
            // 调用函数
            circleChange();
        }
    });

    // 9. 左侧按钮做法
    arrow_l.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focusWidth + 'px';

            }
            num--;
            animate(ul, -num * focusWidth, function() {
                flag = true;
            });
            // 点击左侧按钮，小圆圈跟随一起变化 可以再声明一个变量控制小圆圈的播放
            circle--;
            // 如果circle < 0  说明第一张图片，则小圆圈要改为第4个小圆圈（3）
            // if (circle < 0) {
            //     circle = ol.children.length - 1;
            // }
            circle = circle < 0 ? ol.children.length - 1 : circle;
            // 调用函数
            circleChange();
        }
    });

    function circleChange() {
        // 先清除其余小圆圈的current类名
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        // 留下当前的小圆圈的current类名
        ol.children[circle].className = 'current';
    }
    // 10. 自动播放轮播图
    var timer = setInterval(function() {
        //手动调用点击事件
        arrow_r.click();
    }, 2000);

})
```

#### 节流阀

防止点击过快造成播放过快

节流阀目的：当上一个函数动画内容执行完毕，再去执行下一个函数动画，让事件无法连续触发

核心思路：利用回调函数，添加一个变量来控制，锁住函数和解放函数

开始设置一个变量 var flag = true;

if(flag){flag = false; do something} 关闭水龙头

利用回调函数 动画执行完毕，flag= true; 打开水龙头

###### 返回顶部案例

滚动窗口至文档特定位置 window.scroll(x,y)

```js
goBack.addEventListener('click',function(){
            animate(window,0)
        })

        function animate(obj, target, callback) {
    // console.log(callback);  callback = function() {}  调用的时候 callback()

    // 先清除以前的定时器，只保留当前的一个定时器执行
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        // 步长值写到定时器的里面
        // 把我们步长值改为整数 不要出现小数的问题
        // var step = Math.ceil((target - obj.offsetLeft) / 10);
        var step = (target - window.pageYOffset) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (window.pageYOffset == target) {
            // 停止动画 本质是停止定时器
            clearInterval(obj.timer);
            // 回调函数写到定时器结束里面
            // if (callback) {
            //     // 调用函数
            //     callback();
            // }
            callback && callback();
        }
        // 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
        window.scroll(0,window.pageYOffset+step);

    }, 15);
}
```

###### 筋斗云点击案例

需求：

- 筋斗云跟随鼠标停留在对应小li上
- 鼠标离开筋斗云返回初始位置
- 鼠标点击li，筋斗云停留不离开

思路：

1. 利用动画函数做动画效果
2. 原先筋斗云的起始位置为0
3. 鼠标经过某一小li，把当前小li的offsetLeft值获取作为目标值
4. 鼠标离开某一小li，把目标值设为0
5. 鼠标点击后，将当前小li的offsetLeft值作为起始位置

```js
window.addEventListener('load', function() {
            // 1. 获取元素
            var cloud = document.querySelector('.cloud');
            var c_nav = document.querySelector('.c-nav');
            var lis = c_nav.querySelectorAll('li');
            // 2. 给所有的小li绑定事件 
            // 这个current 做为筋斗云的起始位置
            var current = 0;
            for (var i = 0; i < lis.length; i++) {
                // (1) 鼠标经过把当前小li 的位置做为目标值
                lis[i].addEventListener('mouseenter', function() {
                    animate(cloud, this.offsetLeft);
                });
                // (2) 鼠标离开就回到起始的位置 
                lis[i].addEventListener('mouseleave', function() {
                    animate(cloud, current);
                });
                // (3) 当我们鼠标点击，就把当前位置做为目标值
                lis[i].addEventListener('click', function() {
                    current = this.offsetLeft;
                });
            }
        })
```

## 移动端网页特效

### 触屏事件

| 触屏touch事件 | 说明                          |
| ------------- | ----------------------------- |
| touchstart    | 手指触摸到一个DOM元素时触发   |
| touchmove     | 手指在一个DOM元素上滑动时触发 |
| touchend      | 手指从一个DOM元素上移开时触发 |

### 触摸事件对象(TouchEvent)

TouchEvent 是一类描述手指在触摸屏幕的状态变化的事件，这类事件用于描述一个或多个触点，使开发者可以检测触点的移动，出点的增加或减少等

| 触摸列表       | 说明                                             |
| -------------- | ------------------------------------------------ |
| touches        | 正在触摸屏幕的所有手指的一个列表                 |
| targetTouches  | 正在触摸当前DOM元素上的手指的一个列表            |
| changedTouches | 手指状态发生了改变的列表，从无到有，从有到无变化 |

###### 移动端拖动元素案例

1. 触摸元素：获得当前盒子坐标和手指坐标
2. 移动元素：计算手机移动距离，盒子初始位置加手指移动距离就是盒子新位置
3. 注意关闭默认页面滚动功能

```js
 // （1） 触摸元素 touchstart：  获取手指初始坐标，同时获得盒子原来的位置
        // （2） 移动手指 touchmove：  计算手指的滑动距离，并且移动盒子
        // （3） 离开手指 touchend:
        var div = document.querySelector('div');
        var startX = 0; //获取手指初始坐标
        var startY = 0;
        var x = 0; //获得盒子原来的位置
        var y = 0;
        div.addEventListener('touchstart', function(e) {
            //  获取手指初始坐标
            startX = e.targetTouches[0].pageX;
            startY = e.targetTouches[0].pageY;
            x = this.offsetLeft;
            y = this.offsetTop;
        });

        div.addEventListener('touchmove', function(e) {
            //  计算手指的移动距离： 手指移动之后的坐标减去手指初始的坐标
            var moveX = e.targetTouches[0].pageX - startX;
            var moveY = e.targetTouches[0].pageY - startY;
            // 移动我们的盒子 盒子原来的位置 + 手指移动的距离
            this.style.left = x + moveX + 'px';
            this.style.top = y + moveY + 'px';
            e.preventDefault(); // 阻止屏幕滚动的默认行为
        });
```

### 移动端常见特效

#### 移动端轮播图

1. 自动播放

2. 开启定时器

3. 移动端移动可以使用translate移动

4. 添加过渡效果

   等图片滚动完毕以后再去判断，添加检测过渡完成事件 transitionend

5. 触摸元素touchstart：获取手指初始坐标

6. 移动手指touchmove：计算手指的滑动距离，且移动盒子

#### classList 属性

className的不足：

在操作类名时，需要通过className属性添加，删除和替换类名。因为className中是一个字符串，所以即使只修改字符串一部分，也必须每次都设置整个字符串的值。

```html
<body>
    <div class = "bd user disabled ">
    </div>
    <script>
        var div = document.querySelector('div');
        var classNames = div.className.split(/\s+/);
        var pos;
        for(var i = 0;i< classNames.length;i++){
            if(classNames[i] == 'user'){
                pos = i;
                break;
            }
        }
        classNames.splice(i,1);
        div.className = classNames.join(" ");
    </script>
</body>

```

classList属性时HTML5新增的属性，主要有以下方法：

**添加类**（不加点）：

element.classList.add('类名');

**删除类**：

element.classList.remove('类名');

**切换类**：

element.classList.toggle('类名');

```js
window.addEventListener('load', function() {
    // alert(1);
    // 1. 获取元素 
    var focus = document.querySelector('.focus');
    var ul = focus.children[0];
    // 获得focus 的宽度
    var w = focus.offsetWidth;
    var ol = focus.children[1];
    // 2. 利用定时器自动轮播图图片
    var index = 0;
    var timer = setInterval(function() {
        index++;
        var translatex = -index * w;
        ul.style.transition = 'all .3s';
        ul.style.transform = 'translateX(' + translatex + 'px)';
    }, 2000);
    // 等着我们过渡完成之后，再去判断 监听过渡完成的事件 transitionend 
    ul.addEventListener('transitionend', function() {
        // 无缝滚动
        if (index >= 3) {
            index = 0;
            // console.log(index);
            // 去掉过渡效果 这样让我们的ul 快速的跳到目标位置
            ul.style.transition = 'none';
            // 利用最新的索引号乘以宽度 去滚动图片
            var translatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        } else if (index < 0) {
            index = 2;
            ul.style.transition = 'none';
            // 利用最新的索引号乘以宽度 去滚动图片
            var translatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }
        // 3. 小圆点跟随变化
        // 把ol里面li带有current类名的选出来去掉类名 remove
        ol.querySelector('.current').classList.remove('current');
        // 让当前索引号 的小li 加上 current   add
        ol.children[index].classList.add('current');
    });

    // 4. 手指滑动轮播图 
    // 触摸元素 touchstart： 获取手指初始坐标
    var startX = 0;
    var moveX = 0; // 后面我们会使用这个移动距离所以要定义一个全局变量
    var flag = false;
    ul.addEventListener('touchstart', function(e) {
        startX = e.targetTouches[0].pageX;
        // 手指触摸的时候就停止定时器
        clearInterval(timer);
    });
    // 移动手指 touchmove： 计算手指的滑动距离， 并且移动盒子
    ul.addEventListener('touchmove', function(e) {
        // 计算移动距离
        moveX = e.targetTouches[0].pageX - startX;
        // 移动盒子：  盒子原来的位置 + 手指移动的距离 
        var translatex = -index * w + moveX;
        // 手指拖动的时候，不需要动画效果所以要取消过渡效果
        ul.style.transition = 'none';
        ul.style.transform = 'translateX(' + translatex + 'px)';
        flag = true; // 如果用户手指移动过我们再去判断否则不做判断效果
        e.preventDefault(); // 阻止滚动屏幕的行为
    });
    // 手指离开 根据移动距离去判断是回弹还是播放上一张下一张
    ul.addEventListener('touchend', function(e) {
        if (flag) {
            // (1) 如果移动距离大于50像素我们就播放上一张或者下一张
            if (Math.abs(moveX) > 50) {
                // 如果是右滑就是 播放上一张 moveX 是正值
                if (moveX > 0) {
                    index--;
                } else {
                    // 如果是左滑就是 播放下一张 moveX 是负值
                    index++;
                }
                var translatex = -index * w;
                ul.style.transition = 'all .3s';
                ul.style.transform = 'translateX(' + translatex + 'px)';
            } else {
                // (2) 如果移动距离小于50像素我们就回弹
                var translatex = -index * w;
                ul.style.transition = 'all .1s';
                ul.style.transform = 'translateX(' + translatex + 'px)';
            }
        }
        // 手指离开的时候就重新开启定时器
        clearInterval(timer);
        timer = setInterval(function() {
            index++;
            var translatex = -index * w;
            ul.style.transition = 'all .3s';
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }, 2000);
    });


    // 返回顶部模块制作
    var goBack = document.querySelector('.goBack');
    var nav = document.querySelector('nav');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset >= nav.offsetTop) {
            goBack.style.display = 'block';
        } else {
            goBack.style.display = 'none';
        }
    });
    goBack.addEventListener('click', function() {
        window.scroll(0, 0);
    })
})
```

#### click延时解决方案

移动端click事件会有300ms的延时，原因是移动端屏幕双击会缩放（double tap to zoom）页面

解决方案：

1. 禁用缩放

   ```html
   <meta name = "viewport" content = "user-scalable = no">
   ```

2. 利用touch事件自己封装这个事件解决300ms延迟

   原理：

   1. 当我们手指触摸屏幕有个点击时间
   2. 当我们手指离开屏幕有个离开时间
   3. 二者做差小于150ms，且没滑动页面，就定义为点击

3. 利用fastclick插件解决300ms延时

#### 移动端常见插件

滑动页面：touchslide、swiper

视频播放：zy.media

#### 移动端常用框架

框架：基于自身特点向用户提供一套较为完整的解决方案，框架控制权在框架本身，使用者要按照框架所规定的某种规范进行开发。

前端常用框架：Bootstrap、Vue、Angular、React

前端常用移动端插件：swiper、superslide、iscroll

## 本地存储

### 存储特性

1. 数据存储在用户浏览器中
2. 设置，读取方便，刷新页面不丢失数据
3. 容量较大，sessionStorage约5M、localStorage约20M
4. 只能存储字符串，可以将对象JSON.stringify()编码后进行存储

### window.sessionStorage

1. 生命周期为关闭浏览器窗口
2. 在同一个窗口（页面）下数据可以共享
3. 以键值对的形式存储使用

#### 存储数据

```js
sessionStorage.setItem(key,value)
```

#### 获取数据

```js
sessionStorage.getItem(key)
```

#### 删除数据

```js
sessionStorage.removeItem(key)
```

#### 删除所有数据

```
sessionStorage.clear()
```

### window.localStorage

1. 生命周期永久存在，除非手动删除，否则关闭页面也会存在
2. 可以多窗口（页面）共享（同一浏览器可以共享）
3. 以键值对的形式存储使用

#### 存储数据

```js
localStorage.setItem(key,value)
```

#### 获取数据

```js
localStorage.getItem(key)
```

#### 删除数据

```js
localStorage.removeItem(key)
```

#### 删除所有数据

```
localStorage.clear()
```

###### 记住用户名案例

1. 把数据存储起来，用本地存储
2. 关闭页面，也可以显示用户名，所以用到localStorage
3. 打开页面，先判断是否有这个用户名，如果有则在表单里显示用户名，并且勾选复选框
4. 当复选框发生改变时 change事件
5. 如果勾选就存储否则就移除

```html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <input type="text" id="username"> <input type="checkbox" name="" id="remember"> 记住用户名
    <script>
        var username = document.querySelector('#username');
        var remember = document.querySelector('#remember');
        if (localStorage.getItem('username')) {
            username.value = localStorage.getItem('username');
            remember.checked = true;
        }
        remember.addEventListener('change', function() {
            if (this.checked) {
                localStorage.setItem('username', username.value)
            } else {
                localStorage.removeItem('username');
            }
        })
    </script>
</body>
```

## 函数高级

### 原型与原型链

#### 原型[prototype]

1. 函数 `prototype`属性

   - 每个函数都有一个prototype属性, 它默认指向一个Object空对象(即称为: 原型对象)
   - 原型对象中有一个属性constructor, 它指向函数对象
   - 函数 --> prototype属性  --> constructo属性 --> 函数

2. 给函数 `prototype`属性添加方法

   ```js
   函数.prototype.属性= 值、函数
   ```

   作用: 函数的所有实例对象自动拥有原型中的属性(方法)

#### 显示原型和隐式原型

1. 显示原型，构造函数中的 `prototype`
2. 隐式原型，实例对象中的 `__proto__`
3. 对象的隐式原型的值为其对应构造函数的显式原型的值

#### 原型链

访问一个对象的属性时，

* 先在自身属性中查找，找到返回
* 如果没有, 再沿着[`__ proto __`]这条链向上查找, 找到返回
* 如果最终没找到, 返回undefined

属性问题：

- 读取对象的属性值时: 会自动到原型链中查找
- 设置对象的属性值时: 不会查找原型链, 如果当前对象中没有此属性, 直接添加此属性并设置其值
- 方法一般定义在原型中, 属性一般通过构造函数定义在对象本身上

![image-20220224112606856](C:\Users\Sagittarius\AppData\Roaming\Typora\typora-user-images\image-20220224112606856.png)

#### 执行上下文

1. 代码分类(位置)

 * 全局代码
 * 函数(局部)代码

2. 全局执行上下文

 * 在执行全局代码前将window确定为全局执行上下文
 * 对全局数据进行预处理
   * var定义的全局变量==>undefined, 添加为window的属性
   * function声明的全局函数==>赋值(fun), 添加为window的方法
   * this==>赋值(window)
 * 开始执行全局代码

3. 函数执行上下文

 * 在调用函数, 准备执行函数体之前, 创建对应的函数执行上下文对象(虚拟的, 存在于栈中)
 * 对局部数据进行预处理
   * 形参变量==>赋值(实参)==>添加为执行上下文的属性
   * `arguments`==>赋值(实参列表), 添加为执行上下文的属性 -->[不懂的同学看这里](https://developer.mozilla.org/zh-CN/docs/orphaned/Web/JavaScript/Reference/Functions/arguments)
   * var定义的局部变量==>undefined, 添加为执行上下文的属性
   * function声明的函数 ==>赋值(fun), 添加为执行上下文的方法
   * this==>赋值(调用函数的对象)
 * 开始执行函数体代码

#### 执行上下文栈

1. 在全局代码执行前, JS引擎就会创建一个栈来存储管理所有的执行上下文对象
2. 在全局执行上下文(window)确定后, 将其添加到栈中(压栈)-->**所以栈底百分百是[window]**
3. 在函数执行上下文创建后, 将其添加到栈中(压栈)
4. 在当前函数执行完后,将栈顶的对象移除(出栈)
5. 当所有的代码执行完后, 栈中只剩下window
6. **上下文栈数==函数调用数+1**

```js
//1. 进入全局执行上下文
var a = 10
var bar = function (x) {
  var b = 5
  foo(x + b)   //3. 进入foo执行上下文           
}
var foo = function (y) {
  var c = 5
  console.log(a + c + y)
}
bar(10) //2. 进入bar函数执行上下文
```

#### 作用域

1. 理解

 * 就是一块"地盘", 一个代码段所在的区域
 * 它是静态的(相对于上下文对象), 在编写代码时就确定了

2. 分类

 * 全局作用域
 * 函数作用域
 * 没有块作用域(ES6有了)   -->(java语言也有)

3. 作用

 * 隔离变量，不同作用域下同名变量不会有冲突

#### 作用域与执行上下文的区别与联系

1. 区别1:

* 全局作用域之外，每个函数都会创建自己的作用域，**作用域在函数定义时就已经确定了。而不是在函数调用时**
* 全局执行上下文环境是在全局作用域确定之后, js代码马上执行之前创建
* 函数执行上下文是在调用函数时, 函数体代码执行之前创建

2. 区别2:

* 作用域是静态的, 只要函数定义好了就一直存在, 且不会再变化
* 执行上下文是动态的, 调用函数时创建, 函数调用结束时就会自动释放

3. 联系:

* 执行上下文(对象)是从属于所在的作用域
* 全局上下文环境==>全局作用域
* 函数上下文环境==>对应的函数使用域

#### 作用域链

1. 理解

 * 多个上下级关系的作用域形成的链, 它的方向是从下向上的(从内到外)
 * 查找变量时就是沿着作用域链来查找的

2. 查找一个变量的查找规则

 * 在当前作用域下的执行上下文中查找对应的属性, 如果有直接返回, 否则进入2
 * 在上一级作用域的执行上下文中查找对应的属性, 如果有直接返回, 否则进入3
 * 再次执行2的相同操作, 直到全局作用域, 如果还找不到就抛出找不到的异常

#### 闭包

一个函数和对其周围状态（**lexical environment，词法环境**）的引用捆绑在一起（或者说函数被引用包围），这样的组合就是**闭包**（**closure**）。也就是说，闭包让你可以在一个内层函数中访问到其外层函数的作用域。在 JavaScript 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来。

**「函数」和「函数内部能访问到的变量」的总和，就是一个闭包。**

![preview](https://pic4.zhimg.com/v2-2d16967becf2df18358d62a84d0595e7_r.jpg)
