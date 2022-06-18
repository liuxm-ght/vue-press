setTimeout(function setTimeout1(){
  console.log('setTimeout1')
}, 0)
var channel = new MessageChannel();
channel.port1.onmessage = function onmessage1 (){
console.log('postMessage')
Promise.resolve().then(function promise1 (){
  console.log('promise1')
})
};
channel.port2.postMessage(0);
setTimeout(function setTimeout2(){
  console.log('setTimeout2')
}, 0)
console.log('sync')