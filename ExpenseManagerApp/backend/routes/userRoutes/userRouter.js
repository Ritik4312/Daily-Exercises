const express = require('express');
const router = express.Router();

//get user name and password from UI for Login
router.post("/login",async(req,res)=>{
    console.log("from login route");
    const mydata = req.body;
     console.log(mydata.username);
    let messager = {"message":"failed"};
   await fetch("http://localhost:3001/users")
    .then(res=>res.json())
    .then(data=>{

       data.map(ele=>{
        if(mydata.username == ele.userName && mydata.password == ele.password){
            console.log("inside if");
            message= {"message":"successfull"};
           }
        })
       });
       
       
      res.send(message);
})


module.exports = router;