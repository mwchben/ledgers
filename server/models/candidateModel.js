const mongoose = require("mongoose")

const candidateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    regno: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const candidateModel = mongoose.model("Candidate", candidateSchema)
module.exports = candidateModel

// date: {
//         type: Date,
//         default: Date.now
//     },