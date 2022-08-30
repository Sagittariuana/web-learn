# jQuery基础知识

## jQuery入门

### jQuery概述

#### JavaScript库

**JavaScript库**：即library，是一个封装好的特定的集合（方法和函数），从封装一大堆函数的角度理解库，就是在这个库中，封装了很多预先定义好的函数在里面，比如动画animate、hide、show，比如获取元素。

就是一个js文件，里面对我们原生js代码进行了封装，存放到里面，可以快速高效的使用这些封装好的功能

**常见的js库**

- jQuery
- prototype
- YUI
- Dojo
- Ext JS
- 移动端的zepto

### jQuery概念

设计宗旨：write less do more

## jQuery的基本使用

### jQuery的使用步骤

1. jQuery官网下载文件 v3.3.6
2. 引入jQuery文件
3. 使用即可

### jQuery的入口函数

传统方式：DOMContentLoaded（仅当DOM加载完成，不包括样式表，图片，flash等）、load（包含页面dom元素，外部js文件，css文件，图片，flash等）

jQuery：

```js
//推荐使用
$(function(){
	...//此处是页面DOM加载完成的入口
});
```

```js
$(document).ready(function(){
	...//此处是页面DOM加载完成的入口
});
```

1. 等着DOM结构渲染完毕即可执行内部代码，不必等到所有外部资源加载完成，jQuery完成了封装
2. 相当于原生js中的DOMContentLoaded

### jQuery的顶级对象$

1. $是jQuery的别称，在代码里可以使用jQuery代替$
2. $是jQuery的顶级对象，相当于原生JavaScript的window，把元素利用$包装成jQuery对象，就可以调用jQuery的方法

### jQuery对象和DOM对象

1. 用原生js获取来的对象就是DOM对象

2. 用jQuery方法获取的元素就是jQuery对象

   本质：通过$把DOM元素进行了包装（伪数组形式存储）

3. jQuery对象只能使用jQuery方法，DOM对象只能使用原生的js属性和方法

DOM对象和jQuery对象之间可以相互转换

1. 把DOM对象转换为jQuery对象：

   ```js
   $('DOM对象')
   ```

2. 把jQuery对象转换为DOM对象：

   ```js
   $('jQuery对象')[index]//index是索引号
   $('jQuery对象').get(index)
   ```

## jQuery常用API

### jQuery选择器

#### jQuery基础选择器

```js
$("选择器") //里面选择器直接写CSS选择器即可，但是要加引号
```

| 名称       | 用法            | 描述                   |
| ---------- | --------------- | ---------------------- |
| ID选择器   | $("#id")        | 获得指定ID的元素       |
| 全选择器   | $("*")          | 匹配所有元素           |
| 类选择器   | $(".class")     | 获取同一类class的元素  |
| 标签选择器 | $("div")        | 获取统一标签的所有元素 |
| 并集选择器 | $("div,p,li")   | 选取多个元素           |
| 交集选择器 | $("li.current") | 交集元素               |

#### jQuery层级选择器

| 名称       | 用法       | 描述                                                      |
| ---------- | ---------- | --------------------------------------------------------- |
| 子代选择器 | $("ul>li") | 使用>号，获取亲儿子层级元素，注意并不会获取孙子层级的元素 |
| 后代选择器 | $("ul li") | 使用空格，代表后代选择器，获取ul下所有li，包括孙子        |

#### 隐式迭代（重要）

遍历内部DOM元素（伪数组形式存储）的过程就叫做**隐式迭代**

#### jQuery筛选选择器

| 语法       | 用法           | 说明                       |
| ---------- | -------------- | -------------------------- |
| :first     | $("li:first")  | 获取第一个li元素           |
| :last      | $("li:last")   | 获取最后一个li元素         |
| :eq(index) | $("li:leq(2)") | 获取li中索引号为2的元素    |
| :odd       | $("li:odd")    | 获取li中索引号为奇数的元素 |
| :even      | $("li:even")   | 获取li中索引号为偶数的元素 |

#### jQuery筛选方法（重点）

