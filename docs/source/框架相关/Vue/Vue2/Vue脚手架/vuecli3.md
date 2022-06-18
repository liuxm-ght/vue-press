vuecli3中vue-cli-service 命令何时被定义的？
npm run ? 如何运行的？
npm run serve 可以执行 ，为什么直接vue-cli-service serve不能执行？

  npm run 会新建一个shell ，并执行指定脚步命令。但是npm run 会将当前项目的node_modules/.bin子目录加入PATH变量，执行结束后，再将PATH变量恢复原样。所以可以直接执行 vue-cli-service serve 命令。
  但是如果在shell中直接执行vue-cli-service serve不行，因为其PATH变量所指向的路径目录中无该命令。

为何 node_modules/.bin 中有该命令呢vue-cli-service？
  因为在npm install 的时候，安装依赖包，会读取每个包的package.json文件，读到对应的bin配置，会将所有bin添加到node_modules/.bin子目录中。而这个vue-cli-service bin的原文件将指向node_modules/包名称/bin/vue-cli-service


全家安装依赖后，全家命令为何可以使用？
  yarn install 或 npm install 全局安装某个包的时候 ，会读取这个包的package.json文件，将去整个包保存到本地yarn / npm 全局运行目录（xiaoming.liu/.config/yarn/global/node_module/）下去,并且将package.json下bin属性对应的bin文件拷贝到yarn/npm全局bin中去

系统环境变量配置：
  npm config get prefix 获取当前安装包绝对路径
  sudo vi ~/.bash_profile 查看环境变量
  按i 编辑
  添加环境变量
  source ~/.bash_profile 刷新一下
