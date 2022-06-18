// a.js
import { foo } from './b.mjs';
console.log('a.mjs in a.mjs');
export const bar = 1; // const 定义的变量不能提升，但是前面有 export 后，可以提升声明部分。
export const bar2 = () => {
  console.log('bar2');
}
export function bar3() {
  console.log('bar3');
}


// 打印
// [Module] { bar: <uninitialized>, bar2: <uninitialized>, bar3: [Function: bar3] }
// a.js
