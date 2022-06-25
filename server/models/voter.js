const mongoose = require("mongoose")

const voterSchema = new mongoose.Schema({
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
    password: {
        type: String,
        required: true
    },
    privateKey: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model("Voter", voterSchema)