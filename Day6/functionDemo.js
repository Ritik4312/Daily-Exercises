"use strict";
// function sayHello(name:string): string{
//     return `Hello ${name} !`
// }
// const message = sayHello("Ram");
// console.log(message);
// let check = (name:string) => console.log(name);
// check("Ram");
// // void as return type
// function data():void{
//     console.log("from data function");
// }
// optional Params
// default Params
// function data1(a:number,b:number = 12, c?:number):void {
//     console.log(`a= ${a}, b= ${b} , c=${c}`);
// }
// data1(1,2,3);
// data1(10)
// // Named Parameters
// function checkNameParams({a,b}:{a:number,b:string}){
//     console.log(`a= ${a}, b= ${b}`);
// }
// checkNameParams({a:12,b:"Ram"})
// Rest Parameters
function add(...numbers) {
    let sum = 0;
    numbers.forEach(a => {
        sum += a;
    });
    console.log(`Sun is = ${sum}`);
}
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
