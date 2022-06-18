### CommonJS
  1. 概述
    CommonJS 主要运行于服务器端，该规范指出，一个单独的文件就是一个模块。
    Node.js为主要实践者，它有四个重要的环境变量为模块化的实现提供支持：module、exports、require、global。
    Node 应用由模块组成，采用 CommonJS 模块规范。
    * 每个文件就是一个模块，有自己的作用域。在一个文件里面定义的变量、函数、类，都是私有的，对其他文件不可见。

  2. 特点：
    1. 所有代码都运行在模块作用域，不会污染全局作用域。
    2. 模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存。
    3. 模块加载的顺序，按照其在代码中出现的顺序。

  3. module对象 和 exports变量
      1. module对象
        每个模块内部，都有一个module对象，代表当前模块。它有以下属性。
        ```ts
          module.id 模块的识别符，通常是带有绝对路径的模块文件名。
          module.filename 模块的文件名，带有绝对路径。
          module.loaded 返回一个布尔值，表示模块是否已经完成加载。
          module.parent 返回一个对象，表示调用该模块的模块。
          module.children 返回一个数组，表示该模块要用到的其他模块。
          module.exports 表示模块对外输出的值。
        ```
        如果在命令行下调用某个模块，比如node something.js，那么module.parent就是null。如果是在脚本之中调用，比如require('./something.js')，那么module.parent就是调用它的模块。
        利用这一点，可以判断当前模块是否为入口脚本。
        ```ts
        if (!module.parent) {
            // ran with `node something.js`
            app.listen(8088, function() {
                console.log('app listening on port 8088');
            })
        } else {
            // used with `require('/.something.js')`
            module.exports = app;
        } 
        ```
      2. exports变量
        为了方便，Node为每个模块提供一个exports变量，指向module.exports。这等同在每个模块头部，有一行这样的命令。
          <!-- var exports = module.exports; -->


  3. 值得拷贝？？从原理上来解答？
    * 由于commonjs是有缓存功能的，当一个文件被require后就会被缓存起来，当改变这个文件后，再次require这个文件时，其实没有去读这个文件了，而是直接从缓存中拿了，但如果导出的是对象，那么原对象修改，再次require得到的也是修改后的值，因为只是浅拷贝。缓存也是在同一作用域下。
    由此展开来：
      如果需要多次执行某个文件，每次都是新的数据，改如何处理？
      1. exports一个函数出来
      2. 由于所有的缓存都缓存在require.cache，可以使用
          1. 删除一个：delete require.cache[moduleName]
          2. 删除所有：Object.keys(require.cache).forEach(function(item){
            delete require.cache[item]
          })
        * 注意，缓存是根据绝对路径识别模块的，如果同样的模块名，但是保存在不同的路径，require命令还是会重新加载该模块。

  4. 模块循环加载问题？
      如果发生模块的循环加载，即A加载B，B又加载A，则B将加载A的不完整版本。
      ```ts
        // a.js
        exports.x = 'a1';
        console.log('a.js ', require('./b.js').x);
        exports.x = 'a2';

        // b.js
        exports.x = 'b1';
        console.log('b.js ', require('./a.js').x);
        exports.x = 'b2';

        // main.js
        console.log('main.js ', require('./a.js').x);
        console.log('main.js ', require('./b.js').x);
      ```
      上面代码是三个JavaScript文件。其中，a.js加载了b.js，而b.js又加载a.js。这时，Node返回a.js的不完整版本，所以执行结果如下。
      ```ts
        $ node main.js
        b.js  a1
        a.js  b2
        main.js  a2
        main.js  b2
      ```
      修改main.js，再次加载a.js和b.js。
      ```ts
        // main.js
        console.log('main.js ', require('./a.js').x);
        console.log('main.js ', require('./b.js').x);
        console.log('main.js ', require('./a.js').x);
        console.log('main.js ', require('./b.js').x);
      ```
      执行上面代码，结果如下。
      ```ts
        $ node main.js
        b.js  a1
        a.js  b2
        main.js  a2
        main.js  b2
        main.js  a2
        main.js  b2
      ```
      上面代码中，第二次加载a.js和b.js时，会直接从缓存读取exports属性，所以a.js和b.js内部的console.log语句都不会执行了。

  5. 手写CommonJS之前，先了解require是如何加载文件的？
      1. 模块的类型：
        1. 内置模块：Node原生提供的功能，eg：fs、http等，在Node进程起来的时候就加载进来了。
        2. 文件模块：我们写的模块或第三方模块，即node_modules下的都是文件模块
      
      2. 加载顺序(模块查询顺序)
        1. 优先内置模块找，找不到
        2. 去缓存找，找不到
        3. 去对应路径找文件，找不到
        4. 去对应路径找文件夹(不会加载这个文件夹，有顺序查找正确文件)，找不到
            1. 去获取package.json下的main字段，找不到
            2. 没有package.json或没有package.json下的main字段，去找index文件，
            3. 都没有，进入下一步查找
        5. 去node_modules下找，找不到
        6. 报错

      3. require支持的文件类型：
        1. .js ： 最常用的类型，找到js文件会先执行整个文件，然后将module.exports的内容当做是require的值返回。
        2. .json： 直接JSON.parse转为对象返回。
        3. .node： C++编译后的文件

  6. 手写一个CommonJS
      * 手写commonJs其实就是手写Module，Require其实就是实例化一个Module
      1. Require一个模块的原理流程是：
          1. 执行Module._load(id),这个函数里进行缓存校验，如果有缓存直接retrun缓存exports，如果没有实例化一个新的module，新的module来执行内部函数，Module.load()
          2. 执行module.load()，根据不同后缀，读取对应路径的文件，进行不同的处理，
            1. js文件，会读取文件内容，执行_compile处理文件内容，
              1. 将拼接成可执行的匿名函数体字符串，函数体拥有参数exports、require、module、__filename、__dirname,
              2. 利用vm.runInThisContext将函数体转为可执行函数，并执行函数，this指向当前模块实例module
            2. json文件，直接读取文件，JSON.parse解析文件，返回实例module.exports

          * 处理JS文件核心思想：
            每次新require一个文件时，会创建一个Module实例，实例会load初始化，初始化主要做的是
            1. 将文件内容转化成一个可执行的匿名函数，这个函数内部可以获取到当前实例的一些属性，并且this指向的也是当前实例
            2. 这样做的目的是使模块内部私有化，不污染全局变量，同时方便管理模块间的关系

      2. Exports一个模块的原理是：
          1. Module实例有个exports属性，require请求某个模块实际执行了Module._load方法，这个方法最终会把exports给return出了。
          2. 这样require就得到了请求的模块的exports属性

      3. 总结：
          一个文件即一个Module实例，有require方法和exports对象，require获取文件内容拼成匿名函字符串，并转为可执行函数，同时自执行，并传入一些模块需要使用到的参数；

  7. require.main
      require方法有一个main属性，可以用来判断模块是直接执行，还是被调用执行。
      直接执行的时候（node module.js），require.main属性指向模块本身。
        <!-- 
          require.main === module
          // true 
        -->
      调用执行的时候（通过require加载该脚本执行），上面的表达式返回false。
      <!-- http://javascript.ruanyifeng.com/nodejs/module.html#toc0 -->

  8. 使用：
    使用：
      导出：
      ```ts
        // 定义模块math.js
        var basicNum = 0;
        function add(a, b) {
          return a + b;
        }
        module.exports = { //在这里写上需要向外暴露的函数、变量
          add: add,
          basicNum: basicNum
        }
      ```

      引用：
      ```ts
        // 引用自定义的模块时，参数包含路径，可省略.js
        var math = require('./math');
        math.add(2, 5);
        // 引用核心模块时，不需要带路径
        var http = require('http');
        http.createService(...).listen(3000);
      ```


  9. 总结：
    实现：<!-- 具体看CommonJS文件夹 -->
      一个文件即一个Module实例，有require方法和exports对象，require获取文件内容拼成匿名函字符串，并转为可执行函数，并自执行，同时传入一些模块需要使用到的参数
    使用：
      导出：module.exports = any / exports.xxx = any  
      引用：require(path)
    优点：
      1. 同步加载，有缓存
      2. 是值得拷贝关系(浅拷贝)
    缺点：
    应用：主要是服务端模块化的规范，NodeJS用的也是这种，浏览器需要使用，需要使用browerify插件转译

    * CommonJS 加载的是一个对象（即module.exports属性），该对象只有在脚本运行完才会生成。而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。