| 语法               | 用法                           | 说明                                             |
| ------------------ | ------------------------------ | ------------------------------------------------ |
| parent()           | $("li").parent()               | 查找父级，亲爸爸                                 |
| children(selector) | $("ul").children("li")         | 相当于$("ul>li")，最近一级（亲儿子）             |
| find(selector)     | $("ul").find("li")             | 相当于$("ul li")，后代选择器                     |
| siblings(selector) | $(".first").siblings("li")     | 查找兄弟节点，不包括自己本身                     |
| nextAll([expr])    | $(".first").nextAll()          | 查找当前元素之后所有的同辈元素                   |
| prevAll([expr])    | $(".last").prevAll()           | 查找当前元素之前所有的同辈元素                   |
| hasClass(class)    | $('div').hasClass("protected") | 检查当前元素是否含有某个特定的类，如果有返回true |
| eq(index)          | $("li").eq(2)                  | 相当于$("li:leq(2)")，index从0开始               |

##### 下拉菜单案例

```js
$(function() {
    // 鼠标经过
    $(".nav>li").mouseover(function() {
        // $(this) jQuery 当前元素  this不要加引号
        // show() 显示元素  hide() 隐藏元素
        $(this).children("ul").show();
    });
    // 鼠标离开
    $(".nav>li").mouseout(function() {
        $(this).children("ul").hide();
    })
})
```

#### 排他思想

```js
$(function() {
    //1.隐式迭代 给所有按钮都绑定点击事件
    $("button").click(function(){
        //2.给当前元素更换背景颜色
        $(this).css("background","pink");
        //3.其余兄弟去掉背景
        $(this).siblings("button").css("background","");
    });
})
```

##### 淘宝服饰案例

1. 核心原理：鼠标经过左侧盒子某个小li，就让内容区对应图片显示，其余图片隐藏
2. 需要得到当前小li的索引号，可以显示对应索引号的图片
3. jQuery得到当前元素索引号 $(this).index();
4. 中间对应图片用 eq(index)方法去选择

```js
$(function(){
            $("#left li").mouseover(function(){
                // 当前li索引号
                var index = $(this).index();
                // 显示当前li索引号对应的div
                $("#content div").eq(index).show()
                // 隐藏其他div
                $("#content div").eq(index).siblings("div").hide()
            });
        })
```

#### 链式编程

```js
 $("#content div").eq(index).show().siblings("div").hide()
```

### jquery样式操作

#### 操作css方法

可以使用css方法来修改简单元素样式；也可以操作类，修改多个样式 

1. 参数只写属性名，则是返回属性值

   ```js
   $(this).css("color")
   ```

2. 参数是属性名，属性值，逗号分隔，是设置一组样式，属性必须加引号，值如果是数字可以不跟单位和引号

   ```js
   $(this).css("color","red")
   ```

3. 参数可以是对象形式，方便设置多组样式，属性名和属性值用冒号隔开，属性可以不加引号，复合属性采用驼峰命名法，如果值不是数字，则需要加引号

   ```js
   $(this).css({width : 100, height : 100})
   ```

#### 设置类样式方法

等同于classList，可以操作类样式，注意操作类里面的参数不要加点

1. 添加类

   ```js
   $("div").addClass("current")
   ```

2. 删除类

   ```js
   $("div").removeClass("current")
   ```

3. 切换类

   ```js
   $("div").toggleClass("current")
   ```


##### tab栏切换案例

1. 点击上部的li，当前li添加current类，其余兄弟移除类
2. 点击的同时得到当前li的索引号
3. 让下部里面相应索引号的item显示，其余的item隐藏

```js
$(function() {
    // 1.点击上部的li，当前li 添加current类，其余兄弟移除类
    $(".tab_list li").click(function() {
        // 链式编程操作
        $(this).addClass("current").siblings().removeClass("current");
        // 2.点击的同时，得到当前li 的索引号
        var index = $(this).index();
        console.log(index);
        // 3.让下部里面相应索引号的item显示，其余的item隐藏
        $(".tab_con .item").eq(index).show().siblings().hide();
    });
})
```

#### 类操作与className区别

原生JS中className会覆盖元素原先里面的类名

jQuery里面类操作只是对指定类进行操作，不影响原先类名

### jQuery效果

#### 显示隐藏效果

1. 显示语法

   ```js
   show([speed,[easing],[fn]])
   ```

2. 显示参数

   - 参数可以都省略，无动画直接显示
   - speed：三种预定速度之一的字符串("slow","normal","fast")，或表示动画时长的毫秒数值
   - easing：(optional)用来指定切换效果，默认是“swing”，可用参数“linear”
   - fn：回调函数，在动画完成后执行

3. 隐藏语法

   ```js
   hide([speed,[easing],[fn]])
   ```

4. 隐藏参数同显示参数

5. 切换语法

   ```js
   toggle([speed,[easing],[fn]])
   ```

6. 切换参数同显示参数

