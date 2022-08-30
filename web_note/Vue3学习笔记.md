# Vue3学习笔记

## 新特性

### Composition API

- ref 和 reactive 
- computed 和 watch
- 新的生命周期函数
- 自定义函数 - Hooks函数

### 其他新增特性

- Teleport：瞬移组件的位置
- Suspense：异步加载组件
- 全局API的修改和优化
- 更多的试验性特性

### 更好的TypeScript支持

## 安装VUE3

1. `npm install -g @vue/cli`
2. 进入想创建项目的目录中 `vue create 项目名`
3. 选择项目类型，因为默认项目不支持typescript，因此选择自定义创建，并选择typescript选项
4. 剩余选项根据情况选择
5. 等待创建

### 推荐插件

1. eslint：如果无法运行，在根目录创建一个.vscode文件夹，在里面创建一个 settings.json 的文件，添加一个字段

   ```json
   {
   	"eslint-validate":["typescript"]
   }
   ```

2. vetu：官方推荐

## setup方法

1. setup函数的执行时机是在beforeCreate和created之间

2. 使用在props、data、computed、methods和生命周期函数之前

3. 使用Composition API 的入口

4. 在setup中没有this

5. `setup(props,context){}`：

   - 第一个参数props:

     props是一个对象，包含父组件传递给子组件的所有数据。

     在子组件中使用props进行接收。

     包含配置声明并传入的所有的属性的对象

     也就是说:如果你想通过props的方式输出父组件传递给子组件的值。

     你需要使用props进行接收配置。即props:{......}

     如果你未通过Props进行接受配置，则输出的值是undefined

   - 第2个参数：context，是一个上下文对象。

     里面有attrs(获取当前标签上的所有属性的对象)

     但是该属性是props中没有声明接收的所有的对象。

     如果你使用props去获取值，同时props中你声明了你要获取的值

     注意点：

     - attrs获取值是不需要props声明接收。
     - 第1个参数props获取值是需要props中声明接收的
     - 有emit事件分发,(传递给父组件需要使用该事件)
     - 有slots插槽

> 理解：Vue3.0中一个新的配置项，值为一个函数。
>
> `setup`是所有**Composition API（组合API）**“ 表演的舞台 ”。
>
> 组件中所用到的：**数据**、**方法**等等，均要配置在`setup`中。
>
> `setup`函数的两种返回值：
>
> 1. 若返回一个对象，则对象中的属性、方法, 在模板中均可以直接使用。（重点关注！）
> 2. 若返回一个渲染函数：则可以自定义渲染内容。（了解） (不常用)

```vue
<template>
  <h1>博主的信息</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>性别：{{gender}}</h2>
  <button @click="sayInfo">显示信息</button>
</template>

<script>
// import {h} from 'vue'
export default {
  name: "App",
  //此处只是测试一下setup，暂时不考虑响应式的问题。
  setup(){
    // 数据
    let name = "YK菌"
    let age = 18
    let gender = "男"

    // 方法
    function sayInfo(){
      alert(`你好${name}，你太厉害了吧`)
    }
    return {
      name,age, gender,sayInfo
    }
    // return ()=> h('h1','YK菌yyds')
  }
};
</script>

```

> 注意点：
>
> 1. 尽量
>
>    不要
>
>    与Vue2.x配置混用
>
>    - Vue2.x配置（data、methos、computed...）中**可以访问到**setup中的属性、方法。
>    - 但在setup中**不能访问到**Vue2.x配置（data、methos、computed...）。
>    - 如果有重名, `setup`优先。
>
> 2. `setup`不能是一个`async`函数，因为返回值不再是对象, 而是`promise`, 模板看不到return对象中的属性。（后期也可以返回一个Promise实例，但需要Suspense和异步组件的配合）

## ref函数

- 作用: 定义一个**响应式**的数据

- 语法: 

  ```
  const xxx = ref(initValue)
  ```

  - 创建一个包含响应式数据的**引用对象（reference对象，简称ref对象）**。
  - JS中操作数据： `xxx.value`
  - 模板中读取数据: 不需要`.value`，直接：`<div>{{xxx}}</div>`

- 备注：

  - 接收的数据可以是：基本类型、也可以是对象类型。
  - 基本类型的数据：响应式依靠的是类上的`getter`与`setter`完成的（我们等下看下源码你就知道了）。
  - 对象类型的数据：内部 *“ 求助 ”* 了Vue3.0中的一个新函数—— `reactive`函数。

