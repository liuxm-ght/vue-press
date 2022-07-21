[[toc]]
### how do it work?
  ```ts
  vue-cli-tmx templateName targetName 
  ```
  * vue-cli-tmx ?命令 是如何工作的？
    * 如何创建一个shell命令？ 
      * 需要在package.json中配置bin  "vue-cli-tmx": "bin/vue-init"，
      * 然后 npm link 将项目件映射到node运行的环境目录中去，并将bin添加到node bin中去。(执行npm link 会将当前项目链接到全局去，地址是node的运行环境{profix}/lib/node_modules/< project-name> ) (npm config get prefix查看 prefix )( project-name 为package.name)
      * 就可以直接使用vue-cli-tmx命令了(在终端运用命令时，会自动加上环境变量$PATH)
      * 当执行这个命令时，会执行这个bin脚本vue-init

  1. 看下这个文件 vue-init
      1. 最顶部声明了 #!/usr/bin/env node ，意思是使用node 来解释这个脚本bin/vue-init
      2. 做了几件事情：
          * 一
            * 命令行处理  
              * commander 命令行控制插件
                * 使用commander来处理命令
                  * usage提示用户如何输入，两个参数 模板名称必填 项目名称选填 
                  * option可输入选项 clone 是否git clone， offile 是否使用缓存
                  * 解析node参数，无参数展示用户提示信息，有进行参数处理
                  * 参数1 模版名称 带/ . : 为本地路径，从本地拿模板文件，否则从远程拿，远程有官方/私有
                  * 参数2 项目名称 . / 不填 :为当前目录，名称用当前目录名， 否则存到指定目录去
          * 二 
            * 模板来源确定
              * run 进行上面判断处理函数
                * 本地 存在 直接处理缓存文件
                * 远程 使用 download-git-repo 下载
          * 三
            * 下载模板
              * 使用 download-git-repo 下载 参数一 git repo 地址，参数二 本地保存地址 ，参数三 选项 如：是否clone
              * 下载完成 正式进行模板处理 generate
  
  2. 看看generate文件
    * generate 函数4个参数 name模板名称 src来源目录 to输出目录 callback回调函数
    * 做了2件事情
      * 一
        * 获取配置  去模板目录拿配置文件信息
          * read-metadata插件 读取meta文件信息（模板目录的meta文件） opts
      * 二 
        * 处理模板文件  根据meta信息处理模板
          * metalsmith 插件 
          * metalsmith 输入源目录 中间件操作 输出目标目录
            * 获取源目录metadata 元数据 并扩展
        * 如何处理？
          * 用户交互
            * inquirer 插件
              * inquirer根据 opts 配置的prompt进行用户交互
              * 将交互结果保存到 metadata 中
          * 文件过滤
            * minimatch 插件 
              * 根据 opts 配置的 filters 过滤文件
          * 渲染文件
            * handlebars 插件
              * render 渲染文件
                * 根据交互结果 metadata 逐个编译需要编译的文件


  * 工作流程
    1. vue-cli 判断是使用远程模板，还是使用本地模板
    2. 如果使用远程模板，下载远程模板，保存到本地.vue-templates文件夹下
    3. 如果使用本地模板，读取模板下的meta.js或meta.json文件，根据里面的内容询问开发者，过滤文件
    4. 根据模板内容及回答，渲染出目录结构并生成到指定目录


  ::: warning 注意：
    模板可以是任何项目，或目录，不一定是vue项目。
  :::
    

### npm link
  * (执行npm link 会将当前项目链接到全局去，地址是全局node的运行环境{profix}/lib/node_modules/< project-name> ) (npm config get prefix查看 prefix )( project-name 为package.name)
  * 当前项目会在全局地址备份一份，并且将项目bin也链接到node运行环境bin文件


### vue build 
  * runtime-compiler (运行过程) ： template -> ast -> render -> vdom -> UI
  * runtime-only : render -> vdom -> UI (.vue 文件的编译交给vue-template-compiler,将template -> ast -> render)
   
