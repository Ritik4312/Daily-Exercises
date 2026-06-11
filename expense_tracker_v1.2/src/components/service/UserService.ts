import type { User } from "../model/user";
//
export const login =async (email:string,password:string):Promise<User> =>{
    let result:User = {id:0,firstName:"",lastName:"",email:"",password:""};
    await fetch("http://localhost:3000/users").then((res) => res.json())
    .then((data) =>{
        data.forEach((user:User) => {
            if(user.email === email && user.password === password){
                result = user;
            }
        })
    })
    return result;
}
export const getAll = async():Promise<User[]> =>{
    const result:User[] = [];
    
    await fetch("http://localhost:3000/users").then((res) => res.json())
    .then((data) =>{
        result.push(...data);
    })
    return result;
    }
// const add= () =>{

// }
// const update = () =>{

// }
