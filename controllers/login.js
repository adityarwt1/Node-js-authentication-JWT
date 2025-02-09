const jwtuser = require("../models/jwtuser");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
    try {
        res.clearCookie("token"); // Clear previous token if any

        const { email, password } = req.body;

        // Find user by email
        const user = await jwtuser.findOne({ email });

        if (!user || user.password !== password) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        // Generate JWT Token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d" // Token expires in 7 days
        });

        res.cookie("token", token, { httpOnly: true, secure: true });

        return res.redirect("/");
    } catch (error) {
        console.error("Error while logging in:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};
