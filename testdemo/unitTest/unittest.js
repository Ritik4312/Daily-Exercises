function add(a,b){
    console.log("adding 2 numbers",a+b);
    return a+b;
}
function getFruits(){
    return ["apple","banana","grapes"];
}
function getEmployee(){
    return {
        'id': 101,
        'name':"john"
    }
}
add(1,3)
module.exports = {add,getFruits,getEmployee};