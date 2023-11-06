const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const userRouter = require('./route/userRoute')
const cors = require('cors')

// connect database
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('database connect successfully')
})
.catch((err)=>{
    console.log(err);
})


// midlle ware for post
app.use(express.json())
// middleware for cors
app.use(cors())


// middleware for router
app.use('/api', userRouter)


let PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log(`server listen tp port ${PORT}`)
})

module.exports = app;