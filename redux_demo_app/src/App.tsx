
import { useSelector } from 'react-redux';
import './App.css'
import type { RootState } from './redux/store';
import { useDispatch } from 'react-redux'
import { decriment, increment } from './redux/counterSlice';
import {useTitle,useFetch} from './hook/useTitle';
function App() {
  const dispatch = useDispatch();
  const count = useSelector((state:RootState) => state.counter.count);
  useTitle(`Count: ${count}`);
  const userData = useFetch("http://localhost:3000/Todos")
  console.log(userData);
  
  return (

    <><h1>{count}</h1>
     <button onClick={() =>dispatch(increment())}>
      Increment
     </button>
     <button onClick={() =>dispatch(decriment())}>
      dec
     </button>
    </>
  )
}

export default App
