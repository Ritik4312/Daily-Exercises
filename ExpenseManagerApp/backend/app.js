const express = require('express');
const app = express();
const cors= require('cors');
const port = 3000
// configuring the router
const expenseRouter = require('./routes/expenseRoutes/expenseRoutrer')
const userRouter = require('./routes/userRoutes/userRouter')

// call index.html as first page loaded
app.use(express.static('public'))
app.use(express.json())
app.use(cors())
// Calling Router
app.use("/api/expense",expenseRouter)
app.use("/api/users",userRouter)

//get user name and password from UI for Login


app.listen(port,()=>{
    console.log(`Server is running on port:- ${port}`)
})