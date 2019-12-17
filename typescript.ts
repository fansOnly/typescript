// let isBool: boolean = true

// console.log(isBool)

// // let createBool: boolean = new Boolean(1)

// // console.log(createBool)

// function test(): void {
//     console.log(1)
// }

// test()


// let un: void = null

// let un2: void = undefined

// let un3: number = null

// let un4: number = undefined

// let un5: null

// let un6: number = un5

// // let un7: number = un



// let str: string | number

// str = 1

// console.log(str.length)
// str = '1'
// console.log(str.length)
// console.log(typeof str)


// object
// interface Person {
//     readonly id: number;
//     name: string;
//     age?: string;
//     [propeName: string]: any;
// }

// let li: Person = {
//     name: 'loi',
//     // age: '20',
//     gender: 'male',
// }

// li.id = 2

// console.log(li, typeof li)

// array
// let arr: number[] = [1,2,3,4]
// // arr.push('')

// let arr3: Array<number> = [1,2,3,4]

// interface numberArray {
//     [index: number]: number;
// }

// let arr4: numberArray = [1,2,3,4]

// // let arr2: number[] = [1,2,3,'']

// function fn() {
//     let args: IArguments = arguments;
//     console.log(args)
// }

// fn();


// let list: any[] = [1,'2', [], {}]



// function

// function sum(x: number, y: number): number {
//     return x + y;
// }

// console.log(sum(1,2,3))
// console.log(sum(1))
// console.log(sum(1, 2))

// let sum: (x: number, y: number) => number = function(x: number, y: number): number {
//     return x + y;
// }

// console.log(sum(1, 2), typeof sum(1, 2))

// interface func {
//     (x: string, y: string): boolean;
// }

// let has: func;
// has = function(x: string, y: string) {
//     return y.includes(x);
// }

// console.log(has('1', 'xxy'))

// let fn2 = function(x: string, y?: string): string {
//     return `hello, ${y ? x + y : x}`;
// }

// console.log(fn2('li'))
// console.log(fn2('zhang', 'haha'))


// function buildName(firstName: string = 'Tom', lastName: string) {
//     return firstName + ' ' + lastName;
// }
// let tomcat = buildName('Tom', 'Cat');
// console.log(tomcat)
// let cat = buildName(undefined, 'Cat');
// console.log(cat)

// function test(array: any[], ...rest: any[]) {
//     rest.forEach(item => {
//         array.push(item)
//     })
//     return array;
// }

// let r = test([], 1, 2, 3)

// console.log(r)


// function reverse(x: number): number;
// function reverse(x: string): string;
// function reverse(x: number | string): number | string {
//     if (typeof x === 'number') {
//         return Number(x.toString().split('').reverse().join(''))
//     } else {
//         return x.split('').reverse().join('')
//     }
// }

// let r1 = reverse(1234455);
// let r2 = reverse('hello');

// console.log(r1, r2);

// function getlen(x: string | number): number {
//     if ((<string>x).length) {
//         return (<string>x).length;
//     } else {
//         return x.toString().length;
//     }
// }

// console.log(getlen(132123))

// declare function jquery(selector: string): any;

// declare namespace jquery {
//     interface ajaxSettings {
//         method?: 'get' | 'post';
//         data?: any;
//     }
//     function ajax(url: string, settings?: ajaxSettings): void;
// }

// let config: jquery.ajaxSettings = {
//     method: 'get',
//     data: {
//         name: 'test'
//     }
// }

// jquery.ajax('api/test', config)


// let body: HTMLElement = document.body;
// let div: NodeList = document.querySelectorAll('div');
// document.addEventListener('click', function(e: MouseEvent) {
//     console.log(e.currentTarget);
// })

// let tup: [string, number]
// tup = ['tom', 1]
// tup.push(2)
// console.log(tup)
// tup.push(false)



// **************************************************************
// 用接口定义函数的形状
// interface searchFunc {
//     (source: string, subString: string): boolean;
// }

// let mysearch: searchFunc
// mysearch = function(source: string, subString: string) {
//     return source.search(subString) !== -1
// }

// console.log(mysearch('122345', '5'))
// **************************************************************



