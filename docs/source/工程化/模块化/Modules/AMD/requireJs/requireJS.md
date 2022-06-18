### RequireJS
  1. 主要用于浏览器，
      异步加载模块，AMD的代表

  2. require.js 都是非同步加载，
    * AMD是依赖前置，先加载好所有需要的依赖

  3. 使用方法：
    <!-- 见《AMD.md》 -->

  4. 优化方案：
      require.js要求，每个模块是一个单独的js文件。这样的话，如果加载多个模块，就会发出多次HTTP请求，会影响网页的加载速度。因此，require.js提供了一个优化工具，当模块部署完毕以后，可以用这个工具将多个模块合并在一个文件中，减少HTTP请求数。
      <!-- https://www.cnblogs.com/chenguangliang/p/5856701.html -->
