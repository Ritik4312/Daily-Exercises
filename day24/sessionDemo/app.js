const express = require('express');
const session = require('express-session');
const routes = require('./router/user');
const port = 3000;

const app = express();
app.use(express.json());
app.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: false
}));
app.use('/', routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
