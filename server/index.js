const userRouter = require('./router/userRouter')
const productRouter=require('./router/productRouter')
const cartRouter=require('./router/cartRouter')
const connectdb = require('./config/db')
const express = require('express')
const dotenv = require ('dotenv')
const cors = require('cors')

dotenv.config();
connectdb()

const app =express()

app.use(express.json())
app.use(cors({origin: "*",credentials: true,methods: "*",allowedHeaders: ['Content-Type', 'Authorization']}));

app.use('/uploads',express.static('uploads'))
app.use('/users',userRouter)
app.use('/products',productRouter)
app.use('/cart',cartRouter)



const port = process.env.PORT ||5000;
app.listen(port,()=>console.log(`🚀 server is running on port ${port} 🚀`))
