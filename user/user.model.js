const mongoose = require("mongoose");

// Define the User schema
const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// Create the User model from the schema
const Users = mongoose.model("Users", usersSchema);
module.exports = Users;