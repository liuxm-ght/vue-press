
[Sentry搭建](https://blog.csdn.net/nimei31/article/details/80864370)

官网推荐的Sentry搭建方式：一种docker的，一种python的

[Sentry官网](https://sentry.io/organizations/sentry-yy/projects/)


#### 了解Sentry上报流程

> 首先我们看看流行的异常监控系统怎么上报的

1. 在main.js初始化Sentry，监听异常并且上报

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/10d6321b33f34d098cd473842cb4ad25~tplv-k3u1fbpfcp-watermark.image?)

2. 使用plugin（webpack-sentry-plugin 或者 @sentry/webpack-plugin） 上传sourcemap文件

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a77977c1bfbb49c09202c2814c9b97f2~tplv-k3u1fbpfcp-watermark.image?)


==然后就开始动实现一下啦==



### 重点解决问题：

- 上传sourcemap到服务器
- 如何利用sourcemap还原源码错误位置


### 搭建的步骤：
1. 收集前端异常（这篇文章主要是示范vue的异常）
2. 把收集的异常上报包括sourcemap
3. 利用sourcemap解析源代码的位置
4. 

####  一、收集前端异常

> 由于Vue会捕获所有Vue单文件组件或者Vue.extend继承的代码，所以在Vue里面出现的错误，并不会直接被window.onerror捕获，而是会抛给Vue.config.errorHandler。

> 因为vue里抛出的异常都是vue文件经过vue-loader转义之后的JavaScript抛出的。所以使用window.onerror捕获异常，都是Script Error

```
vue.config.errorHander = function(err){
    throw err
}
```

但是Vue.config.errorHandler无法捕捉⽹络请求异常，利用error事件监听捕捉
```
window.addEventListener('error', (msg,url,row,col,error)=> {
    console.log(msg, url, row, col, error);
    return true;
}, true);
```

#### 二、把异常上报

随便写一个错误

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f9ebd052a33d4e1db5708db747bb2e0f~tplv-k3u1fbpfcp-watermark.image?)

#### 监听错误

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/994c889ea92b4f96ae0bc78f47f4a757~tplv-k3u1fbpfcp-watermark.image?)

查看错误信息（build之后）

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0d26e66f6a364d80979cde35abc9a05d~tplv-k3u1fbpfcp-watermark.image?)

vue的错误信息缺少了很多有用的信息，比如说错误的行数和列数。其实不同的浏览器，错误对象格式都有可能不同，所以对错误对象进行标准化，TraceKit就帮我们实现了各平台的错误信息标准化


##### 安装tracekit依赖，格式化错误对象

```
npm i tracekit
```

格式化错误信息，并且上报，动态创建img标签进⾏上报，页面不需要刷新，没有跨域的问题。（只要在js中new出Image对象就能发起请求，⽽且没有阻塞问题，在没有js的浏览器环境中也能通过img标签正常打点。）

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d45ee45bd7334a999aa415ba624ff962~tplv-k3u1fbpfcp-watermark.image?)


 ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/16c394926ec049e382f6659be297ceeb~tplv-k3u1fbpfcp-watermark.image?)

 我们上传的错误信息都是经过打包压缩过的位置信息，这个时候需要sourcemap还原源代码的错误位置。所以我们需要把sourcemap上传到服务器去。

#### 三、上传sourcemap

webpack-sentry-plugin写的颇为复杂，比较完善，重点就是拿到打包后的sourcemap文件，上传，然后删除

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c2fed1a6dc5c48388f34e92e205aaead~tplv-k3u1fbpfcp-watermark.image?)

那我们的工作主要是打包后找到所有的sourcemap文件，遍历上传，然后删除文件（记得如果是脚手架  设置productionSourceMap: true，默认配置应该是不会打包出sourcemap的）

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ef8370df835a424ea920beab7ed3e1fd~tplv-k3u1fbpfcp-watermark.image?)

上传接口也可以和webpack-sentry-plugin一样在实例化的时候传进去，这里只是为了演示，怎么方便就怎么来了


#### 四、后端接收文件

之前写过一篇文章，演示安全攻击的，这里还是用原来的node express框架（因为java我也不会）[express官方文档地址](https://www.expressjs.com.cn/starter/installing.html)

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/406640158d9e402dbe3f67f8de1c494f~tplv-k3u1fbpfcp-watermark.image?)

