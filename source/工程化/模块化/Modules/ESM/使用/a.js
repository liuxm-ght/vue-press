// a.js
console.log(foo);
console.log('a.js in a.js');

export const bar = 1; // const 定义的变量不能提升，但是前面有 export 后，可以提升声明部分。
export const bar2 = () => {
  console.log('bar2');
}

import { foo } from './b.js';

export function bar3() {
  console.log('bar3');
}


// 打印
// [Module] { bar: <uninitialized>, bar2: <uninitialized>, bar3: [Function: bar3] }
// a.js


/*
  之所以是这样的打印结果是因为：
    import export 变量都会被提升
    export提升在import前面
    所以在a引入b后，在预编译b时，b又引入了a，能打印出a的信息（export了3个属性），否则应该只会（export2个）
    如果改为commonjs的话，就是export2个属性，因为后面的还没执行

    ****ES6预编译会执行模块，
      在‘执行代码’的前几秒，将变量import、export、let、function等被提升，
      并且会预编译所有被import的模块
      预编译完成后再开始正式执行代码
*/