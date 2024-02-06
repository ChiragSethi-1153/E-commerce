const {productService} = require('../Services')


const addProduct = async (req, res) => {
    try{
        const response = await productService.addProduct(req.body);
        return res.status(201).json(response)
    } catch (err) {
        console.log(err)
        res.status(500).send(err);
    }   
} 

const getProduct = async (req, res) => {
    try{
        const response = await productService.getProduct();
        return res.status(201).json(response)
    }
    catch(err){ 
        console.log(err)
        res.status(500).send(err);
    }
}


module.exports = {
    addProduct,
    getProduct
}