#### 滑动效果与事件切换

##### 滑动效果

1. 下滑动

   ```js
   slideDown([speed,[easing],[fn]])
   ```

2. 上滑动

   ```js
   slideUp([speed,[easing],[fn]])
   ```

3. 切换滑动

   ```js
   slideToggle([speed,[easing],[fn]])
   ```

##### 事件切换

```js
hover([over,]out)
```

1. over:鼠标移到元素上要触发的函数（相当于mouseenter）
2. out:鼠标移出元素要触发的函数（相当于mouseleave）

###### 下拉菜单改进案例

```js
$(function() {
    // 鼠标经过
    $(".nav>li").mouseover(function() {
        // $(this) jQuery 当前元素  this不要加引号
        // show() 显示元素  hide() 隐藏元素
        $(this).children("ul").show();
    });
    // 鼠标离开
    $(".nav>li").mouseout(function() {
        $(this).children("ul").hide();
    })
    
    //改进
    $(".nav>li").hover(function(){
        $(this).children("ul").slideDown();
    },function(){
        $(this).children("ul").slideUp();
    })
    
    //继续改进
    $(".nav>li").hover(function(){
        $(this).children("ul").stop().slideToggle();
    })
})
```

#### 动画队列及其停止排队方法

1. 动画或效果队列

   动画或者效果一旦触发就会执行，如果多次触发，就造成多个动画或者效果排队执行

2. 停止排队

   ```js
   stop()
   ```

   - stop()方法用于停止动画或效果
   - 注意：stop()写到动画或效果前面，**相当于停止结束上一次动画**

#### 淡入淡出效果

1. 淡入

   ```js
   fadeIn([speed,[easing],[fn]])
   ```

2. 淡出

   ```js
   fadeOut([speed,[easing],[fn]])
   ```

3. 淡入淡出切换

   ```js
   fadeToggle([speed,[easing],[fn]])
   ```

4. 渐进方式调整到指定的不透明度

   ```js
   fadeTo([speed],opacity,[easing],[fn])
   ```

   - opacity透明度必须写，取值0-1之间
   - speed必须写

##### 突出显示案例

```js
$(function(){
    $(".wrap li").hover(function(){
        //鼠标经过，兄弟元素变暗
        $(this).siblings("li").stop().fadeTo(400,0.5)
    },function(){
        //鼠标经过，恢复透明度1
        $(this).siblings("li").stop().fadeTo(400,1)
    })
})
```

#### 自定义动画animate

1. 语法

   ```js
   animate(params,[speed],[easing],[fn])
   ```

2. 参数

   - params想要更改的样式属性，以对象形式传递，必须写，属性名可以不用带引号，如果是复合属性则需要采用驼峰命名法，其余参数可以省略
   - speed：三种预定速度之一的字符串("slow","normal","fast")，或表示动画时长的毫秒数值
   - easing：(optional)用来指定切换效果，默认是“swing”，可用参数“linear”
   - fn：回调函数，在动画完成后执行

##### 手风琴案例

鼠标经过li有两步操作：

- 当前li宽度为224px，同时里面的小图片淡出，大图片淡入
- 其他li宽度为69px，小图片淡入，大图片淡出

```js
$(function() {
    $(".king li").mouseenter(function(){
        // 当前li宽度为224px，同时里面的小图片淡出，大图片淡入
        $(this).stop().animate({
            width:224
        },400).find(".small").stop().fadeOut().siblings(".big").stop().fadeIn();
        //  其他li宽度为69px，小图片淡入，大图片淡出
        $(this).siblings().stop().animate({
            width:69
        },400).find(".small").stop().fadeIn().siblings(".big").stop().fadeOut();
    })
});
```

### jQuery属性操作

#### 设置或获取元素固有属性prop()

1. 获取属性语法

   ```js
   prop("属性")//类似原生 element.属性
   ```

2. 设置属性语法

   ```js
   prop("属性","属性值")//类似 element.属性 = ‘值'
   ```

#### 设置或获取元素自定义属性属性attr()

1. 获取属性语法

   ```js
   attr("属性")//类似getAttribute
   ```

2. 设置属性语法

   ```js
   attr("属性","属性值")//类似setAttribute
   ```

#### 数据缓存data()

data()方法可以在指定的元素上存取数据，并不会修改DOM元素结构，一旦页面刷新，之前存放的数据都将被移除

1. 附加数据语法

   ```js
   data("name","value")//像被选元素附加数据
   ```

