const express = require('express');
const router = express.Router();

router.post("/login",(req,res)=>{
    const { username, password } = req.body;
    // For demonstration, we use hardcoded credentials
    if(username === "user1" && password === "password123"){
        req.session.user = { username };
        res.send("Login successful!");
    } else {
        res.send("Invalid credentials. Please try again.");
    }
});

router.get("/user",(req,res)=>{
    if(req.session.user){
        res.send(`Welcome ${req.session.user.username}, this is your profile.`);
    } else {
        res.send("Please log in to view your profile.");
    }
});
module.exports = router;