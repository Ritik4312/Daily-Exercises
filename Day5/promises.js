let promise = new Promise((resolve,reject)=>{
    let success = true
    if(success){
        resolve("Data resolver")
    }
    else{
        reject("Data rejected")
    }
});
promise.
    then((data) => {
        console.log("Success ",data);
        
    })
    .catch((error) => {
        console.log("Error ",error);
        
    })

