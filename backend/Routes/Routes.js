const express = require('express');
const  multer = require("multer")
const { userController, productController } = require('../Controller');
const router = express.Router();
const upload = multer({dest: '../frontend/src/assets/products'})
router.post("/signup", userController.signup)
router.post("/login", userController.login)
// router.get("/user", userController.verifyToken, userController.getUser)
// router.get('/refresh', userController.refreshToken,userController.verifyToken, userController.getUser )


router.post("/Product", upload.single("product-images") ,productController.addProduct)
router.get("/Products", productController.getProduct)





module.exports = router;
