const userRouter = require('./router/userRouter')
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



const port = process.env.PORT ||5050;
app.listen(port,()=>console.log(`🚀 server is running on port ${port} 🚀`))
