```ts
let MyPromise = require('./promise')
const p1 = new MyPromise((resolved, rejected) => {
  resolved('我 resolved 了');  
});

p1.then((res) => {
  console.log(res);
  return new MyPromise((resolved, rejected) => {
    setTimeout(() => {
      resolved('then1');
    }, 1000)
  });
})
.then((res) => {
  console.log(res);
  return new MyPromise((resolved, rejected) => {
    setTimeout(() => {
      resolved('then2');
    }, 1000)
  });
})
.then((res) => {
  console.log(res);
  return 'then3';
})

```