const express = require('express');
const productController = require('../controller/productController');
const middleware = require('../middleware/authmiddleware')
const router =express.Router();


router.get('/getAllproducts',productController.getAllproducts)
router.post('/createProduct', middleware.adminAuth , productController.createProduct )
router.delete('/deleteProduct/:id',middleware.adminAuth ,productController.deleteProduct)


module.exports=router;