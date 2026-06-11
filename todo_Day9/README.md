# TodoList from Start

1. create react app :- create-vite todo --template react
2. Enter inside the application 
3. install material UI, Routes,
4. Material UI :- 
    npm install @mui/material @emotion/react @emotion/styled
    npm install @mui/icons-material
5. To install Routers :- npm install react-router-dom
6 Edit Main.jsx
   - import { BrowserRouter } from 'react-router-dom'
   - <BrowserRouter>
        <App/>
     </BrowserRouter>,
7 add Components :- Header, Login,TodoList and Todo
8 Call Todo from TodoList
9 App.jsx:-  <>
    <Header/>
   <Login/>
   <TodoList/>
    </>

10 App.jsx
 import { Routes, Route } from "react-router-dom"
 <>
    <Header/>
    <Routes>
      <Route path = "/" element = {<Login/>}/>
      <Route path = "/TodoList" element = {<TodoList/>}/>
    </Routes>
    </>
11. Header should have links to access the different route
   import {Link } from 'react-router-dom'

   <Link to = "/">Login</Link>
            <Link to = "/TodoList">TodoList</Link>


