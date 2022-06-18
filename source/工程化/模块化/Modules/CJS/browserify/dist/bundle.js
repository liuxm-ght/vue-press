(function () { 
  function r(e, n, t) { 
    function o(i, f) { if (!n[i]) { if (!e[i]) { var c = "function" == typeof require && require; if (!f && c) return c(i, !0); if (u) return u(i, !0); var a = new Error("Cannot find module '" + i + "'"); throw a.code = "MODULE_NOT_FOUND", a } var p = n[i] = { exports: {} }; e[i][0].call(p.exports, function (r) { var n = e[i][1][r]; return o(n || r) }, p, p.exports, r, e, n, t) } return n[i].exports } for (var u = "function" == typeof require && require, i = 0; i < t.length; i++)o(t[i]); 
    return o 
  } 
  return r 
})()({
  1: [function (require, module, exports) {
    // a.js
    exports.x = 'a1';
    console.log(require.cache);//1 至此require.cache缓存了 main.js a.js {exports x=a1}
    console.log('a.js ', require('./b.js.js').x);//跳至b.js去执行，执行完后，读取require.cache缓存，x=b2
    console.log(require.cache);//5 至此 require.cache缓存了 main.js a.js {exports x=a1} b.js {exports x=b2}
    exports.x = 'a2'; //6 缓存被更新 至此 require.cache缓存了 main.js a.js {exports x=a2} b.js {exports x=b2}

  }, { "./b.js": 2 }], 2: [function (require, module, exports) {
    // b.js
    exports.x = 'b1';
    console.log(require.cache); //2 至此require.cache缓存了 main.js a.js {exports x=a1} b.js {exports x=b1} 
    console.log('b.js ', require('./a.js.js').x);//3 读取require.cache缓存，x=a1
    console.log('22222');
    exports.x = 'b2';//4 缓存被更新 至此 require.cache缓存了 main.js a.js {exports x=a1} b.js {exports x=b2}
  }, { "./a.js": 1 }], 3: [function (require, module, exports) {
    // main.js
    console.log('main.js ', require('./a.js.js').x);
    console.log('main.js ', require('./b.js.js').x);
    console.log(require.main === module);
    // console.log('main.js ', require('./a.js').x);
    // console.log('main.js ', require('./b.js').x);
  }, { "./a.js": 1, "./b.js": 2 }]
}, {}, [3]);
