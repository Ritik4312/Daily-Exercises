function getAllUsers(){
    fetch("http://localhost:3000/users")
    .then(response => response.json())
    .then(data => {
        data.forEach(user=>{
            userMap.set(user.id, user);
        });
        console.log("data from fetch:- ",userMap);
        
    })
}