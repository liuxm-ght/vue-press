```ts
// 树结构、扁平化数组相互转换

  // 测试数据
  const arr = [
    {id: 1, name: '部门1', pid: 0},
    {id: 2, name: '部门2', pid: 1},
    {id: 3, name: '部门3', pid: 1},
    {id: 4, name: '部门4', pid: 3},
    {id: 5, name: '部门5', pid: 4},
  ]
  // 目标
  const obj = {
    id: 1,
    name: "部门1",
    pid: 0,
    children: [
      {
        id: 2,
        name: "部门2",
        pid: 1,
        children: []
      },
      {
        id: 3,
        name: "部门3",
        pid: 1,
        children: [
          {
            id: 4,
            name: "部门4",
            pid: 3,
            children: [
              {
                id: 5,
                name: "部门5",
                pid:4,
                children: []
              }
            ]
          }
        ]
      }
    ]
  }

  // array to tree 【生成树结构】
    // 递归思路 时间复杂度 O(2^n)
    function getChildren(arr,parentId = 0) {
      const res = []
      for (const item of arr) {
        if(item.pid === parentId){
          res.push({...item,children:getChildren(arr,item.id)})
        }
      }
      return res
    }
    var tree = getChildren(arr)
    console.log(tree);

    // Hash思路 时间复杂度 O(n)
    function hashToTree(arr) {
      const hashMap = {}
      const res = []
      arr.forEach(item => {
        hashMap[item.id] = {
          ...item,children:item.children || []
        }
        if(item.id === 0){
          res.push(hashMap[item.id])
        }else{
          if(!hashMap[item.pid]){
            hashMap[item.pid] = {
              children:[]
            }
          }
          hashMap[item.pid].children.push(hashMap[item.id])
        }
      });
      return res
    }
    var tree2 = hashToTree(arr)
    console.log(tree2);

  // tree to array 【扁平化数据】
    // 栈思路 时间复杂度 O(n)
    function fn(obj) {
      const stack = [];         // 声明栈，用来存储待处理元素
      const res = [];           // 接收结果
      stack.push(obj);          // 将初始元素压入栈
      while(stack.length) {     // 栈不为空则循环执行
        const item = stack[0];  // 取出栈顶元素
        res.push(item);         // 元素本身压入结果数组
        stack.shift();          // 将当前元素弹出栈
        // 逻辑处理，如果当前元素包含子元素，则将子元素压入栈
        if (item.children && item.children.length) {
          stack.push(...item.children);
        }
      }
      return res;
    }
    fn(obj);

    // 递归思路 时间复杂度 O(2^n)
    function fn2(obj, res = []) { // 默认初始结果数组为[]
      res.push(obj); // 当前元素入栈
      // 若元素包含children，则遍历children并递归调用使每一个子元素入栈
      if (obj.children && obj.children.length) {
        for(const item of obj.children) {
          fn(item, res);
        }
      }
      return res;
    }
    fn2(obj);

```