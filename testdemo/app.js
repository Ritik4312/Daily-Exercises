const express = require('express');
const app = express();
app.use(express.json());
app.get('/hello', (req, res) => {
    res.send('Hello World!');
});
app.post('/hello', (req, res) => {
    const name = req.body.name;
    res.json({ message: `Hello ${name}!` });
});
module.exports = app;