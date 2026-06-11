// using the context
import { useContext } from "react";
import { UserContext } from "./UserContext";
function Profile(){
    const {user,setUser} = useContext(UserContext)
    return(
        <>Welocme :- {user}
        <button onClick={()=>setUser("john")}>Change User</button>
        </>
    )
}
export default Profile;