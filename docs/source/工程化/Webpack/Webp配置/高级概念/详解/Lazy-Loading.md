### Lazy-Loading 懒加载
  1. 概述：
      就是代码的异步引入，需要的时候才加载，也叫按需加载

  2. 相关延伸：
      1. react、vue 的框架
        如果我们写过相关的 react、vue 的框架代码的话，这些框架都是单页应用，里面会有一个路由切换的概念，一般当我们访问首页的时候，它其实会把诸如 详情页、编辑页、列表页等页面都给加载完成，这个时候我们只需要首页的代码就够了。可以把这些页面做一个代码分割，然后等到路由切换到相应的页面的时候在异步载入相应的代码即可，这样就一定程度上提高页面的加载效率。

      2. 是 ECMAScript 的语法
        懒加载实际上就是 import 的语法，他不是 webpack 的功能，而是 ECMAScript 的语法，webpack 做的只是识别这种语法并应用。

      3. 返回的是 promise 类型
        import 实际上返回的是一个 promise 的类型，如果我们的项目对于低端浏览器也有相应的支持，我们就需要安装 @babel/polyfill 来诸如一些兼容低端浏览器的方法：不过我们也可以在 .babelrc 中配置相应的 useBuiltIns
        ```ts
          {
            "presets": [
              [
                "@babel/preset-env",
                {
                  "useBuiltIns": "usage"
                }
              ],
              "@babel/preset-react"
            ]
          } 
        ```
        我们还可以使用 async await 来更加优雅的改写我们 async.js 中的文件：
        * 定义模块：
        ```ts
          const getComponent = async () => {
            const { default: _ } = await import(/* webpackChunkName:"lodash1" */ 'lodash');
            const element = document.createElement('div');
            element.innerHTML = _.join(['Hello', 'Darrell'], '-');
            return element;
          }
          export default getComponent; 
        ```
        * 使用模块：
        ```ts
          import getComponent from './async';
          document.addEventListener('click', () => {
            getComponent().then(element => {
              document.body.appendChild(element);
            });
          })
        ```