创建入口文件
![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c6436ef0a079477da4488f2daad37f59~tplv-k3u1fbpfcp-watermark.image?)

创建app文件夹，写接口
![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ec9f70cdbcc24a478603da9ebd2d634e~tplv-k3u1fbpfcp-watermark.image?)

 安装一下nodemon ，npm run dev 可以看到hello页
 ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b87cb9af48194de186dfa004e166dd8d~tplv-k3u1fbpfcp-watermark.image?)

 开始写上传接收文件的接口，把接收的文件放在本地文件夹中，方便演示

 ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/befbce393f6141ff9c8dedf8fdffa6d0~tplv-k3u1fbpfcp-watermark.image?)

 前端上传

 ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d345957091784e98bfcc61fe08f92008~tplv-k3u1fbpfcp-watermark.image?)

 这时候我们去执行以下build

 ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/957bea2b2d5d4fc7bb2f45b5eb0ab4e6~tplv-k3u1fbpfcp-watermark.image?)

 后端后接收到sourcemap文件

 ![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bd6379fbe02f4360bec607c2121786fa~tplv-k3u1fbpfcp-watermark.image?)

 既然有了sourcemap文件我们就要开始利用sourcemap还原线上的错误（因为线上代码都是经过压缩的，直接看看不出来实际问题）

#### 五、还原源码错误位置

##### 前端上报错误，把行和列的位置和错误文件名上传（有用的信息都可以上传），利用建立img标签

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/25fbaf70627f4a4385016c76b4cd0300~tplv-k3u1fbpfcp-watermark.image?)

##### 后端接收信息，利用source-map解析错误

[官方文档:source-map](https://www.npmjs.com/package/source-map)

安装 npm i source-map

解析文件，得到源码位置

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/34f11e723f83461483ba00d9554038a9~tplv-k3u1fbpfcp-watermark.image?)

vue制造一个错误

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/370670f1f3b04da6b5487bdf38cc6c78~tplv-k3u1fbpfcp-watermark.image?)

 build之后，运行index文件，用本地的nginx也行，直接运行接改一下引用的js路径

 ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2398541e98024f2b8d8dc6390341c23c~tplv-k3u1fbpfcp-watermark.image?)


控制台打印出源文件的错误
![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7c0abcf3b72b452184d6e3b5c36f52a0~tplv-k3u1fbpfcp-watermark.image?)


资源加载失败我们需要监听error事件，上报资源加载异常链接

 ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d5e9c8a1e59346548683c8df991c6efd~tplv-k3u1fbpfcp-watermark.image?)

 修改后台代码，如果是资源加载问题直接输出异常

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/25242e6f5fe64fe5871ed2dbeacdfbba~tplv-k3u1fbpfcp-watermark.image?)

还有什么异常需要处理的可以另外处理


#### 番外：sourcemap

ource map就是一个信息文件，里面储存着位置信息。也就是说，转换后的代码的每一个位置，所对应的转换前的位置。

##### Source map的格式


```
{
        // map的版本
　　　　version : 3, 
　　　　// 转换后的文件
　　　　file:  "js/app.0bc14b45.js", 
　　　　// 转换前的文件所在的目录。如果与转换前的文件在同一目录，该项为空。
　　　　sourceRoot : "", 
　　　　// 转换前的文件。该项是一个数组，表示可能存在多个文件合并。
　　　　sources: ["webpack:///webpack/bootstrap",
                "webpack:///./src/App.vue?9b05",
                "webpack:///./src/App.vue?44c5",
                "webpack:///./src/components/HelloWorld.vue?7b3c",
                "webpack:///src/components/HelloWorld.vue",], 
        // 转换前的所有变量名和属性名。
　　　　names: ["src", "maps", "are", "fun"], 
　　　　// 记录位置信息的字符串
　　　　mappings: "AAgBC,SAAQ,CAAEA" 
　　}
```

##### mappings属性

```
mappings:"AAAAA,BBBBB;CCCCC"

//[生成文件的列，源文件索引，源文件行号，源文件列号，名称索引]
```
上面表示： 转换后的源码分成两行，第一行有两个位置，第二行有一个位置。

