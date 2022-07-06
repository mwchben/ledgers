const mongoose = require("mongoose")

const candidateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    regno: {
        type: String,
        required: [true, 'Candidate regno is required']
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    }
});

const candidateModel = mongoose.model("candidate", candidateSchema)
module.exports = candidateModel


//ensure the errors customed made in the model creation here are seen in toast
// https://mongoosejs.com/docs/validation.html