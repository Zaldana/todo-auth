const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(

    {
        firstName: {
            type: String,
        },

        lastName: {
            type: String,
        },

        username: {
            type: String,
            unique: true,
        },

        email: {
            type: String,
            unique: true,
        },

        password: {
            type: String,
        },

        date: {
            type: Date,
            default: Date.now
        },

        todoHistory: [{ type: mongoose.Schema.ObjectId, ref: "todo" }],

    }
);


module.exports = mongoose.model("user", userSchema);