```vue
<template>
  <h1>博主的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>职业： {{ job.type }}</h2>
  <h2>工资：{{ job.salary }}</h2>
  <button @click="sayInfo">显示信息</button>
  <button @click="changeInfo">修改信息</button>
</template>

<script>
import { ref } from "vue";//引入ref函数
export default {
  name: "App",
  setup() {
    // 数据
    let name = ref("YK菌");//此时count是一个响应式对象
    let age = ref(18);
    let job = ref({
      type: "前端工程师",
      salary: "30K",
    });
    // 方法
    function sayInfo() {
      alert(`你好${name.value}，你太厉害了吧，薪水${job.value.salary}这么高`);
    }
    function changeInfo() {
      name.value = "三十年后的YK菌";
      age.value = 48;
      job.value.type = "工程师";
      job.value.salary = "200K";
    }
    return {
      name,
      age,
      job,
      sayInfo,
      changeInfo,
    };
  },
};
</script>
```

## toRef函数

作用：创建一个 `ref` 对象，其value值指向另一个对象中的某个属性。

语法：`const name = toRef(person,'name')`

应用:   要将响应式对象中的某个属性单独提供给外部使用时。

扩展：`toRefs`与`toRef`功能一致，但可以批量创建多个 ref 对象，语法：`toRefs(person)`

```vue
<template>
	<h4>{{person}}</h4>
	<h2>姓名：{{name}}</h2>
	<h2>年龄：{{age}}</h2>
	<h2>薪资：{{job.j1.salary}}K</h2>
	<button @click="name+='~'">修改姓名</button>
	<button @click="age++">增长年龄</button>
	<button @click="job.j1.salary++">涨薪</button>
</template>

<script>
	import {ref,reactive,toRef,toRefs} from 'vue'
	export default {
		name: 'Demo',
		setup(){
			//数据
			let person = reactive({
				name:'张三',
				age:18,
				job:{
					j1:{
						salary:20
					}
				}
			})
			//将person里的属性转化为ref类型
			const x = toRefs(person)
			console.log('******',x)

			return {
				person,
                //将person里的属性每个单独转化为ref类型
				// name:toRef(person,'name'),
				// age:toRef(person,'age'),
				// salary:toRef(person.job.j1,'salary'),
				...toRefs(person)
			}
		}
	}
</script>

```



## reactive函数

- 作用: 定义一个**对象类型**的响应式数据（基本类型不要用它，要用`ref`函数）
- 语法：`const 代理对象= reactive(源对象)`接收一个对象（或数组），返回一个**代理对象（`Proxy`的实例对象，简称`proxy`对象）**
- `reactive`定义的响应式数据是“深层次的”。
- 内部基于 ES6 的 `Proxy` 实现，通过代理对象操作源对象内部数据进行操作。
- 注意：在模板中引用的是否是响应式的数据类型，这样才能根据数据改变做出模板更新的工作

```vue
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>{{count}}</h1>
  <h1>{{double}}</h1>
  <button @click="increase">👍👍+1</button>
</template>

<script lang="ts">
import {computed,reactive} from 'vue'
export default ({
  name:"App",
  setup() {
    interface DataProps{
      count:number,
      increase:()=>void,
    }//定义data的类型，解决data警告问题
    const data :DataProps= reactive({
      count : 0,
      increase(){
        data.count++
      },
      double:computed(()=>
         data.count*2
      )

    })
    const refData = toRefs(data)//可以将data中的数据都变成ref类型成为响应式对象
    return {
        ...refData//展开refData，就可以省略模板中的data.
    }
    
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

```

## Vue2和Vue3的响应式原理

### Vue2.x的响应式

- 实现原理

  - 对象类型：通过`Object.defineProperty()`对属性的读取、修改进行拦截（数据劫持）。
  - 数组类型：通过重写更新数组的一系列方法来实现拦截。（对数组的变更方法进行了包裹）。

  ```js
  Object.defineProperty(data, 'count', {
      get () {}, 
      set () {}
  })
  ```

- 存在问题

  - **新增**属性、**删除**属性, 界面不会更新。
  - 直接通过**下标修改**数组, 界面不会自动更新。

- 解决方案

  - 使用`Vue.set`、`Vue.delete`或者`vm.$set`、`vm.$delete`这些API

- 模拟Vue2 的响应式原理

  ```js
  //源数据
  let person = {
      name:'张三',
      age:18
  }
  
  // 模拟vue2的响应式原理
  let p = {}
  Object.defineProperty(p,'name',{
      configurable:true,
      get(){// 有人读取name时调用
          return person.name
      },
      set(value){// 有人修改name时调用
          person.name = value
      }
  })
  
  Object.defineProperty(p,'age',{
      configurable:true,
      get(){// 有人读取age时调用
          return person.age
      },
      set(value){// 有人修改age时调用
          person.age = value
      }
  })
  ```

