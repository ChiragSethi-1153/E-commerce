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
        data: Buffer,
        contentType: String,
        // required: true
    }
    
});

const Products = mongoose.model('Product', productSchema);

module.exports = Products;

