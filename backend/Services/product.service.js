const Products = require('../Models/Product');



const addProduct = async (payload) => {
    const { name, price, quantity, description, image} = payload
    const Product = new Products({
        name,
        price,
        quantity,
        description,
        image
    });
    try{
        Product.save();
    }catch(err){
        console.log(err)
    }
    return Product
}

const getProduct = async() => {
    try{
        const products = await Products.find({})
        return products
    }catch(err){
        console.log(err)
    }
}









module.exports = {
    addProduct,
    getProduct
}