### Vue3.0响应式原理

- 实现原理

  - 通过 `Proxy`（代理）: 拦截对象中任意属性的变化, 包括：属性值的读写、属性的添加、属性的删除等。

  - 通过`Reflect`（反射）: 对源对象的属性进行操作。

- Proxy对象

  - Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。
  - 代理后的数据对象 操作proxyData会影响data数据，但直接更改data不会触发get和set方法

  - 语法 `new Proxy(target,handler)`

  - 参数：

    - target：`Proxy` 会对 target 对象进行包装。它可以是任何类型的对象，包括内置的数组，函数甚至是另一个代理对象。

    - handler：它是一个对象，它的属性提供了某些操作发生时所对应的处理函数。

      - **`handler.get()`** 方法用于拦截对象的读取属性操作。

        - 语法：

          ```js
          var p = new Proxy(target, {
              //target:目标对象 property:被获取的属性名 receiver:Proxy或者继承Proxy的对象
              
            get: function(target, property, receiver) {
            }
          });
          ```

        - 返回值：get方法可返回任何值

      - `handler.set()` 方法是设置属性值操作的捕获器。

        - 语法：

          ```js
          var p = new Proxy(target,{
          	set:function(target,property,value,receiver){
          	
          	}
          });
          ```

        - 返回值：返回true代表设置成功

- Reflect函数

  - **Proxy的函数负责的是：拦截并定义拦截时具体的操作；Reflect的静态函数负责的是：最终执行对象的操作**

    ```js
    let obj = {
      a: '1'
    };
    
    let handler = {
      //下一行中的set是Proxy支持的操作，意思是需要拦截target的设置值的操作，
      //同时定义了设置值操作被拦截后会执行的操作，本例中就是输出‘set’,然后执行Reflect.set函数
      set(target, key, value, receiver) {
        console.log("set");
        //下一行执行的是Reflect的set函数，是它最终执行了对target对象属性的操作。
        Reflect.set(target, key, 100, receiver)
      }
    };
    
    let objProxy = new Proxy(obj, handler);
    objProxy.a = '2';
    
    ```

    

```js
//vue2
//Object.defineProperty只有在指定属性时才能对其进行操作，对对象上的新增属性不能操作
Object.defineProperty(data,'count',{
	get(){},
	set(){}
})

//vue3
//拦截的是整个data，修改和读取data上任意的key
new Proxy(data,{
    get(key){},
    set(key,value){}
})
```

## reactive对比ref

- 从定义数据角度对比
  - `ref`用来定义：**基本类型数据**。
  - `reactive`用来定义：**对象（或数组）类型数据**。
  - 备注：`ref`也可以用来定义**对象（或数组）类型数据**, 它内部会自动通过`reactive`转为**代理对象**。

------

- 从原理角度对比
  - `ref`通过类中的的`getter`与`setter`来实现响应式（数据劫持）。
  - `reactive`通过使用**Proxy**来实现响应式（数据劫持）, 并通过**Reflect**操作**源对象**内部的数据。

------

- 从使用角度对比
  - `ref`定义的数据：操作数据**需要**`.value`，读取数据时模板中直接读取**不需要**`.value`。
  - reactive定义的数据：操作数据与读取数据：**均不需要**`.value`。

## 生命周期

在 setup 中使用的 hook 名称和原来生命周期的对应关系

- beforeCreate -> 不需要（在setup中直接使用）
- created -> 不需要
- beforeMount -> onBeforeMount
- mounted -> onMounted
- beforeUpdate -> onBeforeUpdate
- updated -> onUpdated
- beforeUnmount -> onBeforeUnmount
- unmounted -> onUnmounted
- errorCaptured -> onErrorCaptured

![image-20220308163911456](C:\Users\Sagittarius\AppData\Roaming\Typora\typora-user-images\image-20220308163911456.png)

新增两个调试函数

- renderTracked -> onRenderTracked
- renderTriggered -> onRenderTriggered

```vue
<script>
    import {onMounted,onRenderTriggered} from 'vue'
	export default({
	name:'App'
	setup(){
		onMounted(()=>{
            console.log('mounted')
        })
        onRenderTriggered((event)=>{
            console.lo(event)
        })
		}
	})
</script>

```

## watch

- 与Vue2.x中`watch`配置功能一致
- 两个小“坑”：
  - 监视`reactive`定义的响应式数据时：`oldValue`无法正确获取、强制开启了深度监视（`deep`配置失效）。
  - 监视`reactive`定义的响应式数据中某个属性时：`deep`配置有效。

