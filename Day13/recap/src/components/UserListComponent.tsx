import React from "react"
type UserListProps={
    users:string[];
}
type LoadingProps = {
    isLoading:boolean;
}
function withLoading<T>(Component:React.ComponentType<T>){
    return function UserDataWithloding(props:T & LoadingProps){
        const {isLoading,...rest} = props;
        if(isLoading){
            return <h2>Loading.....</h2>
        }
        return <Component {...(rest as T)}></Component>
    
    }
}
function UserList({ users }:UserListProps){
    return (
        <div>
            {users.map((user)=>(
                <p key = {user}>{user}</p>
            ))}

        </div>
       
    );
}
const UserListWithLoading = withLoading<UserListProps>(UserList);
export default UserListWithLoading;