2. 获取数据语法

   ```js
   data("name")//向被选元素获取数据，获取h5中的data-index时可以不用加data且返回的是数字型
   ```

##### 购物车全选案例

1. 全选思路：里面3个小的复选框按钮（j-checkbox）选中状态（checked）跟着全选按钮（checkall）走
2. checked时复选框的固有属性，使用prop()方法获取和设置该属性
3. 把全选按钮状态赋值给3个小复选框就可以了
4. 当我们每次点击小的复选框按钮，就判断：
5. 如果小复选框被选中的个数等于3就应该把全选按钮选上，否则全选按钮不选
6. :checked 选择器，查找被选中的表单元素

```js
$(function(){
    //全选，全不选
    //全选按钮 checkall 小按钮 j-checkbox
    // 事件可以使用change
    $(".checkall").change(function(){
        // 小复选框的状态与全选按钮状态一致
        $(".j-checkbox, .checkall").prop("checked",$(this).prop("checked") );
                
    });
    $(".j-checkbox").change(function(){
        // 如果小复选框选中的个数等于小复选框的个数 则选中全选按钮
        if($(".j-checkbox:checked").length ==  $(".j-checkbox").length){
            $(".checkall").prop("checked",true);
        }else{
            $(".checkall").prop("checked",false);
        }
    })
})
```

### jQuery内容文本值

主要针对元素的**内容**还有**表单**操作

1. 普通元素内容 html() (相当于原生 innerHTML)

   ```js
   html()//获取元素内容，包含标签
   html("内容")//修改元素内容
   ```

2. 普通元素文本内容text() (相当于原生innerText)

   ```js
   text()//获取元素内容，不包含标签，取得的值是字符串型
   text("内容")//修改元素内容
   ```

3. 表单元素内容val() (相当于原生value)

   ```js
   val()//获取元素内容，取得的值是字符串型
   val("内容")//修改元素内容
   ```

##### 购物车增减商品案例

1. 核心思路：首先声明一个变量，当我们点击+号（increment），就让这个值++，然后赋值给文本框
2. 只能增加本商品的数量，就是当前+号兄弟文本框（itxt）的值
3. 修改表单的值是val()方法

```js
// 增减商品数量
$(".increment").click(function(){
    // 先获得文本框中已有数值
    var i = $(this).siblings(".itxt").val();
    // 在此基础上加一
    i++;
    $(this).siblings(".itxt").val(i);    
});
$(".decrement").click(function(){
    var i = $(this).siblings(".itxt").val();
    // 判断文本内容是否等于一，如果是，则无法继续减一
    if(i == 1){
        return false;
    }
    i--;
    $(this).siblings(".itxt").val(i);        
});
```

##### 购物车修改商品小计案例

1. 核心思路：每次点击+号或-号，根据文本框的值乘以当前商品的价格就是商品小计
2. 注意：只能增加本商品的小计，就是当前商品的小计模块（p-sum）
3. 修改普通元素内容是text()方法
4. 注意：当前商品的价格，要把￥符号去掉再相乘，截取字符串substr(1)
5. prarents('选择器')可以返回指定祖先元素
6. 最后计算的结果如果想要保留2位小数，通过toFixed(2)方法

```js
// 增减商品数量
$(".increment").click(function(){
    // 先获得文本框中已有数值
    var i = $(this).siblings(".itxt").val();
    // 在此基础上加一
    i++;
    $(this).siblings(".itxt").val(i);
    // var price = $(this).parent().parent().siblings(".p-price").text().substr(1); 
    // 返回指定祖先parents(".p-num")
    var price = $(this).parents(".p-num").siblings(".p-price").text().substr(1); 
    // 保留2位小数toFixed(2)
    price = (price*i).toFixed(2);
    $(this).parents(".p-num").siblings(".p-sum").text("￥"+ price);   
});
$(".decrement").click(function(){
    var i = $(this).siblings(".itxt").val();
    // 判断文本内容是否等于一，如果是，则无法继续减一
    if(i == 1){
        return false;
    }
    i--;
    $(this).siblings(".itxt").val(i);    
    var price = $(this).parents(".p-num").siblings(".p-price").text().substr(1); 
    price = (price*i).toFixed(2);
    $(this).parents(".p-num").siblings(".p-sum").text("￥"+ price);    
});
// 用户修改文本框内容计算小计的值
$(".itxt").change(function(){
    // 获得文本框中的值
    var i = $(this).val();
    var price = $(this).parents(".p-num").siblings(".p-price").text().substr(1); 
    price = (price*i).toFixed(2);
    $(this).parents(".p-num").siblings(".p-sum").text("￥"+ price); 
});
```

