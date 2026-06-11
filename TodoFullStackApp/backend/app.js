const express = require('express');
const app = express();
const PORT = 3000;
// using router in app.js
const todoRouter = require('./routers/todoRouter');
// use CORS to connect backend and frontend
const cors = require('cors');
app.use(cors());

app.use(express.json());

app.use('/api/todos', todoRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})