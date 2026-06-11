demo();
var check
function demo(){
    console.log("Hoisting demo");
    
}
check()
check = function(){
    console.log("from check");
    
}
// check();