### jQuery元素操作

#### 遍历元素

语法一：

```js
$("div").each(function(index,domEle){});
```

1. each()方法遍历匹配的每一个元素，主要用DOM处理
2. 里面的回调函数有2个参数：index是每个元素的索引，domEle是每个DOM对象，不是jQuery对象

语法二：

```js
$.each(object,function(index,element){});
```

1. $.each()方法可用于遍历任何对象，主要用于数据处理，比如数组，对象
2. 里面的回调函数有2个参数：index是每个元素的索引，element是遍历内容

```js
$(function() {
    // $("div").css("color", "red");
    // 如果针对于同一类元素做不同操作，需要用到遍历元素（类似for，但是比for强大）
    var sum = 0;
    // 1. each() 方法遍历元素 
    var arr = ["red", "green", "blue"];
    $("div").each(function(i, domEle) {
        // 回调函数第一个参数一定是索引号  可以自己指定索引号号名称
        // console.log(index);
        // console.log(i);
        // 回调函数第二个参数一定是 dom元素对象 也是自己命名
        // console.log(domEle);
        // domEle.css("color"); dom对象没有css方法
        $(domEle).css("color", arr[i]);
        sum += parseInt($(domEle).text());
    })
    console.log(sum);
    // 2. $.each() 方法遍历元素 主要用于遍历数据，处理数据
    // $.each($("div"), function(i, ele) {
    //     console.log(i);
    //     console.log(ele);

    // });
    // $.each(arr, function(i, ele) {
    //     console.log(i);
    //     console.log(ele);


    // })
    $.each({
        name: "andy",
        age: 18
    }, function(i, ele) {
        console.log(i); // 输出的是 name age 属性名
        console.log(ele); // 输出的是 andy  18 属性值


    })
})
```



##### 购物车计算总计和总额案例

1. 核心思路：把所有文本框里面的值相加就是总计数量，总额同理
2. 文本框里的值不相同，如果想要相加用each遍历，声明一个变量，相加即可
3. 点击+号-号会改变总计和总额，用户更改文本框内的值同样会更改总计和总额
4. 可封装一个函数求总计和总额，以上2个操作调用这个函数即可
5. 总计是文本框内的值相加用val()，总额是普通元素用text()
6. 普通元素内容要去掉￥并且转换为数字型

```js
function getSum(){
    var count = 0;//计算总件数
    var money = 0;//计算总额
    $(".itxt").each(function(i,ele){
        count += parseInt($(ele).val());
    })
    $(".amount-sum em").text(count);
    $(".p-sum").each(function(i,ele){
        money += parseFloat($(ele).text().substr(1));
    })
    $(".price-sum em").text("￥"+money.toFixed(2));
}
```

#### 创建元素

语法：

```js
$("<li></li>");
```

#### 添加元素

内部添加（添加完成之后是父子关系）：

```js
element.append(元素)//把内容放到匹配元素内部的最后面，类似原生 appendChild
element.prepend(元素)//把内容放到匹配元素内部的最前面
```

外部添加（添加完成之后是兄弟关系）：

```js
element.after(元素)//把内容放到目标元素内部的后面
element.before(元素)//把内容放到目标元素内部的前面
```

#### 删除元素

```js
element.remove()//删除匹配的元素
element.empty()//删除匹配的元素集合中所有的子节点
element.html("")//清空匹配的元素内容
```

##### 删除商品模块案例

1. 核心思路：把商品remove()删除元素即可
2. 有三个地方需要删除：商品后的删除键，删除选中的商品，清理购物车
3. 商品后的删除键：一定是删除当前的商品，所以从$(this)出发

```js
// 删除商品模块
// 商品背后的删除键
$(".p-action a").click(function(){
    $(this).parents(".cart-item").remove();
    // 重新计算总额总计
    getSum();
});
//删除选中的商品
$(".remove-batch").click(function(){
    $(".j-checkbox:checked").parents(".cart-item").remove();
    getSum();
});
//清理购物车
$(".clear-all").click(function(){
    $(".cart-item").remove();
    getSum();
});

```

##### 选中商品添加背景案例

1. 核心思路：选中的商品添加背景，不选中则移除背景
2. 全选按钮点击：选中则全部添加背景，不选中则移除背景
3. 小复选框点击：选中则当前添加背景，不选中则移除当前背景

### jQuery尺寸、位置操作

