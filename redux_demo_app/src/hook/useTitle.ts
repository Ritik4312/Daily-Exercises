
function useTitle (title:string){
    useEffect(()=>{
        document.title = title
    },[title])

}
// export default useTitle;
import { useEffect } from "react";
import { useState } from "react";
function useFetch(url:string){
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(setData)
    },[])
    return data
}
export {useFetch,useTitle};