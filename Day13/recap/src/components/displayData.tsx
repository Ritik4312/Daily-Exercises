import { useEffect } from "react";
function DisplayData(){
    const getUsers = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(["user1","user2","user3"])},2000)
    });
}
async function fetchUsers() {
    try{
        const users =  getUsers();
        console.log(users);
        
    }catch(err){
        console.log(err);
    }
    
}
   // Web Hook UseEffect
    useEffect(() =>{
    fetchUsers();
        // let pOutput = fetch("http://localhost:3000/Expenses")
        // let data = pOutput.then(res =>res.json()).then(data => console.log(data));
        // console.log(data);
        
        
    },[])
    return (
        <div>
            Data display
        </div>
    )

}
export default DisplayData;