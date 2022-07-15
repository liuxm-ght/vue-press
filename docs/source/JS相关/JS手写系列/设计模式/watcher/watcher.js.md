[[toc]]
## 发布订阅模式

### 总结：
  1. 依赖收集(收集观察者)，每个依赖有自己的更新函数
  2. 通知所有依赖执行自己的更新函数

### 代码实现
```ts
// 订阅者
class Subject {
  name: string; //实例上定义一个name属性
  state: string;
  observers: any[]; // 订阅器
  constructor(name:string) {
    this.name = name;
    this.observers = [];
    this.state = "";
  }
  attach(o) { // 订阅，添加观察者
    //传入观察者
    this.observers.push(o);
  }
  setState(newState) { // 通知，触发更新视图
    this.state = newState;
    this.observers.forEach((o) => o.update(this));
  }
}
// 观察者
class Observer {
  name: string;
  constructor(name) {
    this.name = name;
  }
  update(interviewee) {
    console.log(`${interviewee.name} say to: ${this.name} ZOE的${interviewee.state}`);
  }
}
let hr = new Subject("HR");
let observer1 = new Observer("内推者");
let observer2 = new Observer("面试者");
hr.attach(observer1);
hr.attach(observer2);
hr.setState("面试通过了");
// baby.setState("面试没通过");
```
