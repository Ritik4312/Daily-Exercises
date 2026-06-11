const users = new Map();
async function getAllUsers(){
    const res = await fetch("http://localhost:3000/users").then(response => response.json());
    res.forEach(element => {
        users.set(element.id, element);    
    });
    printUsers(users);
    
}
const printUsers = (users) => {
    users.forEach((user)=>{
        console.log(user);
    })
}
getAllUsers()

