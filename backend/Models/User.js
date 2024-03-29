const mongoose = require('mongoose')

const Schema  = mongoose.Schema

const userSchema = new Schema({
    
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    role: {
        type: Number,
        required: true,
    }

});



const Users  = mongoose.model('Users', userSchema)
module.exports = Users