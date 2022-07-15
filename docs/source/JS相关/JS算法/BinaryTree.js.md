```ts
// 参考文章：https://juejin.cn/post/6844903656865677326#heading-26
/* 
  二分查找
    二分查找，是在一个 有序 的序列里查找某一个值，与小时候玩的猜数字游戏非常相啦：
    A: 0 ~ 100 猜一个数字
    B: 50
    A: 大了
    B: 25
    A: 对头，就是25
    因此，思路也就非常清楚了，这里有递归和非递归两种写法，先说下递归的方法吧：

    设定区间,low和high
    找出口： 找到target，返回target；
    否则寻找，当前次序没有找到，把区间缩小后递归
*/
  /* 
    递归方法  
  */  
    function binaryRecurrenceFind(arr,target,low = 0 ,high = arr.length - 1) {
      const n = Math.floor((high + low)/2)
      let cur = arr[n]
      if(cur === target){
        console.log('target 在下标' + Number(n+1));
      }else if (cur > target) {
        binaryRecurrenceFind(arr,target,low, n - 1)
      } else if(cur < target) {
        binaryRecurrenceFind(arr,target,n + 1 ,high)
      }
      return -1 // 停止条件是递归完成
    }
    binaryRecurrenceFind([1,2,3,5,6,8,9,10,15,28],10)

    /* 
      循环方法
    */
    function binarySortFind(arr,target){
      var low = 0,
          high = arr.length - 1,
          mid;
      while (low<=high) { // 停止条件是 high 小于 low
        mid = Math.floor((low+high)/2)
        if (arr[mid] == target) {
          return console.log('target 在下标' + Number(mid+1));
        } else if (arr[mid] > target) {
          high = mid - 1
        } else if (arr[mid] < target) {
          low = mid + 1
        }
      }
    }
    binarySortFind([1,2,3,5,6,8,9,11,15,28],12)


/* 二叉树 */
  class BST2{
    constructor(){
      this.root = null
    }
    insert(data){ //插入值
      let node = new TreeNode(data,null,null);
      if(!this.root){
        this.root = node
        return
      }
      let current = this.root
      while (current) {
        if (data < current.data) {
          if (!current.left) {
            current.left = node
            return
          }else{
            current = current.left
          } 
        } else {
          if (!current.right) {
            current.right = node
            return
          }else{
            current = current.right
          } 
        }
      }
      // while (current) {
      //   parent = current
      //   if(data > current.data){
      //     current = current.left
      //     if (!current) {
      //       current = parent.left
      //       return
      //     }
      //   } else {
      //     current = current.right
      //     if (!current) {
      //       current = parent.right
      //       return
      //     }
      //   }
      // }
    }
    _removeNode(node,data){
      if (node === null) {
        return null
      } 
      if (data === node.data) {
        if (node.left == null && node.right == null ) return null //不存在左右节点，null
        if (node.left == null) return node.right //不存在左节点，右节点顶上去
        if (node.right == null) return node.left //不存在右节点，左节点顶上去
        //左右都为非叶子节点
        //方法1 取右节点树上最小叶子节点替换 被删除的节点
        let rightMinNode = this.findMin(node.right)
        node.data = rightMinNode.data
        node.right = this._removeNode(node.right,rightMinNode.data)
        //方法2 取左节点树上最大叶子节点替换 被删除的节点
        // let leftMaxNode = this.findMax(node.left)
        // node.data = leftMaxNode.data
        // node.left = this._removeNode(node.left,leftMaxNode.data)
        return node
      } else if (data < node.data) {
        node.left = this._removeNode(node.left,data)
        return node
      } else if (data > node.data){
        node.right = this._removeNode(node.right,data)
        return node
      }
    }
    remove(data){ //删除node
      this.root = this._removeNode(this.root,data)
    }
    find(data){ //查值
      let current = this.root
      while (current) {
        if(data === current.data){
          return current
        }else if (data < current.data) {
          current = current.left
        } else {
          current = current.right
        }
      }
      return null 
    }
    findMin(node = this.root){ //查最小值node
      let current = node
      while (current.left) {
        current = current.left
      }
      return current
    }
    findMax(node = this.root){ //查最大值node
      let current = node
      while (current.right) {
        current = current.right
      }
      return current
    }
    inOrder(node){ //中序遍历 (左根右)
      if (node) {
        this.inOrder(node.left)
        node.show()
        this.inOrder(node.right)
      }
    }
    /* 
      非递归写法
      取跟节点为目标节点，开始遍历
      1.左孩子入栈 -> 直至左孩子为空的节点
      2.节点出栈 -> 访问该节点
      3.以右孩子为目标节点，再依次执行1、2、3
    */
    inOrder2(){
      let current = this.root,
          stack = []
      while (current || stack.length > 0) {
        while (current) {
          stack.push(current)
          current = current.left
        }
        current = stack.pop()
        current.show()
        current = current.right
      }
    }
    preOrder(node){ //前序遍历 (根左右)
      if (node) {
        node.show()
        this.inOrder(node.left)
        this.inOrder(node.right)
      }
    }
    preOrder2(){ //前序遍历 (根左右)
      let current = this.root,
        stack = []
      while (current || stack.length > 0) {
        while (current) {
          current.show()
          stack.push(current)
          current = current.left
        }
        current = stack.pop()
        current = current.right
      }
    }
    postOrder(node){ //后序遍历 (左右根)
      if (node) {
        this.inOrder(node.left)
        this.inOrder(node.right)
        node.show()
      }
    }
    postOrder2(){ //前序遍历 (根左右)
      var current = this.root
      var stack = []
      var last = null

      //出栈
      while (current || stack.length > 0) {
        //入栈
        while (current) {
          stack.push(current)
          current = current.left
        }

        current = stack[stack.length - 1]
        if (!current.right || current.right == last) {
          current = stack.pop()
          current.show()
          last = current
          current = null //继续弹栈
        } else {
          current = current.right
        }
      }
    }
    /* 
      广度遍历
        广度遍历是从二叉树的根结点开始，自上而下逐层遍历；在同一层中，按照从左到右的顺序对结点逐一访问
    */
    levelOrder(node,que = [this.root]){
      node = que.shift()
      if (node) {
        node.show()
        if (node.left) que.push(node.left)
        if (node.right) que.push(node.right)
        this.levelOrder(node,que)
      }
    }
    levelOrder2(node = this.root){ //非递归写法
      if (node) {
        let que = [node]
        while (que.length) {
          node = que.shift()
            node.show()
            if (node.left) que.push(node.left)
            if (node.right) que.push(node.right)
            this.levelOrder(node,que)
        }
      }
    }
    getDeep(node,deep){
      deep = deep || 0
      if (!node) {
        return deep
      }
      deep++
      var ldeep = this.getDeep(node.left,deep)
      var rdeep = this.getDeep(node.right,deep)
      return Math.max(ldeep,rdeep)
    }
    getNode(data){
      let current = this.root
      while (current) {
        if (data === current.data) {
          return current
        }else if (data < current.data) {
          current = current.left
        } else {
          current = current.right
        }
      }
      return current
    }
    getNode2(data,node = this.root){
      if (!node) {
        return null
      }
      if (data === node.data) {
        return node
      }else if (data < node.data) {
        return this.getNode2(data,node.left)
      } else {
        return this.getNode2(data,node.right)
      }
    }
  }
  class TreeNode{
    constructor(data,left,right){
      this.data = data;
      this.left = left;
      this.right = right;
    }
    show(){
      console.log(this.data);
    }
  }

  let tree = new BST2()
  tree.insert(6)
  tree.insert(8)
  tree.insert(7)
  tree.insert(9)
  tree.insert(4)
  tree.insert(5)
  tree.insert(2)
  tree.insert(1)
  tree.insert(3)
  tree.insert(10)

  // console.log(tree.root);
  // tree.inOrder2(tree.root)
  // tree.preOrder2(tree.root)
  // tree.postOrder2(tree.root)
  // tree.levelOrder2(tree.root)
  // tree.remove(8)
  // tree.remove(9)
  // tree.remove(10)
  // console.log(tree.root);
  // console.log(tree.getNode2(7));
  // console.log(tree.getDeep(tree.root));

  /* 
    二叉树重建
      输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
      例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。
      // 参考文章：https://zhuanlan.zhihu.com/p/143781444


      二叉树先到此告一段落了，后续深入算法后可以回来继续
  */

```

