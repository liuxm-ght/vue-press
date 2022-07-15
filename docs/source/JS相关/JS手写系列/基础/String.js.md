```ts
/**
 * 总结：
 *  IndexOf：
 *    从fromIndex遍历字符串，判断是否跟搜索字符串第一个字母相同，如果是从字符串截取与搜索字符串相同的长度的字符进行比对，相同返回index
 * 
*/
String.prototype.myIndexOf = function(searchItem, fromIndex){
  var len = this.length, index = -1;

  if(!fromIndex||fromIndex<0){//若未传该参数或为负值时，则从字符串首位开始
    fromIndex = 0;
  }

  if(fromIndex>=len){//若该参数大于或等于字符串长度时，则从string.length开始(即：返回-1)
    fromIndex = len;
  }

  for(var i = fromIndex; i<len; i++){
    if(searchItem[0] === this[i]){
      let s = this.slice(i,i+searchItem.length)
      if(searchItem === s) {
        index = i;
        break
      }
    }
  }

  return index;
}
var str = 'abvdds';
console.log(str.myIndexOf('bvd')); //1
console.log(str.myIndexOf('v',-1)); //2
console.log(str.myIndexOf('d',3));//3
console.log(str.myIndexOf('d',4));//4

```
