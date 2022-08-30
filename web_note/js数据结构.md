# 数据结构和算法

## 数组结构

### 创建和初始化数组

- 使用`new`关键字，就能简单地声明并初始化一个数组。用这种方式，还可以创建一个指定长度的数组。另外，也可以直接将数组元素作为参数传递给它的构造器
- 用`new`创建数组并不是最好的方式。如果你想在JavaScript中创建一个数组，只用中括号（`[]`）的形式就行了

### 数组长度和遍历数组

- 获取数组长度有一个length属性

- 通过下标值遍历数组

  ```js
  //通过for循环遍历
  for(var i = 0 ; i < arr.length; i++){
      alert(arr[i]);
  }
  //通过foreach遍历
  arr.foreach(function (value)){
      alert(value)
              }
  ```

### 数组常见操作

#### 添加元素

- 添加一个元素到数组的最后位置:

  ```js
  // 添加一个元素到数组的最后位置
  // 初始化一个数组
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  // 方式一:
  numbers[numbers.length] = 10
  
  // 方式二:
  numbers.push(11)
  numbers.push(12, 13)
  
  alert(numbers)
  ```

- 在数组首位插入一个元素:

  ```js
  // 在数组首位插入一个元素
  for (var i = numbers.length; i > 0; i--) {
      numbers[i] = numbers[i-1]
  }
  numbers[0] = -1
  alert(numbers) // -1,0,1,2,3,4,5,6,7,8,9,10,11,12,13
  
  // 通过unshift在首位插入数据
  numbers.unshift(-2)
  numbers.unshift(-4, -3)
  alert(numbers) // -4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13
  ```

  原理：![img](https://upload-images.jianshu.io/upload_images/1102036-8fb6621c6dca7e05?imageMogr2/auto-orient/strip|imageView2/2/format/webp)

#### 删除元素

- 如果希望删除数组最后的元素, 可以使用pop()方法

  ```js
  // 删除最后的元素
  numbers.pop()
  alert(numbers) // -4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12
  ```

- 移除首位元素

  ```js
  // 删除首位的元素
  for (var i = 0; i < numbers.length; i++) {
      numbers[i] = numbers[i+1]
  }
  numbers.pop()
  alert(numbers)
  
  //直接使用shift方法来实现
  numbers.shift()
  alert(numbers)
  ```

#### 任意位置

- 通过splice删除数据

  ```js
  // 删除指定位置的几个元素
  numbers.splice(5, 3)
  alert(numbers) // -4,-3,-2,-1,0,4,5,6,7,8,9,10,11,12,13
  ```

  - 代码解析:
    - 上面的代码会删除索引为5, 6, 7位置的元素.
    - 第一个参数表示索引起始的位置为5(其实是第6个元素, 因为索引从0开始的), 删除3个元素.

- 通过splice插入元素

  ```js
  // 插入指定位置元素
  numbers.splice(5, 0, 3, 2, 1)
  alert(numbers) // -4,-3,-2,-1,0,3,2,1,4,5,6,7,8,9,10,11,12,13
  ```

  - 代码解析:
    - 上面的代码会从索引为5的位置开始插入数据. 其他数据依次向后位移.
    - 第一个参数依然是索引值为5(第六个位置)
    - 第二个参数为0时表示不是删除数据, 而是插入数据.
    - 后面紧跟的是在这个位置要插入的数据, 可以是其他类型, 比如"a", "b", "c".

- 通过splice修改元素

  ```js
  // 修改指定位置的元素
  numbers.splice(5, 3, "a", "b", "c")
  alert(numbers) // -4,-3,-2,-1,0,a,b,c,4,5,6,7,8,9,10,11,12,13
  ```

  - 代码解析:
    - 上面的代码会从索引5的位置开始修改数据, 修改多少个呢? 第二个参数来决定的.
    - 第一个参数依然是索引的位置为5(第六个位置)
    - 第二个参数是要将数组中多少个元素给替换掉, 我们这里是3个(也可以使用3个元素来替换2个, 可以自己尝试一下)
    - 后面跟着的就是要替换的元素.

#### 数组其他常见操作

#### 常见方法

- 我们先对常见的方法简单来看一下

  | 方法名        | 方法描述                                                     |
  | ------------- | ------------------------------------------------------------ |
  | `concat`      | 连接2个或更多数组，并返回结果                                |
  | `every`       | 对数组中的每一项运行给定函数，如果该函数对每一项都返回 `true`，则返回`true`, 否则返回`false` |
  | `filter`      | 对数组中的每一项运行给定函数，返回该函数会返回 `true`的项组成的数组 |
  | `forEach`     | 对数组中的每一项运行给定函数。这个方法没有返回值             |
  | `join`        | 将所有的数组元素连接成一个字符串                             |
  | `indexOf`     | 返回第一个与给定参数相等的数组元素的索引，没有找到则返回-1   |
  | `lastIndexOf` | 返回在数组中搜索到的与给定参数相等的元素的索引里最大的值     |
  | `map`         | 对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组 |
  | `reverse`     | 颠倒数组中元素的顺序，原先第一个元素现在变成最后一个，同样原先的最后一个元素变成了现在的第一个 |
  | `slice`       | 传入索引值，将数组里对应索引范围内的元素作为新数组返回       |
  | `some`        | 对数组中的每一项运行给定函数，如果任一项返回 `true`，则结果为`true`, 并且迭代结束 |
  | `sort`        | 按照字母顺序对数组排序，支持传入指定排序方法的函数作为参数   |
  | `toString`    | 将数组作为字符串返回                                         |
  | `valueOf`     | 和 `toString`类似，将数组作为字符串返回                      |

#### 迭代方法

- every()方法

  - every()方法是将数组中每一个元素传入到一个函数中, 该函数返回true/false.

  - 如果函数中每一个元素都返回true, 那么结果为true, 有一个为false, 那么结果为false

    ```js
    //判断一组元素中是否都包含某一个字符
    var names = ["abc", "cb", "mba", "dna"];
    var flag = names.every(function(t){
        return t.indexOf('a') != -1;
    });
    alert(flag);
    ```

- some()方法

  - some()方法是将数组中每一个元素传入到一个函数中, 该函数返回true/false

  - 但是和every不同的是, 一旦有一次函数返回了true, 那么迭代就会结束. 并且结果为true

    ```js
    // 判断数组中是否包含有a字符的字符
    var names = ["abc", "cb", "mba", "dna"];
    var flag = names.some(function (t){
        return t.indexOf('a') != -1;
    })
    ```

- filter()方法

  - filter()方法是一种过滤的函数

  - 首先会遍历数组中每一个元素传入到函数中

  - 函数的结果返回true, 那么这个元素会被添加到最新的数组中, 返回false, 则忽略该元素.

  - 最终会形成一个新的数组, 该数组就是filter()方法的返回值

    ```js
    // 获取names中所有包含'a'字符的元素
    var names = ["abc", "cb", "mba", "dna"];
    var newArray = names.filter(function(t){
        return t.indexOf("a") != -1
    })
    ```

- map()方法

  - map()方法提供的是一种映射函数.

  - 首先会遍历数组中每一个元素传入到函数中.

  - 元素会经过函数中的指令进行各种变换, 生成新的元素, 并且将新的元素返回.

  - 最终会将返回的所有元素形成一个新的数组, 该数组就是map()方法的返回值

    ```js
    // 定义数组
    var names = ["abc", "cb", "mba", "dna"]
    
    // 在names中所有的元素后面拼接-abc
    var newNames = names.map(function (t) {
        return t + "-abc"
    })
    alert(newNames)
    ```

- reduce()方法

  - ```javascript
    arr.reduce(callback[, initialValue])
    ```

  - 参数

    - callback（一个在数组中每一项上调用的函数，接受四个函数：）
      - previousValue（上一次调用回调函数时的返回值，或者初始值）
      - currentValue（当前正在处理的数组元素）
      - currentIndex（当前正在处理的数组元素下标）
      - array（调用reduce()方法的数组）
    - initialValue（可选的初始值。作为第一次调用回调函数时传给previousValue的值，其实就是第一次执行reduce中的函数时, pre的值.）

    ```js
    //求一个数组累加
    // 1.定义数组
    var numbers = [1, 2, 3, 4]
    
    // 2.for实现累加
    var total = 0
    for (var i = 0; i < numbers.length; i++) {
        total += numbers[i]
    }
    alert(total) // 10
    
    // 3.使用forEach
    var total = 0
    numbers.forEach(function (t) {
        total += t
    })
    alert(total)
    
    // 4.使用reduce方法
    var total = numbers.reduce(function (pre, cur) {
        return pre + cur
    })
    alert(total)
    ```

    代码解析:

    - pre中每次传入的参数是不固定的, 而是上次执行函数时的结果保存在了pre中
    - 第一次执行时, pre为0, cur为1
    - 第二次执行时, pre为1 (0+1, 上次函数执行的结果), cur为2
    - 第三次执行时, pre为3 (1+2, 上次函数执行的结果), cur为3
    - 第四次执行时, pre为6 (3+3, 上次函数执行的结果), cur为4
    - 当cur为4时, 数组中的元素遍历完了, 就直接将第四次的结果, 作为reduce函数的返回值进行返回.


## 栈结构

###  栈的操作

1. `push(element)`：添加一个新元素到栈顶的位置
2. `pop()`：移除栈顶的元素，同时返回被删除的元素
3. `peek()`：返回栈顶的元素，不对栈做任何修改
4. `isEmpty()`：如果战力没有任何元素就返回true，否则返回false
5. `size()`：返回栈里元素个数
6. `toString()`：将栈结构的内容以字符的形式返回

### 代码

```js
//封装栈
function Stack(){
    //栈中的属性
    this.items = []
    //栈的操作
    //1.压栈
    Stack.prototype.push = function (element){
        this.items.push(element);
    }
    //2.出栈
    Stack.prototype.pop = function(){
        return this.items.pop();
    }

    //3.查看栈顶元素
    Stack.prototype.peek = function(){
        return this.items[this.items.length -1];
    }

    //4.判断栈是否为空
    Stack.prototype.isEmpty = function(){
        return this.items.length ==0;
        //5.获取栈的元素个数
        Stack.prototype.size = function(){
            return this.items.length;
        }
        //6.toString()
        Stack.prototype.toString = function(){
            var result = ''
            for(var i = 0 ; i < this.items.length; i++){
                result += this.items[i] + '';
            }
            return result;
        }
    } 
```

## 队列结构

队列（queue）是一种首先的线性表，先进先出（FIFO）

- 受限之处在于他只允许在表的前端（front）进行删除操作
- 在表的后端（rear）进行插入操作

### 队列结构封装

#### 队列相关操作

- `enqueue(element)`：向队列尾部添加一个或多个项
- `dequeue(element)`：移除队列的第一项，并返回被移除元素
- `front()`：返回队列中第一元素
- `isEmpty()`:判断队列是否为空
- `size()`：返回队列长度
- `toString()`：将队列中的内容转换为字符串

### 代码

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta title="Stack test">
    </head>
    <script>
    //封装队列
    function Queue(){
        //属性
        this.items = [];
        //方法
        //1.加入元素
        Queue.prototype.enqueue = function(element){
            this.items.push(element);
        }
        //2.删除元素
        Queue.prototype.dequeue = function(){
            return this.items.shift()
        }
        //3.获取头部元素
        Queue.prototype.front = function(){
            return this.items[0];
        }
        //4.判断队列是否为空
        Queue.prototype.isEmpty = function(){
            return this.items.length == 0;
        }
        //5.获取队列长度
        Queue.prototype.size = function(){
            return this.items.length;
        }
        //6.toString方法
        Queue.prototype.toString = function(){
            var str = ''
            for(var i = 0 ; i<this.items.length;i++){
                str = str + this.items[i] + ' ';
            }
            return str;
        }
    }
    //使用队列
    var queue = new Queue()  
    
    queue.enqueue('lisa');
    queue.enqueue('jisoo');
    queue.enqueue('rose');
    queue.enqueue('jennie');

    alert(queue)

    queue.dequeue();
    queue.dequeue();
    alert(queue)

    alert(queue.toString())
    </script>
    
</html>
```

##### 击鼓传花案例

```javascript
function game(nameList, num){
        //创建队列
        var queue = new Queue();
        //加入队列
        for(i = 0 ;i <nameList.length; i++){
            queue.enqueue(nameList[i]);
        }
        //开始数数
        //不是num的时候，回到队列尾部
        //是num的时候弹出
        while(queue.size()>1){
            for(var j =0;j <num -1;j++){
            queue.enqueue(queue.dequeue());
        }
        queue.dequeue();
        }
        return queue.front()
    }
    var nameList = ['lisa','jennie','jisoo','rose']
    alert(game(nameList,2));
```

### 优先级队列

#### 特点

考虑该数据的优先级，和其他数据优先级进行比较，比较完成后得出这个元素在队列中正确位置

#### 考虑问题

- 每个元素包含数据内容和数据优先级
- 添加方式中，根据优先级放入正确的位置

#### 代码

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta title="Stack test">
    </head>
    <script>
        //封装优先级队列
        function PriorityQueue(){
            //在PriorityQueue中创建一个内部类
            function QueueElement(element, priority){
                this.element = element;
                this.priority = priority;
            }

            //封装属性
            this.items =[];

            //插入方法
            PriorityQueue.prototype.enqueue = function(element,priority){
                //1.创建QueueElement对象
                var queueElement = new QueueElement(element,priority)
                if(this.items.length == 0){
                    this.items.push(queueElement);
                }else{
                    var added = false;
                    for(var i = 0;i <this.items.length;i++){
                        if(queueElement.priority <this.items[i].priority){
                            this.items.splice(i, 0 ,queueElement)
                            added =true;
                            break;
                        }
                    }
                    if(!added){
                        this.items.push(queueElement)
                    }
                }
            }
            //2.删除元素
            PriorityQueue.prototype.dequeue = function(){
                return this.items.shift()
            }
            //3.获取头部元素
            PriorityQueue.prototype.front = function(){
                return this.items[0];
            }
            //4.判断队列是否为空
            PriorityQueue.prototype.isEmpty = function(){
                return this.items.length == 0;
            }
            //5.获取队列长度
            PriorityQueue.prototype.size = function(){
                return this.items.length;
            }
            //6.toString方法
            PriorityQueue.prototype.toString = function(){
                var str = ''
                for(var i = 0 ; i<this.items.length;i++){
                    str = str + this.items[i].element + '-' + this.items[i].priority + ' ';
                }
                return str;
            }
        }

        var pq = new PriorityQueue();
        pq.enqueue('abc',111);
        pq.enqueue('cba',222)
        pq.enqueue('nba',10)

        alert(pq)
    </script>

    
</html>
```

## 链表

### 优势

- 链表中的元素在内存中不必是连续的空间
- 链表的每个元素有一个存储元素本身的节点和 一个指向下一个节点的指针组成
- 实现灵活的内存动态管理
- 可以无限的延伸下去
- 链表再插入和删除数据时，时间复杂度可以达到O(1)

### 缺点

- 链表访问任何一个元素都要从头访问
- 无法直接通过下标值访问

### 常见操作

- append(element)：向链表尾部添加一个元素
- insert(position，element)：向链表指定位置插入一个项
- get(position)：获取对应位置的元素
- indexOf(element)：返回指定元素的索引，没有该元素返回-1
- update(position,element)：修改某个位置的元素
- removeAt(position)：从特定位置移除某一项
- remove(element)：从链表中移除一项
- isEmpty()：判断链表是否为空
- size()：返回链表种元素个数
- toString()：显示链表元素的数据

### 代码

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta title="Stack test">
    </head>
    <script>
        function LinkedList(){
            //内部类
            function Node(data){
                this.data = data
                this.next = null
            }
            //属性
            this.header = null;
            this.length = 0

            //添加新项
            LinkedList.prototype.append =  function(data){
                //创建一个新节点
                var node = new Node(data)
                //判断是否为第一个节点
                if(this.header ==null){
                    this.header = node;
                }else{
                    var current = this.header;
                    while(current.next){
                        current = current.next
                    }
                    current.next = node   
                }
                this.length +=1;
            }

            //toString()方法
            LinkedList.prototype.toString = function(){
                var current = this.header;
                var str = ''
                while(current){
                    str += current.data + ' '
                    current = current.next;
                }
                return str;
            }

            //insert方法
            LinkedList.prototype.insert = function(position ,data){
                //1.对position进行越界判断
                if(position <0 || position >this.length){
                    return false;
                }
                //2.创建节点
                var node = new Node(data);
                //3.判断插入的位置
                if(position == 0 ){
                    node.next = this.header;
                    this.header = node;
                }else{
                    var index = 0;
                    var previous = null;
                    var current = this.header;
                    //在current前方插入
                    while(index ++ < position){
                        previous = current;
                        current = current.next;
                    }
                    node.next = current;
                    previous.next = node;
                    
                }
                this.length +=1
                return true;
            }

            //get方法
            LinkedList.prototype.get = function(position){
                //判断越界条件
                if(position <0 || position >=this.length){
                    return null;
                }
                //获取元素
                var index = 0;
                var current = this.header;
                while (index++ < position){
                    current = current.next;
                }
                return current.data;
            }

            //indexOf方法
            LinkedList.prototype.indexOf = function(data){
                var current = this.header;
                var index = 0;
                while(current){
                    if(current.data == data){
                        return index;
                    }else{
                        current = current.next;
                        index ++;
                    }
                    
                }
                return -1;
            }

            //update方法
            LinkedList.prototype.update = function(position,data){
                if(position <0 || position >=this.length){
                    return false;
                }else{
                     //获取元素
                    var index = 0;
                    var current = this.header;
                    while (index++ < position){
                        current = current.next;
                    }
                    current.data = data;
                    return true;
                }
               
            }

            //removeAt方法
            LinkedList.prototype.removeAt = function(position){
                if(position <0 || position >=this.length){
                    return false;
                }
                var current = this.header;
                if(position == 0){
                    this.header = this.header.next;
                }else{
                    var index = 0;
                    var previous = null;
                    while(index ++ < position){
                        previous = current
                        current = current.next
                    }
                    previous.next = current.next    
                }
                this.length = this.length - 1
                return current.data    
            }

            //remove方法
            LinkedList.prototype.remove = function(data){
                /* var current = this.header;
                var previous = null;
                while(current){
                    if(data == current.data){
                        previous.next = current.next;
                        return true 
                    }else{
                        previous = current;
                        current = current.next;
                    }
                }
                this.length -=1
                return false */
                var position = this.indexOf(data);
                return this.removeAt(position);
            }

            //isEmpty方法
            LinkedList.prototype.isEmpty = function(){
                if (this.length == 0){
                    return true
                }else{
                    return false 
                }
            }

            //size()方法
            LinkedList.prototype.size = function(){
                return this.length
            }
        }

        var ll = new LinkedList();
        ll.append(1)
        ll.append(2)
        ll.append(3)

        ll.insert(0,4)
        ll.insert(2,3)
        //ll.update(2,5)
        ll.remove(3) 
        console.log(ll.size());
        //console.log(ll.removeAt(0))
        console.log(ll.get(7))
        console.log(ll.indexOf(8))
        console.log(ll.toString())
       
    </script>

    
</html>
```

