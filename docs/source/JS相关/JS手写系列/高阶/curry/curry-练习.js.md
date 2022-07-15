```ts
var _ = require('ramda');


// 练习 1
//==============
// 通过局部调用（partial apply）移除所有参数

var words = function(str) {
  return split(' ', str);
};

// 练习 1a
//==============
// 使用 `map` 创建一个新的 `words` 函数，使之能够操作字符串数组

var sentences = undefined;


// 练习 2
//==============
// 通过局部调用（partial apply）移除所有参数

var filterQs = function(xs) {
  return filter(function(x){ return match(/q/i, x);  }, xs);
};


// 练习 3
//==============
// 使用帮助函数 `_keepHighest` 重构 `max` 使之成为 curry 函数

// 无须改动:
var _keepHighest = function(x,y){ return x >= y ? x : y; };

// 重构这段代码:
var max = function(xs) {
  return reduce(function(acc, x){
    return _keepHighest(acc, x);
  }, -Infinity, xs);
};


// 彩蛋 1:
// ============
// 包裹数组的 `slice` 函数使之成为 curry 函数
// //[1,2,3].slice(0, 2)
var slice = undefined;


// 彩蛋 2:
// ============
// 借助 `slice` 定义一个 `take` curry 函数，该函数调用后可以取出字符串的前 n 个字符。
var take = undefined;



答案：



require('../../support');
var _ = require('ramda');

console.log('add', map(add(2)));


// Exercise 1
//==============

var words = split(' ');

// Exercise 1a
//==============

var sentences = map(words);


// Exercise 2
//==============

var filterQs = filter(match(/q/i));


// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max

var _keepHighest = function(x,y){ return x >= y ? x : y; }; // <- leave be

var max = reduce(_keepHighest, -Infinity);


// Bonus 1:
// ============
// wrap array's slice to be functional and curried.
// //[1,2,3].slice(0, 2)
var slice = _.curry(function(start, end, xs){ return xs.slice(start, end); });


// Bonus 2:
// ============
// use slice to define a function "take" that takes n elements. make it curried
var take = slice(0);


module.exports = { words: words,
                   sentences: sentences,
                   filterQs: filterQs,
                   max: max,
                   slice: slice,
                   take: take
                 };


```