const JwtUser = require('../models/jwtuser');
const jwt = require('jsonwebtoken');

// 1. extract name email password from url
// 2. check the user already exist or not
// 3. save the user to database 
// 4. use user id to make token 
// 5. finnaly set the token 
// 6. redirect to /

exports.saveuser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const user = await JwtUser.findOne({ email });
        if (user) { 
            return res.status(400).json({ error: "User already exists" });
        }

        
        const newuser = await JwtUser.create({ name, email, password });

        // Generate JWT Token
        const token = jwt.sign({ id: newuser._id }, process.env.JWT_SECRET);

        // Store token in cookie
        res.cookie("token", token);

        return res.redirect("/");
    } catch (error) {
        console.error("Error saving user:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};


