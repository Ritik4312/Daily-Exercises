
const express = require('express')
const app = express()
// Build in Middleware
app.use(express.json())
app.use(express.static('public'))
// Routers 
const userRouter = require('./routers/userRouters')
const productRouter = require('./routers/productRouter')

app.use('/api/users', userRouter)
app.use('/api/products', productRouter)

app.listen(3000)