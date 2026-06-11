const mongoose = require('mongoose');
const url = "mongodb+srv://amisha_db_user:amisha123@cluster0.lazbwqv.mongodb.net/mydb?appName=Cluster0";

mongoose.connect(url)
    .then(()=>{
        console.log("Connected to MongoDB");
    })
    .catch((err)=>{
        console.error("Error connecting to MongoDB:", err);
    });

module.exports = mongoose;