#### jQuery尺寸

| 语法                               | 用法                                                  |
| ---------------------------------- | ----------------------------------------------------- |
| width()/height()                   | 取得匹配元素宽度与高度值，只算width/height            |
| innerWidth()/innerHeight()         | 取得匹配元素宽度与高度值,包含padding                  |
| outerWidth()/outerHeight()         | 取得匹配元素宽度与高度值，包含padding，border         |
| outerWidth(true)/outerHeight(true) | 取得匹配元素宽度与高度值，包含padding，border，margin |

#### jQuery位置

1. ##### offset()设置或者获取元素偏移

   - offset()方法设置或返回被选元素相对于文档的偏移坐标，跟父级没关系
   - 该方法有2个属性，left、top。offset().left用于获得距离文档左侧的距离，offset().top用于获得距离文档顶部的距离。
   - 可以设置元素偏移：offset({top:10,left:30});

2. ##### position()获取元素偏移

   - positon()方法返回被选元素相对于**带有定位的父级**偏移坐标，若没有带有定位的父级，则以文档为准
   - 不可以设置元素偏移

3. ##### scrollTop()/scrollLeft()

   - scrollTop()方法设置或返回被选元素被卷去的头部
   - scrollLeft()方法设置或返回被选元素被卷去的左侧

```js
$(function() {
    $(document).scrollTop(100);
    // 被卷去的头部 scrollTop()  / 被卷去的左侧 scrollLeft()
    // 页面滚动事件
    var boxTop = $(".container").offset().top;
    $(window).scroll(function() {
        // console.log(11);
        console.log($(document).scrollTop());
        if ($(document).scrollTop() >= boxTop) {
            $(".back").fadeIn();
        } else {
            $(".back").fadeOut();
        }
    });
    // 返回顶部
    $(".back").click(function() {
        // $(document).scrollTop(0);
        $("body, html").stop().animate({
            scrollTop: 0
        });
        // $(document).stop().animate({
        //     scrollTop: 0
        // }); 不能是文档而是 html和body元素做动画
    })
})
```



##### 电梯导航案例

1. 滚动到今日推荐模块就让电梯导航显示出来
2. 点击电梯导航滑动至对应区域
3. 核心算法：电梯导航模块和内容区域模块一一对应
4. 当我们点击电梯导航某个小模块时，就可以拿到当前小模块的索引号
5. animate滚动距离是当前索引号内容区模块的offset().top
6. 点击电梯导航某个小模块，添加current类，其余删除current类
7. 页面滚动到内容区域某个模块，左侧电梯导航相对模块添加current类
8. 触发事件是页面滚动，因此这个功能要写到页面滚动事件里
9. 需要用到each，遍历内容区域大模块，each里面能拿到内容区域模块每一个元素和索引号
10. 判断条件：被卷曲的头部大于等于区域内容里面每个模块的offset().top
11. 利用索引号找到相应小li添加current类

```js
$(function() {
    //节流阀
    var flag = true;
    function toogleTool(){
        if($(document).scrollTop() >= $(".recommend").offset().top){
            $(".fixedtool").fadeIn();
        }else{
            $(".fixedtool").fadeOut();
        }
    };
    toogleTool();
    $(window).scroll(function(){
        toogleTool();
        if(flag){
            $(".floor .w").each(function(i,ele){
            if($(document).scrollTop() >= $(ele).offset().top){
                $(".fixedtool li").eq(i).addClass("current").siblings().removeClass("current");
            }
        })
        }
    });
    $(".fixedtool li").click(function(){
        flag = false
        //使用addClass添加类名不加点！！！
        $(this).addClass("current");
        $(this).siblings().removeClass("current");
        var index = $(this).index();
        var current = $(".floor .w").eq(index).offset().top;
        $("body, html").stop().animate({
            scrollTop : current
        },function(){
            //打开节流阀
            flag = true;
        })
    });
})
```

## jQuery事件

### jQuery事件注册

#### 单个事件注册

语法：

```js
element.事件(function(){});
```

### jQuery事件处理

#### 事件处理on()绑定事件

on()方法在匹配元素上绑定一个或多个事件的事件处理函数

语法：

```js
element.on(events,[selector],fn)
```

1. events一个或多个用空格分隔得事件类型，如“click”或“keydown“
2. selector：元素的子元素选择器
3. fn回调函数，及绑定在元素身上的侦听函数

**on()方法优势1**：

可以绑定多个事件，多个处理事件处理程序：

