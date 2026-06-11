const users = new Map();
async function getAllUsers(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let result = document.getElementById("result")
    let id = 0;
    let user = null;
    const res = await fetch("http://localhost:3000/users").then(response => response.json());
    res.forEach(element => {
       if(element.name == username && element.password == password){
            id = element.id;
            user = element }
    });
    if(id>0){
    result.innerHTML =`<h1>Success</h1>`;
    getMovies(user);
    }
}
async function getMovies(user){
    let data = document.getElementById("movie");
   console.log("Id of the user",user);
    
    const res = await fetch("http://localhost:3000/movies").then(response => response.json());
     res.forEach(element => {
            data.innerHTML+= ` name = ${element.name} , image ${element.img} 
            <button onclick = addToWatchList(${element.id},${JSON.stringify(user)})>AddtoWatchList</button><br>`
    });
    
}
async function addUser()
{
     let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let result = document.getElementById("result")
    let data = 0;
    const res = await fetch("http://localhost:3000/users",{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name:username,
            password:password
        })
    })
    data = await res.json();
    result.innerHTML =`<h1>Success</h1>`;
}
async function addToWatchList(movieid,user){
    user.watchList.push(movieid);
    console.log(user);
    const res = await fetch(`http://localhost:3000/users/${user.id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })
      data = await res.json();
      console.log(data);
      
    
}