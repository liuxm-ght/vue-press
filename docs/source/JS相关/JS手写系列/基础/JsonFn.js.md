```ts
// 实现 JSON.stringify
//   JSON.stringify([, replacer [, space]) 方法是将一个 JavaScript 值(对象或者数组)转换为一个 JSON 字符串。
//   此处模拟实现，不考虑可选的第二个参数 replacer 和第三个参数 space，如果对这两个参数的作用还不了解，建议阅读 MDN 文档。
//   1. 基本数据类型：
//     undefined 转换之后仍是 undefined(类型也是 undefined)
//     boolean 值转换之后是字符串 "false"/"true"
//     number 类型(除了 NaN 和 Infinity)转换之后是字符串类型的数值
//     symbol 转换之后是 undefined
//     null 转换之后是字符串 "null"
//     string 转换之后仍是string
//     NaN 和 Infinity 转换之后是字符串 "null"
//   2.函数类型：转换之后是 undefined
//   3.如果是对象类型(非函数)
//     如果是一个数组：如果属性值中出现了 undefined、任意的函数以及 symbol，转换成字符串 "null" ；
//     如果是 RegExp 对象：返回 {} (类型是 string)；
//     如果是 Date 对象，返回 Date 的 toJSON 字符串值；
//     如果是普通对象；
//       如果有 toJSON() 方法，那么序列化 toJSON() 的返回值。
//       如果属性值中出现了 undefined、任意的函数以及 symbol 值，忽略。
//       所有以 symbol 为属性键的属性都会被完全忽略掉。
//   4.对包含循环引用的对象（对象之间相互引用，形成无限循环）执行此方法，会抛出错误。
function jsonStringify(data) {
  let dataType = typeof data;
  
  if (dataType !== 'object') {
      let result = data;
      //data 可能是 string/number/null/undefined/boolean
      if (Number.isNaN(data) || data === Infinity) {
          //NaN 和 Infinity 序列化返回 "null"
          result = "null";
      } else if (dataType === 'function' || dataType === 'undefined' || dataType === 'symbol') {
          //function 、undefined 、symbol 序列化返回 undefined
          return undefined;
      } else if (dataType === 'string') {
          result = '"' + data + '"';
      }
      //boolean 返回 String()
      return String(result);
  } else if (dataType === 'object') {
      if (data === null) {
          return "null"
      } else if (data.toJSON && typeof data.toJSON === 'function') {
          return jsonStringify(data.toJSON());
      } else if (data instanceof Array) {
          let result = [];
          //如果是数组
          //toJSON 方法可以存在于原型链中
          data.forEach((item, index) => {
              if (typeof item === 'undefined' || typeof item === 'function' || typeof item === 'symbol') {
                  result[index] = "null";
              } else {
                  result[index] = jsonStringify(item);
              }
          });
          result = "[" + result + "]";
          return result.replace(/'/g, '"');
          
      } else {
          //普通对象
          /**
           * 循环引用抛错(暂未检测，循环引用时，堆栈溢出)
           * symbol key 忽略
           * undefined、函数、symbol 为属性值，被忽略
           */
          let result = [];
          Object.keys(data).forEach((item, index) => {
              if (typeof item !== 'symbol') {
                  //key 如果是symbol对象，忽略
                  if (data[item] !== undefined && typeof data[item] !== 'function'
                      && typeof data[item] !== 'symbol') {
                      //键值如果是 undefined、函数、symbol 为属性值，忽略
                      result.push('"' + item + '"' + ":" + jsonStringify(data[item]));
                  }
              }
          });
          return ("{" + result + "}").replace(/'/g, '"');
      }
  }
}


// 实现 JSON.parse
//   介绍 2 种方法实现：
//     eval 实现；
//     new Function 实现；

//   1. eval 实现
//     第一种方式最简单，也最直观，就是直接调用 eval，代码如下：
  var json = '{"a":"1", "b":2}';
  var obj = eval("(" + json + ")");  // obj 就是 json 反序列化之后得到的对象
  // 但是直接调用 eval 会存在安全问题，如果数据中可能不是 json 数据，而是可执行的 JavaScript 代码，那很可能会造成 XSS 攻击。
  // 因此，在调用 eval 之前，需要对数据进行校验。
  var rx_one = /^[\],:{}\s]*$/;
  var rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
  var rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
  var rx_four = /(?:^|:|,)(?:\s*\[)+/g;

  if (
    rx_one.test(
      json.replace(rx_two, "@")
          .replace(rx_three, "]")
          .replace(rx_four, "")
    )
  ) {
    var obj = eval("(" +json + ")");
  }

  // 2. ew Function 实现
  //     Function 与 eval 有相同的字符串参数特性。
  var json = '{"name":"小姐姐", "age":20}';
  var obj = (new Function('return ' + json))();

```




