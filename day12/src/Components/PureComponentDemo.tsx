import { useState } from "react";
import React,{PureComponent} from "react";

// Class Way
// class Child extends PureComponent{
//     render(){
//    // const [counter,setCounter]=useState(0); 
//     console.log("Child Rendered");
//     return (<>
//     <h1>Check Child</h1>
//     {/* <button onClick={()=>{
//         setCounter(counter+1)
//     }}>Click from child</button>
//     Counter bfrom child:- {counter} */}
//     </>)}
// }
// export default Child;

// Function Way:
type Props={
    name:string
}
const Child = React.memo(({name}:Props)=>{console.log("Rendring")
    return(<>

    <h1>Check Child:- {name}</h1>
    </>)})

export default Child;