const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
        console.log("from login api");
        const username = req.body.name;
        const password = req.body.password;
        try{
               const user = await User.findOne({ name: username, password: password });
               console.log(user);
               if(!user){
                        res.status(401).json({ error: 'Invalid username or password' });
               }
               else{
                        const token = jwt.sign({ username: user.name, role: user.role }, 'your_secret_key', { expiresIn: '1h' });
                        console.log(token);
                        res.json(token);
               }
        }catch(error){
                res.status(500).json({ error: 'Failed to login' });
        }
       // res.json({ message: 'Login successful' });
       
});
module.exports = router;
