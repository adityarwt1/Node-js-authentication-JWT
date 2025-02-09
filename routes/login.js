const express = require('express')
const loginRoute = express.Router()
const controller = require("../controllers/login")


loginRoute.get("/",(req , res)=>{
    res.render("login")
})

loginRoute.post("/" , controller.login )
module.exports = loginRoute