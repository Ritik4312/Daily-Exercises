function divide(a:number,b:number):number{
    if(b==0){
        throw new Error("Divide by zero error");
    }
    return a/b;
  
    
}
try{
    let result = divide(10,2);
    console.log(`Result is = ${result}`);
    
}
catch(error){
    console.log("the divide by zero error", error);
    
}