### 监视reactive定义的响应式数据

- 若watch监视的是reactive定义的响应式数据，则无法正确获得oldValue！！

- 若watch监视的是reactive定义的响应式数据，则强制开启了深度监视

  ```js
  watch(person,(newValue,oldValue)=>{
  	console.log('person变化了',newValue,oldValue)
  },{immediate:true,deep:false}) //此处的deep配置不再奏效
  //immediate:初始化时让handler调用一下 deep:监测多级结构中某个属性的变化
  ```

### 监视reactive定义的响应式数据中的属性

监视的属性必须是响应式数据、函数或者数组

```js
//情况一：监视reactive定义的响应式数据中的某个属性
watch(()=>person.job,(newValue,oldValue)=>{
	console.log('person的job变化了',newValue,oldValue)
},{immediate:true,deep:true}) 

//情况二：监视reactive定义的响应式数据中的某些属性
watch([()=>person.job,()=>person.name],(newValue,oldValue)=>{
	console.log('person的job变化了',newValue,oldValue)
},{immediate:true,deep:true})

```

### 监视ref定义的响应式数据

```js
//情况一：监视ref定义的响应式数据
watch(sum,(newValue,oldValue)=>{
	console.log('sum变化了',newValue,oldValue)
},{immediate:true})

//监视ref定义的对象
watch(person.value,(newValue,oldValue)=>{
	console.log('person变化了',newValue,oldValue)
}) 
//开启深度监视
watch(person,(newValue,oldValue)=>{
	console.log('person变化了',newValue,oldValue)
},{deep: true}) 


//情况二：监视多个ref定义的响应式数据
watch([sum,msg],(newValue,oldValue)=>{
	console.log('sum或msg变化了',newValue,oldValue)
}) 

```

## 自定义hook函数

- 什么是`hook`？—— 本质是一个函数，把`setup`函数中使用的Composition API进行了封装。
- 类似于vue2.x中的`mixin`。
- 自定义`hook`的优势: 复用代码, 让`setup`中的逻辑更清楚易懂。

创建一个hooks文件夹，里面创建文件useMousePosition.js

```js
import { reactive, onMounted, onBeforeUnmount } from "vue";
export default function() {
  //实现鼠标“打点”相关的数据
  let point = reactive({
    x: 0,
    y: 0,
  });
    //ref定义
    //let x=ref(0)
    //let y = ref(0)

  //实现鼠标“打点”相关的方法
  function savePoint(event) {
    point.x = event.pageX;
    point.y = event.pageY;
    console.log(event.pageX, event.pageY);
  }

  //实现鼠标“打点”相关的生命周期钩子
  onMounted(() => {
    window.addEventListener("click", savePoint);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("click", savePoint);
  });

  return point;
    //return {x,y}
}
```

## Teleport

### 组件命名

1. 组件的命名规则为：组件名以字母开头，后面跟字母、数值或下划线，并且不与 HTML 元素或 Vue 保留标签重名。
2. 模板解析过程：首先，Vue 会将 template 中的内容插到 DOM 中，以方便解析标签。由于 HTML 标签不区分大小写，所以在生成的标签名都会转换为小写。例如，当你的 `template` 为 `<MyComponent></MyComponent>` 时，插入 DOM 后会被转换为 `<mycomponent></mycomponent>`。
    然后，通过标签名寻找对应的自定义组件。匹配的优先顺序从高到低为：原标签名、camelCase化的标签名、PascalCase化的标签名。例如 `<my-component>`会依次匹配 my-component、myComponent、MyComponent。

### Teleport使用步骤

1. 编写组件，注意组件命名，其中组件的 `template` 中添加 `teleport` 标签

   vue3 新添加了一个默认的组件就叫 Teleport，我们可以拿过来直接使用，它上面有一个 to 的属性，它接受一个css query selector 作为参数，这就是代表要把这个组件渲染到哪个 dom 元素中

   ```vue
   <template>
   <teleport to="#modal">
     <div id="center" v-if="isOpen">
       <h2><slot>this is a modal</slot></h2>
       <button @click="buttonClick">Close</button>
     </div>
   </teleport>
   </template>
   ```

2. 将组件引入App.vue

   ```vue
   <template>
   	<button @click="openModal">Open Modal</button><br/>
     	<modal :isOpen="modalIsOpen" @close-modal="onModalClose"> My Modal !!!!</modal>
   </template>
   <script>
       import Modal from './components/MyModal.vue'
       export default ({
            name:"App",
           components:{
               modal
           }
       }
       )
   </script>
   ```

