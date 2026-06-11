const login =async (userName,password)=>{
    console.log("from login dunction at UI")
    console.log(userName,password);
    let result = {}
    await fetch(`http://localhost:3000/api/users/login`,{
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({username: userName, password: password})
    }).then(res=>res.json())
    .then(data=>{
        console.log("from the then method",data);
        result = data;
    })
//    const data = await result.json();
//    console.log(data);
    return result;
}
export default login;