const cartController = require('../controller/cartController')
const middleware = require('../middleware/authmiddleware')

const express = require('express')
const router = express.Router()

router.post('/addToCart',middleware.auth,cartController.addToCart)
router.get('/getCart',middleware.auth,cartController.getCart)
router.get('/quantity',middleware.auth,cartController.quantity)
router.get('/cartMoney',middleware.auth,cartController.cartMoney)
router.delete('/removeFromCart/:productId',middleware.auth,cartController.removeFromCart)


module.exports=router;