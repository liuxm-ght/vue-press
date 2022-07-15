```ts
interface eventHub {
  arr: Array<Function>;
  on(fn: Function): void;
  emit(): void;
}
interface Person {
  age: number;
  name: string;
}
let eventHub: eventHub = {
  arr: [] as Array<Function>,
  // 订阅
  on(fn: Function) {
    this.arr.push(fn);
  },
  //   发布
  emit() {
    this.arr.forEach((fn) => fn());
  },
};
let person: Person = {} as Person;
eventHub.on(() => {
//订阅的事件里判断当 person长度为2时 打印person，
  if (Object.keys(person).length == 2) {
    console.log(person);
  }
});
setTimeout(function () {
  person.age = 27;
  //发布的时候去遍历 this.arr 并执行第一次
  eventHub.emit();
}, 10);
setTimeout(function () {
  person.name = "Zoe";
  //发布的时候去遍历 this.arr 并执行第二次
  eventHub.emit();
}, 20);

```