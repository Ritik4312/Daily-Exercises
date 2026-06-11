import {getAll} from "../../service/UserService"
import type { User} from '../../model/user'
import { useEffect, useState } from "react";
import UserCard from "../User/UserCard";

function AdminDashboard (){
    const [users,setUsers] = useState<User[]>([])
    useEffect(()=>{
        getAll().then((data) => {
            setUsers(data)})
    },[])
    return(
        <div>
            {users.map((user:User) => ( 
                <>
               <UserCard user={user} key= {user.id}/>
                </>
            ))
            }
        </div>)
}
export default AdminDashboard;