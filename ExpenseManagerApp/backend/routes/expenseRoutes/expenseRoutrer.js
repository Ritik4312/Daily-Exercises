const express = require('express');
const router = express.Router();

router.get('/:id',async (req,res) =>{
    const expId = req.params.id;
    const mydata =[]
    await fetch("http://localhost:3001/expenses")
    .then(res => res.json())
    .then(data =>{
        data.map(ele => {
            if(ele.userId == expId){
                console.log(ele)
                mydata.push(ele)
                
            }
        })
    })
    .catch(err => console.log(err))
   res.send(mydata);
})

module.exports = router;