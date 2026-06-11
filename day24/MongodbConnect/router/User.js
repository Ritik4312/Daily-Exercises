const User = require('../../model/user');
const express = require('express');
const router = express.Router();
// const app = express();
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }
    catch (err) {
        console.error("Error fetching users:", err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
router.post('/users', async (req, res) => {
         console.log(req.body);
        const user = await User.create(req.body);
        res.status(201).json(user);
    
});
module.exports = router;