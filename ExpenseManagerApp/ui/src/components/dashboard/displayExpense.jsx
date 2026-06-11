import getExpense from "../../service/expense"
import { useEffect,useState } from "react";
function DisplayExpense(){
    const [data,setData] = useState([])
    useEffect(() =>{
        let data = getExpense();
        data.then(ele => {setData(ele)})
    },[])
    return <div>
        {
            data.map(ele =>(
                <h3>{ele.title}</h3>
            ))
        }
    </div>
}
export default DisplayExpense