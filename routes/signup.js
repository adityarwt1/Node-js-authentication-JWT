const express = require('express');
const controller = require('../controllers/jwtuser');
const signupRoute = express.Router();

// Render the signup page
signupRoute.get("/", (req, res) => {
    res.render("signup");
});

// Handle user signup
signupRoute.post("/", controller.saveuser);

module.exports = signupRoute;
