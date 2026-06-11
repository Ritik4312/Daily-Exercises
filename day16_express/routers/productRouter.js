const express = require('express')
const router = express.Router()

router.get("/",(req,res) => {
    res.send("Product Data")
})
router.post("/",(req,res) => {
    res.send("add Product in data base")
})
module.exports = router