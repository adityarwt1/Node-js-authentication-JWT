const express = require('express');
const authRoute = express.Router();

authRoute.get("/logout", (req, res) => {
    res.clearCookie("token"); // Remove JWT cookie
    return res.redirect("/");
});

module.exports = authRoute;
