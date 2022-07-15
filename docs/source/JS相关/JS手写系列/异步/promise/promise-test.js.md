## Promise测试代码
```ts
new Promise((resolve, reject) => {
  console.log("async1 start");
  console.log("async2");
  resolve(Promise.resolve());
}).then(() => {
  console.log("async1 end");
});

new Promise(function(resolve) {
  console.log("promise1");
  resolve();
}).then(function() {
  console.log("promise2");
}).then(function() {
  console.log("promise3");
}).then(function() {
  console.log("promise4");
});

[参考文章：]('https://segmentfault.com/q/1010000016913023')
```