位置对应的原理

> 第一位，表示这个位置在（转换后的代码的）的第几列。
> 
>  第二位，表示这个位置属于sources属性中的哪一个文件。
> 
>  第三位，表示这个位置属于转换前代码的第几行。
> 
>  第四位，表示这个位置属于转换前代码的第几列。
> 
> 第五位，表示这个位置属于names属性中的哪一个变量。

#####  最简单粗暴的方法(容的增加，转换规则的复杂,映射表长度会很长)


```
mappings: "1|1|输入文件1.txt|1|6,1|2输入文件1.txt|1|7,1|3|输入文件1.txt|1|8,1|4|输入文件1.txt|1|9,1|5|输入文件1.txt|1|10,1|7|输入文件1.txt|1|1,1|9|输入文件1.txt|1|3,1|10|输入文件1.txt|1|4"（长度：144）
```


> mappings: "输出文件行位置|输出文件列位置|输入文件名|输入文件行号|输入文件列号,....."

##### 优化手段1:不要输出文件中的行号（降低mappings的长度）

在经历过压缩和混淆之后，代码基本上不会有多少行（特别是JS，通常只有1到2行）。这样的话，就可以在上节的基础上移除输出位置的行数，使用";"号来标识新行。


```
mappings: "1|输入文件1.txt|1|6,2|输入文件1.txt|1|7,3|输入文件1.txt|1|8,4|输入文件1.txt|1|9,5|输入文件1.txt|1|10,7|输入文件1.txt|1|1,9|输入文件1.txt|1|3,10|输入文件1.txt|1|4; 如果有第二行的话"（长度：129）
```


> mappings: "输出文件列位置|输入文件名|输入文件行号|输入文件列号,....."

##### 优化手段2：提取输入文件名（sources）

由于可能存在多个输入文件，且描述输入文件的信息比较长，所以可以将输入文件的信息存储到一个数组里，记录文件信息时，只记录它在数组里的索引值就好了。 

```
sources: ['输入文件1.txt'],
mappings: "1|0|1|6,2|0|1|7,3|0|1|8,4|0|1|9,5|0|1|10,7|0|1|1,9|0|1|3,10|0|1|4;" (长度：65)
```

> mappings: "输出文件列位置|输入文件名索引|输入文件行号|输入文件列号,....."

优化手段3: 可符号化字符的提取（names）

当然。已输出文件中的Chris字符为例，当我们找到了它的首字符C在源文件中的位置(行1,列6)时，就不需要再去找剩下的hris的位置了，因为Chris可以作为一个整体来看待。想想源码里的变量名，函数名，都是作为一个整体存在的。 现在可以把作为整体的字符提取并存储到一个数组里，然后和文件名一样，在mapping里只记录它们的索引值。这样就避免了每一个字符都要记的窘境，大大缩减mappings的长度。


```
sources: ['输入文件1.txt'],
names: ['I', 'am', 'Chris'],
<!--原来 mappings: 1|0|1|6,2|0|1|7,3|0|1|8,4|0|1|9,5|0|1|10-->
mappings: "1|0|1|6|2,7|0|1|1|0,9|0|1|3|1" (长度: 29)
```

> mappings: "输出文件列位置|输入文件名索引|输入文件行号|输入文件列号|字符索引,....."

##### 优化手段4: VLQ编码

最应该优化的地方应该就是用来分割数字的"|"号了。 这个优化应该怎么实现呢？ 在回答之前，先来看这样一个问题——如果你想顺序的记录4组数字，最简单的就是用"|"号进行分割

```
sources: ['输入文件1.txt'],
names: ['I', 'am', 'Chris'],
mappings: "BABME,OABBA,SABGB" (长度: 17)

```




VLQ编码

![image](http://www.ruanyifeng.com/blogimg/asset/201301/bg2013012202.png)


参考文档：
1. [Sentry异常捕获平台](https://www.jianshu.com/p/ca4ad23a2dd6)
2. [官方文档：source-map](https://www.npmjs.com/package/source-map)
3. [Sentry原理-收集、上报](https://www.imooc.com/article/317137)
4. # [深入理解sourcemap](https://blog.csdn.net/weixin_33963594/article/details/93166768)