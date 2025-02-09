const mongoose = require('mongoose');

const jwtuserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// Export the model
module.exports = mongoose.model('JwtUser', jwtuserSchema);
