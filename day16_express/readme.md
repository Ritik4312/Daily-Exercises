# what is Express
 - freamework of node js
 - lightweight web framework

 Steps to create Express Application
 - npm init --y
 - npm install express
 - npm install nodemon

 Create start script
 - "start":nodemon app.js

 # properties of Request
 - req.params
 - req.query
 - req.body
 - req.headers

# Properties of response
 - res.send()
 - res.json()
 - res.status()
 - res.sendFile()

 # app.js with Param demo
 const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
  })
app.get('/about',(req,res)=>{
    res.send("This is about page");
})

// Req properties (Params), 
// req property (Header,body)
// Example of URL localhost:3000/users/1
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const header = req.headers
    const body = req.body
    res.send(`Hello user with ${id}!, header = ${header}, body = ${body}`);

  })

// req property (Query)
// Example of URI localhost:3000/user?name=john
app.get('/search', (req, res) => {
    const name = req.query.name;
    res.send(`Hello ${name}!`);
  })



app.listen(3000,()=>{
    console.log("Server is running");
    
})

# Routes in Express
- seperation of the application in different modules /folders
- helps to make my code clean
      routers
        - userRouter.js
        - productRouter.js
      Controllers
      Services
      middlewares
      config
      public
      util


  Flow of Express Application
     Router
       ↓  
     Controller
       ↓  
     Service
       ↓  
     api/db
