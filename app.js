const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()
const cookieparser = require('cookie-parser')
const path = require('path')
require('dotenv').config()
const connectDB  =require('./lib/mongodb')

// route importation
const indexRoute = require('./routes/index')
const signupRoute = require('./routes/signup')

// Extract from .env file
const PORT = process.env.PORT || 3000 // Default to 3000 if PORT is not set

// Setting of EJS
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

// Middlewares for dependdeties
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(__dirname, "public")))
app.use(cookieparser())
connectDB(process.env.MONGODB_URI).then(console.log("connected to mongodb"))

/// routting of defrent route as middleware
app.use("/" , indexRoute)
app.use("/signup" , signupRoute)



app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`))
