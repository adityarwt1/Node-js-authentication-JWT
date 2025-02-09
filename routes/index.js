const express = require('express');
const jwt = require('jsonwebtoken');
const indexRoute = express.Router();

indexRoute.get("/", (req, res) => {
    const token = req.cookies.token; // Get token from cookies
    let user = null;

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify JWT
            user = decoded; // Store decoded user data
        } catch (err) {
            console.error("Invalid Token:", err);
            res.clearCookie("token"); // Remove invalid token
        }
    }

    res.render("index", { user });
});

module.exports = indexRoute;
