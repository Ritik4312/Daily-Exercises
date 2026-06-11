const express = require('express');
const port = 3000;
// Database connection
require('../dbConnection/db');
const userRouter = require('./router/User');

const app = express();
app.use(express.json());
app.use("/api", userRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
