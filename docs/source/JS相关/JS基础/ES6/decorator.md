[[toc]]

### Decorator

### 介绍
1. 装饰者模式就是一种在不改变原类和使用继承的情况下，动态地扩展对象功能的设计理论。

2. ES6中Decorator功能亦如此，其本质也不是什么高大上的结构，就是一个普通的函数，用于扩展类属性和类方法

  这里定义一个士兵，这时候他什么装备都没有
  ```ts
  class soldier{ 
  }
  ```
  定义一个得到 AK 装备的函数，即装饰器
  ```ts
  function strong(target){
      target.AK = true
  }
  ```
  使用该装饰器对士兵进行增强
  ```ts
  @strong
  class soldier{
  }
  ```
  这时候士兵就有武器了
  ```ts
  soldier.AK // true
  ```
  上述代码虽然简单，但也能够清晰看到了使用Decorator两大优点：

  代码可读性变强了，装饰器命名相当于一个注释
  在不改变原有代码情况下，对原来功能进行扩展

### 用法
1. Docorator修饰对象为下面两种：
  * 类的装饰

    将装饰器行为进行分解，大家能够有个更深入的了解
    ```ts
    @decorator
    class A {}

    // 等同于

    class A {}
    A = decorator(A) || A;
    ```

    如果想要传递参数，可以在装饰器外层再封装一层函数
    ```ts
    function testable(isTestable) {
      return function(target) {
        target.isTestable = isTestable;
      }
    }

    @testable(true)
    class MyTestableClass {}
    MyTestableClass.isTestable // true

    @testable(false)
    class MyClass {}
    MyClass.isTestable // false
    ```

  * 类属性的装饰

    当对类属性进行装饰的时候，能够接受三个参数：
      * 类的原型对象
      * 需要装饰的属性名
      * 装饰属性名的描述对象

    首先定义一个readonly装饰器
    ```ts
    function readonly(target, name, descriptor){
      descriptor.writable = false; // 将可写属性设为false
      return descriptor;
    }
    ```
    使用readonly装饰类的name方法
    ```ts
    class Person {
      @readonly
      name() { return `${this.first} ${this.last}` }
    }
    ```
    相当于以下调用
    ```ts
    readonly(Person.prototype, 'name', descriptor);
    ```

### 应用场景
基于Decorator强大的作用，我们能够完成各种场景的需求，下面简单列举几种：

  使用react-redux的时候，如果写成下面这种形式，既不雅观也很麻烦
  ```ts
  class MyReactComponent extends React.Component {}

  export default connect(mapStateToProps, mapDispatchToProps)(MyReactComponent);
  ```

  通过装饰器就变得简洁多了
  ```ts
  @connect(mapStateToProps, mapDispatchToProps)
  export default class MyReactComponent extends React.Component {}
  ```
  
  将mixins，也可以写成装饰器，让使用更为简洁了
  ```ts
  function mixins(...list) {
    return function (target) {
      Object.assign(target.prototype, ...list);
    };
  }

  // 使用
  const Foo = {
    foo() { console.log('foo') }
  };

  @mixins(Foo)
  class MyClass {}

  let obj = new MyClass();
  obj.foo() // "foo"
  ```

  下面再讲讲core-decorators.js几个常见的装饰器
  * @antobind: autobind装饰器使得方法中的this对象，绑定原始对象
    ```ts
    import { autobind } from 'core-decorators';

    class Person {
      @autobind
      getPerson() {
        return this;
      }
    }

    let person = new Person();
    let getPerson = person.getPerson;

    getPerson() === person;
    // true
    ```

  * @readonly: readonly装饰器使得属性或方法不可写
    ```ts
    import { readonly } from 'core-decorators';

    class Meal {
      @readonly
      entree = 'steak';
    }

    var dinner = new Meal();
    dinner.entree = 'salmon';
    // Cannot assign to read only property 'entree' of [object Object]
    ```

  * @deprecate: deprecate或deprecated装饰器在控制台显示一条警告，表示该方法将废除
    ```ts
    import { deprecate } from 'core-decorators';

    class Person {
      @deprecate
      facepalm() {}

      @deprecate('功能废除了')
      facepalmHard() {}
    }

    let person = new Person();

    person.facepalm();
    // DEPRECATION Person#facepalm: This function will be removed in future versions.

    person.facepalmHard();
    // DEPRECATION Person#facepalmHard: 功能废除了
    ```