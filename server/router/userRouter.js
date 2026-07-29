const express = require('express')
const usercontroller = require('../controller/usercontroller.js')
const {auth} = require('../middleware/authmiddleware.js')
const router = express.Router()


router.get("/getEmail",usercontroller.getEmail)
router.post("/register",usercontroller.register)
router.post("/login",usercontroller.login)

module.exports=router;