// b.js
exports.x = 'b1';
console.log(require.cache); //2 至此require.cache缓存了 main.js a.js {exports x=a1} b.js {exports x=b1} 
console.log('b.js ', require('./a.js').x);//3 读取require.cache缓存，x=a1
console.log('22222');
exports.x = 'b2';//4 缓存被更新 至此 require.cache缓存了 main.js a.js {exports x=a1} b.js {exports x=b2}