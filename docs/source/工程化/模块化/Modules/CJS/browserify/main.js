// main.js
console.log('main.js ', require('./a.js').x);
console.log('main.js ', require('./b.js').x);
console.log(require.main === module);
// console.log('main.js ', require('./a.js').x);
// console.log('main.js ', require('./b.js').x);