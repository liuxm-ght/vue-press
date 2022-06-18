// a.js
exports.x = 'a1';
console.log(require.cache);//1 至此require.cache缓存了 main.js a.js {exports x=a1}
console.log('a.js ', require('./b.js').x);//跳至b.js去执行，执行完后，读取require.cache缓存，x=b2
console.log(require.cache);//5 至此 require.cache缓存了 main.js a.js {exports x=a1} b.js {exports x=b2}
exports.x = 'a2'; //6 缓存被更新 至此 require.cache缓存了 main.js a.js {exports x=a2} b.js {exports x=b2}
