const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    
    name: {
        type: String, 
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
       type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: Image,
        required: true
    }
    
});

const Users = mongoose.model('User', userSchema);

module.exports = Users;

