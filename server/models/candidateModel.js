const mongoose = require("mongoose")

const candidateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Your name is required!']
    },
    email: {
        type: String,
        required: [true, 'A tuk email is required!'],
        unique: true, //[true, 'Email is already registered!'],
        lowercase: true
    },
    regno: {
        type: String,
        required: [true, 'Registration number is required!']
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        minlength: [7, 'Minimum password length is 7 characters']
    }
});

const candidateModel = mongoose.model("candidate", candidateSchema)
module.exports = candidateModel


//ensure the errors customed made in the model creation here are seen in toast
// https://mongoosejs.com/docs/validation.html