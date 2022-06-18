#### browerify 插件  
  * 浏览器执行main.js需要用browserify插件将含commonjs语法的代码转为es5
  * node环境执行，不需要browserify

  1. 浏览器使用：
    npx browserify main.js -o dist/bundle.js
    index.html中引入dist/bundle.js

  2. node使用：
    node main.js