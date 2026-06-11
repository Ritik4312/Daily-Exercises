# LazyLoading
 - loading of the component whenever it is required 
 import { Suspense,lazy } from 'react'
const Header = lazy(() => import('./components/Header/Header.tsx'))
const Login = lazy(() => import('./components/Login/Login.tsx'))
 <h1> Lazy Load</h1>
      <Suspense fallback = {<div>
        Component are loading..........
      </div>}>
          <Header/>
      </Suspense>
         <Suspense fallback = {<div>
        Component are loading..........
      </div>}>
          <Login/>
      </Suspense>

# code Splitting
 - dividing the code into smaller chunks

# Pure Component
  <UserCard name = "check" />