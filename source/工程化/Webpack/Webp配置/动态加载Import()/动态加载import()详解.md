### 动态加载import()详解
  1. 简介：
    为了优化项目及打包速度，进行模块的按需加载/懒加载

  1. 使用：
    1. import('xxx相对路径') 
    2. 定义动态加载的文件输出名称：
      1. output.chunkFileName
      2. import(/* webpackChunkName: "MyFile" */`../containers/MyFile`)
      3. import(/* webpackChunkName: "[request]" */`../containers/${pathName}`) 动态路径

  2. 原理准备：
    几个重要概念： 
      1. modules：缓存module代码块，每个module 有一个id，开发环境默认以module 所在文件的文件名标识，生产环境默认以一个数字标识。modules 是一个object，key 为module id，value 为对应module 的源代码块。
      2. installedModules：缓存已经加载过的 module
      3. installedChunks：缓存已经加载过的 chunk
      * undefined：chunk not loaded
      * null：chunk preloaded/prefetched
      * Promise：chunk loading
      * 0：chunk loaded

  3. 原理： 
      1. webpack解析到import()语法后，会对它进行标记，并最终将import加载的文件打包到单独的文件中去；同时打包后的import()函数将被打包成：
        __webpack_require__.e(/* import() | title */ 1).then(__webpack_require__.t.bind(null, 1, 7))

      2. 触发异步加载时(即执行到import函数时)，将执行模块加载：
        1. __webpack_require__.e，这个函数做了哪些事情？
          1. 检查缓存: 从installedChunks(已经安装了的chunks)中检查，没有缓存进入2
          2. 检查模块状态: 
            installedChunkData(引用模块的状态，可分为：undefined 未加载  null 预加载  Promise  代码块加载中   0 加载完成 )
            1. 如果是undefined 未加载 或 null 预加载：
              1. 生成promise，用来订阅模块 installedChunkData = installedChunks[chunkId] =[resolve, reject, promise]
              2. 创建script标签，src指向模块路径(打包后的路径)，script标签插入页面document
              3. 最终将导出一个Promise.all

      3. 等待模块加载完成，当模块加载完成，执行模块代码
        1. webpack 如何知道模块加载完了？或者说当前模块如何知道引用模块加载完了？
          1. 利用jsonp回调原理，模块代码中包含了回调函数，
            <!-- eg: (window["webpackJsonp"] = window["webpackJsonp"] || []).push([....]) -->
            window["webpackJsonp"].push被webpack重写了，最终执行的是 webpackJsonpCallback函数
            即当模块加载完就执行这个回调函数 webpackJsonpCallback

        2. webpackJsonpCallback做了什么？
          1. 根据引用模块的标识，从 installedChunks 中查找对应的 installedChunkData ，拿到resolve；
            同时将引用模块存入 modules 缓存中；
          2. 最后执行所有resolves

      4. Promise.all的状态改变，如果是成功，将执行 __webpack_require__.t.bind(null, 1, 7) 
          1. __webpack_require__.t 做了什么？其实就是同步加载模块的过程：
            1. 执行 __webpack_require__ 加载模块
              加载过程是：
              1. 从 installedModules 查找是否已安装模块
              2. 没有安装，生成module，并存入 installedModules 缓存中
              3. 然后，安装引用模块(即执行模块代码)，标记模块安装成功
              4. 返回模块导出的数据
            2. 判断是发为es模块，是直接返回module，不是，生成一个对象ns，记录 返回数据 value，添加一些模块标识属性， 
            3. 返回这个对象ns
          
          * 其中利用了二进制的 位运算& 来匹配是否要执行某些步骤
            <!-- eg: 7 & 1 返回 1 ，会执行 满足 1 的步骤 -->
      
      5. 最后，当前模块拿到返回的ns数据后，处理数据

      
        
      

  
  4. 总结：
      1. 遇到import()函数，webpack会单独打包引用的文件，并且文件用webpackJsonpCallbackJsonp回调函数包裹起来；
      2. 在触发异步加载的时候，通过生成script标签来加载异步模块，当模块加载完成会立即执行引用模块，
      通过webpackJsonpCallback函数来通知当前模块，异步模块加载完成了(异步模块已经存入本地缓存)，但还未执行
      3. webpack通过调用同步模块加载方法来加载，已经加载好的异步模块，并执行代码
      4. 至此，模块加载、执行完成

      * 如何实现与异步模块的代码沟通？通过Jsonp来实现。当前模块通过script加载异步模块，异步模块通过callback来执行当前模块的函数

      * 当前模块是如何维护异步流程的？即当前模块加载了异步代码，并不知道什么时候加载完成，需要等待它加载完成。
          * 通过promise的机制，当模块加载完成改变promise的状态，来进入下一步

    <!-- 详细代码见 webpack目录/《import-webpack》目录 -->
    <!-- 参考文章 ： https://juejin.cn/post/6899640414446780430 -->
