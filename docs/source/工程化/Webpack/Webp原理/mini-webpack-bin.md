## mini webpack bin 代码

::: details
```ts
#!/usr/bin/env node

const path = require('path')
const {env} = require('process')
// console.log(path.resolve('./'),'当前命令所在目录');
console.log(env.ENV,'所在环境');
const webpack = require('../lib/webpack');
if(env.ENV === 'test'){
  const options = require( path.resolve(__dirname,'../../test-webpack/webpack.config.js'));
  options.refPath = path.resolve(__dirname,'../../test-webpack/') 
  new webpack(options).run();
}else{
  const options = require( path.resolve('./webpack.config'));
  new webpack(options).run();
}
```
:::