### 手写一个mini-commonJs
  1. 使用：
    node main.js

  2. 过程：
    每个文件即一个Module模块
    require来加载模块，并_cache来缓存require过的模块
    根据模块的后缀来决定如何处理模块
    js模块：读取模块内容，拼成匿名函数自执行字符串，再转为函数在当前module域名下执行，传人模块需要的exports、require、module、__filename、__dirname，至此模块被执行完成
    json模块：直接读取文件内容，转为json


  3. 实现：
    Module：当执行node main.js，其实会主动实例话一个Module实例，即每个js（或模块）都会实例化为一个Module
      每个模块还有其他属性和方法：
        id ： Module模块的唯一标示，也是缓存用的id
        filename： 模块名称
        paht：模块所在文件夹
        loaded： 是否加载完成
        exports： 导出内容

    require：每个Module有一个require方法，用来给每个模块调用其他模块
      _load方法来准备加载模块，传入路径（相对、绝对、字符串），做了两件事：
        一：获取绝对路径
            做为module唯一id
            无后缀的尝试补充后缀
        二：是否有缓存
            有，直接读取缓存，
            无，实例化module，并存入缓存，正式加载模块load

      load方法是正式来加载模块的，传入id，做了两件事：
        一：根据后缀，读取文件
            根据后缀调用对应的方法，读取文件内容
        二：解析文件内容
            js文件：
              _compile : 将js内容拼接成可自执行的匿名函数字符串，将字符串转为函数(vm.runInThisContext)，为了使模块私有化，在当前module执行该函数（call（this,...args）），
              并且传入模块需要的参数exports、require、module、__filename、__dirname
              执行函数
            json文件：
              直接转为json（JOSN.parse）

  4. 总结：
    commonjs
      一个文件是一个模块
      模块私有化，内部变量不外漏，exports来暴露结果
      有缓存功能
      边执行边确认模块间的关系

  5. 参考文章：
      <!-- 深入Node.js的模块加载机制，手写require函数
      https://juejin.cn/post/6866973719634542606#heading-16
      https://github.com/dennis-jiang/Front-End-Knowledges/blob/master/Examples/Node.js/Module/MyModule/index.js  -->


          
        

    
