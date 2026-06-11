# full stack Todo Application
1. create a folder with name todofullstack
2. inside this folder create :-
   - backend forlder
   - todoui (React typescript application)
## backend:-
  - create package.json with npm init --y
  - install nodemon,express
  - create scripts
    - "start": "nodemon app.js",
    - "db": "json-server --watch ./db/db.json --port 3001"
  - create db.json inside db folder. 
  - create Todo Router code  :- 
        const express = require('express');
        const router = express.Router();

        router.get('/', (req, res) => {
            res.send('Welcome to the Todo API');
        });

        module.exports = router;
  - use this router in app.js
        const express = require('express');
        const app = express();
        const PORT = 3000;
        // using router in app.js
        const todoRouter = require('./routers/todoRouter');

        app.use('/api/todos', todoRouter);

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        }) 
   - test your api in postmen.
   - create api call the json data and connec the code with JSON server
   - start Jsonserver:-  using npm run db
   - test the api in postmen.
   - install cors for connectivity 
   - add const cors = require('cors');, app.use(cors()); in app.js
# UI
  - create components :- Login and Todo components
  - install react-router-dom
  - edit Main.tsx code :- 
    import {BrowserRouter } from 'react-router-dom'
    import { createRoot } from 'react-dom/client'
    import './index.css'
    import App from './App.tsx'

    createRoot(document.getElementById('root')!).render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
    )
 - todo:- 
 function Todo() {
  return (
    <div className="todo">
      <h2>Todo List</h2>
      {/* Todo list content will go here */}
    </div>
  );
}

export default Todo;
- Login:- 
 function Login() {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
- app.tsx

import { Route,Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Todo from './components/Todo'
import Login from './components/Login'

function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/todo" element={<Todo />} />
    </Routes>
      
    </>
  )
}

export default App

 - install Material UI :- 
     - npm install @mui/material @emotion/react @emotion/styled
     - npm install @mui/icons-material
 - Add Header component in the application
 - create Login component
 - create login service 
 - in login service use fetch api to call the backend API

 # Add todo

  - create a enter todo on Todos.tsx
  - create a Todo object and post it to the backend
  - backend will send the data to json server
