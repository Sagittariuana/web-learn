# web前端基础学习

# HTML基础学习

## 1.什么是HTML

HTML 是用来描述网页的一种语言。

- HTML 指的是超文本标记语言: **H**yper**T**ext **M**arkup **L**anguage
- HTML 不是一种编程语言，而是一种**标记**语言
- 标记语言是一套**标记标签** (markup tag)
- HTML 使用标记标签来**描述**网页
- HTML 文档包含了HTML **标签**及**文本**内容
- HTML文档也叫做 **web 页面**

### 什么是HTML标签？

HTML 标记标签通常被称为 HTML 标签 (HTML tag)。

- HTML 标签是由*尖括号*包围的关键词，比如 <html>
- HTML 标签通常是*成对出现*的，比如 &lt;p> 和 &lt;/p>
- 标签对中的第一个标签是*开始标签*，第二个标签是*结束标签*
- 开始和结束标签也被称为*开放标签*和*闭合标签*

### 什么是HTML元素？

这个元素的主要部分有：

1. **开始标签**（Opening tag）：包含元素的名称（本例为 p），被左、右角括号所包围。表示元素从这里开始或者开始起作用 —— 在本例中即段落由此开始。
2. **结束标签**（Closing tag）：与开始标签相似，只是其在元素名之前包含了一个斜杠。这表示着元素的结尾 —— 在本例中即段落在此结束。初学者常常会犯忘记包含结束标签的错误，这可能会产生一些奇怪的结果。
3. **内容**（Content）：元素的内容，本例中就是所输入的文本本身。
4. **元素**（Element）：开始标签、结束标签与内容相结合，便是一个完整的元素。



### 嵌套元素

把元素放到其它元素之中——这被称作嵌套。需要确保元素被正确的嵌套：在上面的例子中我们先打开 `<p>`,然后再打开 `<strong>`，则必须先关闭 `</strong>`，再关闭 `</p>`。

`<p>猫咪脾气<strong>暴躁</strong></p>`



### 块级元素与内联元素

块级元素：在页面中以块的形式展现 —— 相对于其前面的内容它会出现在新的一行，其后的内容也会被挤到下一行展现。例如：`<p>`		 

内联元素：通常出现在块级元素中并环绕文档内容的一小部分，而不是一整个段落或者一组内容。例如：`<a>`、`<em>`、`<strong>`



### 属性

属性包含元素的额外信息，这些信息不会出现在实际的内容中。在上述例子中，这个class属性给元素赋了一个识别的名字（id），这个名字此后可以被用来识别此元素的样式信息和其他信息。

一个属性必须包含如下内容：