3. 在html文件中添加要传送的元素

   ```html
   <body>
       <div id="modal"></div>
   </body>
   ```

## Suspense

- 等待异步组件时渲染一些额外内容，让应用有更好的用户体验
- 使用suspense要返回一个promise对象

### 使用步骤

- 使用suspense返回的对象是一个promise对象

  ```vue
  <template>
    <h1>{{result}}</h1>
  </template>
  
  <script>
  import {defineComponent} from 'vue'
  export default defineComponent({
      setup(){
          return new Promise((resolve)=>{
              setTimeout(()=>{
                  return resolve({
                      result:42
                  })
              },3000)
          })
      }
  })
  ```

- 使用`Suspense`包裹组件，并配置好`default`与 `fallback`

  ```vue
  <template>
      <suspense>
      <template #default>
        <async-show></async-show>
      </template>
      <template #fallback>
        <h1>Loading!...</h1>
      </template>
    </suspense>
  </template>
  ```

​	default：就是组件要显示的内容

​	fallback：就是组件没加载完全的“备胎”

## 全局API修改

### Vue2 的全局配置

```js
import Vue from 'vue'
import App from './App.vue'

Vue.config.ignoredElements = [/^app-/]
Vue.use(/* ... */)
Vue.mixin(/* ... */)
Vue.component(/* ... */)
Vue.directive(/* ... */)

Vue.prototype.customProperty = () => {}

new Vue({
  render: h => h(App)
}).$mount('#app')
```

Vue2 这样写在一定程度上修改了 Vue 对象的全局状态。

- 第一，在单元测试中，全局配置非常容易污染全局环境，用户需要在每次 case 之间，保存和恢复配置。有一些 api （vue use vue mixin）甚至没有方法恢复配置，这就让一些插件的测试非常的困难。
- 第二，在不同的 APP 中，如果想共享一份有不同配置的 vue 对象，也变得非常困难。

### Vue3 的修改

```js
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
// 这个时候 app 就是一个 App 的实例，现在再设置任何的配置是在不同的 app 实例上面的，不会像vue2 一样发生任何的冲突。

app.config.isCustomElement = tag => tag.startsWith('app-')
app.use(/* ... */)
app.mixin(/* ... */)
app.component(/* ... */)
app.directive(/* ... */)

app.config.globalProperties.customProperty = () => {}

// 当配置结束以后，我们再把 App 使用 mount 方法挂载到固定的 DOM 的节点上。
app.mount(App, '#app')
```

全局配置：Vue.config --> app.config

1. config.productionTip 被删除
2. config.ignoredElements 改名为 config.isCustomElement，作用：须使Vue忽略在Vue之外的自定义元素，否则，它会假设你忘记注册全局组件或者拼错了组件名称，从而抛出一个关于Unknown custom element的警告。
3. config.keyCodes 被删除，作用：给 v-on自定义键位别名。

全局注册类 API

1. Vue.component --> app.component
2. Vue.directive --> app.directive

行为扩展类 API

1. Vue.mixin --> app.mixin
2. Vue.use --> app.use

其他不会修改全局的Vue2的API都修改为name exports，为了支持全局API的tree shaking

## 自定义事件

### 定义自定义事件

- 可以通过 emits 选项在组件上定义已发出的事件。

  ```js
  app.component('custom-form', {
   emits: ['in-focus', 'submit']
  })
  ```

- 当在 emits 选项中定义了原生事件 (如 click) 时，将使用组件中的事件替代原生事件侦听器。

## vue-router

用 Vue + Vue Router 创建单页应用非常简单：通过 Vue.js，我们已经用组件组成了我们的应用。当加入 Vue Router 时，我们需要做的就是将我们的组件映射到路由上，让 Vue Router 知道在哪里渲染它们

### router-link

请注意，我们没有使用常规的 `a` 标签，而是使用一个自定义组件 `router-link` 来创建链接。这使得 Vue Router 可以在不重新加载页面的情况下更改 URL，处理 URL 的生成以及编码。我们将在后面看到如何从这些功能中获益。

### router-view

`router-view` 将显示与 url 对应的组件。你可以把它放在任何地方，以适应你的布局。

```html
<script src="https://unpkg.com/vue@3"></script>
<script src="https://unpkg.com/vue-router@4"></script>

<div id="app">
  <h1>Hello App!</h1>
  <p>
    <!--使用 router-link 组件进行导航 -->
    <!--通过传递 `to` 来指定链接 -->
    <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
  </p>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
</div>
```

