// // basic function
// function add(){
//     let a=10;
//     let b=20;
//     let c=a+b;
//     console.log("sum = "+c);
// }

// // function with parameters
// let a=10;
// let b=20;
// function add(a,b){
//     let c=a+b;
//     console.log("sum = "+c);
// }

// // function with return
// function add(a,b){
//     let c=a+b;
//     return c;
// }
// let result = add(a,b);

// Arrow Function
// let data = (a,b) => a+b;
// console.log(data(10,20));

// function as expression
//  let data = function (a,b){ return a+b }
//  console.log(data(12,13));
// let a=10;
// let b=20;   
// console.log((a,b)=>{return a+b})
// returning a function from return of a function
function add(a=10,b =12){
    console.log("a= ",a)
    console.log("b= ",b);
    
    return function(a,b){
        return a+b;
    }

}
// let data = add()
// console.log("data = ",data(10,12));

let data=add(5,6)
console.log(data(5,6))

// function add(a=10,b=12){
//     return (a,b)=> {
//         console.log("runction return from return type") 
//         return a+b
//     } 
// }


 