// Generics Example
function createData<S,T>(num1:S,data2:T){
    return [
        num1,
        data2
    ]
}
console.log("First call",createData<number,string>(12,"hello"));
console.log("Second call",createData<string,number>("Ram",15));
console.log("Third call",createData<number,number>(12,12));
console.log("Fourth call",createData<String,string>("Ram","15"));
