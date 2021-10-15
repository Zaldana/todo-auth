
const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        date: {
            type: Date,
            default: Date.now
        },

        userId: {
            type: mongoose.Schema.ObjectId,
            ref: "userId"
        },

        todo: [{ type:String, ref: "todo" }],

        done: [{ type: mongoose.Schema.ObjectId, ref: "done" }]

    },

);

module.exports = mongoose.model("post", todoSchema);