## 继承

<CodeGroup>
  <CodeGroupItem title="原型链继承" active>

  ```ts
    function Animal() {
      this.colors = ['black', 'white']
    }
    Animal.prototype.getColor = function() {
      return this.colors
    }
    function Dog(params) {}
    Dog.prototype = new Animal()

    let dog1 = new Dog()
    dog1.colors.push('blue')
    let dog2 = new Dog()
    console.log(dog2.colors); // ['black', 'white', 'blue']
  ```
  ::: warning 缺点：
  1. 原型中包含的引用类型属性将被所有实例共享；
  2. 子类在实例化的时候不能给父类构造函数传参；
  把animal当成公共属性和方法来继承了，不能继承它的私有属性和方法
  :::
  </CodeGroupItem>
  <CodeGroupItem title="构造函数继承">

  ```ts
  function Animal(name) {
    this.name = name
    this.getName = function() {
      return this.name
    }
  }
  function Cat(name) { //继承了私有属性
    Animal.call(this,name)
  }
  Cat.prototype = new Animal() 
      
      // 
      // 缺点：
      // 
      //
  ```
  ::: warning  
  优点:
  1. 借用构造函数实现继承解决了原型链继承的 2 个问题：引用类型共享问题 以及 传参问题。

  缺点:
  1. 只继承了私有属性和方法
  2. 但是由于方法必须定义在构造函数中，所以会导致每次创建子类实例都会创建一遍方法。
  :::
  </CodeGroupItem>
  <CodeGroupItem title="组合继承">

  ```ts
  function Animal(name) {
    this.name = name
    this.colors = ['black', 'white']
    this.getAnimalColors = function(name) {
      console.log(this.colors);
    }
  }
  Animal.prototype.getName = function() {
    return this.name
  }
  function Dog(name, age) {
    Animal.call(this, name) //继承私有 属性和方法
    this.age = age
  }
  Dog.prototype =  new Animal() //继承公共 属性和方法
  Dog.prototype.constructor = Dog //指回原型对象的构造函数属性

  let dog1 = new Dog('奶昔', 2)
  dog1.colors.push('blue')
  let dog2 = new Dog('哈赤', 1)
  console.log(dog2) 
  // { name: "哈赤", colors: ["black", "white"], age: 1 }
  ```
  ::: warning 
  * 组合继承结合了原型链和盗用构造函数，将两者的优点集中了起来。
      * 基本的思路是使用原型链继承原型上的属性和方法，
      * 而通过盗用构造函数继承实例属性。
  * 这样既可以把方法定义在原型上以实现重用，又可以让每个实例都有自己的属性。 
  :::
  </CodeGroupItem>
  <CodeGroupItem title="寄生继承">

  ```ts
  function Animal(name) {
    this.name = name
    this.colors = ['black', 'white']
    this.getAnimalColors = function(name) {
      console.log(this.colors);
    }
  }
  Animal.prototype.getName = function() {
    return this.name
  }
  function Dog(name, age) {
    Animal.call(this, name) //继承私有 属性和方法
    this.age = age
  }
  // function F() {}
  // F.prototype = Animal.prototype
  // Dog.prototype =  new F() //原型链继承
  Dog.prototype =  Object.create(Animal.prototype) //原型链继承
  Dog.prototype.constructor = Dog //指回原型对象的构造函数属性
    
  let dog1 = new Dog('奶昔', 2)
  dog1.colors.push('blue')
  let dog2 = new Dog('哈赤', 1)
  console.log(dog2) 
  // { name: "哈赤", colors: ["black", "white"], age: 1 }
  ```
  ::: warning 
  * 组合继承已经相对完善了，但还是存在问题，
      * 它的问题就是调用了 2 次父类构造函数，
      * 第一次是在 new Animal()，
      * 第二次是在 Animal.call() 这里。
  * 所以解决方案就是不直接调用父类构造函数给子类原型赋值，而是通过创建空函数 F 获取父类原型的副本。
  * 寄生式组合继承写法上和组合继承基本类似，区别是如下这里：
  :::
  </CodeGroupItem>
  <CodeGroupItem title="class继承">

  ```ts
    class Animal {
      constructor(name) {
        this.name = name
      } 
      getName() {
        return this.name
      }
    }
    class Dog extends Animal {
      constructor(name, age) {
        super(name)
        this.age = age
      }
    }

  ```
  </CodeGroupItem>
</CodeGroup>


