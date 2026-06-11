const mongoos = require('mongoose');
const userSchema = new mongoos.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
     role:{
        type: String,
        default: "user" 
     }
})
module.exports = mongoos.model("user", userSchema)
