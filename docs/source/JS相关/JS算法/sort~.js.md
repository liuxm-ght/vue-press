```ts 
/**
  * 总结：
  * 冒泡排序：外层从右往左控制次数，内层从左往右，相邻比对交换，最右为大
  * 选择排序：外层从左往右控制次数，内层从左往右，与最左比对交换，最左为小
  * 插入排序：外层从左往右控制次数，内层从右往左，相邻比对交换，最左为小
  * 快速排序：取中间元素，一层遍历与中间元素比对，小放左数组，大放右数组，递归各数组，最终拼接在一起
  * 希尔排序：一层控制比对间隔，二层从左往右控制次数，三层从右往左，相邻间隔比对交互，最小为做
  * 
  * 归并排序、堆排序，有点难道， ，，，
 */



// 参考文章：https://juejin.cn/post/6844903656865677326#heading-26
// 参考文章：https://juejin.cn/post/6844903895789993997#heading-2
// 基本排序算法
  /* 一 冒泡排序 稳定 O(n^2)  空间O(1)
    冒泡排序：O(n^2)  实际O(n) ~ O(n^2) 之间
      后面有序
      思路：
        1.第一次遍历数组，找出数组中最大值，通过数组内元素前后比对，将最大的推到最右
        2.排除最大的，在剩下的数组中重复1程序
      编码：
        1.思路1有一个内层遍历，思路2有一个外层遍历
        2.外层遍历找出需要进行几次当前剩余arr的内层遍历
        3.内层遍历找出当前剩余arr中最大的元素
      注意：
        外层循环，从最大值开始递减，因为内层是两两比较，因此最外层当>=2时即可停止；
        内层是两两比较，从0开始，比较inner与inner+1，因此，临界条件是inner<outer -1
  */
  function BubleSort(arr){
    let len = arr.length
    for(let outer = len - 1 ; outer >= 1; outer-- ){ //控制循环次数 查位置n
      for(let inner = 0; inner <= outer; inner++){ //元素值互换 查元素n
        if(arr[inner] > arr[inner+1]){
          let temp = arr[inner] //用temp 来临时保存
          arr[inner] = arr[inner+1]
          arr[inner+1] = temp
        }
      }
    }
    return arr
  }
  let arr1 = [9,2,1,3,5,10,8]
  console.log(arr1);
  BubleSort(arr1)
  console.log(arr1);
  
      /*  
        排序中用到的交换策略是 用变量temp来保存临时值，ES6有没有更简单的实现方式？ 
        答：ES6解构赋值
        [arr[0],arr[1]] = [arr[1],arr[0]]
      */
      function BubleSortES6(arr){
        let len = arr.length
        for(let outer = len; outer >= 2; outer-- ){ //找结束位置，也是控制循环次数
          for(let inner = 0; inner <= outer - 1; inner++){ //找元素，也是替换元素
            if(arr[inner] > arr[inner+1]){
              [arr[inner],arr[inner+1]] = [arr[inner+1],arr[inner]] //ES6解构赋值
            }
          }
        }
        return arr
      }
      let arr2 = [7,2,1,3,5,10,8]
      BubleSortES6(arr2)
      console.log(arr2);

  /* 二 选择排序 不稳定 O(n) ~ O(n^2)  空间O(1)
    选择排序：O(n^2) 不稳定  实际O(n) ~ O(n^2) 之间
      思路：
        1.需要遍历len-1次，每次将最小的放当前循环的数组的最前面
        2.遍历第一次，将最小的放左边
        3.遍历第二次，从第二个元素开始遍历，以此类推
      编码：
        1.外层遍历，循环数组，做len-1的遍历，进行len-1排出最小元素
        2.内层遍历，循环当前遍历数组，排出最小元素
      注意：
        外层循环的i表示第几轮，arr[i]就表示当前轮次最靠前(小)的位置；
        内层从i开始，依次往后数，找到比开头小的，互换位置即可
  */
  function SelectSort(arr){
    let len = arr.length
    for (let i = 0; i < len - 1; i++) { //找开始位置n，也是控制次数
      for (let j = i + 1; j < len; j++) { //找元素n，也是替换元素
        // console.log(j,i);
        if (arr[j] < arr[i]) {
          [arr[i],arr[j]] = [arr[j],arr[i]]
        }
      }
    }
    return arr 
  }
  let arr3 = [3,2,5,7,1,8,4]
  SelectSort(arr3)
  console.log(arr3);

  /* 三 插入排序 稳定 O(n^2)  空间O(1)
    插入排序：O(n^2)
      前面有序
      思路：插入排序核心--扑克牌思想： 就想着自己在打扑克牌，接起来一张，放哪里无所谓，
            再接起来一张，比第一张小，放左边，继续接，可能是中间数，就插在中间....依次
      注意：
        1.往左比较的队列都是有序的

      分析： 注意这里两次循环中，i和j的含义：
        1.i是外循环，依次把后面的数插入前面的有序序列中，默认arr[0]为有序的，i就从1开始
        2.j进来后，依次与前面队列的数进行比较，因为前面的序列是有序的，因此只需要循环比较、交换即可
        3.注意这里的break，因为前面是都是有序的序列，所以如果当前要插入的值arr[j]大于或等于arr[j-1]，则无需继续比较，直接下一次循环就可以了。

  */
  function InsertSort(arr){
    let len = arr.length
    for (let i = 1; i < len.length; i++) { // 找位置n
      for (let j = i; j > 0; j--) { // 找元素n
        if (arr[j] < arr[j - 1]) {
          [arr[j],arr[j -1]] = [arr[j - 1],arr[j]]
        } else {
          break
        }
      }
    }
    return arr 
  }
  let arr4 = [30,20,50,70,10,80,40]
  InsertSort(arr4)
  console.log(arr4);

  /* 高级排序 下面
      高级排序算法
        如果所有排序都像上面的基本方法一样，那么对于大量数据的处理，将是灾难性的，老哥，只是让你排个序，你都用了O(n²)。 
        好吧，所以接下来这些高级排序算法，在大数据上，可以大大的减少复杂度。
  */
  /* 四 快速排序 不稳定 O(nlogn) - O(n^2) 空间O(logn)
      快速排序： O(nlogn) - O(n^2)
        快速排序可以说是对于前端最最最最重要的排序算法，没有之一了，面试官问到排序算法，快排的概率能有80%以上(我瞎统计的...信不信由你)。
          所以快排是什么呢？
            快排是处理大数据最快的排序算法之一。它是一种分而治之的算法，
            通过递归的方式将数据依次分解为包含较小元素和较大元素的不同子序列。
            该算法不断重复这个步骤直至所有数据都是有序的。
            简单说： 找到一个数作为参考，比这个数字大的放在数字左边，比它小的放在右边； 然后分别再对左边和右变的序列做相同的操作:
              1.选择一个基准元素，将列表分割成两个子序列；
              2.对列表重新排序，将所有小于基准值的元素放在基准值前面，所有大于基准值的元素放在基准值的后面；
              3.分别对较小元素的子序列和较大元素的子序列重复步骤1和2
        缺点：需要另外声明两个数组，浪费了内存空间资源。
  */
    // 方法一：
    function QuickSort(arr){
      if(arr.length <= 1){
        return arr
      }
      let left = [],
          right = [],
          current = arr.splice(0,1)[0] //取基准点的值，splice(index,1) 则返回的是含有被删除的元素的数组。同时原数组被截掉一个
          // 基准点可以是任意点，可以是中间数 arr[Math.floor(arr.length / 2)]
      for (let i = 0; i < arr.length; i++) { // 找元素 n
        if(arr[i] < current){ //找位置 logn 二分思想
          left.push(arr[i])
        }else{
          right.push(arr[i])
        }
      }
      return quickSort(left).concat(current,quickSort(right))
    }
    let arr5 = [212,66,44,55,10,80,40]
    var result = QuickSort(arr5)
    console.log(result);

    // 方法二：

    /* 五 希尔排序 不稳定 O(nlogn) - O(n(logn)^2)  空间O(1)
      希尔排序 O(nlogn) - O(n(logn)^2) 
        希尔排序是插入排序的改良算法，但是核心理念与插入算法又不同，它会先比较距离较远的元素，而非相邻的元素。
      注意
        n为1时跟插入排序是一模一样的，所以n的值是倒序的只能在最后才能为1，gap: [3,2,1]
  */
  function ShellSort(arr,gap) {
    for (let i = 0; i < gap.length; i++) {  //最外层循环，一次取不同的步长，步长需要预先给出
      let n = gap[i] //步长为n
      for (let j = i + n; j < arr.length; j++) { //接下类和插入排序一样，j循环依次取后面的数
        for (let k = j; k > 0 ; k-=n) { //k循环进行比较，和直接插入的唯一区别是1变为了n
          if (arr[k]<arr[k-1]) {
            [arr[k],arr[k-1]] = [arr[k-1],arr[k]]
            console.log(`当前序列为[${arr}] \n 交换了${arr[k]}和${arr[k-n]}`)
          }else{
            continue
          }
        }
      }
    }
    return arr
  }
  let arr6 = [81,66,'44A','44B',55,10,80,40]
  ShellSort(arr6,[3,2,1])
  console.log(arr6,'arr6');
  //v8在处理sort方法时，使用了插入排序和快排两种方案。 当目标数组长度小于10时，使用插入排序；反之，使用快速排序。
  // 辅助记忆
  //   时间复杂度记忆
  //   冒泡、选择、直接 排序需要两个for循环，每次只关注一个元素，平均时间复杂度为O(n²)(一遍找元素O(n)，一遍找位置O(n)）
  //   快速、归并、希尔、堆基于二分思想，log以2为底，平均时间复杂度为O(nlogn)(一遍找元素O(n)，一遍找位置O(logn))
  //   稳定性记忆-“快希选堆”（快牺牲稳定性）

  /* 六 归并排序 稳定 O(nlogn) 空间O(n) 最佳
      归并排序 O(nlogn) - O(n(logn)^2) 
      分析：https://juejin.cn/post/6844903895789993997
      第一，归并排序是原地排序算法吗 ？
        这是因为归并排序的合并函数，在合并两个有序数组为一个有序数组时，需要借助额外的存储空间。
        实际上，尽管每次合并操作都需要申请额外的内存空间，但在合并完成之后，临时开辟的内存空间就被释放掉了。在任意时刻，CPU 只会有一个函数在执行，也就只会有一个临时的内存空间在使用。临时内存空间最大也不会超过 n 个数据的大小，所以空间复杂度是 O(n)。
        所以，归并排序不是原地排序算法。
      第二，归并排序是稳定的排序算法吗 ？ merge 方法里面的 left[0] <= right[0] ，保证了值相同的元素，在合并前后的先后顺序不变。归并排序是一种稳定的排序方法。
      第三，归并排序的时间复杂度是多少 ？
        从效率上看，归并排序可算是排序算法中的 佼佼者 。
        假设数组长度为 n，那么拆分数组共需 logn 步, 又每步都是一个普通的合并子数组的过程，时间复杂度为 O(n)
        ，故其综合时间复杂度为 O(nlogn)。
        最佳情况：T(n) = O(nlogn)。
        最差情况：T(n) = O(nlogn)。
        平均情况：T(n) = O(nlogn)。
  */
  function MergeSort(arr) {
    //先拆分数组
    const len = arr.length
    if (len < 2) {
      return arr
    }
    let middle = Math.floor(len/2),
      left = arr.slice(0,middle),
      right = arr.slice(middle)
    return merge(MergeSort(left),MergeSort(right))
  }
  function merge(left,right) {
    //后合并数组
    let result = []
    while (left.length&&right.length) {
      // 注意: 判断的条件是小于或等于，如果只是小于，那么排序将不稳定.
      if (left[0] <= right[0]) {
        result.push(left.shift())
      }else{
        result.push(right.shift())
      }
    }
    while (left.length) result.push(left.shift())
    while (right.length) result.push(right.shift())
    return result
  }
  let arr6 = [81,66,'44A','44B',55,10,80,40]
  let newarr = MergeSort(arr6)
  console.log(newarr,'arr6');



  /* 七 堆排序 不稳定 O(nlogn)  空间O(1)
        堆得定义
          堆其实是一种特殊的树。只要满足这两点，它就是一个堆。

          堆是一个完全二叉树。
          完全二叉树：除了最后一层，其他层的节点个数都是满的，最后一层的节点都靠左排列。
          堆中每一个节点的值都必须大于等于（或小于等于）其子树中每个节点的值。
          也可以说：堆中每个节点的值都大于等于（或者小于等于）其左右子节点的值。这两种表述是等价的。

          对于每个节点的值都大于等于子树中每个节点值的堆，我们叫作大顶堆。
          对于每个节点的值都小于等于子树中每个节点值的堆，我们叫作小顶堆。
        思想
          1.将初始待排序关键字序列 (R1, R2 .... Rn) 构建成大顶堆，此堆为初始的无序区；
          2.将堆顶元素 R[1] 与最后一个元素 R[n] 交换，此时得到新的无序区 (R1, R2, ..... Rn-1) 和新的有序区 (Rn) ，且满足 R[1, 2 ... n-1] <= R[n]。
          3.由于交换后新的堆顶 R[1] 可能违反堆的性质，因此需要对当前无序区 (R1, R2 ...... Rn-1) 调整为新堆，然后再次将 R[1] 与无序区最后一个元素交换，得到新的无序区 (R1, R2 .... Rn-2) 和新的有序区 (Rn-1, Rn)。不断重复此过程，直到有序区的元素个数为 n - 1，则整个排序过程完成。
  */
  // 堆排序 不稳定 O(nlogn) 空间O(1)
  const heapSort = array => {
    console.time('堆排序耗时');
    // 初始化大顶堆，从第一个非叶子结点开始
    for (let i = Math.floor(array.length / 2 - 1); i >= 0; i--) {
      heapify(array, i, array.length);
    }
    // 排序，每一次 for 循环找出一个当前最大值，数组长度减一
    for (let i = Math.floor(array.length - 1); i > 0; i--) {
      // 根节点与最后一个节点交换
      swap(array, 0, i);
      // 从根节点开始调整，并且最后一个结点已经为当前最大值，不需要再参与比较，所以第三个参数为 i，即比较到最后一个结点前一个即可
      heapify(array, 0, i);
    }
    console.timeEnd('堆排序耗时');
    return array;
  };

  // 交换两个节点
  const swap = (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };

  // 将 i 结点以下的堆整理为大顶堆，注意这一步实现的基础实际上是：
  // 假设结点 i 以下的子堆已经是一个大顶堆，heapify 函数实现的
  // 功能是实际上是：找到 结点 i 在包括结点 i 的堆中的正确位置。
  // 后面将写一个 for 循环，从第一个非叶子结点开始，对每一个非叶子结点
  // 都执行 heapify 操作，所以就满足了结点 i 以下的子堆已经是一大顶堆
  const heapify = (array, i, length) => {
    let temp = array[i]; // 当前父节点
    // j < length 的目的是对结点 i 以下的结点全部做顺序调整
    for (let j = 2 * i + 1; j < length; j = 2 * j + 1) {
      temp = array[i]; // 将 array[i] 取出，整个过程相当于找到 array[i] 应处于的位置
      if (j + 1 < length && array[j] < array[j + 1]) {
        j++; // 找到两个孩子中较大的一个，再与父节点比较
      }
      if (temp < array[j]) {
        swap(array, i, j); // 如果父节点小于子节点:交换；否则跳出
        i = j; // 交换后，temp 的下标变为 j
      } else {
        break;
      }
    }
  };
  const array = [4, 6, 8, 5, 9, 1, 2, 5, 3, 2];
  console.log('原始array:', array);
  const newArr = heapSort(array);
  console.log('newArr:', newArr);
  // 原始 array:  [4, 6, 8, 5, 9, 1, 2, 5, 3, 2]
  // 堆排序耗时: 0.15087890625ms
  // newArr:     [1, 2, 2, 3, 4, 5, 5, 6, 8, 9]
  /**
   * 分析
      第一，堆排序是原地排序算法吗 ？
      整个堆排序的过程，都只需要极个别临时存储空间，所以堆排序是原地排序算法。


      第二，堆排序是稳定的排序算法吗 ？
      因为在排序的过程，存在将堆的最后一个节点跟堆顶节点互换的操作，所以就有可能改变值相同数据的原始相对顺序。
      所以，堆排序是不稳定的排序算法。


      第三，堆排序的时间复杂度是多少 ？
      堆排序包括建堆和排序两个操作，建堆过程的时间复杂度是 O(n)，排序过程的时间复杂度是 O(nlogn)，所以，堆排序整体的时间复杂度是 O(nlogn)。
      最佳情况：T(n) = O(nlogn)。
      最差情况：T(n) = O(nlogn)。
      平均情况：T(n) = O(nlogn)。

  */





  // 乱序
    // 参考文章：：https://juejin.cn/post/6844903863812620296
    /**
     * 将数组随机打乱
     * 场景：抽奖
    */
    /** 方法一：
     *   利用数组的API sort 来排序
     *   数组的API sort 在v8处理sort方法时，使用了插入排序和快排两种方案。 当目标数组长度小于10时，使用插入排序；反之，使用快速排序。
     *   缺点：
     *       sort 和 Math.random() 来实现数组乱序所存在的问题， 主要是由于缺少每个元素之间的比较，那么我们不妨将数组元素改造一下， 将其改造为一个对象
     *      实验结果各个位置的数字应该很接近，而不是像现在这样各个位置的数字相差很大。
     * */ 
    function sort_shuffle(arr) {
      return arr.sort(() => Math.random() - 0.5 )
    }

    /** 方法二：
     *  由于一方案的缺点， 升级下将数组元素改造一下， 将其改造为一个对象
     *  将数组中原来的值保存在对象的 val 属性中，同时为对象增加一个属性 ram ，值为一个随机数。
     *  缺点：
     *    虽然已经满足了随机性的要求，但是这种实现方式在性能上并不好，需要遍历几次数组，并且还要对数组进行 splice 操作。
    */
    let arr = [
      {
          val:'a',
          ram:Math.random()
      },
      {
          val:'b',
          ram:Math.random()
      }
      //...
    ]
    function obj_shuffle(arr) {
      let newArr = arr.map(item=>({val:item,ram:Math.random()}));
      newArr.sort((a,b)=>a.ram-b.ram);
      arr.splice(0,arr.length,...newArr.map(i=>i.val));
      return arr;
    }

    /** 方案三：
     *  Fisher–Yates
     *  这个算法其实非常的简单，就是将数组从后向前遍历，然后将当前元素与随机位置的元素进行交换。
     *  Fisher–Yates 算法只需要通过一次遍历即可将数组随机打乱顺序，性能极为优异~~
     */
    function shuffle(arr) {
      let m = arr.length;
      while (m > 1){
          let index = Math.floor(Math.random() * m--);
          [arr[m] , arr[index]] = [arr[index] , arr[m]]
      }
      return arr;
    }

```