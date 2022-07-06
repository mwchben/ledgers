const mongoose = require("mongoose")

const voterSchema = new mongoose.Schema({
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
        required: [true, 'Password is required'],
        minlength: [7, 'Minimum password length is 7 characters']
    }
});

const voterModel = mongoose.model("voter", voterSchema) //args(name of model in db, schema)
module.exports = voterModel