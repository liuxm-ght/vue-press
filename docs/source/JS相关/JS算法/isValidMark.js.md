```ts

/*
  27 
  手写-判断括号字符串是否有效（小米）
    题目描述
    给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

    有效字符串需满足：
        左括号必须用相同类型的右括号闭合。
        左括号必须以正确的顺序闭合
      参考文章：https://juejin.cn/post/7004638318843412493

    解题信息中的第2条强调对称性，而栈（后入先出）入栈和出栈恰好是反着来，形成了鲜明的对称性。
 */
//栈解题法
function isValidMark(str) {
  if ( str.length % 2 === 1) return false
  let stack = [],
    markMap = {
      '{':'}',
      '(':')',
      '[':']',
    }
  for (let i = 0; i < str.length; i++) {
    if (['{','(','['].includes(str[i])) { //左符号塞入 stack
      stack.push(str[i])
    }else{ //右符合 从stack拿出最后一个匹配是否为对应左符号，否 false，是继续，直到stack被清空
      if ( str[i] != markMap[stack.pop()]) return false
    }
  }
  if (stack.length) return false 
  return true
}
//暴力消除法
const isValid = (s) => {
  while (true) {
    let len = s.length
    // 将字符串按照匹配对，挨个替换为''
    s = s.replace('{}', '').replace('[]', '').replace('()', '')
    // 有两种情况s.length会等于len
    // 1. s匹配完了，变成了空字符串
    // 2. s无法继续匹配，导致其长度和一开始的len一样，比如({],一开始len是3，匹配完还是3，说明不用继续匹配了，结果就是false
    if (s.length === len) {
      return len === 0
    }
  }
}

console.log(isValidMark('{{([])()[]{}}}'));

/* 
  28 手写-查找数组公共前缀（美团）
    题目描述
      编写一个函数来查找字符串数组中的最长公共前缀。
      如果不存在公共前缀，返回空字符串 ""。

      示例 1：

      输入：strs = ["flower","flow","flight"]
      输出："fl"

      示例 2：

      输入：strs = ["dog","racecar","car"]
      输出：""
      解释：输入不存在公共前缀。
*/

function longestCommonPrefix(strs) {
  let str0 = strs[0],
      index = 0; //以第一个元素为基准，利用index指针控制，如果其他元素index位置前的字符串与第一个元素的不匹配直接rutrun
  while (index < str0.length) {
    let curStr = str0.slice(0,index + 1) //第一个元素的index位置前的字符串
    for (let i = 0; i < strs.length; i++) {
      if (!strs[i] || !strs[i].startsWith(curStr)) { //是否以第一个元素的index位置前的字符串开头
        return str0.slice(0,index)
      }
    }
    index++
  }
  return str0 //仅有一个元素，或所有元素都一样时
}

console.log(longestCommonPrefix(['zxiaoming','xiaodong','xiaoling']));


/* 
29 手写-字符串最长的不重复子串
  题目描述
    给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

    示例 1:
    输入: s = "abcabcbb"
    输出: 3
    解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

    示例 2:
    输入: s = "bbbbb"
    输出: 1
    解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

    示例 3:
    输入: s = "pwwkew"
    输出: 3
    解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
        请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

    示例 4:
    输入: s = ""
    输出: 0
*/

function unRepeatStr(str) {
  let unRepeatObj = {},
      index = 0,
      len = str.length,
      unRepeatStr = '',
      unRepeatArr = [];
  while (index < len) {
    if(unRepeatObj[str[index]]){
      // unRepeatObj[str[index]]++
      unRepeatArr.push(unRepeatStr)
      unRepeatObj = {}
      unRepeatObj[str[index]] = 1
      unRepeatStr = ''
      unRepeatStr = str[index]
    }else{
      unRepeatObj[str[index]] = 1
      unRepeatStr += str[index]
    }
    index++
  }
  unRepeatArr.push(unRepeatStr)
  return unRepeatArr
}
console.log(unRepeatStr("aaabbbabcbcdcdef"))

const lengthOfLongestSubstring = function (str) {
  if (str.length === 0) {
    return 0
  }
  let left = 0,
      right = 1,
      max = 0;
  while (right <= str.length ) {
    let ls = str.slice(left,right),
        index = ls.indexOf(str[right])
    if (index > -1) { //ls 中存在相同字符
      left = left + index + 1
    } else { //ls 中不存在相同字符
      ls = str.slice(left,right+1)
      max = Math.max(max,ls.length)
    }
    right++;
  }
  return max
};
console.log(lengthOfLongestSubstring("aaabcdabcdcdcdef"))

/* 
30 手写-如何找到数组中第一个没出现的最小正整数 怎么优化（字节）
  给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
    请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。

    示例 1：
    输入：nums = [1,2,0]
    输出：3

    示例 2：
    输入：nums = [3,4,-1,1]
    输出：2

    示例 3：
    输入：nums = [7,8,9,11,12]
    输出：1
    这是一道字节的算法题 目的在于不断地去优化算法思路
*/
//第一版 O(n^2) 的方法
function firstMissingPositive(arr) {
  let index = 0,
      res = 1;
  while (index < arr.length) {
    console.log(index,'object');
    if(res == arr[index]){
      res++
      index = 0
    }else{
      index++
    }
  }
  return res
}


//第二版 时间空间均为 O(n)
function firstMissingPositive(nums){
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
  }
  for (let i = 1; i <= nums.length + 1; i++) {
    if (!set.has(i)) {
      return i;
    }
  }
};

//最终版 时间复杂度为 O(n) 并且只使用常数级别空间
function firstMissingPositive(nums){
  for (let i = 0; i < nums.length; i++) {
    while (
      nums[i] >= 1 &&
      nums[i] <= nums.length && // 对1~nums.length范围内的元素进行安排
      nums[nums[i] - 1] !== nums[i] // 已经出现在理想位置的，就不用交换
    ) {
      const temp = nums[nums[i] - 1]; // 交换
      nums[nums[i] - 1] = nums[i];
      nums[i] = temp;
    }
  }
  // 现在期待的是 [1,2,3,...]，如果遍历到不是放着该放的元素
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != i + 1) {
      return i + 1;
    }
  }
  return nums.length + 1; // 发现元素 1~nums.length 占满了数组，一个没缺
};
console.log(firstMissingPositive([1,3,4,-1,1]));


//31 手写-怎么在制定数据源里面生成一个长度为 n 的不重复随机数组 能有几种方法 时间复杂度多少（字节）
//第一版 时间复杂度为 O(n^2)
function getTenNum(testArray, n) {
  let result = [];
  for (let i = 0; i < n; ++i) {
    console.log(Math.floor(Math.random() * testArray.length),'i');
    const random = Math.floor(Math.random() * testArray.length);
    const cur = testArray[random];
    if (result.includes(cur)) {
      i--;
      break;
    }
    result.push(cur);
  }
  return result;
}
const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const resArr = getTenNum(testArray, 10);
console.log(resArr);

//第二版 标记法 / 自定义属性法 时间复杂度为 O(n)
function getTenNum(testArray, n) {
  let hash = {};
  let result = [];
  let ranNum = n;
  while (ranNum > 0) {
    const ran = Math.floor(Math.random() * testArray.length);
    if (!hash[ran]) {
      hash[ran] = true;
      result.push(ran);
      ranNum--;
    }
  }
  return result;
}
const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const resArr = getTenNum(testArray, 10);

//第三版 交换法 时间复杂度为 O(n)
function getTenNum(testArray, n) {
  const cloneArr = [...testArray];
  let result = [];
  for (let i = 0; i < n; i++) {
    debugger;
    const ran = Math.floor(Math.random() * (cloneArr.length - i));
    result.push(cloneArr[ran]);
    cloneArr[ran] = cloneArr[cloneArr.length - i - 1];
  }
  return result;
}
const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const resArr = getTenNum(testArray, 14);

//最终版 边遍历边删除 时间复杂度为 O(n)
function getTenNum(testArray, n) {
  const cloneArr = [...testArray];
  let result = [];
  for (let i = 0; i < n; ++i) {
    const random = Math.floor(Math.random() * cloneArr.length);
    const cur = cloneArr[random];
    result.push(cur);
    cloneArr.splice(random, 1);
  }
  return result;
}
const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const resArr = getTenNum(testArray, 14);


```