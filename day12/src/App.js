import logo from './logo.svg';
import './App.css';
// Lazy Loading ...............
// import { lazy,Suspense } from 'react';
// const LazyLoading=lazy(()=>import('./Components/LazyLoding.jsx'))
//........................................................
//............Pure Components.............................
// import { useState } from 'react';
// import Child from './Components/PureComponentDemo.tsx';
//........................................................
//............React Context API...........................
import { UserProvider } from './Components/UserContext';
import Profile from './Components/Profile';

function App() {
//  const [count, setCount] = useState(0);
  return (
    // ..................Lazy Loading Impl...................
    // <Suspense fallback={
    //   <h2>Loading....</h2>
    // }>
    // <LazyLoading></LazyLoading>
    // </Suspense>
    //........................................................
    //................Pure Components.........................
    // <div class = "App">
    //   <button onClick={()=>{setCount(count+1)}}>Click Me</button>
    //   Counter :- {count}
    //   <Child name= "check"/>
    //   </div>
     //........................................................
    //...................ContextProvider.................
    <>
      <h1>APP.JS</h1>
      <UserProvider>
        <Profile/>
        </UserProvider>     
    </>
  );
}

export default App;