// **************************************************************
// 类的继承
// 公共/私有/受保护--属性/方法
// class Animal {
//     public readonly name;
//     protected age;
//     public constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// class Cat extends Animal {
//     constructor(name, age) {
//         super(name, age);
//         console.log(this.name, this.age)
//     }
// }

// let pig = new Animal('pig', 1);
// console.log(pig)

// let c1 = new Cat('cat1', 1);
// console.log(c1)
// c1.name = 'cat2'
// **************************************************************

// **************************************************************
// 抽象类
// abstract class Animal {
//     // public name: string;
//     public constructor(public name: string) {
//         this.name = name;
//     }
//     public abstract say() {}
// }

// class Cat extends Animal {
//     public say(): void {
//         console.log(`${this.name} is haha.`)
//     }
// }

// let cat: Animal = new Cat('kity');
// cat.say();
// **************************************************************

// **************************************************************
// interface Alarm {
//     alert(): void;
// }

// interface Light {
//     lightOn(): void;
//     lightOff(): void;
// }

// // 接口继承接口
// interface LightAbleAlarm extends Alarm {
//     lightOn(): void;
//     lightOff(): void;
// }

// class Door {}

// // 类实现接口
// class SecurityDoor extends Door implements Alarm {
//     alert() {
//         console.log('this is a secerity door..')
//     }
// }

// // 类实现接口
// class Car implements Alarm, Light {
//     alert() {
//         console.log('this is a car...')
//     }
//     lightOn() {
//         console.log('light is on.')
//     }
//     lightOff() {
//         console.log('light is of..')
//     }
// }

// // 接口继承类
// class Point {
//     x: number;
//     y: number;
// }

// interface Point3d extends Point {
//     z: number;
// }

// let point: Point3d = {x: 1, y: 2, z: 3}

// // 混合类型
// interface Counter {
//     (start: number): string;
//     interval: number;
//     reset(): void;
// }

// function getCounter(): Counter {
//     let counter = <Counter>function(start: number) {
//         console.log(start)
//     }
//     counter.interval = 111
//     counter.reset = function() {
//         console.log(this)
//     }
//     return counter;
// }

// let c = getCounter();
// c(10);
// c.interval = 123;
// c.reset();
// **************************************************************

// **************************************************************
// 泛型
// function createArray<T>(length: number, value: T): Array<T> {
//     let result: T[] = [];
//     for(let i = 0; i < length; i++) {
//         result[i] = value
//     }
//     return result;
// }

// let r1 = createArray(5, 'x');
// console.log(r1)
// let r2 = createArray(3, 2);
// console.log(r2)


// function swap<T, U>(tuple: [T, U]): [U, T] {
//     return [tuple[1], tuple[0]]
// }

// let s = swap(['x', 2]);
// console.log(s)


// // 泛型约束
// interface lengthwise {
//     length: number;
// }

// function hasLength<T extends lengthwise>(arg: T): T {
//     console.log(arg.length)
//     return arg;
// }

// hasLength(1..toString());


// // 类型参数相互约束
// function copyFields<T extends U, U>(target: T, source: U): T {
//     for (let id in source) {
//         target[id] = (<T>source)[id]
//     }
//     return target;
// }

// let x = {a: 1, b: 2, c: 3, d: 4}
// let y = copyFields(x, {a: 5, d: 6})
// console.log(y)


// // 泛型接口
// interface createArrayFunc<T> {
//     (length: number, value: T): Array<T>
// }

// let createArray2: createArrayFunc<number>;

// createArray2 = function<T>(length: number, value: T): Array<T> {
//     let result: T[] = []
//     for (let i = 0; i < length; i++) {
//         result[i] = value;
//     }
//     return result;
// }

// let a2 = createArray2(4, 'x');
// console.log(a2)


// // 泛型类
// class xNumber<T> {
//     zeroValue: T;
//     add: (x: T, y: T) => T;
// }

// let xm = new xNumber<number>();

// xm.zeroValue = 0;
// xm.add = function(x, y) { return x + y; };
// console.log(xm, xm.add(1, 2))
// **************************************************************


// **************************************************************
// 类和接口的合并
interface Alarm {
    price: number;
    alert(x: string): string;
}

interface Alarm {
    time: number;
    alert(x: string, t: string): string;
}
// **************************************************************