```js
$("div").on({
    mouseenter: function() {
        $(this).css("background", "skyblue");
    },
    click: function() {
        $(this).css("background", "purple");
    },
    mouseleave: function() {
        $(this).css("background", "blue");
    }
});
```

如果事件处理程序相同：

```js
$("div").on("mouseenter mouseleave", function() {
                $(this).toggleClass("current");
            })
```

**on()方法优势2**：

可以事件委派。事件委派的定义就是，把原来加到子元素身上的事件绑定在父元素身上，就是把事件委派给父元素。

```js
//click 是绑定在ul 身上的，但是 触发的对象是 ul 里面的小li
$("ul").on("click", "li", function() {
    alert(11);
});
```

**on()方法优势3**：

动态创建的元素，click()没有办法绑定事件，on()可以给动态生成的元素绑定事件

```js
$("ol").on("click", "li", function() {
    alert(11);
})
var li = $("<li>我是后来创建的</li>");
$("ol").append(li);
```

##### 发布微博案例

1. 点击发布案例，动态创建一个li，放入文本框的内容和删除按钮，并且添加到ul中
2. 点击删除，删除当前留言

```js
$(function(){
    //    点击发布内容
    $(".btn").on("click",function(){
        if($(".txt").val()==""){
            alert("请输入发布内容")
        }else{
            var li = $("<li></li>");
            li.html($(".txt").val() + "<a herf = '#'>删除</a>");
            $("ul").prepend(li);
            li.slideDown();
            $(".txt").val("");
        }  
    })
    //    点击删除内容
    $("ul").on("click","a",function(){
        $(this).parent().slideUp(function(){
            $(this).remove()
        });
    })

})
```

#### 事件处理off() 解绑事件

off()方法可以移除通过on()方法添加的事件处理程序

1. 解除所有事件

   ```js
   $("div").off()//解除div身上所有事件
   ```

2. 解除指定事件

   ```js
   $("div").off("click")//解除div点击事件
   ```

3. 解除事件委托

   ```js
   $("ul").on("click","li",function(){
       alert("11")
   })
   $("ul").off("click"，"li")//解除ul里的li的点击事件
   ```

如果有事件只想触发一次，采用one()绑定事件，使用方法与on()相同

#### 自动触发事件trigger()

```js
element.click()//简写形式
element.trigger("事件")//自动触发模式
element.triggerHandler(type)//不会触发元素的默认行为
```

### jQuery事件对象

```js
element.on(events,[selector],function(event){})
```

阻止默认行为：event.preventDefault 或者 return false

阻止冒泡：event.preventPropagation()

## jQuery其他方法

### jQuery拷贝对象

语法：

```js
$.extend([deep],target,object1,[objectN])
```

1. deep：如果为true为深拷贝，默认为false 浅拷贝
2. target：要拷贝的目标对象
3. object1：待拷贝到第一个对象的对象
4. objectN：待拷贝到第N个对象的对象
5. 浅拷贝是把被拷贝的对象**复杂数据类型中的地址**拷贝给目标对象，修改目标对象会影响被拷贝对象
6. 深拷贝，前面加true，完全克隆（拷贝对象而不是地址），修改目标对象不会影响被拷贝对象，如果里面有不冲突的属性会合并到一起

### jQuery多库共存

客观需求：

jQuery和其他的js库共存，不冲突

解决方案：

1. 将$符号统一改成jQuery

2. 用 noConflict() 自定义控制符

   ```js
   var xxx = $.noConflict()
   ```

### jQuery插件

jQuery插件常用网站：

1. jQuery插件库 ：https://www.jq22.com/
2. jQuery之家：http://www.htmleaf.com/

jQuery插件使用方法：

1. 引入相关文件（jQuery文件和插件文件）
2. 赋值相关html、css、js（调用插件）

#### 插件演示

1. 瀑布流

2. 图片懒加载：（图片使用延时加载可提高网页下载速度，也能帮助减轻服务器负载）当页面滑动到可视区域，在显示图片。（插件库中EasyLazyLoad）

3. 全屏滚动（fullpage.js）

   github:https://github.com/alvarotrigo/fullPage.js

   中文翻译：http://www.dowebok.com/demo/2014/77/

##### todolist案例

需求：

1. 文本框里输入内容，按下回车，就可以生成待办事件
2. 点击待办事件复选框，就可以把当前数据添加到已完成事项里
3. 点击已完成事件复选框，就可以把当前数据添加到待办事件里
4. 刷新页面后数据不会丢失

