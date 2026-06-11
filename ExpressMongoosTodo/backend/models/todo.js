const mongoos = require('mongoose');
const todoSchema = new mongoos.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String
    },
    status: {
        type: Boolean,
        default: false
    },
    createdOn: {
        type: Date,
        default: Date.now   
    }
})
module.exports = mongoos.model("myTodo", todoSchema)

