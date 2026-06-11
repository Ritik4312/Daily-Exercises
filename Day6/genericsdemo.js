"use strict";
// Generics Example
function createData(num1, data2) {
    return [
        num1,
        data2
    ];
}
console.log("First call", createData(12, "hello"));
console.log("Second call", createData("Ram", 15));
console.log("Third call", createData(12, 12));
console.log("Second call", createData("Ram", "15"));