分析：

1. 刷新页面不会丢失数据存储使用localStorage

2. 核心思路：把本地存储的数据加载到页面中，保证刷新关闭时数据不会丢失

   ```js
   // 读取本地存储的数据 
   function getDate() {
       var data = localStorage.getItem("todolist");
       if (data !== null) {
           // 本地存储里面的数据是字符串格式的 但是我们需要的是对象格式的
           return JSON.parse(data);
       } else {
           return [];
       }
   }
   // 保存本地存储数据
   function saveDate(data) {
       localStorage.setItem("todolist", JSON.stringify(data));
   }
   ```

按下回车把新数据添加到本地存储：

1. 利用事件对象.keyCode判断按下的是否为回车(13)

2. 声明数组用来保存数据

3. 先要读取本地存储原来的数据（声明函数getData()），放到这个数组里

4. 将数据追加到数组里面

5. 最后把数组存储给本地存储（声明函数saveData()）

   ```js
   $("#title").on("keydown", function(event) {
       if (event.keyCode === 13) {
           if ($(this).val() === "") {
               alert("请输入您要的操作");
           } else {
               // 先读取本地存储原来的数据
               var local = getDate();
               // console.log(local);
               // 把local数组进行更新数据 把最新的数据追加给local数组
               local.push({ title: $(this).val(), done: false });
               // 把这个数组local 存储给本地存储
               saveDate(local);
               // 2. toDoList 本地存储数据渲染加载到页面
               load();
               $(this).val("");
           }
       }
   });
   ```

本地数据渲染加载到页面：

1. 声明一个load函数

2. 先读取本地存储数据，将数据转换为对象格式（JSON.stringify()：将对象转换为字符串；JSON.parse()：将字符串转换为对象格式）

3. 遍历数据（$.each()），有几条数据生成几个li，添加到ol

   ```js
   function load() {
       // 读取本地存储的数据
       var data = getDate();
       console.log(data);
       // 遍历之前先要清空ol里面的元素内容
       $("ol, ul").empty();
       var todoCount = 0; // 正在进行的个数
       var doneCount = 0; // 已经完成的个数
       // 遍历这个数据
       $.each(data, function(i, n) {
           // console.log(n);
           if (n.done) {
               $("ul").prepend("<li><input type='checkbox' checked='checked' > <p>" + n.title + "</p> <a href='javascript:;' id=" + i + " ></a></li>");
               doneCount++;
           } else {
               $("ol").prepend("<li><input type='checkbox' > <p>" + n.title + "</p> <a href='javascript:;' id=" + i + " ></a></li>");
               todoCount++;
           }
   
       });
       $("#todocount").text(todoCount);
       $("#donecount").text(doneCount);
   
   }
   ```

删除操作：

1. 点击里面的a链接，不是删除li，而是删除本地存储对应的数据

2. 核心原理：先获取本地存储的数据，删除对应的数据，保存给本地存储，重新渲染列表li

3. 给链接自定义一个记录当前的索引号

4. 根据索引号删除相关数据，数组的splice(i,1)方法

5. 存储修改后的数据，然后存储给本地存储

6. 重新渲染加载列表

7. 因为a是动态创建的，使用on方法绑定事件

   ```js
   // 3. toDoList 删除操作
   $("ol, ul").on("click", "a", function() {
       // alert(11);
       // 先获取本地存储
       var data = getDate();
       console.log(data);
       // 修改数据，获取自定义属性id
       var index = $(this).attr("id");
       console.log(index);
       data.splice(index, 1);
       // 保存到本地存储
       saveDate(data);
       // 重新渲染页面
       load();
   });
   ```

待完成和已完成操作：

1. 点击小的复选框后，修改本地存储数据，在重新渲染数据列表

2. 点击之后获取本地存储数据

3. 修改对应数据属性done为当前复选框的checked状态

4. 之后保存数据到本地存储

5. 重新渲染页面

6. load加载函数里，新增一个条件，如果当前数据done为true，就把列表渲染加载到ul里面

7. 若为false，就把列表渲染到ol里

   ```js
   $("ol, ul").on("click", "input", function() {
       // alert(11);
       // 先获取本地存储的数据
       var data = getDate();
       // 修改数据
       var index = $(this).siblings("a").attr("id");
       console.log(index);
       // data[?].done = ?
       data[index].done = $(this).prop("checked");
       console.log(data);
   
       // 保存到本地存储
       saveDate(data);
       // 重新渲染页面
       load();
   });
   ```

   

