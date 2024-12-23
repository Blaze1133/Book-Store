const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    publishYear:{
        type: Number,
        required: true
    }
},
    {
        timestamps: true // createdAt
    }
);

module.exports = mongoose.model("Book",bookSchema); // export model based on schema