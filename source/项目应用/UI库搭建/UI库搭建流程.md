### 如何搭建一个UI库或规划一个UI库的搭建？
  1. 组件库的引用方式：
      * 基于vue的UI组件库，所以前提都必须引入vue.js
      1. script src='cdn//xxx-ui.js' 全局引入
      2. import ui from 'xxx-ui' 全局引入
      3. import {button} from 'xxx-ui' 按需引入

  2. 打包方式：
      1. webpack打包js等除css外的资源
          1. 配置跟普通项目类似，只是output输出增加了个 libraryTarget:umd,即模块将在cjs或amd或全局变量上运行
          2. 利用externals不将引用的第三方库打包进组件库项目中去；
            ```
              externals : {
                vue: {
                  root: "Vue",   //通过 script 标签引入，此时全局变量中可以访问的是 Vue
                  commonjs: "vue",  //可以将vue作为一个 CommonJS 模块访问
                  commonjs2: "vue",  //和上面的类似，但导出的是 module.exports.default
                  amd: "vue"   //类似于 commonjs，但使用 AMD 模块系统
                }
              }
            ```
            * 只有当libraryTarget: 'umd'时，才可以配置如上那样的包含 { root, amd, commonjs，... } 的对象，其它的libraryTarget的值不能这样配置。
            <!-- 链接：https://juejin.cn/post/6932736907830886413 -->
      2. gulp打包css资源

  3. 调试：
      1. script 直接hmtl文件引入测试
      2. import 的在库项目npm link 在应用项目npm link ui库名，名为ui库pkg.main

  4. 按需加载打包：
      1. 安装使用element开发的插件babel-plugin-component，配置.babelrc文件plugins配置，plugins:['compoment',{libraryName:'ui-name',styleLibraryName:'style-ui-name'}]
      2. 单独的webpack.component.js配置文件，配置多入口输入和输出，将组件打包到单独文件，
      3. 利用mini-css-extract-plugin将css也单独打包出来

  5. 依赖库安装：
      1. 被项目使用时需要被安装的包，写在pkg.dependencies里或peerDependencies里
      dependencies里的包在被第三方使用时会被安装，DevDependencies里的不会被安装
      peerDependencies的作用是知道第三方一定会安装的包，所以不需要在库里再指明安装，但是会指明期望的安装版本号
          "peerDependencies": {
            "vue": "^2.6.11"
          }

  6. 总结：
      如何搭建一个UI库？
      1. 代码组件方式
      2. 目录结构
          首先是搭建项目结构，配置文件build、组件源代码src、示例代码example、pkg包配置说明
      3. 组件开发: 
          1. 本地启动dev-server服务配合examples目录的示例代码进行开发联调 
          2. 或 使用vuepress启动本地文档项目联调
          3. iview组件重构及业务组件开发
          4. 编辑node脚本，一键创建组件文件包括 vue js testjs文件，可以节省开发时间
      4. 单元测试: jest
      5. 打包: 
          1. webpack打包除样式外的资源，gulp打包css等样式资源
              为什么使用gulp打包样式？因为UI库里样式打包和js打包是分开的，使用gulp打包样式是因为更快更简单
          2. 打包方式跟一般项目类似，只是输出多了library的配置，即利用webpack库打包方式
            1. 非按需加载库时，通常使用umd模式，同时不将第三方库打包进来
            2. 实现按需加载组件时，需要使用babel-plugin-compoment，同时将各组件分别打包并导出
      6. 文档部署: 
          1. 通过vuepress构建文档项目，并托管到gh-page上去，通过创建一个gh-pages分支，将打包后的文档项目推送到这里
          2. 通过github actions这个CI/CD，实现自动更新文档
          <!-- https://zhuanlan.zhihu.com/p/494193833 -->
      7. 发布: 
          1. npm publish发布，发布到npm或 发布到内部 服务器
          2. npm version patch自动更新版本号
      8. 维护: 
          1. 打包后项目出问题如何定位代码

  7. 按需加载和全局加载兼容共存？   
      <!-- https://www.jianshu.com/p/c46a234df284 -->
      1. 组件库两种打包导出方式：
          1. 非按需方式，webpack libraryTarget:umd ，打包出来的是兼容cjs esm的全局模块
          2. 按需方式，gulp或webpack，多入口多输出，应用项目就可以单独引入文件
              1. 知道文件路径，直接指向文件路径
              2. 不知道，借用babel插件，自动替换路径
                  1. 应用项目需要兼容配置babel：
                      1. pkg 中 sideEffect:false
                      2. babelrc中配置到位：
                          1. 可以依赖babel-plugin-import或 babel-plugin-component插件
                          2. 需要兼容配置，cjs方式，和根据env配置esm的配置
                  2. 应用项目需要tree-shaking才能按需加载
      2. babelrc配置需要兼容两种引入编译方式

  * commonjs规范是最常见的使用方式，umd一般用于cdn方式直接在页面引入，而esmodule就是用来实现Tree Shaking的，为什么esmodule能实现Tree Shaking而commonjs规范不行呢，原因是esmodule是静态编译的，也就是在编译阶段就能确定某个模块导出了什么，引入了什么，代码执行阶段不会改变，所以打包工具在打包的时候就能分析出哪个方法被使用了，哪些没有，没有用到的就可以放心的删掉了。
    <!-- 原文链接：https://blog.csdn.net/sinat_33488770/article/details/121708231 -->

    <!-- 如何让组件库支持按需引入 -->
    <!-- 原文链接：https://zhuanlan.zhihu.com/p/473188268 -->