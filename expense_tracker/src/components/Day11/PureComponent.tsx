import React from 'react'
type Props = {
    name:string
} 
const UserCard = React.memo(({name}:Props)=>{
    console.log("Render");
    return <h2>{name}</h2>
    
})
export default UserCard