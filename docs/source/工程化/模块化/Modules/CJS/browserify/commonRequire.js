var example = require('./commonExports.js');//如果参数字符串以“./”开头，则表示加载的是一个位于相对路径
// console.log(example.x); // 5
// console.log(example.addX(1)); // 6

// console.log(require.main.filename);
// console.log(require.cache);

module.exports = {
  a:'asss'
}
console.log(require.resolve(module.filename),'Moduel');