1. 一个空格，在属性和元素名称之间。(如果已经有一个或多个属性，就与前一个属性之间有一个空格。)
2. 属性名称，后面跟着一个等于号。
3. 一个属性值，由一对引号“ ”引起来
4. 查看完整的HTML属性列表: [HTML 标签参考手册](https://www.runoob.com/tags/html-reference.html)

#### 为元素添加属性的例子

`<a>`:是锚，它使被标签包裹的内容成为一个超链接。
`<href>`:这个属性声明超链接的web地址，当这个链接被点击浏览器会跳转至href声明的web地址。`<a href = "www.baidu.com">`
`<title>`:属性为超链接声明额外的信息，比如你将链接至的那个页面。`<a title = "百度知道">`当鼠标悬停在超链接上面时，这部分信息将以工具提示的形式显示。
`<target>`:用于指定链接如何呈现出来。`<a target="_blank">`将在新标签页中显示链接。如果你希望在当前标签页显示链接，忽略这个属性即可。
`<class>`:为html元素定义一个或多个类名（classname）(类名从样式文件引入)
`<id>`:定义元素的唯一id。
`<style>`:规定元素的行内样式（inline style）

#### 布尔属性

有时你会看到没有值的属性，它是合法的。这些属性被称为布尔属性，他们只能有跟它的属性名一样的属性值。例如[`disabled`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-disabled) 属性，他们可以标记表单输入使之变为不可用(变灰色)，此时用户不能向他们输入任何数据。



注意：

1. 单双号引用均可，但不可不用。
2. 应该注意单引号和双引号不能在一个属性值里面混用。
3. 在一个HTML中已使用一种引号，你可以在此引号中嵌套另外一种引号

### HTML元素语法

- HTML 元素以**开始标签**起始
- HTML 元素以**结束标签**终止
- **元素的内容**是开始标签与结束标签之间的内容
- 某些 HTML 元素具有**空内容（empty content）**
- 空元素**在开始标签中进行关闭**（以开始标签的结束而结束）
- 大多数 HTML 元素可拥有**属性**

## 2.HTML文档

### 简单尝试

1. `<html></html>`: `<html>`元素。这个元素包裹了整个完整的页面，是一个根元素。

2. `<head></head>`: `<head>元素`. 这个元素是一个容器，它包含了所有你想包含在HTML页面中但不想在HTML页面中显示的内容。这些内容包括你想在搜索结果中出现的关键字和页面描述，CSS样式，字符集声明等等。以后的章节能学到更多关于`<head>`元素的内容。

3. `<meta charset="utf-8">`: 这个元素设置文档使用utf-8字符集编码，utf-8字符集包含了人类大部分的文字。基本上他能识别你放上去的所有文本内容。毫无疑问要使用它，并且它能在以后避免很多其他问题。

4. `<title></title>`: 设置页面标题，出现在浏览器标签上，当你标记/收藏页面时它可用来描述页面。

5. `<body></body>`: `<body>`元素。 包含了你访问页面时所有显示在页面上的内容，文本，图片，音频，游戏等等。

6. 注释需要将其用特殊的记号`<!--和-->`包括起来。

7. `<hr>`标签在 HTML 页面中创建水平线。hr 元素可用于分隔内容。

8. 在不产生一个新段落的情况下进行换行（新行），请使用 `<br>`。

   ```html
   <p>这个<br>段落<br>演示了分行的效果</p>
   ```

9.  标签没有内容的 HTML 元素被称为空元素。空元素是在开始标签中关闭的。

10. HTML 标题（Heading）是通过&lt;h1>- &lt;h6> 标签来定义的。

11. HTML 图像是通过标签 &lt;img> 来定义的。

12. `<span>`在行内定义一个区域，也就是一行内可以被`<span>`划分成好几个区域，从而实现某种特定效果。`<span>`本身没有任何属性。

13. `<span>`在CSS定义中属于一个行内元素，而`<div>`是块级元素，我们可能通俗地理解为`<div>`为大容器，大容器当然可以放一个小容器了,`<span>`就是小容器。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>我的测试站点</title>
  </head>
  <body>
    <h1>首次尝试</h1>    
    <p>这是我的<a href="www.baidu.com" title="百度知道" target="_blank">页面</a></p>
    <p>我要学习<strong>前端</strong>知识</p>
    <img src="https://roy-tian.github.io/learning-area/extras/getting-started-web/beginner-html-site/images/firefox-icon.png">
    <!-- <p>注释</p> -->
  </body>
</html>
```

### 特殊字符处理

我们必须使用字符引用 —— 表示字符的特殊编码, 它们可以在那些情况下使用. 每个字符引用以符号&开始, 以分号(;)结束。

| 原义字符 | 等价字符引用 |
| :------: | :----------: |
|    <     |     &lt      |
|    >     |     &gt      |
|    "     |    &quot     |
|    '     |    &apos     |
|    &     |     &amp     |

## 3.&lt;head>学习

HTML中的 `<head>`与 `<body>`元素不同，它的内容不会在浏览器中显示，它的作用是保存页面的一些元数据。

1. `<title>`:元素是一项元数据，用于表示整个 HTML 文档的标题（而不是文档内容）。

2. `<meta>`:元数据就是描述数据的数据，可指定文档中的字符编码。`utf-8`是一个通用的字符集，包含了任何人类语言中的大部分字符。`GBK`中国大陆的国标字符集。

   - `name`指定了meta 元素的类型； 说明该元素包含了什么类型的信息。

   - `content`指定了实际的元数据内容。

     ```html
     <meta name="author" content="Chris Mills">
     <meta name="description" content="The MDN Learning Area aims to provide
     complete beginners to the Web with all they need to know to get
     started with developing web sites and applications.">
     ```

     

3. `<base>`:描述了基本的链接地址/链接目标，该标签作为HTML文档中所有的链接标签的默认链接:

   ```html
   <head>
   <base href="http://www.runoob.com/images/" target="_blank">
   </head>
   ```

4. `<link>`:定义了文档与外部资源之间的关系。

   ```html
   <head>
   <link rel="stylesheet" type="text/css" href="mystyle.css">
   </head>
   ```

5. `<style>`:定义了HTML文档的样式文件引用地址。在`<style>` 元素中你也可以直接添加样式来渲染 HTML 文档:

   ```html
   <head>
   <style type="text/css">
   body {background-color:yellow}
   p {color:blue}
   </style>
   </head>
   ```

6. 页面添加图标的方式有：

   1. 将其保存在与网站的索引页面相同的目录中，以.ico格式保存（大多数浏览器将支持更通用的格式，如.gif或.png，但使用ICO格式将确保它能在如Internet Explorer 6一样久远的浏览器显示）
   2. 将以下行添加到HTML  `<head>` 中以引用它：`<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">`

7. 使用 [CSS](https://developer.mozilla.org/zh-CN/docs/Glossary/CSS) 让网页更加炫酷，使用[JavaScript](https://developer.mozilla.org/zh-CN/docs/Glossary/JavaScript)让网页有交互功能

   1.  [`link`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/link) 元素经常位于文档的头部。这个link元素有2个属性，rel="stylesheet"表明这是文档的样式表，而 href包含了样式表文件的路径：`<link rel="stylesheet" href="my-css-file.css">`
   2. `<script>`部分没必要非要放在文档头部，放在 `</body>`标签之前即可。`<script src="my-js-file.js"></script>`

8. 为文档设定主语言，这个可以通过添加`lang`属性到HTML开始标签中来实现：`<html lang="zh-CN">`

## 4.HTML文字处理基础

### 内容结构化

在HTML中，每个段落是通过 [`<p>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/p) 元素标签进行定义的，例如：

```html
<p>我是一个段落，千真万确。</p>
```

每个标题（Heading）是通过“标题标签”进行定义的：

```html
<h1>我是文章的标题</h1>
```

这里有六个标题元素~标签 —— `<h1>`、`<h2>`、`<h3>`、`<h4>`、`<h5>`、`<h6>`。每个元素代表文档中不同级别的内容; `<h1>` 表示主标题（the main heading），`<h2>` 表示二级子标题（subheadings），`<h3>` 表示三级子标题（sub-subheadings），等等。

### 列表

#### 1.无序

每份无序的清单从 [`<ul>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/ul) 元素开始——需要包裹清单上所有被列出的项目：

```html
<ul>
豆浆
油条
豆汁
焦圈
</ul>
```

然后就是用 [`li`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/li) 元素把每个列出的项目单独包裹起来：

```html
<ul>
  <li>豆浆</li>
  <li>油条</li>
  <li>豆汁</li>
  <li>焦圈</li>
</ul>
```

#### 2.有序

有序列表需要按照项目的顺序列出来，这个标记的结构和无序列表一样，除了需要用 [`<ol>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/ol)  元素将所有项目包裹, 而不是 `<ul>`：

```html
<ol>
  <li>沿着条路走到头</li>
  <li>右转</li>
  <li>直行穿过第一个十字路口</li>
  <li>在第三个十字路口处左转</li>
  <li>继续走 300 米，学校就在你的右手边</li>
</ol>
```

#### 3.嵌套列表

将一个列表嵌入到另一个列表是完全可以的。 你可能想让一些子项目列在首项目之下，由于最后两项与它们的前一项非常密切相关（它们看起来更像该项的子项或选项），将它们编辑成无序列表，并嵌套在该项的子项中可能更合理。

```html
<ol>
  <li>先用蛋白一个、盐半茶匙及淀粉两大匙搅拌均匀，调成“腌料”，鸡胸肉切成约一厘米见方的碎丁并用“腌料”搅拌均匀，腌渍半小时。</li>
  <li>用酱油一大匙、淀粉水一大匙、糖半茶匙、盐四分之一茶匙、白醋一茶匙、蒜末半茶匙调拌均匀，调成“综合调味料”。</li>
  <li>鸡丁腌好以后，色拉油下锅烧热，先将鸡丁倒入锅内，用大火快炸半分钟，炸到变色之后，捞出来沥干油汁备用。</li>
  <li>在锅里留下约两大匙油，烧热后将切好的干辣椒下锅，用小火炒香后，再放入花椒粒和葱段一起爆香。随后鸡丁重新下锅，用大火快炒片刻后，再倒入“综合调味料”继续快炒。
    <ul>
      <li>如果你采用正宗川菜做法，最后只需加入花生米，炒拌几下就可以起锅了。</li>
      <li>如果你在北方，可加入黄瓜丁、胡萝卜丁和花生米，翻炒后起锅。</li>
    </ul>
  </li>
</ol>
```

### 重点强调

#### 1.强调

在HTML中我们用[`<em>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/em)（emphasis）元素来标记这样的情况。浏览器中默认风格为斜体，但斜体风格实现采用[`<span>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/span) 元素和一些CSS，或者[`<i>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/i)元素。

```html
<p>I am <em>glad</em> you weren't <em>late</em>.</p>
```

#### 2.非常重要

在HTML中我们用[`<strong>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/strong) (strong importance) 元素来标记这样的请况。浏览器默认风格为粗体，但粗体风格实现采用[`<span>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/span) 元素和一些CSS，或者 [`<b>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/b) 元素。

```html
<p>This liquid is <strong>highly toxic</strong>.</p>

<p>I am counting on you. <strong>Do not</strong> be late!</p>
```

如有需要你可以将strong元素和em元素嵌套在其他的标签中：

```html
<p>This liquid is <strong>highly toxic</strong> —
if you drink it, <strong>you may <em>die</em></strong>.</p>
```

#### 3.斜体、粗体、下划线

像这样实现显示功能区分的元素，仅仅影响表象而且没有语义，被称为**表象元素**。

这里是最好的经验法则：如果没有更合适的元素，那么使用 `<b>`、`<i>` 或 `<u>` 来表达传统上的粗体、斜体或下划线表达的意思是合适的。

- [`<i>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/i) 被用来传达传统上用斜体表达的意义：外国文字，分类名称，技术术语，一种思想……

- [`<b>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/b) 被用来传达传统上用粗体表达的意义：关键字，产品名称，引导句……

- [`<u>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/u) 被用来传达传统上用下划线表达的意义：专有名词，拼写错误……

  ```html
  <!-- 学名 -->
  <p>
    红喉北蜂鸟（学名：<i>Archilocus colubris</i>）
    是北美东部最常见的蜂鸟品种。
  </p>
  
  <!-- 舶来词 -->
  <p>
    菜单上有好多舶来词汇，比如 <i lang="uk-latn">vatrushka</i>（东欧乳酪面包）,
    <i lang="id">nasi goreng</i>（印尼炒饭）以及<i lang="fr">soupe à l'oignon</i>（法式洋葱汤）。
  </p>
  
  <!-- 已知的错误书写 -->
  <p>
    总有一天我会改掉写<u style="text-decoration-line: underline; text-decoration-style: wavy;">措字</u>的毛病。
  </p>
  
  <!-- 在一组指令中突出显示关键字 -->
  <ol>
    <li>
      <b>切</b>下两片面包，
    </li>
    <li>
      在两片面包中间<b>夹入</b>一片西红柿和一片生菜叶。
    </li>
  </ol>
  ```

### HTML 文本格式化标签

|                            标签                            |     描述     |
| :--------------------------------------------------------: | :----------: |
|      [`<b>`](https://www.runoob.com/tags/tag-b.html)       | 定义粗体文本 |
|     [`<em>`](https://www.runoob.com/tags/tag-em.html)      | 定义着重文字 |
|      [`<i>`](https://www.runoob.com/tags/tag-i.html)       |  定义斜体字  |
|  [`<small>`](https://www.runoob.com/tags/tag-small.html)   |  定义小号字  |
| [`<strong>`](https://www.runoob.com/tags/tag-strong.html)  | 定义加重语气 |
|    [`<sub>`](https://www.runoob.com/tags/tag-sub.html)     |  定义下标字  |
| [`<sup>`](https://www.runoob.com/html/m/tags/tag-sup.html) |  定义上标字  |
|    [`<ins>`](https://www.runoob.com/tags/tag-ins.html)     |  定义插入字  |
|     [`del`](https://www.runoob.com/tags/tag-del.html)      |  定义删除字  |

### HTML 引文, 引用, 及标签定义

|                             标签                             |        描述        |
| :----------------------------------------------------------: | :----------------: |
|    [`<addr>`](https://www.runoob.com/tags/tag-abbr.html)     |      定义缩写      |
| [`<address>`](https://www.runoob.com/tags/tag-address.html)  |      定义地址      |
|     [`<bdo>`](https://www.runoob.com/tags/tag-bdo.html)      |    定义文字方向    |
| [`<blockquote>`](https://www.runoob.com/tags/tag-blockquote.html) |    定义长的引用    |
|       [`<q>`](https://www.runoob.com/tags/tag-q.html)        |   定义短的引用语   |
|    [`<cite>`](https://www.runoob.com/tags/tag-cite.html)     |   定义引用、引证   |
|     [`<dfn>`](https://www.runoob.com/tags/tag-dfn.html)      | 定义一个定义项目。 |

### 高阶文字排版

#### 描述列表

描述列表使用与其他列表类型不同的闭合标签— [`<dl>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/dl);每一项都用 [`<dt>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/dt) (description term) 元素闭合。每个描述都用 [`dd`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/dd) (description definition) 元素闭合。

```html
<dl>
  <dt>内心独白</dt>
    <dd>戏剧中，某个角色对自己的内心活动或感受进行念白表演，这些台词只面向观众，而其他角色不会听到。</dd>
  <dt>语言独白</dt>
    <dd>戏剧中，某个角色把自己的想法直接进行念白表演，观众和其他角色都可以听到。</dd>
  <dt>旁白</dt>
    <dd>戏剧中，为渲染幽默或戏剧性效果而进行的场景之外的补充注释念白，只面向观众，内容一般都是角色的感受、想法、以及一些背景信息等。</dd>
</dl>
```

#### 引用

##### 块引用

如果一个块级内容（一个段落、多个段落、一个列表等）从其他地方被引用，你应该把它用[`<blockquote>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/blockquote)元素包裹起来表示，并且在[`cite`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/blockquote#attr-cite)属性里用URL来指向引用的资源。例如，下面的例子就是引用的MDN的`<blockquote>`元素页面：

```html
<p>The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or <em>HTML Block
Quotation Element</em>) indicates that the enclosed text is an extended quotation.</p>
```

要把这些转换为块引用，我们要这样做：

```html
<blockquote cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote">
  <p>The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or <em>HTML Block
  Quotation Element</em>) indicates that the enclosed text is an extended quotation.</p>
</blockquote>
```

##### 行内引用

行内元素用同样的方式工作，除了使用[`<q>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/q)元素。

```html
<p>The quote element — <code>&lt;q&gt;</code> — is <q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q">intended
for short quotations that don't require paragraph breaks.</q></p>
```

##### 引文

[`cite`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/blockquote#attr-cite)属性内容不会被浏览器显示、屏幕阅读器阅读，需使用 JavaScript 或 CSS，浏览器才会显示`cite`的内容。如果你想要确保引用的来源在页面上是可显示的，更好的方法是为[`<cite>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/cite)元素附上链接:

```html
<p>According to the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote">
<cite>MDN blockquote page</cite></a>:
</p>

<blockquote cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote">
  <p>The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or <em>HTML Block
  Quotation Element</em>) indicates that the enclosed text is an extended quotation.</p>
</blockquote>

<p>The quote element — <code>&lt;q&gt;</code> — is <q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q">intended
for short quotations that don't require paragraph breaks.</q> -- <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q">
<cite>MDN q page</cite></a>.</p>

```

##### 缩略语

在web上看到的相当常见的元素是[`<addr>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/abbr)——它常被用来包裹一个缩略语或缩写，并且提供缩写的解释（包含在 `<title>`属性中）。显示效果为光标移动到项目上时会出现提示：

```html
<p>我们使用 <abbr title="超文本标记语言（Hyper text Markup Language）">HTML</abbr> 来组织网页文档。</p>

<p>第 33 届 <abbr title="夏季奥林匹克运动会">奥运会</abbr> 将于 2024 年 8 月在法国巴黎举行。</p>

```

##### 标记联系方式

HTML有个用于标记联系方式的元素——[`<address>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/address)。它仅仅包含你的联系方式，例如：

```html
<address>
  <p>Chris Mills, Manchester, The Grim North, UK</p>
</address>
```

#### 上标和下标

```html
<p>咖啡因的化学方程式是 C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>。</p>
<p>如果 x<sup>2</sup> 的值为 9，那么 x 的值必为 3 或 -3。</p>
```

这些代码输出的结果是：

咖啡因的化学方程式是 C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>。

如果 x<sup>2</sup> 的值为 9，那么 x 的值必为 3 或 -3。

#### 展示计算机代码

有大量的HTML元素可以来标记计算机代码：

- [`<code>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/code): 用于标记计算机通用代码。

- [`<pre>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/pre): 用于保留空白字符（通常用于代码块）——如果您在文本中使用缩进或多余的空白，浏览器将忽略它，您将不会在呈现的页面上看到它。但是，如果您将文本包含在`<pre></pre>`标签中，那么空白将会以与你在文本编辑器中看到的相同的方式渲染出来。

- [`<var>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/var): 用于标记具体变量名。

- [`<kbd>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/kbd): 用于标记输入电脑的键盘（或其他类型）输入。

- [`<samp>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/samp): 用于标记计算机程序的输出。

  ```html
  <pre><code>const para = document.querySelector('p');
  
  para.onclick = function() {
    alert('噢，噢，噢，别点我了。');
  }</code></pre>
  
  <p>请不要使用 <code>&lt;font&gt;</code> 、 <code>&lt;center&gt;</code> 等表象元素。</p>
  
  <p>在上述的 JavaScript 示例中，<var>para</var> 表示一个段落元素。</p>
  
  
  <p>按 <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>A</kbd> 选择全部内容。</p>
  
  <pre>$ <kbd>ping mozilla.org</kbd>
  <samp>PING mozilla.org (63.245.215.20): 56 data bytes
  64 bytes from 63.245.215.20: icmp_seq=0 ttl=40 time=158.233 ms</samp></pre>
  
  ```

  

#### 标记时间和日期

世界上有许多种书写日期的格式，上边的日期可能被写成：

- 20 January 2016
- 20th January 2016
- Jan 20 2016
- 20/06/16
- 06/20/16
- The 20th of next month
- 20e Janvier 2016
- 2016年1月20日

但是这些不同的格式不容易被电脑识别 — 假如你想自动抓取页面上所有事件的日期并将它们插入到日历中，[`<time>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/time) 元素允许你附上清晰的、可被机器识别的 时间/日期来实现这种需求。

```html
<!-- 标准简单日期 -->
<time datetime="2016-01-20">20 January 2016</time>
<!-- 只包含年份和月份-->
<time datetime="2016-01">January 2016</time>
<!-- 只包含月份和日期 -->
<time datetime="01-20">20 January</time>
<!-- 只包含时间，小时和分钟数 -->
<time datetime="19:30">19:30</time>
<!-- 还可包含秒和毫秒 -->
<time datetime="19:30:01.856">19:30:01.856</time>
<!-- 日期和时间 -->
<time datetime="2016-01-20T19:30">7.30pm, 20 January 2016</time>
<!-- 含有时区偏移值的日期时间 -->
<time datetime="2016-01-20T19:30+01:00">7.30pm, 20 January 2016 is 8.30pm in France</time>
<!-- 调用特定的周 -->
<time datetime="2016-W04">The fourth week of 2016</time>
```



## 5.建立超链接

### 链接的解析

通过将文本（或其他内容，见[块级链接](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#块级链接))转换为[`<a>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a)元素内的链接来创建基本链接，给它一个[`href`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#attr-href)属性（也称为目标），它将包含您希望链接指向的网址。

```html
<p>我创建了一个指向
<a href="https://www.mozilla.org/zh-CN/">Mozilla 主页</a>
的超链接。
</p>
```

### 使用title属性添加支持信息

```html
<p>我创建了一个指向
<a href="https://www.mozilla.org/zh-CN/"
   title="了解 Mozilla 使命以及如何参与贡献的最佳站点。">Mozilla 主页</a>
的超链接。
</p>
```

当鼠标指针悬停在链接上时，标题将作为提示信息出现。

### id属性

id 属性可用于创建一个 HTML 文档书签。

**提示:** 书签不会以任何特殊方式显示，即在 HTML 页面中是不显示的，所以对于读者来说是隐藏的。

在HTML文档中插入ID:

```html
<a id="tips">有用的提示部分</a>
```

在HTML文档中创建一个链接到"有用的提示部分(id="tips"）"：

```html
<a href="#tips">访问有用的提示部分</a>
```

或者，从另一个页面创建一个链接到"有用的提示部分(id="tips"）"：

```html
<a href="https://www.runoob.com/html/html-links.html#tips">访问有用的提示部分</a>
```

### 块级连接

可以将一些内容转换为链接，甚至是[块级元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Block-level_elements)。例如你想要将一个图像转换为链接，你只需把图像元素放到`<a></a>`标签中间。

```html
<a href="https://www.mozilla.org/zh-CN/">
  <img src="mozilla-image.png" alt="链接至 Mozilla 主页的 Mozilla 标志">
</a>
```

#### 图片链接

```html
<!DOCTYPE html>
<html>
<head> 
<meta charset="utf-8"> 
<title>菜鸟教程(runoob.com)</title> 
</head>
<body>

<p>创建图片链接:
<a href="//www.runoob.com/html/html-tutorial.html">
<img  border="10" src="smiley.gif" alt="HTML 教程" width="32" height="32"></a></p>

<p>无边框的图片链接:
<a href="//www.runoob.com/html/html-tutorial.html">
<img border="0" src="smiley.gif" alt="HTML 教程" width="32" height="32"></a></p>

</body>
</html>
```

#### 在当前页面链接到指定位置

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>

<p>
<a href="#C4">查看章节 4</a>
</p>

<h2>章节 1</h2>
<p>这边显示该章节的内容……</p>

<h2>章节 2</h2>
<p>这边显示该章节的内容……</p>

<h2>章节 3</h2>
<p>这边显示该章节的内容……</p>

<h2><a id="C4">章节 4</a></h2>
<p>这边显示该章节的内容……</p>

</body>
</html>

```



### URL与path入门

统一资源定位符（英文：**U**niform **R**esource **L**ocator，简写：URL）是一个**定义了在网络上的位置的一个文本字符串**。例如 Mozilla 的中文主页定位在 `https://www.mozilla.org/zh-CN/`

- **指向当前目录：**如果`index.html`（目录顶层的`index.html`）想要包含一个超链接指向`contacts.html`，你只需要指定想要链接的文件名，因为它与当前文件是在同一个目录的. 所以你应该使用的URL是`contacts.html`:

  ```html
  <p>要联系某位工作人员，请访问我们的 <a href="contacts.html">联系人页面</a>。</p>
  ```

- **指向子目录：**如果`index.html` （目录顶层`index.html`）想要包含一个超链接指向 `projects/index.html`，您需要先进入`projects/`项目目录，然后指明要链接到的文件`index.html`。 通过指定目录的名称，然后是正斜杠，然后是文件的名称。因此您要使用的URL是`projects/index.html`：	

  ```html
  <p>请访问 <a href="projects/index.html">项目页面</a>。</p>
  ```

- **指向上级目录：** 如果你想在`projects/index.html`中包含一个指向`pdfs/project-brief.pdf`的超链接，你必须先返回上级目录，然后再回到`pdf`目录。“返回上一个目录级”使用两个英文点号表示 — `..` — 所以你应该使用的URL是 `../pdfs/project-brief.pdf`：

  ```html
  <p>点击打开 <a href="../pdfs/project-brief.pdf">项目简介</a>。</p>
  ```

#### 文档片段

超链接除了可以链接到文档外，也可以链接到HTML文档的特定部分（被称为**文档片段**）。要做到这一点，你必须首先给要链接到的元素分配一个[`id`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes#attr-id)属性。例如，如果你想链接到一个特定的标题，可以这样做：

```html
<h2 id="Mailing_address">邮寄地址</h2>
```

然后链接到那个特定的`id`，您可以在URL的结尾使用一个井号指向它，例如：

```html
<p>要提供意见和建议，请将信件邮寄至 <a href="contacts.html#Mailing_address">我们的地址</a>。</p>
```

#### 绝对URL和相对URL

**绝对URL**：指向由其在Web上的绝对位置定义的位置，包括 [protocol](https://developer.mozilla.org/zh-CN/docs/Glossary/Protocol)（协议） 和 [domain name](https://developer.mozilla.org/zh-CN/docs/Glossary/Domain_name)（域名）。像下面的例子，如果`index.html`页面上传到`projects`这一个目录。并且`projects`目录位于web服务站点的根目录，web站点的域名为`http://www.example.com`，那么这个页面就可以通过`http://www.example.com/projects/index.html`访问（或者通过`http://www.example.com/projects/`来访问，因为在没有指定特定的URL的情况下，大多数web服务会默认访问加载`index.html`这类页面）不管绝对URL在哪里使用，它总是指向确定的相同位置。

**相对URL**：指向与您链接的文件相关的位置，更像我们在前面一节中所看到的位置。例如，如果我们想从示例文件链接`http://www.example.com/projects/index.html`转到相同目录下的一个PDF文件，URL就是文件名URL——例如`project-brief.pdf`——没有其他的信息要求。如果PDF文件能够在`projects`的子目录`pdfs`中访问到，相对路径就是`pdfs/project-brief.pdf`（对应的绝对URL是`http://www.example.com/projects/pdfs/project-brief.pdf`）

一个相对URL将指向不同的位置，这取决于它所在的文件所在的位置——例如，如果我们把`index.html`文件从`projects`目录移动到Web站点的根目录（最高级别，而不是任何目录中），里面的`pdfs/project-brief.pdf`相对URL将会指向`http://www.example.com/pdfs/project-brief.pdf`，而不是`http://www.example.com/projects/pdfs/project-brief.pdf`

当然，`project-brief.pdf`文件和`pdfs`文件夹的位置不会因为您移动了`index.html`文件而突然发生变化——这将使您的链接指向错误的位置，因此如果单击它，它将无法工作。

#### 尽可能使用相对链接

当链接到同一网站的其他位置时，你应该使用相对链接（当链接到另一个网站时，你需要使用绝对链接）：

- 首先，检查代码要容易得多——相对URL通常比绝对URL短得多，这使得阅读代码更容易。
- 其次，在可能的情况下使用相对URL更有效。当使用绝对URL时，浏览器首先通过[DNS](https://developer.mozilla.org/zh-CN/docs/Glossary/DNS)（见[万维网是如何工作的](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/How_the_Web_works)）查找服务器的真实位置，然后再转到该服务器并查找所请求的文件。另一方面，相对URL，浏览器只在同一服务器上查找被请求的文件。因此，如果你使用绝对URL而不是相对URL，你就会不断地让你的浏览器做额外的工作，这意味着它的效率会降低。

### 在下载链接使用download属性

链接到要下载的资源而不是在浏览器中打开时，您可以使用 download 属性来提供一个默认的保存文件名（译注：此属性仅适用于[同源URL](https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy)）。下面是一个下载链接到Firefox 的 Windows最新版本的示例：

```html
<a href="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=zh-CN" download="firefox-latest-64bit-installer.exe">
  下载最新的 Firefox 中文版 - Windows（64位）
</a>
```

### 电子邮件链接

当点击一个链接或按钮时，打开一个新的电子邮件发送信息而不是连接到一个资源或页面，这种情况是可能做到的。这样做是使用[`<a>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a)元素和`mailto`：URL的方案。其最基本和最常用的使用形式为一个`mailto`:link （链接），链接简单说明收件人的电子邮件地址。例如:

```html
<a href="mailto:nowhere@mozilla.org">向 nowhere 发邮件</a>
```

实际上，邮件地址甚至是可选的。如果你忘记了（也就是说，你的[`href`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#attr-href)仅仅只是简单的"`mailto:`"），一个新的发送电子邮件的窗口也会被用户的邮件客户端打开，只是没有收件人的地址信息，这通常在“分享”链接是很有用的，用户可以发送给他们选择的地址邮件。

#### 具体细节

除了电子邮件地址，您还可以提供其他信息。事实上，任何标准的邮件头字段可以被添加到你提供的邮件URL。 其中最常用的是主题(subject)、抄送(cc)和主体(body) (这不是一个真正的头字段，但允许您为新邮件指定一个短内容消息)。 每个字段及其值被指定为查询项。

下面是一个包含cc、bcc、主题和主体的示例：

```html
<a href="mailto:nowhere@mozilla.org?cc=name2@rapidtables.com&bcc=name3@rapidtables.com&subject=The%20subject%20of%20the%20email&body=The%20body%20of%20the%20email">
  Send mail with cc, bcc, subject and body
</a>
```

**注意:** 每个字段的值必须是URL编码的。 也就是说，不能有非打印字符（不可见字符比如制表符、换行符、分页符）和空格 [percent-escaped](http://en.wikipedia.org/wiki/Percent-encoding). 同时注意使用问号（`?`）来分隔主URL与参数值，以及使用&符来分隔`mailto:`中的各个参数。 这是标准的URL查询标记方法。阅读 [GET 方法](https://developer.mozilla.org/zh-CN/docs/Learn/Forms/Sending_and_retrieving_form_data#get_方法) 以了解哪种URL查询标记方法是更常用的。

## 6.文档与网站架构

### 文档的基本组成部分

#### 页眉

通常横跨于整个页面顶部有一个大标题 和/或 一个标志。 这是网站的主要一般信息，通常存在于所有网页。

#### 导航栏

指向网站各个主要区段的超链接。通常用菜单按钮、链接或标签页表示。类似于标题栏，导航栏通常应在所有网页之间保持一致，否则会让用户感到疑惑，甚至无所适从。许多 web 设计人员认为导航栏是标题栏的一部分，而不是独立的组件，但这并非绝对；还有人认为，两者独立可以提供更好的 [无障碍访问特性](https://developer.mozilla.org/zh-CN/docs/learn/Accessibility)，因为屏幕阅读器可以更清晰地分辨二者。

#### 主内容

中心的大部分区域是当前网页大多数的独有内容，例如视频、文章、地图、新闻等。这些内容是网站的一部分，且会因页面而异。

#### 侧边栏

一些外围信息、链接、引用、广告等。通常与主内容相关（例如一个新闻页面上，侧边栏可能包含作者信息或相关文章链接），还可能存在其他的重复元素，如辅助导航系统。

#### 页脚

横跨页面底部的狭长区域。和标题一样，页脚是放置公共信息（比如版权声明或联系方式）的，一般使用较小字体，且通常为次要内容。 还可以通过提供快速访问链接来进行 [SEO](https://developer.mozilla.org/zh-CN/docs/Glossary/SEO)。

### 用于构建内容的HTML

- [`<header>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/header)：页眉。
- [`<nav>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/nav)：导航栏。
- [`<mian>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/main)：主内容。主内容中还可以有各种子内容区段，可用[`<article>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/article)、`<section>`、`<div>`等元素表示。
- [`<aside>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/aside):侧边栏，嵌套于 `<main>`
- [`footer`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/footer)：页脚。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>二次元俱乐部</title>
    <!--定义文档与外部文档的关系-->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Sonsie+One" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=ZCOOL+KuaiLe" rel="stylesheet">
    <link href="style.css" rel="stylesheet">
  </head>

  <body>
    <header> <!-- 本站所有网页的统一主标题 -->
      <h1>聆听电子天籁之音</h1>
    </header>

    <nav> <!-- 本站统一的导航栏 -->
      <ul>
        <li><a href="#">主页</a></li>
        <!-- 共n个导航栏项目，省略…… -->
      </ul>

      <form> <!-- 搜索栏是站点内导航的一个非线性的方式。 -->
        <input type="search" name="q" placeholder="要搜索的内容">
        <input type="submit" value="搜索">
      </form>
    </nav>

    <main> <!-- 网页主体内容 -->
      <article>
        <!-- 此处包含一个 article（一篇文章），内容略…… -->
      </article>

      <aside> <!-- 侧边栏在主内容右侧 -->
        <h2>相关链接</h2>
        <ul>
          <li><a href="#">这是一个超链接</a></li>
          <!-- 侧边栏有n个超链接，略略略…… -->
        </ul>
      </aside>
    </main>

    <footer> <!-- 本站所有网页的统一页脚 -->
      <p>© 2050 某某保留所有权利</p>
    </footer>
  </body>
</html>
```

### HTML布局元素细节

理解以下主要元素的意义：

- [`<main>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/main) 存放每个页面独有的内容。每个页面上只能用一次 `<main>`，且直接位于 [`<body>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/body) 中。最好不要把它嵌套进其它元素。
- [`<article>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/article) 包围的内容即一篇文章，与页面其它部分无关（比如一篇博文）。
- [`<section>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/section) 与 `<article>` 类似，但 `<section>` 更适用于组织页面使其按功能（比如迷你地图、一组文章标题和摘要）分块。一般的最佳用法是：以 [标题](https://developer.mozilla.org/en-US/Learn/HTML/Howto/Set_up_a_proper_title_hierarchy) 作为开头；也可以把一篇 `<article>` 分成若干部分并分别置于不同的 `<section>` 中，也可以把一个区段 `<section>` 分成若干部分并分别置于不同的 `<article>` 中，取决于上下文。
- [`<aside>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/aside) 包含一些间接信息（术语条目、作者简介、相关链接，等等）。
- [`<header>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/header) 是简介形式的内容。如果它是 [`<body>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/body) 的子元素，那么就是网站的全局页眉。如果它是 `<article>`或 `<section>`的子元素，那么它是这些部分特有的页眉。
- [`<nav>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/nav) 包含页面主导航功能。其中不应包含二级链接等内容。
- [`<footer>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/footer) 包含了页面的页脚部分。

#### 无语义元素

[`<span>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/span) 是一个内联的（inline）无语义元素，最好只用于无法找到更好的语义元素来包含内容时，或者不想增加特定的含义时。例如：

```html
<p>国王喝得酩酊大醉，在凌晨 1 点时才回到自己的房间，踉跄地走过门口。<span class="editor-note">[编辑批注：此刻舞台灯光应变暗]</span>.</p
```

[`<div>`](<div>：内容划分元素 - HTML（超文本标记语言） | MDN (mozilla.org))是一个块级无语义元素，应仅用于找不到更好的块级元素时，或者不想增加特定的意义时。例如，一个电子商务网站页面上有一个一直显示的购物车组件。

```html
<div class="shopping-cart">
  <h2>购物车</h2>
  <ul>
    <li>
      <p><a href=""><strong>银耳环</strong></a>：$99.95.</p>
      <img src="../products/3333-0985/" alt="Silver earrings">
    </li>
    <li>
      ...
    </li>
  </ul>
  <p>售价：$237.89</p>
</div>
```

### 规划网站的步骤

1. 时刻记住，大多数（不是全部）页面会使用一些相同的元素，例如导航菜单以及页脚内容。

   通用内容：

   页眉：标题和logo

   页脚：联系方式和版权声明

   1. 术语，状态
   2. 站点语言选择
   3. 无障碍访问策略

2. 接下来，可为页面结构绘制草图，记录每一块的作用。

3. 对于期望添加进站点的所有其它（通用内容以外的）内容展开头脑风暴，直接罗列出来。

4. 试着对这些内容进行分组，这样可以让你了解哪些内容可以放在同一个页面。

5. 试着绘制一个站点地图的草图，使用一个气泡代表网站的一个页面，并绘制连线来表示页面间的一般工作流。主页面一般置于中心，且链接到其他大多数页面；小型网站的大多数页面都可以从主页的导航栏中链接跳转。也可记录下内容的显示方式。

## 7.HTML表格

### 语法

1. 表格的内容都包含在 `<table></table>`之内。

2. 在表格中，最小的内容容器是单元格, 是通过 `<td>` 元素创建的 ('td' 代表 'table data'). 

3. 通过 `<tr>`实现换行。

4. 使用 `<th>`元素添加表格中的标题。

5. 通过 `colspan`和 `rowspan`属性合并单元格

6. 通过 `<colgroup>`设置一列相同效果，利用 `<span>`控制设置的范围

   ```html
   <table>
     <colgroup>
       <col>
       <col style="background-color: yellow" span="2">
     </colgroup>
     <tr>
       <th>Data 1</th>
       <th>Data 2</th>
     </tr>
     <tr>
       <td>Calcutta</td>
       <td>Orange</td>
     </tr>
     <tr>
       <td>Robots</td>
       <td>Jazz</td>
     </tr>
   </table>
   ```

### 表格高级特性和可访问性

1. 通过 `<caption>`元素为表格添加标题。

   ```html
   <table>
     <caption>Dinosaurs in the Jurassic period</caption>
   
     ...
   </table>
   ```

2. 由于表格在结构上有点复杂，如果把它们定义得更加结构化，那会帮助我们更能了解结构。一个明确的方法是使用 `<thead>` ,`<tfoot>` , `<tbody>` 这些元素允许你把表格中的部分标记为表头、页脚、正文部分。

3. `<scope>` 属性，可以将数据单元格与表头单元格联系起来。通过属性值 row，表头行包括的所有表格都将和表头单元格联系起来。指定 col，会将当前列的所有单元格和表头单元格绑定起来。使用 `rowgroup` 和 `colgroup` 会将单元格的行组（由 `<thead>`、`<tbody>` 或 `<tfoot>` 标签定义）或列组中的所有单元格和表头单元格绑定起来（由 `<col>` 或 `<colgroup>` 标签定义）。

   | 值       | 描述                     |
   | :------- | :----------------------- |
   | col      | 规定单元格是列的表头。   |
   | row      | 规定单元格是行的表头。   |
   | colgroup | 规定单元格是列组的表头。 |
   | rowgroup | 规定单元格是行组的表头。 |

   ```HTML
   <th scope="col">名字</th>
   ```

## 8.HTML多媒体嵌入

### 图片嵌入

```html
<img src="dinosaur.jpg">
<img src="images/dinosaur.jpg">
<img src="https://www.example.com/images/dinosaur.jpg">
```

#### 备选文本

 `alt` ，它的值应该是对图片的文字描述，用于在图片无法显示或不能被看到的情况。

```html
<img src="images/dinosaur.jpg"
     alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth">
```

#### 图像说明

HTML5 的 [`<figure>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/figure)和[`<figcapton>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/figcaption) 元素：为图片提供一个语义容器，在标题和图片之间建立清晰的关联。`<figcaption>`元素告诉浏览器和其他辅助的技术工具这段说明文字描述了 `<figure>`元素的内容

#### 背景图片

 CSS 属性 [`background-image`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-image) 和另其他 `background-*` 属性是用来放置背景图片。

```css
p {
  background-image: url("images/dinosaur.jpg");
}
```

### 视频与音频嵌入

#### `<video>`元素

```html
<video src="rabbit320.webm" controls>
  <p>你的浏览器不支持 HTML5 视频。可点击<a href="rabbit320.mp4">此链接</a>观看</p>
</video>
```

当中的一些属性如下:

- [`src`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video#attr-src)

  同 [`<img>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img) 标签使用方式相同，`src` 属性指向你想要嵌入网页当中的视频资源，他们的使用方式完全相同。

- [`controls`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video#attr-controls)

  用户必须能够控制视频和音频的回放功能。你可以使用 `controls` 来包含浏览器提供的控件界面，同时你也可以使用合适的 [JavaScript API](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement) 创建自己的界面。界面中至少要包含开始、停止以及调整音量的功能。 

- 准备不同的格式来兼容不同的浏览器

  ```html
  <video controls>
    <source src="rabbit320.mp4" type="video/mp4">
    <source src="rabbit320.webm" type="video/webm">
    <p>你的浏览器不支持 HTML5 视频。可点击<a href="rabbit320.mp4">此链接</a>观看</p>
  </video>
  ```

- html5新特性：
  - `width`和 `height`：可以用属性控制视频的尺寸，也可以用 [CSS](https://developer.mozilla.org/zh-CN/docs/Glossary/CSS) 来控制视频尺寸。 无论使用哪种方式，视频都会保持它原始的长宽比 — 也叫做**纵横比**。如果你设置的尺寸没有保持视频原始长宽比，那么视频边框将会拉伸，而未被视频内容填充的部分，将会显示默认的背景颜色。
  - `autoplay`:这个属性会使音频和视频内容立即播放，即使页面的其他部分还没有加载完全。
  - `loop`:这个属性可以让音频或者视频文件循环播放。
  - `mute`:这个属性会导致媒体播放时，默认关闭声音。
  - `poster`:这个属性指向了一个图像的URL，这个图像会在视频播放前显示。通常用于粗略的预览或者广告。
  - `preload`：
  - 这个属性被用来缓冲较大的文件，有3个值可选：
    - `"none"` ：不缓冲
    - `"auto"` ：页面加载后缓存媒体文件
    - `"metadata"` ：仅缓冲文件的元数据

#### 显示音轨文本

html5的 `<video>`有了WebVTT格式，可以使用 `<track>`标签。WebVTT 是一个格式，用来编写文本文件，这个文本文件包含了众多的字符串，这些字符串会带有一些元数据，它们可以用来描述这个字符串将会在视频中显示的时间，甚至可以用来描述这些字符串的样式以及定位信息。这些字符串叫做 **cues** ，你可以根据不同的需求来显示不同的样式，最常见的如下：

- subtitles

  通过添加翻译字幕，来帮助那些听不懂外国语言的人们理解音频当中的内容。

- captions

  同步翻译对白，或是描述一些有重要信息的声音，来帮助那些不能听音频的人们理解音频中的内容。

- timed descriptions

  将文字转换为音频，用于服务那些有视觉障碍的人。

与HTML媒体一起显示的步骤：

1. 以 .vtt 后缀名保存文件。

2. 用 `<track>`标签链接.vtt文件， `<track>` 标签需放在 `<audio>` 或 `<video>` 标签当中，同时需要放在所有 `<source>` 标签之后。使用 [`kind`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/track#attr-kind) 属性来指明是哪一种类型，如 subtitles 、 captions 、 descriptions。然后，使用 [`srclang`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/track#attr-srclang) 来告诉浏览器你是用什么语言来编写的 subtitles。

   ```html
   <video controls>
       <source src="example.mp4" type="video/mp4">
       <source src="example.webm" type="video/webm">
       <track kind="subtitles" src="subtitles_en.vtt" srclang="en">
   </video>
   ```

### 从对象到iframe - 其他嵌入技术

`<iframe>`元素旨在允许您将其他Web文档嵌入到当前文档中。

```html
<iframe src="https://developer.mozilla.org/en-US/docs/Glossary"
        width="100%" height="500" frameborder="0"
        allowfullscreen sandbox>
  <p> <a href="https://developer.mozilla.org/en-US/docs/Glossary">
    Fallback link for browsers that don't support iframes
  </a> </p>
</iframe>
```

基本要素：

- `allowfullscreen`：如果设置，`<iframe>`则可以通过[全屏API](https://developer.mozilla.org/zh-CN/docs/Web/API/Fullscreen_API)设置为全屏模式（稍微超出本文的范围）。
- `frameborder`:如果设置为1，则会告诉浏览器在此框架和其他框架之间绘制边框，这是默认行为。0删除边框。
- `src`:指向嵌入文档的url路径
- `sandbox`：该属性需要在已经支持其他`<iframe>`功能（例如IE 10及更高版本）但稍微更现代的浏览器上才能工作，该属性可以提高安全性设置

### 添加矢量图形

#### 矢量图形

- 位图使用像素网格来定义 — 一个位图文件精确得包含了每个像素的位置和它的色彩信息。流行的位图格式包括 Bitmap (`.bmp`), PNG (`.png`), JPEG (`.jpg`), and GIF (`.gif`.)
- 矢量图使用算法来定义 — 一个矢量图文件包含了图形和路径的定义，电脑可以根据这些定义计算出当它们在屏幕上渲染时应该呈现的样子。 [SVG](https://developer.mozilla.org/zh-CN/docs/Glossary/SVG) 格式可以让我们创造用于 Web 的精彩的矢量图形。

#### SVG

SVG是用于描述矢量图象的XML语言。 SVG用于标记图形，而不是内容。 非常简单，你有一些元素来创建简单图形，如 `<circle>`和 `<rect>`。

## 9.HTML元素

### HTML表单元素

| 元素         | 说明                                                   |
| ------------ | ------------------------------------------------------ |
| `<input>`    | 根据不同的 *type* 属性，可以变化为多种形态。           |
| `<select>`   | 下拉列表                                               |
| `<option>`   | 定义待选择的选项。列表通常会把首个选项显示为被选选项。 |
| `<textarea>` | 定义多行输入字段（文本域）                             |
| `<button>`   | 定义可点击的按钮                                       |

## CSS基础学习

## 1.什么是CSS

CSS（层叠样式表）用于设置和布置网页 - 例如，更改内容的字体，颜色，大小和间距，将其拆分为多个列，或添加动画和其他装饰功能。

CSS 可以用于给文档添加样式 —— 比如改变标题和链接的[颜色](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value)及[大小](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-size)。它也可用于创建布局 —— 比如将一个单列文本变成包含主要内容区域和存放相关信息的侧边栏区域的[布局](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Layout_cookbook/Column_layouts)。它甚至还可以用来做一些特效，比如[动画](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Animations)。

CSS 是在 HTML 4 开始使用的,是为了更好的渲染HTML元素而引入的.

## CSS 可以通过以下方式添加到HTML中:

- 内联样式- 在HTML元素中使用"style" **属性**
- 内部样式表 -在HTML文档头部 <head> 区域使用<style> **元素** 来包含CSS
- 外部引用 - 使用外部 CSS **文件**

最好的方式是通过外部引用CSS文件.

## 2.CSS语法

CSS是一门基于规则的语言 —— 你能定义用于你的网页中特定元素样式的一组规则. 比如“我希望页面中的主标题是红色的大字”

下面这段代码使用非常简单的 CSS 规则实现了之前提到的效果:

```css
h1 {
    color: red;
    font-size: 5em;
}
```

语法由一个 [选择器(selector)](https://developer.mozilla.org/zh-CN/docs/Glossary/CSS_Selector)起头。 它 *选择(selects)* 了我们将要用来添加样式的 HTML 元素。

接着输入一对大括号`{ }`。 在大括号内部定义一个或多个形式为 **属性(property):值(value);** 的 **声明(declarations)**。每个声明都指定了我们所选择元素的一个属性，之后跟一个我们想赋给这个属性的值。

![img](https://www.runoob.com/wp-content/uploads/2013/07/632877C9-2462-41D6-BD0E-F7317E4C42AC.jpg)

冒号之前是属性，冒号之后是值。不同的 CSS [属性(properties) (en-US)](https://developer.mozilla.org/en-US/docs/Glossary/property/CSS) 对应不同的合法值。

一个 CSS 样式表可以包含很多个规则。

```css
h1 {
    color: red;
    font-size: 5em;
}

p {
    color: black;
}
```

## 3.CSS入门

 [`<link>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/link) 语句块里面，我们用属性 `rel`，让浏览器知道有 CSS 文档存在（所以需要遵守 CSS 样式的规定），并利用属性 `href` 指定，寻找 CSS 文件的位置。

```html
<link rel="stylesheet" href="styles.css">
```

我们通过触发元素选择器实现这一点——元素选择器，即直接匹配 HTML 元素的选择器。例如，若要样式化一个文档中所有的段落，只需使用选择器 `p`。若要将所有段落变成绿色，你可以利用如下方式：

```css
p {
  color: green;
}
```

用逗号将不同选择器隔开，即可一次使用多个选择器。譬如，若要将所有段落与列表变成绿色，只需：

```css
p, li {
    color: green;
}
```

HTML文档标记正确，浏览器就会尽全力将其渲染至可读状态，浏览器在一个包含默认样式的样式表，默认对任何页面有效，可选定某个元素加一条CSS规则即可。无序列表 `<ul>`举例，它自带项目符号，可以这样移除它们：

```css
li {
  list-style-type: none;
}
```

### 使用类名

可通过给HTML元素加个类名（class），来实现方式样化一片元素。先将class属性加入对象：

```html
<ul>
  <li>项目一</li>
  <li class="special">项目二</li>
  <li>项目 <em>三</em></li>
</ul>
```

在 CSS 中，要选中这个 `special` 类，只需在选择器的开头加个西文句点（.）。在你的 CSS 文档里加上如下代码：

```css
.special {
  color: orange;
  font-weight: bold;
}
```

有时选择器中，HTML 元素选择器跟类一起出现，说明选中每个 `special` 类的 `li` 元素：

```css
li.special {
  color: orange;
  font-weight: bold;
}
```

### 根据元素在文档中的位置确定样式

在两个选择器之间加上一个空格，称为一个**包含选择符**的选择器：

```css
li em {
  color: rebeccapurple;
}
```

在 HTML 文档中设置直接出现在标题后面并且与标题具有相同层级的段落样式，为此需在两个选择器之间添加一个 `+` 号 (成为 **相邻选择符**) ：

```css
h1 + p {
  font-size: 200%;
}
```

### 根据状态确定样式

根据标签的状态确定样式。一个直观的例子就是当我们修改链接的样式时。 当我们修改一个链接的样式时我们需要定位（针对） `<a>` （锚）标签。取决于是否是未访问的、访问过的、被鼠标悬停的、被键盘定位的，亦或是正在被点击当中的状态，这个标签有着不同的状态。你可以使用CSS去定位或者说针对这些不同的状态进行修饰——下面的CSS代码使得没有被访问的链接颜色变为粉色、访问过的链接变为绿色：

```css
a:link {
  color: pink;
}

a:visited {
  color: green;
}
```

可以改变链接被鼠标悬停的时候的样式，例如移除下划线，下面的代码就实现了这个功能：

```css
a:hover {
  text-decoration: none;
}
```

### 同时使用选择器和选择符

可以同时使用选择器和选择符。

```css
/* selects any <span> that is inside a <p>, which is inside an <article>  */
article p span { ... }

/* selects any <p> that comes directly after a <ul>, which comes directly after an <h1>  */
h1 + ul + p { ... }
```

你可以将多种类型组合在一起。

```css
body h1 + p .special {
  color: yellow;
  background-color: black;
  padding: 5px;
}
```

### 外部样式表

外部样式表是指将CSS编写在扩展名为`.css` 的单独文件中，并从HTML`<link>` 元素引用它的情况：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My CSS experiment</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This is my first CSS example</p>
  </body>
</html>
```

[`<link>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/link) 元素的 `href` 属性需要引用你的文件系统中的一个文件。

在上面的例子中，CSS文件和HTML文档在同一个文件夹中，但是你可以把CSS文件放在其他地方，并调整指定的路径以匹配，例如：

```html
<!-- 在当前目录中称为样式的子目录中 -->
<link rel="stylesheet" href="styles/style.css">

<!-- 在一个叫做general的子目录里面，它在一个叫做styles的子目录里面，在当前目录里面 -->
<link rel="stylesheet" href="styles/general/style.css">

<!-- 上一级目录，然后进入一个名为 styles 的子目录 -->
<link rel="stylesheet" href="../styles/style.css">
```

### 内部样式表

内部样式表是指不使用外部CSS文件，而是将CSS放在HTML文件[`<head>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/head)标签里的`<style>`标签中：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My CSS experiment</title>
    <style>
      h1 {
        color: blue;
        background-color: yellow;
        border: 1px solid black;
      }

      p {
        color: red;
      }
    </style>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This is my first CSS example</p>
  </body>
</html>
```

### 内联样式

**内联样式表存在于HTML元素的style属性之中**。其特点是每个CSS表只影响一个元素（不推荐）：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My CSS experiment</title>
  </head>
  <body>
    <h1 style="color: blue;background-color: yellow;border: 1px solid black;">Hello World!</h1>
    <p style="color:red;">This is my first CSS example</p>
  </body>
</html>
```

### 选择器

每个CSS规则都以一个选择器或一组选择器为开始，去告诉浏览器这些规则应该应用到哪些元素上。以下都是有效的选择器或组合选择器的示例：

```css
h1
a:link
.manythings
#onething
*
.box p
.box p:first-child
h1, h2, .intro
```

### 属性和值

在最基本的层面上，CSS由两个组成部分组成：

- **属性：**人类可读的标识符，指示您想要更改的样式特征(例如`font-size`, `width`, `background-color`) 你想改变。
- **值：**每个指定的属性都有一个值，该值指示您希望如何更改这些样式特性(例如，要将字体、宽度或背景色更改为。)

### 函数

```css
.outer {
  border: 5px solid black;
}

.box {
  padding: 10px;
  width: calc(90% - 30px);/*calc() function*/
  background-color: rebeccapurple;
  color: white;
}
```

```html
<div class="outer"><div class="box">The inner box is 90% - 30px.</div></div>
```

### @规则

 `@rules` (pronounced "at-rules"). 这是一些特殊的规则，为 CSS提供了一些关于如何表现的指导。 有些`@rules` 规则很简单，有规则名和值。例如，要将额外的样式表导入主CSS样式表，可以使用`@import`:

```css
@import 'styles2.css';
```

下面的 CSS中，将给 `<body>` 元素一个粉红色的背景色。但是，随后使用@media创建样式表的一个部分，该部分仅适用于视口大于30em的浏览器。如果浏览器的宽度大于30em，则背景色将为蓝色：

```css
body {
  background-color: pink;
}

@media (min-width: 30em) {
  body {
    background-color: blue;
  }
}
```

### CSS基本样式

#### font-family

 `font-family` 允许通过给定一个有先后顺序的，由字体名或者字体族名组成的列表来为选定的元素设置字体。

属性值用逗号隔开。浏览器会选择列表中第一个该计算机上有安装的字体，或者是通过 [`@font-face`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@font-face) 指定的可以直接下载的字体。

通常会使用属性缩写 [`font`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font) 来设置 `font-size` 和其他与字体相关的属性。

`font-family` 属性指定的是一个优先级从高到低的可选字体列表。

```css
/* 一个字体族名和一个通用字体族名 */
font-family: "Gill Sans Extrabold", sans-serif;
font-family: "Goudy Bookletter 1911", sans-serif;

/* 仅有一个通用字体族名 */
font-family: serif;
font-family: sans-serif;
font-family: monospace;
font-family: cursive;
font-family: fantasy;
font-family: system-ui;
font-family: emoji;
font-family: math;
font-family: fangsong;

/* 全局值 */
font-family: inherit;
font-family: initial;
font-family: unset;

```

#### color

`color`CSS属性设置[颜色值](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value)的前景色以及[文本装饰](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration)，并设置[`currentcolor` (en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentcolor_keyword)值。`currentcolor`可以对其他颜色属性用作不直接的值，比如[`border-color`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-color)。

```css
/* 关键词 */
color: currentcolor;

/* <named-color>值 */
color: red;
color: orange;
color: tan;
color: rebeccapurple;

/* <hex-color>值 */
color: #090;
color: #009900;
color: #090a;
color: #009900aa;

/* <rgb()>值 */
color: rgb(34, 12, 64, 0.6);
color: rgba(34, 12, 64, 0.6);
color: rgb(34 12 64 / 0.6);
color: rgba(34 12 64 / 0.3);
color: rgb(34.0 12 64 / 60%);
color: rgba(34.6 12 64 / 30%);

/* <hsl()>值 */
color: hsl(30, 100%, 50%, 0.6);
color: hsla(30, 100%, 50%, 0.6);
color: hsl(30 100% 50% / 0.6);
color: hsla(30 100% 50% / 0.6);
color: hsl(30.0 100% 50% / 60%);
color: hsla(30.2 100% 50% / 60%);

/* 全局值 */
color: inherit;
color: initial;
color: unset;
```

#### border-bottom

border-bottom 简写属性把下边框的所有属性：[`border-bottom-color`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-bottom-color)，[`border-bottom-style`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-bottom-style) 与 [`border-bottom-width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-bottom-width) 设置到了一个声明中。这些属性描述了元素的下边框样式。

```css
border-bottom: 1px;
border-bottom: 2px dotted;
border-bottom: medium dashed blue;

/* Keyword values */
border-bottom-style: none;
border-bottom-style: hidden;
border-bottom-style: dotted;/* 点画线 */
border-bottom-style: dashed;/* 虚线 */
border-bottom-style: solid;/* 实线 */
border-bottom-style: double;/* 双线 */
border-bottom-style: groove;/* 凹 */
border-bottom-style: ridge;/* 凸 */
border-bottom-style: inset;
border-bottom-style: outset;

/* Global values */
border-bottom-style: inherit;
border-bottom-style: initial;
border-bottom-style: unset;

```

#### font-weight

[`font-weight`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-weight) [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) 属性指定了字体的粗细程度。 一些字体只提供 `normal` 和 `bold` 两种值。

```css
/* Keyword values */
font-weight: normal;
font-weight: bold;

/* Keyword values relative to the parent */
font-weight: lighter;
font-weight: bolder;

/* Numeric keyword values 1-1000 */
font-weight: 1
font-weight: 100;
font-weight: 100.6;


/* Global values */
font-weight: inherit;
font-weight: initial;
font-weight: unset;

```

#### font-size

**`font-size`** [CSS](https://developer.mozilla.org/zh-CN/docs/Web/CSS) 属性指定字体的大小。因为该属性的值会被用于计算em和ex长度单位，定义该值可能改变其他元素的大小。

```css
/* <absolute-size>，绝对大小值 */
font-size: xx-small;
font-size: x-small;
font-size: small;
font-size: medium;
font-size: large;
font-size: x-large;
font-size: xx-large;

/* <relative-size>，相对大小值 */
font-size: larger;
font-size: smaller;

/* <length>，长度值 */
font-size: 12px;
font-size: 0.8em;

/* <percentage>，百分比值 */
font-size: 80%;

font-size: inherit;
```

##### em

另一种方法是用`em`值设定字体大小。`em` 值的大小是动态的。当定义或继承font-size属性时，1em等于该元素的字体大小。如果你在网页中任何地方都没有设置文字大小的话，那它将等于浏览器默认文字大小，通常是16px。所以通常1em = 16px。2em = 32px。 如果你设置了body元素的字体大小为20px，那1em = 20px、2em = 40px。那个2就是当前em大小的倍数。
$$
em = 希望得到的像素大小 / 父元素字体像素大小
$$

#### text-decoration

`text-decoration` 这个 CSS 属性是用于设置文本的修饰线外观的（下划线、上划线、贯穿线/删除线 或 闪烁）它是 [`text-decoration-line`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration-line), [`text-decoration-color`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration-color), [`text-decoration-style`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration-style), 和新出现的 [`text-decoration-thickness`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration-thickness) 属性的缩写。

文本修饰属性会延伸到子元素。这意味着如果祖先元素指定了文本修饰属性，子元素则不能将其删除。例如，在如下标记中` <p>This text has <em>some emphasized words</em> in it.</p>，应用样式``p { text-decoration: underline }` 会对整个段落添加下划线，此时再添加样式 `em { text-decoration: none }` 则不会引起任何改变，整个段落仍然有下划线修饰。然而，新加样式 `em { text-decoration: overline }` 则会在<em>标记的文字上再添加上这种overline样式。

```html
<p class="under">This text has a line underneath it.</p>
<p class="over">This text has a line over it.</p>
<p class="line">This text has a line going through it.</p>
<p>This <a class="plain" href="#">link will not be underlined</a>,
    as links generally are by default. Be careful when removing
    the text decoration on anchors since users often depend on
    the underline to denote hyperlinks.</p>
<p class="underover">This text has lines above <em>and</em> below it.</p>
<p class="blink">This text might blink for you,
    depending on the browser you use.</p>
```



```css
.under {
  text-decoration: underline red;
}

.over {
  text-decoration: wavy overline lime;
}

.line {
  text-decoration: line-through;
}

.plain {
  text-decoration: none;
}

.underover {
  text-decoration: dashed underline overline;
}

.blink {
  text-decoration: blink;
}

```

### 盒子模型

所有HTML元素可以看作盒子，在CSS中，"box model"这一术语是用来设计和布局时使用。

CSS盒模型本质上是一个盒子，封装周围的HTML元素，它包括：边距，边框，填充，和实际内容。

盒模型允许我们在其它元素和周围元素边框之间的空间放置元素。

在 CSS 中我们广泛地使用两种“盒子” —— **块级盒子** (**block box**) 和 **内联盒子** (**inline box**)**。**这两种盒子会在**页面流**（page flow）和**元素之间的关系**方面表现出不同的行为:

一个被定义成块级的（block）盒子会表现出以下行为:

- 盒子会在内联的方向上扩展并占据父容器在该方向上的所有可用空间，在绝大数情况下意味着**盒子会和父容器一样宽**
- 每个盒子都会换行
- [`width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/width) 和 [`height`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/height) 属性可以发挥作用
- 内边距（padding）, 外边距（margin） 和 边框（border） 会将其他元素从当前盒子周围“推开”

<u>除非特殊指定，诸如标题(`<h1>`等)和段落(`<p>`)默认情况下都是块级的盒子。</u>

如果一个盒子对外显示为 `inline`，那么他的行为如下:

- 盒子不会产生换行。
-  [`width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/width) 和 [`height`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/height) 属性将不起作用。
- 垂直方向的内边距、外边距以及边框会被应用但是不会把其他处于 `inline` 状态的盒子推开。
- 水平方向的内边距、外边距以及边框会被应用且会把其他处于 `inline` 状态的盒子推开。

<u>用做链接的 `<a>` 元素、 `<span>`、 `<em>` 以及 `<strong>` 都是默认处于 `inline` 状态的。</u>

我们通过对盒子[`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display) 属性的设置，比如 `inline` 或者 `block` ，来控制盒子的外部显示类型。

下面的图片说明了盒子模型(Box Model)：

![image-20220120212024873](C:\Users\Sagittarius\AppData\Roaming\Typora\typora-user-images\image-20220120212024873.png)

不同部分的说明：

- **Margin(外边距)** - 清除边框外的区域，外边距是透明的。

  **外边距折叠**：有两个外边距相接的元素，这些外边距将合并为一个外边距，即最大的单个外边距的大小。

- **Border(边框)** - 围绕在内边距和内容外的边框。

- **Padding(内边距)** - 清除内容周围的区域，内边距是透明的。

- **Content(内容)** - 盒子的内容，显示文本和图像。

最终元素的总宽度计算公式是这样的：
$$
总元素的宽度=宽度+左填充+右填充+左边框+右边框+左边距+右边距
$$
元素的总高度最终计算公式是这样的：
$$
总元素的高度=高度+顶部填充+底部填充+上边框+下边框+上边距+下边距
$$

```css
.box {
  width: 350px;
  height: 150px;
  margin: 25px;
  padding: 25px;
  border: 5px solid black;
}

```

![image-20220121122305419](C:\Users\Sagittarius\AppData\Roaming\Typora\typora-user-images\image-20220121122305419.png)

css还有一个替代盒模型。使用这个模型，所有宽度都是可见宽度，所以内容宽度是该宽度减去边框和填充部分。使用上面相同的样式得到 (width = 350px, height = 150px).

如果需要使用替代模型，您可以通过为其设置 `box-sizing: border-box` 来实现。 这样就可以告诉浏览器使用 `border-box` 来定义区域，从而设定您想要的大小。

```
.box {
  box-sizing: border-box;
} 
```

![image-20220121122448933](C:\Users\Sagittarius\AppData\Roaming\Typora\typora-user-images\image-20220121122448933.png)



下面三个html元素，都有一个外部显示类型 `block`。第一个是一个段落，在 CSS 中加了边框。浏览器把它渲染成一个块级盒子，所以段落从新的一行开始，而且宽度占满一行。

第二个是一个列表，布局属性是 `display: flex`。 将在容器中建立一个flex布局，但是每个列表是一个块级元素 —— 像段落一样 —— 会充满整个容器的宽度并且换行。

下面有个块级段落，里面有两个 `<span>` 元素。正常情况下是 `inline`，但是其中一个加了block类，设置属性 `display: block`。

`display`有一个特殊的值，它在内联和块之间提供了一个中间状态。这对于以下情况非常有用:不希望一个项切换到新行，但希望它可以设定宽度和高度，并避免上面看到的重叠。

一个元素使用 `display: inline-block`，实现我们需要的块级的部分效果：

- 设置`width` 和`height` 属性会生效。
- `padding`, `margin`, 以及`border` 会推开其他元素。

但是，它不会跳转到新行，如果显式添加`width` 和`height` 属性，它只会变得比其内容更大。

![image-20220121120811112](C:\Users\Sagittarius\AppData\Roaming\Typora\typora-user-images\image-20220121120811112.png)

```css
p, 
ul {
  border: 2px solid rebeccapurple;
  padding: .5em;
}

.block,
li {
  border: 2px solid blue;
  padding: .5em;
}

ul {
  display: flex;
  list-style: none;
}

.block {
  display: block;
}      
```

```HTML
<p>I am a paragraph. A short one.</p>
<ul>
  <li>Item One</li>
  <li>Item Two</li>
  <li>Item Three</li>
</ul>
<p>I am another paragraph. Some of the <span class="block">words</span> have been wrapped in a <span>span element</span>.</p>
```

 `<span>` 在第一段默认是内联元素所以不换行。

还有一个 `<ul>` 设置为 `display: inline-flex`，使得在一些flex元素外创建一个内联框。

最后设置两个段落为 `display: inline`。  inline flex 容器和段落在一行上而不是像块级元素一样换行。

![image-20220121120949082](C:\Users\Sagittarius\AppData\Roaming\Typora\typora-user-images\image-20220121120949082.png)



```css
p, 
ul {
  border: 2px solid rebeccapurple;
}

span,
li {
  border: 2px solid blue;
}

ul {
  display: inline-flex;
  list-style: none;
  padding: 0;
} 

.inline {
  display: inline;
}
```

```html
<p>
    I am a paragraph. Some of the
    <span>words</span> have been wrapped in a
    <span>span element</span>.
</p>     
<ul>
  <li>Item One</li>
  <li>Item Two</li>
  <li>Item Three</li>
</ul>
<p class="inline">I am a paragraph. A short one.</p>
<p class="inline">I am another paragraph. Also a short one.</p>
```

#### 边框

边框是在边距和填充框之间绘制的。如果您正在使用标准的盒模型，边框的大小将添加到框的宽度和高度。如果您使用的是替代盒模型，那么边框的大小会使内容框更小，因为它会占用一些可用的宽度和高度。

可以使用[`border`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border)属性一次设置所有四个边框的宽度、颜色和样式。

分别设置每边的宽度、颜色和样式，可以使用：

- [`border-top`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-top)
- [`border-right`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-right)
- [`border-bottom`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-bottom)
- [`border-left`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-left)

设置所有边的颜色、样式或宽度，请使用以下属性：

- [`border-width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-width)
- [`border-style`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-style)
- [`border-color`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-color)

设置单边的颜色、样式或宽度，可以使用最细粒度的普通属性之一：

- [`border-top-width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-top-width)
- [`border-top-style`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-top-style)
- [`border-top-color`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-top-color)
- [`border-right-width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-right-width)
- [`border-right-style`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-right-style)
- [`border-right-color`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-right-color)
- [`border-bottom-width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-bottom-width)
- [`border-bottom-style`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-bottom-style)
- [`border-bottom-color`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-bottom-color)
- [`border-left-width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-left-width)
- [`border-left-style`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-left-style)
- [`border-left-color`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-left-color)

### 设备像素比（devicePixelRatio,dpr）

window.devicePixelRatio是**设备物理像素**和**设备独立像素**（device-independent pixels，dips）之间的比率。window.devicePixelRatio = 物理像素/ 设备独立像素

- 设备物理像素：
  是一个物理概念，比如设备的分辨率，Phone 5的分辨率640 x 1136px。
- 设备独立像素dips ：
  是一个抽象像素，用于向CSS中的宽度、高度、媒体查询和meta 的viewport 中的device-width提供信息。通过观察retina和非retina设备之间的区别，可以最好地解释它们。
- CSS像素：
  是Web编程的概念，指的是CSS中使用的逻辑像素。在CSS规范中，长度单位可以分为两类，绝对(absolute)单位以及相对(relative)单位。px是一个相对单位，相对的是设备物理像素。
  比如iPhone 5使用的是Retina屏幕，使用2px x 2px的设备物理像素，代表 1px x 1px 的 CSS像素，所以设备物理像素为640 x 1136px，而CSS逻辑像素数为320 x 568px。

## 4.CSS运行流程

### 流程

1. 浏览器载入HTML文件（比如从网络上获取）。
2. 将HTML文件转化成一个DOM（Document Object Model），DOM是文件在计算机内存中的表现形式，下一节将更加详细的解释DOM。
3. 接下来，浏览器会拉取该HTML相关的大部分资源，比如嵌入到页面的图片、视频和CSS样式。
4. 浏览器拉取到CSS之后会进行解析，根据选择器的不同类型（比如element、class、id等等）把他们分到不同的“桶”中。浏览器基于它找到的不同的选择器，将不同的规则（基于选择器的规则，如元素选择器、类选择器、id选择器等）应用在对应的DOM的节点中，并添加节点依赖的样式（这个中间步骤称为渲染树）。
5. 上述的规则应用于渲染树之后，渲染树会依照应该出现的结构进行布局。
6. 网页展示在屏幕上（这一步被称为着色）。

## 5.CSS构建

### 层叠与继承

#### 优先级

浏览器是根据优先级来决定当多个规则有不同选择器对应相同的元素的时候需要使用哪个规则。它基本上是一个衡量选择器具体选择哪些区域的尺度：

- 一个元素选择器不是很具体 — 会选择页面上该类型的所有元素 — 所以它的优先级就会低一些。
- 一个类选择器稍微具体点 — 它会选择该页面中有特定 `class` 属性值的元素 — 所以它的优先级就要高一点。

#### 继承

继承也需要在上下文中去理解 —— 一些设置在父元素上的css属性是可以被子元素继承的，有些则不能。

#### 控制继承

CSS 为控制继承提供了四个特殊的通用属性值。每个css属性都接收这些值。

- [`inherit`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/inherit)

  设置该属性会使子元素属性和父元素相同。实际上，就是 "开启继承".

- [`initial`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/initial)

  设置属性值和浏览器默认样式相同。如果浏览器默认样式中未设置且该属性是自然继承的，那么会设置为 `inherit` 。

- [`unset`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/unset)

  将属性重置为自然值，也就是如果属性是自然继承那么就是 `inherit`，否则和 `initial`一样

#### 重设所有属性值

CSS 的 shorthand 属性 `all` 可以用于同时将这些继承值中的一个应用于（几乎）所有属性。它的值可以是其中任意一个(`inherit`, `initial`, `unset`, or `revert`)。这是一种撤销对样式所做更改的简便方法，以便回到之前已知的起点。

```css
blockquote {
    background-color: red;
    border: 2px solid green;
}
        
.fix-this {
    all: unset;
}
```

```html
<blockquote>
    <p>This blockquote is styled</p>
</blockquote>

<blockquote class="fix-this">
    <p>This blockquote is not styled</p>
</blockquote>
```

#### 层叠

简单的说，css规则的顺序很重要；当应用两条同级别的规则到一个元素的时候，写在后面的就是实际使用的规则。

##### 资源顺序

如果你有超过一条规则，而且都是相同的权重，那么最后面的规则会应用。可以理解为后面的规则覆盖前面的规则，直到最后一个开始设置样式。

##### 优先级

**优先规则1**：最近的祖先样式比其他祖先样式优先级高

**优先规则2：**"直接样式"比"祖先样式"优先级高。

类选择器的权重大于元素选择器，因此类上定义的属性将覆盖应用于元素上的属性。

这里需要注意虽然我们考虑的是选择器，以及应用在选中对象上的规则，但不会覆盖所有规则，只有相同的属性。

这样可以避免重复的 CSS。一种常见的做法是给基本元素定义通用样式，然后给不同的元素创建对应的类。

**优先规则3**：优先级关系：内联样式 > ID 选择器 > 类选择器 = 属性选择器 = 伪类选择器 > 标签选择器 = 伪元素选择器。

在讨论 CSS 优先级之前，先说说 CSS 7 种基础的选择器：

- ID 选择器， 如 #id{}
- 类选择器， 如 .class{}
- 属性选择器， 如 a[href="segmentfault.com"]{}
- 伪类选择器， 如 :hover{}
- 伪元素选择器， 如 ::before{}
- 标签（元素）选择器， 如 span{}
- 通配选择器， 如 *{}

**优先规则4：**计算选择符中 ID 选择器的个数（a），计算选择符中类选择器、属性选择器以及伪类选择器的个数之和（b），计算选择符中标签选择器和伪元素选择器的个数之和（c）。按 a、b、c 的顺序依次比较大小，大的则优先级高，相等则比较下一个。若最后两个的选择符中 a、b、c 都相等，则按照"就近原则"来判断。

所有 CSS 的选择符由上述 7 种基础的选择器或者组合而成，组合的方式有 3 种：

- 后代选择符： .father .child{}
- 子选择符： .father > .child{}
- 相邻选择符: .bro1 + .bro2{}

本质上，不同类型的选择器有不同的分数值，把这些分数相加就得到特定选择器的权重，然后就可以进行匹配。

一个选择器的优先级可以说是由四个部分相加 (分量)，可以认为是个十百千 — 四位数的四个位数：

1. **千位**： 如果声明在 [`style`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes#attr-style) 的属性（**内联样式**）则该位得一分。这样的声明没有选择器，所以它得分总是1000。
2. **百位**： 选择器中包含**ID选择器**则该位得一分。
3. **十位**： 选择器中包含**类选择器、属性选择器或者伪类**则该位得一分。
4. **个位**：选择器中包含**元素、伪元素选择器**则该位得一分。

<u>**注**: 通用选择器 (`*`)，组合符 (`+`, `>`, `~`, ' ')，和否定伪类 (`:not`) 不会影响优先级。</u>

**警告:** 在进行计算时不允许进行进位，例如，20 个类选择器仅仅意味着 20 个十位，而不能视为 两个百位，也就是说，无论多少个类选择器的权重叠加，都不会超过一个 ID 选择器。

| 选择器                                    | 千位 | 百位 | 十位 | 个位 | 优先级 |
| :---------------------------------------- | :--- | :--- | :--- | :--- | :----- |
| `h1`标签选择器                            | 0    | 0    | 0    | 1    | 0001   |
| `h1 + p::first-letter`标签+伪元素         | 0    | 0    | 0    | 3    | 0003   |
| `li > a[href*="en-US"] > .inline-warning` | 0    | 0    | 2    | 2    | 0022   |
| `#identifier`                             | 0    | 1    | 0    | 0    | 0100   |
| 内联样式                                  | 1    | 0    | 0    | 0    | 1000   |

**优先规则5：**属性后插有 **!important** 的属性拥有最高优先级。若同时插有 **!important**，则再利用规则 3、4 判断优先级。

```css
/*链接背景样式*/
/* specificity: 0101  id选择器 元素选择器*/
#outer a {
    background-color: red;
}
        
/* specificity: 0201 2个id选择器 元素选择器*/
#outer #inner a {
    background-color: blue;
}
/*连接文本颜色样式*/
/* specificity: 0104 一个id选择器 4个元素选择器 */
#outer div ul li a {
    color: yellow;
}

/* specificity: 0113 一个id选择器 一个类选择器 3个元素选择器 */
#outer div ul .nav a {
    color: white;
}
/*鼠标悬停时链接边框样式*/
/* specificity: 0024 2个伪类选择器 4个元素选择器 */
div div li:nth-child(2) a:hover {
    border: 10px solid black;
}

/* specificity: 0023 2个伪类选择器 3个元素选择器*/
div li:nth-child(2) a:hover {
    border: 10px dashed black;
}

/* specificity: 0033 一个类选择器 2个伪类选择器 3个元素选择器*/
div div .nav:nth-child(2) a:hover {
    border: 10px double black;
}

a {
    display: inline-block;
    line-height: 40px;
    font-size: 20px;
    text-decoration: none;
    text-align: center;
    width: 200px;
    margin-bottom: 10px;
}

ul {
    padding: 0;
}

li {
    list-style-type: none;
}    
```

```html
<div id="outer" class="container">
    <div id="inner" class="container">
        <ul>
            <li class="nav"><a href="#">One</a></li>
            <li class="nav"><a href="#">Two</a></li>
        </ul>
    </div>
</div>
```

## 6.CSS选择器

### 元素选择器

CSS元素选择器(也称为类型选择器)通过node节点名称匹配元素. 因此,在单独使用时,寻找特定类型的元素时,元素选择器都会匹配该文档中所有此类型的元素。

语法：`元素 {样式声明}`

### 类选择器

CSS类选择器会根据元素的类属性中的内容匹配元素。类属性被定义为一个以空格分隔的列表项，在这组类名中，必须有一项与类选择器中的类名完全匹配，此条样式声明才会生效。

语法：`.类名 {样式声明}`

```html
<h1 class="important">
This heading is very important.
</h1>

<p class="important warning">
This paragraph is very important.
</p>
```

#### 结合元素选择器

```css
p.important {color:red;}
h1.important {color:blue;}
```

#### 多类名选择器

```css
.important {font-weight:bold;}
.warning {font-style:italic;}
.important.warning {background:silver;}
```



### ID选择器

在一个HTML文档中,CSS ID 选择器会根据该元素的 ID 属性中的内容匹配元素,元素 ID 属性名必须与选择器中的 ID 属性名完全匹配，此条样式声明才会生效。

语法：`#id属性值 {样式声明}`

### 属性选择器

CSS **属性选择器**通过已经存在的属性名或属性值匹配元素。

```css
/*链接*/
a {
  color: blue;
}

/* 以 "#" 开头的页面本地链接 */
a[href^="#"] {
  background-color: gold;
}

/* 包含 "example" 的链接 */
a[href*="example"] {
  background-color: silver;
}

/* 包含 "insensitive" 的链接,不区分大小写 */
a[href*="insensitive" i] {
  color: cyan;
}

/* 包含 "cAsE" 的链接，区分大小写 */
a[href*="cAsE" s] {
  color: pink;
}

/* 以 ".org" 结尾的链接 */
a[href$=".org"] {
  color: red;
}
```

```css
/*多语言*/
/* 将所有包含 `lang` 属性的 <div> 元素的字重设为 bold */
div[lang] {
  font-weight: bold;
}

/* 将所有语言为美国英语的 <div> 元素的文本颜色设为蓝色 */
div[lang~="en-us"] {
  color: blue;
}

/* 将所有语言为葡萄牙语的 <div> 元素的文本颜色设为绿色 */
div[lang="pt"] {
  color: green;
}

/* 将所有语言为中文的 <div> 元素的文本颜色设为红色
   无论是简体中文（zh-CN）还是繁体中文（zh-TW） */
div[lang|="zh"] {
  color: red;
}

/* 将所有 `data-lang` 属性的值为 "zh-TW" 的 <div> 元素的文本颜色设为紫色 */
/* 备注: 和 JS 不同，CSS 可以在不使用双引号的情况下直接使用带连字符的属性名 */
div[data-lang="zh-TW"] {
  color: purple;
}

```

### 伪类

CSS **伪类** 是添加到选择器的关键字，指定要选择的元素的特殊状态。伪类连同伪元素一起，他们允许你不仅仅是根据文档 DOM 树中的内容对元素应用样式，而且还允许你根据诸如像导航历史这样的外部因素来应用样式（例如 [`:visited`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:visited)），同样的，可以根据内容的状态（例如在一些表单元素上的 [`:checked`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:checked)），或者鼠标的位置（例如 [`:hover`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:hover) 让你知道是否鼠标在一个元素上悬浮）来应用样式。[标准伪类索引]([伪类 - CSS（层叠样式表） | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes#标准伪类索引))

语法：

```css
selector:pseudo-class {
  property: value;
}
```

### 伪元素

伪元素是一个附加至选择器末的关键词，允许你对被选择元素的特定部分修改样式。一个选择器中只能使用一个伪元素。伪元素必须紧跟在语句中的简单选择器/基础选择器之后。

**注意：**按照规范，应该使用双冒号（`::`）而不是单个冒号（`:`），以便区分伪类和伪元素。但是，由于旧版本的 W3C 规范并未对此进行特别区分，因此目前绝大多数的浏览器都同时支持使用这两种方式来表示伪元素。[标准伪元素索引]([伪元素 - CSS（层叠样式表） | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements))

语法：

```css
selector::pseudo-element {
  property: value;
}
```

### 后代选择器

**后代组合器**（通常用单个空格（` `）字符表示）组合了两个选择器，如果第二个选择器匹配的元素具有与第一个选择器匹配的祖先（父母，父母的父母，父母的父母的父母等）元素，则它们将被选择。利用后代组合器的选择器称为后代选择器。

语法：

```css
selector1 selector2 {
  /* property declarations */
}
```

### 子代选择器

当使用  `>` 选择符分隔两个元素时,它只会匹配那些作为第一个元素的**直接后代(**子元素)的第二元素. 与之相比, 当两个元素由 [后代选择器 ](https://developer.mozilla.org/en-US/CSS/Descendant_selectors)相连时, 它表示匹配存在的所有由第一个元素作为祖先元素(但不一定是父元素)的第二个元素, 无论它在 DOM 中"跳跃" 多少次.

语法：`元素1 > 元素2 {样式声明 }`

```css
span { background-color: white; }
div > span {
  background-color: DodgerBlue;
}

```

```html
<div>
    <!--只有span 1 的背景是蓝色的-->
  <span>Span 1. In the div.
    <span>Span 2. In the span that's in the div.</span>
  </span>
</div>
<span>Span 3. Not in a div at all</span>

```

### 相邻兄弟选择器

**相邻兄弟选择器** (`+`) 介于两个选择器之间，当第二个元素*紧跟在*第一个元素之后，并且两个元素都是属于同一个父`元素`的子元素，则第二个元素将被选中。

语法：

```css
former_element + target_element { style properties }
```

```css
/* 图片后面紧跟着的段落将被选中 */
img + p {
  font-style: bold;
}
```

### 通用兄弟选择器

**兄弟选择符**，位置无须紧邻，只须同层级，`A~B` 选择`A`元素之后所有同层级`B`元素。

语法：

```css
former_element ~ target_element { style properties }
```

## 7.CSS背景与边框

| 背景样式           | 属性名称                                                     |
| ------------------ | :----------------------------------------------------------- |
| 背景颜色           | background-color                                             |
| 背景图片           | background-image<br />在单个属性值中指定多个`background-image`值，用逗号分隔每个值。 |
| 控制背景平铺       | background-repeat   <br />`no-repeat` — 不重复。<br /> `repeat-x` —水平重复。<br /> `repeat-y` —垂直重复。<br /> `repeat` — 在两个方向重复。 |
| 调整背景图像的大小 | background-size <br /> `cover` —浏览器将使图像足够大，使它完全覆盖了盒子区，同时仍然保持其高宽比。在这种情况下，有些图像可能会跳出盒子外 <br />`contain` — 浏览器将使图像的大小适合盒子内。在这种情况下，如果图像的长宽比与盒子的长宽比不同，则可能在图像的任何一边或顶部和底部出现间隙。 |
| 背景图像定位       | background-position                                          |
| 渐变背景           | [gradient]([CSS Gradient — Generator, Maker, and Background](https://cssgradient.io/)) |
| 边框圆角           | [`border-radius`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-radius) |

## 8.文本

### 书写模式

`writing-mode`的三个值分别是：

- `horizontal-tb`: 块流向从上至下。对应的文本方向是横向的。
- `vertical-rl`: 块流向从右向左。对应的文本方向是纵向的。
- `vertical-lr`: 块流向从左向右。对应的文本方向是纵向的。

当我们切换书写模式时，我们也在改变块和内联文本的方向。`horizontal-tb`书写模式下块的方向是从上到下的横向的，而 `vertical-rl`书写模式下块的方向是从右到左的纵向的。因此，块维度指的总是块在页面书写模式下的显示方向。而内联维度指的总是文本方向。 

这张图展示了在水平书写模式下的两种维度。

![image-20220121173857432](C:\Users\Sagittarius\AppData\Roaming\Typora\typora-user-images\image-20220121173857432.png)

这张图片展示了纵向书写模式下的两种维度。

![image-20220121173921630](C:\Users\Sagittarius\AppData\Roaming\Typora\typora-user-images\image-20220121173921630.png)

### [逻辑属性和逻辑值]([CSS 逻辑属性和值 - CSS：级联样式表|断续器 (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties))

当设置盒子width时，纵向文本可能会超过盒子范围。实际上，我们想要的是使宽和高随着书写模式一起变化。当处于纵向书写模式之下时，我们希望盒子可以向横向模式下一样得到拓宽。为了更容易实现这样的转变，CSS最近开发了一系列映射属性。这些属性用逻辑（**logical**）和相对变化（**flow relative**）代替了像宽`width`和高`height`一样的物理属性。

横向书写模式下，映射到`width`的属性被称作内联尺寸（[`inline-size`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/inline-size)）——内联维度的尺寸。而映射`height`的属性被称为块级尺寸（[`block-size`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/block-size)），这是块级维度的尺寸。

| 物理值 | 逻辑属性值   |
| ------ | ------------ |
| top    | block-start  |
| bottom | block-end    |
| left   | inline-start |
| right  | inline-end   |

### 溢出

溢出是指盒子的大小与文本大小无法匹配，导致文本超出盒子显示，使页面变得混乱。

#### overflow属性

[`overflow`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow)属性是你控制一个元素溢出的方式，它告诉浏览器你想怎样处理溢出。`overflow`的默认值为`visible`，这就是我们的内容溢出的时候，我们在默认情况下看到它们的原因。

在你的盒子上设置`overflow: hidden`，在内容溢出的时候把它裁剪掉。这就会像它表面上所显示的那样作用——隐藏掉溢出。这可能会很自然地让东西消失掉，所以你只应该在判断隐藏内容不会引起问题的时候这样做。

如果你用了`overflow: scroll`，那么你的浏览器总会显示滚动条，即使没有足够多引起溢出的内容。你可能会需要这样的样式，它避免了滚动条在内容变化的时候出现和消失。可以使用[`overflow-y`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow-y)属性，设置`overflow-y: scroll`来仅在`y`轴方向滚动，设置`overflow-x: scroll`来仅在 `x`轴方向滚动。

## 9.调整大小

1. 原始尺寸：一副图像的长和宽由这个图像文件自身确定。这个尺寸就是固有尺寸。如果你把图片放置在网页中的时候没有在`<img>` 标签或CSS中设置其尺寸，那么将使用其固有尺寸显示。
2. 设置具体的尺寸：当给元素指定尺寸（然后其内容需要适合该尺寸）时，我们将其称为**外部尺寸**。
3. 百分比尺寸：对于一个处于另外一个容器当中的盒子，如果你给予了子盒子一个百分数作为宽度，那么它指的是父容器宽度的百分数。
4. min和max尺寸：[`max-width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/max-width)的常见用法为，在没有足够空间以原有宽度展示图像时，让图像缩小，同时确保它们不会比这一宽度大。[`min-height`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/min-height)属性用于**至少**有个确定的高度的包含了变化容量的内容的盒子。
5. 视口单位：`1vh`等于视口高度的1%，`1vw`则为视口宽度的1%。

## 10.[样式化表格]([样式化表格 - 学习 Web 开发 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Styling_tables))

- 使您的表格标记尽可能简单，并且保持灵活性，例如使用百分比，这样设计就更有响应性。

- 使用 [`table-layout`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/table-layout)`: fixed` 创建更可控的表布局，可以通过在标题[`width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/width)中设置[`width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/width)来轻松设置列的宽度。

- 使用 [`border-collapse`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-collapse)`: collapse` 使表元素边框合并，生成一个更整洁、更易于控制的外观。

- 使用, 和 将表格分割成逻辑块，并提供额外的应用CSS的地方，因此如果需要的话，可以更容易地将样式层叠在一起。

- 使用斑马线来让其他行更容易阅读。通过改变不同数据行的颜色，使表中交替行不同的数据行可以更容易地进行解析和读取。[`nth-child`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-child)选择器用于选择特定的子元素。它也可以用一个公式作为参数，来选择一个元素序列。公式`2n-1`会选择所有奇数的子元素(1、3、5等)，而公式`2n`会选择所有偶数的子元素(2、4、6等等)。我们在代码中使用了`odd`和`even`的关键字，这与前面提到的公式作用完全相同。

  ```css
  tbody tr:nth-child(odd) {
    background-color: #ff33cc;
  }
  
  tbody tr:nth-child(even) {
    background-color: #e495e4;
  }
  
  tbody tr {
    background-image: url(noise.png);
  }
  
  table {
    background-color: #ff33cc;
  }
  ```

- 使用 [`text-align`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-align)直线对齐您的[`<th>` ]((https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/th))和 `<td>`文本，使内容更整洁、更易于跟随。

## 11.样式化文字

### [基础文字与字体样式化]([基本文本和字体样式 - 学习 Web 开发 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Styling_text/Fundamentals))

用于样式文本的 CSS 属性通常可以分为两类：

- **字体样式**: 作用于字体的属性，会直接应用到文本中，比如使用哪种字体，字体的大小是怎样的，字体是粗体还是斜体，等等。
- **文本布局风格**: 作用于文本的间距以及其他布局功能的属性，比如，允许操纵行与字之间的空间，以及在内容框中，文本如何对齐

#### 默认字体

CSS 定义了 5 个常用的字体名称: `serif, ``sans-serif, ``monospace`, `cursive,`和 `fantasy. `这些都是非常通用的，当使用这些通用名称时，使用的字体完全取决于每个浏览器，而且它们所运行的每个操作系统也会有所不同。这是一种糟糕的情况，浏览器会尽力提供一个看上去合适的字体。 `serif`, `sans-serif` 和 `monospace` 是比较好预测的，默认的情况应该比较合理，另一方面，`cursive` 和 `fantasy` 是不太好预测的，我们建议使用它们的时候应该稍微注意一些，多多测试。

五个名称定义如下：

| 名称         | 定义                                                         | 示例                |
| :----------- | :----------------------------------------------------------- | :------------------ |
| `serif`      | 有衬线的字体 （衬线一词是指字体笔画尾端的小装饰，存在于某些印刷体字体中） | My big red elephant |
| `sans-serif` | 没有衬线的字体。                                             | My big red elephant |
| `monospace`  | 每个字符具有相同宽度的字体，通常用于代码列表。               | My big red elephant |
| `cursive`    | 用于模拟笔迹的字体，具有流动的连接笔画。                     | My big red elephant |
| `fantasy`    | 用来装饰的字体                                               | My big red elephant |

#### 字体栈

由于你无法保证你想在你的网页上使用的字体的可用性 (甚至一个网络字体可能由于某些原因而出错), 你可以提供一个**字体栈** (**font stack**)，这样的话，浏览器就有多种字体可以选择了。只需包含一个`font-family属性`，其值由几个用逗号分离的字体名称组成。比如：

```
p {
  font-family: "Trebuchet MS", Verdana, sans-serif;
}
```

在这种情况下，浏览器从列表的第一个开始，然后查看在当前机器中，这个字体是否可用。如果可用，就把这个字体应用到选中的元素中。如果不可用，它就移到列表中的下一个字体，然后再检查。

#### 字体样式、字体粗细、文本转换和文本装饰

CSS 提供了 4 种常用的属性来改变文本的样子：

- `font-style`: 用来打开和关闭文本 italic (斜体)。 可能的值如下 (你很少会用到这个属性，除非你因为一些理由想将斜体文字关闭斜体状态)：
  - `normal`: 将文本设置为普通字体 (将存在的斜体关闭)
  - `italic`: 如果当前字体的斜体版本可用，那么文本设置为斜体版本；如果不可用，那么会利用 oblique 状态来模拟 italics。
  - `oblique`: 将文本设置为斜体字体的模拟版本，也就是将普通文本倾斜的样式应用到文本中。
- `font-weight`: 设置文字的粗体大小。这里有很多值可选 (比如light/normal/bold/extrabold/black, 等等), 不过事实上你很少会用到 `normal` 和 `bold`以外的值：
  - `normal`, `bold`: 普通或者**加粗**的字体粗细
  - `lighter`, `bolder`: 将当前元素的粗体设置为比其父元素粗体更细或更粗一步。`100`–`900`: 数值粗体值，如果需要，可提供比上述关键字更精细的粒度控制。
- `text-transform`: 允许你设置要转换的字体。值包括：
  - `none`: 防止任何转型。
  - `uppercase`: 将所有文本转为大写。
  - `lowercase`: 将所有文本转为小写。
  - `capitalize`: 转换所有单词让其首字母大写。
  - `full-width`: 将所有字形转换成全角，即固定宽度的正方形，类似于等宽字体，允许拉丁字符和亚洲语言字形（如中文，日文，韩文）对齐。
- `text-decoration`: 设置/取消字体上的文本装饰 (你将主要使用此方法在设置链接时取消设置链接上的默认下划线。) 可用值为：
  - `none`: 取消已经存在的任何文本装饰。
  - `underline`: 文本下划线.
  - `overline`: 文本上划线
  - `line-through`: 穿过文本的线 

#### 文字阴影

`<test-shadow>`属性需要4个值：

1. 阴影与原始文本的水平偏移，可以使用大多数的 CSS 单位 [length and size units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#length_and_size), 但是 px 是比较合适的。这个值必须指定。
2. 阴影与原始文本的垂直偏移;效果基本上就像水平偏移，除了它向上/向下移动阴影，而不是左/右。这个值必须指定。
3. 模糊半径 - 更高的值意味着阴影分散得更广泛。如果不包含此值，则默认为0，这意味着没有模糊。可以使用大多数的 CSS 单位 [length and size units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#length_and_size).
4. 阴影的基础颜色，可以使用大多数的 CSS 颜色单位 [CSS color unit](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#colors). 如果没有指定，默认为 `black`.

### 文本布局

#### 文本对齐

 [`text-align`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-align) 属性用来控制文本如何和它所在的内容盒子对齐。可用值如下，并且在与常规文字处理器应用程序中的工作方式几乎相同：

- `left`: 左对齐文本。
- `right`: 右对齐文本。
- `center`: 居中文字
- `justify`: 使文本展开，改变单词之间的差距，使所有文本行的宽度相同。你需要仔细使用，它可以看起来很可怕。特别是当应用于其中有很多长单词的段落时。如果你要使用这个，你也应该考虑一起使用别的东西，比如 [`hyphens`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/hyphens)，打破一些更长的词语。
- 文本水平居中： `text-align：center`
- 文本垂直居中：`text-height：height`
- 文本首行缩进：`text-intend:2rem`

#### 行高

 [`line-height`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/line-height) 属性设置文本每行之间的高，可以接受大多数单位 [length and size units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#length_and_size)，不过也可以设置一个无单位的值，作为乘数，通常这种是比较好的做法。无单位的值乘以 [`font-size`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-size) 来获得 `line-height`。当行与行之间拉开空间，正文文本通常看起来更好更容易阅读。推荐的行高大约是 1.5–2 (双倍间距。) 所以要把我们的文本行高设置为字体高度的1.5倍，你可以使用这个:

```css
line-height: 1.5;
```

#### 字母和单词间距

[`letter-spacing`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/letter-spacing) 和 [`word-spacing`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/word-spacing) 属性允许你设置你的文本中的字母与字母之间的间距、或是单词与单词之间的间距。你不会经常使用它们，但是可能可以通过它们，来获得一个特定的外观，或者让较为密集的文字更加可读。

### 样式列表

#### [处理列表间距]([样式列表 - 学习 Web 开发 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Styling_text/Styling_lists#处理列表间距))

#### 列表特定样式

- [`list-style-type`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/list-style-type) ：设置用于列表的项目符号的类型，例如无序列表的方形或圆形项目符号，或有序列表的数字，字母或罗马数字。
- [`list-style-position`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/list-style-position) ：设置在每个项目开始之前，项目符号是出现在列表项内，还是出现在其外。
- [`list-style-image`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/list-style-image) ：允许您为项目符号使用自定义图片，而不是简单的方形或圆形。

#### 管理列表计数

| 属性       | 作用                      |
| ---------- | ------------------------- |
| `start`    | 允许从1以外的数字开始计数 |
| `reversed` | 启动列表倒计数            |
| `value`    | 允许设置列表项指定数值    |

### 样式化链接

#### 链接状态

链接存在时处于不同的状态，每一个状态都可以用对应的 [伪类](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors#pseudo-classes) 来应用样式:

- **Link (没有访问过的)**: 这是链接的默认状态，当它没有处在其他状态的时候，它可以使用[`:link`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:link) 伪类来应用样式。
- **Visited**: 这个链接已经被访问过了(存在于浏览器的历史纪录), 它可以使用 [`:visited`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:visited) 伪类来应用样式。
- **Hover**: 当用户的鼠标光标刚好停留在这个链接，它可以使用 [`:hover`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:hover) 伪类来应用样式。
- **Focus**: 一个链接当它被选中的时候 (比如通过键盘的 Tab 移动到这个链接的时候，或者使用编程的方法来选中这个链接 [`HTMLElement.focus()` (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus)) 它可以使用 [`:focus`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:focus) 伪类来应用样式。
- **Active**: 一个链接当它被激活的时候 (比如被点击的时候)，它可以使用 [`:active`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:active) 伪类来应用样式。

```css
a {
  outline: none;
  text-decoration: none;
  padding: 2px 1px 0;
}

a:link {
  color: #265301;
}

a:visited {
  color: #437A16;
}

a:focus {
  border-bottom: 1px solid;
  background: #BAE498;
}

a:hover {
  border-bottom: 1px solid;
  background: #CDFEAA;
}

a:active {
  background: #265301;
  color: #CDFEAA;
}

/* 为链接添加图片*/
a[href*="http"] {
  background: url('https://mdn.mozillademos.org/files/12982/external-link-52.png') no-repeat 100% 0;
  background-size: 16px 16px;
  padding-right: 19px;
}
```

- 第一个规则使用了 `a` 选择器，取消了默认的文本下划线和链接被选中（focus）时的轮廓 （outline）（不同浏览器的默认行为可能不同），并为每个链接添加了少量的内边距（padding），所有这一切将在之后变得明确。

- 接着，我们使用`a:link`和`a:visited`选择器来设置未访问（unvisited）链接和访问过（visited）的链接的一点颜色上的变化，然后就能分辨开来了。

- 下面两条规则使用 `a:focus` 和 `a:hover`来设置选中（focus）和悬停（hover）的链接为不同的背景颜色，再加上一个下划线，使链接更加突出。这里有两点需要注意：

  - 下划线是使用 [`border-bottom`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-bottom) 创造的, 而不是 [`text-decoration`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration)，有一些人喜欢这样，因为前者比后者有更好的样式选项， 并且绘制的位置会稍微低一点，所以不会穿过字母 (比如 字母 g 和 y 底部).
  - [`border-bottom`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-bottom)的值被设置为`1px solid`，没有指定颜色。这样做可以使边框采用和元素文本一样的颜色，这在这样的情况下是很有用的，因为链接的每种状态下，文本是不同的颜色。

- 最后, `a:active` 用来给链接一个不同的配色方案，当链接被激活 (activated) 时，让链接被激活的时候更加明显。

- 我们设置了我们想要插入的图片的路径，指定了 `no-repeat` ，这样我们只插入了一次图片，然后指定位置为100%，使其出现在内容的右边，距离上方是0px。

  我们也使用 [`background-size`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-size) 来指定要显示的背景图像的大小，为了满足响应式网站设计的需要，在图标更大，需要再重新调整它的大小的时候，这样做是很有帮助的。但是，这仅适用于IE 9及更高版本。所以你如果需要支持那些老的浏览器，只能调整图像的原始大小，然后插入。

  最后，我们在链接上设置 [`padding-right`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding-right) ，为背景图片留出空间，这样就不会让它和文本重叠了。“http”文本应该只出现在外部链接上，为此我们可以使用一个[属性选择器](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors#attribute_selectors)——`a[href*="http"]` ——选中 [`<a>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a) 元素，但是这样只会选中那些拥有 [`href`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#attr-href) 属性，且属性的值包含 "http" 的`<a>` 元素。

### Web字体

浏览器支持不同的字体格式，因此您需要多种字体格式以获得良好的跨浏览器支持。例如,大多数现代浏览器都支持WOFF / WOFF2(Web Open Font Format versions 1 and 2，Web开放字体格式版本1和2)，它是最有效的格式，但是旧版本IE只支持EOT (Embedded Open Type，嵌入式开放类型)的字体,你可能需要包括一个SVG版本的字体支持旧版本的iPhone和Android浏览器。我们将向您展示如何生成所需的代码。

```css
@font-face {
	font-family: 'YourWebFontName';
	src: url('YourWebFontName.eot'); /* IE9 Compat Modes */
	src: url('YourWebFontName.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
             url('YourWebFontName.woff') format('woff'), /* Modern Browsers */
             url('YourWebFontName.ttf')  format('truetype'), /* Safari, Android, iOS */
             url('YourWebFontName.svg#YourWebFontName') format('svg'); /* Legacy iOS */
   }
```

要在演示中实现这些字体，请遵循以下步骤：

1. 将解压缩的目录重命名为简易的目录，比如`fonts`
2. 打开 `stylesheet.css` 文件，把包含在你的网页中的 `@font-face`块复制到你的 `web-font-start.css` 文件—— 你需要把它们放在最上面，在你的CSS之前，因为字体需要导入才能在你的网站上使用。
3. 每个`url()`函数指向一个我们想要导入到我们的CSS中的字体文件——我们需要确保文件的路径是正确的，因此，在每个路径的开头添加`fonts/` （必要时进行调整）。
4. 现在，您可以在字体栈中使用这些字体，就像任何web安全或默认的系统字体一样。

## 12.CSS排版

### 1.CSS布局基本知识

### 正常布局流

正常布局流(normal flow)是指在不对页面进行任何布局控制时，浏览器默认的HTML布局方式。HTML元素完全按照源码中出现的先后次序显示——第一个段落、无序列表、第二个段落。

出现在另一个元素下面的元素被描述为**块**元素，与出现在另一个元素旁边的**内联元素**不同，内联元素就像段落中的单个单词一样。

正常布局流（在布局介绍里提到过）是一套在浏览器视口内放置、组织元素的系统。默认的，块级元素按照基于其父元素的[书写顺序](https://developer.mozilla.org/zh-CN/docs/Web/CSS/writing-mode)(*默认值:* horizontal-tb)的*块流动方向(block flow direction)*放置 --- 每个块级元素会在上一个元素下面另起一行，它们会被设置好的margin 分隔。在英语，或者其他水平书写、自上而下模式里，块级元素是垂直组织的。

内联元素的表现有所不同 --- 它们不会另起一行；只要在其父级块级元素的宽度内有足够的空间，它们与其他内联元素、相邻的文本内容（或者被包裹的）被安排在同一行。如果空间不够，溢出的文本或元素将移到新的一行。

如果两个相邻的元素都设置了margin 并且两个margin有重叠，那么更大的设置会被保留，小的则会消失 

注意：块元素内容的布局方向被描述为**块方向**。块方向在英语等具有水平**书写模式**(`writing mode`)的语言中垂直运行。它可以在任何垂直书写模式的语言中水平运行。对应的**内联方向**是内联内容（如句子）的运行方向。

下列布局技术会覆盖默认的布局行为：

-  **[`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display)** 属性 — 标准的value,比如`block`, `inline` 或者 `inline-block` 元素在正常布局流中的表现形式 (见 [Types of CSS boxes](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model#Types_of_CSS_boxes)). 接着是全新的布局方式，通过设置`display`的值, 比如 [CSS Grid](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids) 和 [Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox).
- **浮动**——应用 **[`float`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/float)** 值，诸如 `left` 能够让块级元素互相并排成一行，而不是一个堆叠在另一个上面。
- **[`position`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)** 属性 — 允许你精准设置盒子中的盒子的位置，正常布局流中，默认为 `static` ，使用其它值会引起元素不同的布局方式，例如将元素固定到浏览器视口的左上角。
- **表格布局**— 表格的布局方式可以用在非表格内容上，可以使用`display: table`和相关属性在非表元素上使用。
- **多列布局**— 这个 [Multi-column layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Columns) 属性 可以让块按列布局，比如报纸的内容就是一列一列排布的。

### display属性

此属性允许我们更改默认的显示方式。正常流中的所有内容都有一个`display`的值，用作元素的默认行为方式。例如，英文段落显示在一个段落的下面，这是因为它们的样式是`display:block`。如果在段落中的某个文本周围创建链接，则该链接将与文本的其余部分保持内联，并且不会打断到新行。这是因为[`<a>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a)元素默认为`display:inline`。

可以更改此默认显示行为。例如，[`<li>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/li)元素默认为`display:block`，这意味着在我们的英文文档中，列表项显示为一个在另一个之下。如果我们将显示值更改为`inline`，它们现在将显示在彼此旁边。

### [弹性盒子（flexbox）](https://www.runoob.com/css3/css3-flexbox.html)

Flexbox 是CSS 弹性盒子布局模块（[Flexible Box Layout](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout) Module）的缩写，它被专门设计出来用于创建横向或是纵向的一维页面布局。要使用flexbox，你只需要在想要进行flex布局的父元素上应用`display: flex` ，所有直接子元素都将会按照flex进行布局。

`flex-direction` 属性指定了弹性子元素在父容器中的位置。

- row：横向从左到右排列（左对齐），默认的排列方式。
- row-reverse：反转横向排列（右对齐，从后往前排，最后一项排在最前面。
- column：纵向排列。
- column-reverse：反转纵向排列，从后往前排，最后一项排在最上面。

内容对齐（`justify-content`）属性应用在弹性容器上，把弹性项沿着弹性容器的主轴线（main axis）对齐。

- flex-start：

  弹性项目向行头紧挨着填充。这个是默认值。第一个弹性项的main-start外边距边线被放置在该行的main-start边线，而后续弹性项依次平齐摆放。

- flex-end：

  弹性项目向行尾紧挨着填充。第一个弹性项的main-end外边距边线被放置在该行的main-end边线，而后续弹性项依次平齐摆放。

- center：

  弹性项目居中紧挨着填充。（如果剩余的自由空间是负的，则弹性项目将在两个方向上同时溢出）。

- space-between：

  弹性项目平均分布在该行上。如果剩余空间为负或者只有一个弹性项，则该值等同于flex-start。否则，第1个弹性项的外边距和行的main-start边线对齐，而最后1个弹性项的外边距和行的main-end边线对齐，然后剩余的弹性项分布在该行上，相邻项目的间隔相等。

- space-around：

  弹性项目平均分布在该行上，两边留有一半的间隔空间。如果剩余空间为负或者只有一个弹性项，则该值等同于center。否则，弹性项目沿该行分布，且彼此间隔相等（比如是20px），同时首尾两边和弹性容器之间留有一半的间隔（1/2*20px=10px）。

  效果图如下：

  ![img](https://www.runoob.com/wp-content/uploads/2016/04/2259AD60-BD56-4865-8E35-472CEABF88B2.jpg)

`align-items` 设置或检索弹性盒子元素在侧轴（纵轴）方向上的对齐方式。

- flex-start：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界。
- flex-end：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界。
- center：弹性盒子元素在该行的侧轴（纵轴）上居中放置。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）。
- baseline：如弹性盒子元素的行内轴与侧轴为同一条，则该值与'flex-start'等效。其它情况下，该值将参与基线对齐。
- stretch：如果指定侧轴大小的属性值为'auto'，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照'min/max-width/height'属性的限制。

`flex-wrap` 属性用于指定弹性盒子的子元素换行方式。

- nowrap - 默认， 弹性容器为单行。该情况下弹性子项可能会溢出容器。
- wrap - 弹性容器为多行。该情况下弹性子项溢出的部分会被放置到新行，子项内部会发生断行
- wrap-reverse -反转 wrap 排列。

`order`用于flex项排序：

- 所有 flex 项默认的 [`order`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/order) 值是 0。
- order 值大的 flex 项比 order 值小的在显示顺序中更靠后。
- 相同 order 值的 flex 项按源顺序显示。所以假如你有四个元素，其 order 值分别是2，1，1和0，那么它们的显示顺序就分别是第四，第二，第三，和第一。
- 第三个元素显示在第二个后面是因为它们的 order 值一样，且第三个元素在源顺序中排在第二个后面。
- 可以给 order 设置负值使它们比值为 0 的元素排得更前面。

### grid布局

Flexbox用于设计横向或纵向的布局，而Grid布局则被设计用于同时在两个维度上把元素按行和列排列整齐。同flex一样，你可以通过指定display的值来转到grid布局：`display: grid`。

- `grid-template-columns`：给定义的网格添加列（显式网格）

- `fr`：表示了可用空间的一个比例

- `grid-column-gap`设置列间隙，`grid-raw-gap`设置行间隙，`grid-gap`可同时设置。间隙距离可以用任何长度单位包括百分比来表示，但不能使用`fr`单位。

- `repeat`来重复构建具有某些宽度配置的某些列

- [`grid-auto-rows`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-auto-rows)和[`grid-auto-columns`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-auto-columns)属性手动设定隐式网格的大小，简单来说，隐式网格就是为了放显式网格放不下的元素，浏览器根据已经定义的显式网格自动生成的网格部分。

- [`minmax`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/minmax()) 函数为一个行/列的尺寸设置了取值范围。比如设定为 `minmax(100px, auto)`，那么尺寸就至少为100像素，并且如果内容尺寸大于100像素则会根据内容自动调整。

- `grid-column` CSS属性是 [`grid-column-start` (en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start) 和 [`grid-column-end` (en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end) 的简写属性，用于指定网格项目的大小和位置{ 通过为它的网格位置贡献线条，跨度或不添加任何内容（自动），从而指定其 grid area。

  语法:如果给出两个`<grid-line>`值，它们之间用“ /”分隔。 将`grid-column-start`的正手设置为斜线之前的值，并将`grid-column-end`的正手设置为斜线之后的值。

- `grid-template-areas` CSS 属性是网格区域 [grid areas](https://developer.mozilla.org/zh-CN/docs/Glossary/Grid_Areas) 在CSS中的特定命名。

  `grid-template-areas`属性的使用规则如下：

  - 你需要填满网格的每个格子
  - 对于某个横跨多个格子的元素，重复写上那个元素`grid-area`属性定义的区域名字
  - 所有名字只能出现在一个连续的区域，不能在不同的位置出现
  - 一个连续的区域必须是一个矩形
  - 使用`.`符号，让一个格子留空

### 浮动

`float` CSS属性指定一个元素应沿其容器的左侧或右侧放置，允许文本和内联元素环绕它。该元素从网页的正常流动(文档流)中移除，尽管仍然保持部分的流动性（与[绝对定位](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position#absolute_positioning)相反）。

`float` 属性的值被指定为单一的关键字，值从下面的值列表中选择。

#### 值

- `left`

  表明元素必须浮动在其所在的块容器左侧的关键字。

- `right`

  表明元素必须浮动在其所在的块容器右侧的关键字。

- `none`

  表明元素不进行浮动的关键字。

- `inline-start`

  关键字，表明元素必须浮动在其所在块容器的开始一侧，在ltr脚本中是左侧，在rtl脚本中是右侧。

- `inline-end`

  关键字，表明元素必须浮动在其所在块容器的结束一侧，在ltr脚本中是右侧，在rtl脚本中是左侧。

#### 语法

```css
/* Keyword values */
float: left;
float: right;
float: none;
float: inline-start;
float: inline-end;

/* Global values */
float: inherit;
float: initial;
float: unset;

/* 清除浮动*/
clear:right left both;
```

### 定位

- 静态定位 `static`：是每个元素获取的默认值——它只是意味着“将元素放入它在文档布局流中的正常位置。
- 相对位置 `relative` ：可通过 `top`、`bottom`、`left`、`right`改变块元素在文档中的布局，块元素移动方向与命令方向相反
- 绝对定位 `absolute`：绝对定位的元素不再存在于正常文档布局流中。相反，它坐在它自己的层独立于一切。
- `z-index`：改变堆叠关系，网页也有一个z轴：一条从屏幕表面到你的脸（或者在屏幕前面你喜欢的任何其他东西）的虚线。[`z-index`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index) 值影响定位元素位于该轴上的位置；正值将它们移动到堆栈上方，负值将它们向下移动到堆栈中。默认情况下，定位的元素都具有z-index为auto，实际上为0。
- 固定定位 `fixed`：这与绝对定位的工作方式完全相同，只有一个主要区别：绝对定位固定元素是相对于 [`html`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/html) 元素或其最近的定位祖先，而固定定位固定元素则是相对于浏览器视口本身。
- 还有一个可用的位置值称为 position: sticky，比起其他位置值要新一些。它基本上是相对位置和固定位置的混合体，它允许被定位的元素表现得像相对定位一样，直到它滚动到某个阈值点（例如，从视口顶部起10像素）为止，此后它就变得固定了。例如，它可用于使导航栏随页面滚动直到特定点，然后粘贴在页面顶部。

### 多列定位

- `column-count`：创建指定数量的列。

- `column-width`：浏览器将按照你指定的宽度尽可能多的创建列；任何剩余的空间之后会被现有的列平分。

- 使用 [`column-gap`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/column-gap) 改变列间间隙。

- 用 [`column-rule`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/column-rule) 在列间加入一条分割线。

- `break-inside: avoid;`：控制 multicol 和多页媒体中的内容拆分、折断。

  ```css
  break-inside: auto;
  break-inside: avoid;
  break-inside: avoid-page;
  break-inside: avoid-column;
  break-inside: avoid-region;
  
  ```

  在每一个元素的边界，都可能生成一个中断点，这些中断点由三个属性来定义。[`break-after`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/break-after) 属性定义之前元素的中断点，[`break-before`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/break-before) 定义了之后元素的中断点， **`break-inside`** 定义了当前元素的中断点。

  如果需要定义一个中断点，必须遵循以下原则:

  1. 如果这三个中断属性的值有一个是*强制中断值*（这些强制中断值包括了 `always`, `left`, `right`, `page`, `column`, `region`），那么这个属性的值就具有优先权。如果其中一个以上是这样的断点，则使用流中最新出现的元素的值。因此，`break-before`值优先于`break-after`值，而后者又优先于`break-inside`值。
  2. 如果三个相关值中的任何一个是避免中断值, 相关值包括 `avoid`, `avoid-page`, `avoid-region`, `avoid-column`, 则在该点上不应用此类中断。

### 媒体查询

媒体查询由以下部分组成：

- 一个媒体类型，告诉浏览器这段代码是用在什么类型的媒体上的（例如印刷品或者屏幕）；

- 一个媒体表达式，是一个被包含的CSS生效所需的规则或者测试；

- 一组CSS规则，会在测试通过且媒体类型正确的时候应用。

- ```css
  @media media-type and (media-feature-rule) {
    /* CSS rules go here */
  }
  ```

#### 多媒体类型

| 值     | 描述                             |
| :----- | :------------------------------- |
| all    | 用于所有多媒体类型设备           |
| print  | 用于打印机                       |
| screen | 用于电脑屏幕，平板，智能手机等。 |
| speech | 用于屏幕阅读器                   |

#### 媒体特征规则

| 类型         | 值                                  |
| ------------ | ----------------------------------- |
| 宽和高       | min-width 、max-width               |
| 朝向         | portrait（竖向）、landscape（横向） |
| 使用指点设备 | hover                               |

## 13.CSS属性

### cursor属性

cursor属性定义了鼠标指针放在一个元素边界范围内时所用的光标形状。

#### 属性值

| 值        | 描述                                                         |
| :-------- | :----------------------------------------------------------- |
| *url*     | 需使用的自定义光标的 URL。注释：请在此列表的末端始终定义一种普通的光标，以防没有由 URL 定义的可用光标。 |
| default   | 默认光标（通常是一个箭头）                                   |
| auto      | 默认。浏览器设置的光标。                                     |
| crosshair | 光标呈现为十字线。                                           |
| pointer   | 光标呈现为指示链接的指针（一只手）                           |
| move      | 此光标指示某对象可被移动。                                   |
| text      | 此光标指示文本。                                             |
| wait      | 此光标指示程序正忙（通常是一只表或沙漏）。                   |
| help      | 此光标指示可用的帮助（通常是一个问号或一个气球）。           |

### background-position属性

background-position属性设置背景图像的起始位置。

#### 属性值

| 值                                                           | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| left top 、left center、 left bottom、 right top 、right center 、right bottom、 center top、 center center、 center bottom | 如果仅指定一个关键字，其他值将会是"center"                   |
| *x% y%*                                                      | 第一个值是水平位置，第二个值是垂直。左上角是0％0％。右下角是100％100％。如果仅指定了一个值，其他值将是50％。 。默认值为：0％0％ |
| *xpos ypos*                                                  | 第一个值是水平位置，第二个值是垂直。左上角是0。单位可以是像素（0px0px）或任何其他 [CSS单位](https://www.runoob.com/try/css-units.html)。如果仅指定了一个值，其他值将是50％。你可以混合使用％和positions |
| inherit                                                      | 指定background-position属性设置应该从父元素继承              |

### border-collapse属性

为表格设置合并边框模型

#### 属性值

| 值       | 描述                                                         |
| :------- | :----------------------------------------------------------- |
| separate | 默认值。边框会被分开。不会忽略 border-spacing 和 empty-cells 属性。 |
| collapse | 如果可能，边框会合并为一个单一的边框。会忽略 border-spacing 和 empty-cells 属性。 |
| inherit  | 规定应该从父元素继承 border-collapse 属性的值。              |

### display属性

display 属性规定元素应该生成的框的类型。

#### 属性值

| 值           | 描述                                                 |
| :----------- | :--------------------------------------------------- |
| none         | 此元素不会被显示。                                   |
| block        | 此元素将显示为块级元素，此元素前后会带有换行符。     |
| inline       | 默认。此元素会被显示为内联元素，元素前后没有换行符。 |
| inline-block | 行内块元素。（CSS2.1 新增的值）                      |
| inherit      | 规定应该从父元素继承 display 属性的值。              |

### input的type属性

type 属性规定 input 元素的类型。

#### 属性值

| 值       | 描述                                                         |
| :------- | :----------------------------------------------------------- |
| button   | 定义可点击按钮（多数情况下，用于通过 JavaScript 启动脚本）。 |
| checkbox | 定义复选框。                                                 |
| file     | 定义输入字段和 "浏览"按钮，供文件上传。                      |
| hidden   | 定义隐藏的输入字段。                                         |
| image    | 定义图像形式的提交按钮。                                     |
| password | 定义密码字段。该字段中的字符被掩码。                         |
| radio    | 定义单选按钮。                                               |
| reset    | 定义重置按钮。重置按钮会清除表单中的所有数据。               |
| submit   | 定义提交按钮。提交按钮会把表单数据发送到服务器。             |
| text     | 定义单行的输入字段，用户可在其中输入文本。默认宽度为 20 个字符。 |

### input的placeholder属性

#### 定义和用法

placeholder 属性提供可描述输入字段预期值的提示信息（hint）。

该提示会在输入字段为空时显示，并会在字段获得焦点时消失。

### position属性

position 属性规定元素的定位类型。

#### 说明

这个属性定义建立元素布局所用的定位机制。任何元素都可以定位，不过绝对或固定元素会生成一个块级框，而不论该元素本身是什么类型。相对定位元素会相对于它在正常流中的默认位置偏移。

#### 属性值

| 值       | 描述                                                         |
| :------- | :----------------------------------------------------------- |
| absolute | 生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。 |
| fixed    | 生成绝对定位的元素，相对于浏览器窗口进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。 |
| relative | 生成相对定位的元素，相对于其正常位置进行定位。因此，"left:20" 会向元素的 LEFT 位置添加 20 像素。 |
| static   | 默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。 |
| inherit  | 规定应该从父元素继承 position 属性的值。                     |

### transform属性

#### 说明

Transform字面上就是变形，改变的意思。在[CSS3](https://so.csdn.net/so/search?q=CSS3&spm=1001.2101.3001.7020)中transform主要包括以下几种：旋转rotate、扭曲skew、缩放scale和移动translate以及矩阵变形matrix。

#### 属性值

| 值                       | 描述             |
| :----------------------- | :--------------- |
| none                     | 定义不进行转换。 |
| translate(*x*,*y*)       | 定义 2D 移动。   |
| translate3d(*x*,*y*,*z*) | 定义 3D 移动。   |
| translateX(*x*)          | 沿水平方向移动   |
| translateY(*y*)          | 沿垂直方向移动   |
| translateZ(*z*)          | 沿z轴方向移动    |

### transition属性

#### 说明

transition 属性是一个简写属性，用于设置四个过渡属性：

- transition-property
- transition-duration
- transition-timing-function
- transition-delay

#### 属性值

| 值                         | 描述                                |
| :------------------------- | :---------------------------------- |
| transition-property        | 规定设置过渡效果的 CSS 属性的名称。 |
| transition-duration        | 规定完成过渡效果需要多少秒或毫秒。  |
| transition-timing-function | 规定速度效果的速度曲线。            |
| transition-delay           | 定义过渡效果何时开始。              |
