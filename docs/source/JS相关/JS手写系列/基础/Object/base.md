## 常用Object方法
* Object.defineProperty(target, key, options) 
  options可传什么参数？
    * value：给target[key]设置初始值
    * get：调用target[key]时触发
    * set：设置target[key]时触发
    * writable：规定target[key]是否可被重写，默认false
    * enumerable：规定了key是否会出现在target的枚举属性中，默认为false
    * configurable：规定了能否改变options，以及删除key属性，默认false，具

* Object.getPropertyOf(target) 
  替代 __proto__ 属性

* Object.setPropertyOf(target, prototype) 
  替代 __proto__ 属性

* Object.values
  获取值们

* Object.keys
  获取keys

* Object.entries
  获取键值对们

* Object.fromEntries
  entries的逆操作，将键值对转为对象

* Object.is(a,b)
  判断两个值是否相等，相当于===，但是能判断NuN和+0 -0的区别，==会自动隐式转换

* Object.assign(target,a,b,...)
  合并多个对象，属性相同会覆盖前面的
  如果用做拷贝用途，只能是浅拷贝

* Object.getOwnPropertyDescriptors(target)
  获取target的描述对象