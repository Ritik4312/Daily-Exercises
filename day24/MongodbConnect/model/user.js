const mongoos = require('mongoose');
const userSchema = new mongoos.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String
    }
})
module.exports = mongoos.model("user", userSchema,"user")