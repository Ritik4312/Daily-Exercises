import { useEffect } from "react";

function LazyLoding(){
    useEffect(()=>{
      console.log("Lazy is loaded");
    },[])
    return(
        <div>
            I am a Lazy Loding file
        </div>
    )
}
export default LazyLoding;