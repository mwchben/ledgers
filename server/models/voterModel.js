const mongoose = require("mongoose")

const voterSchema = new mongoose.Schema({
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
        required: [true, 'Voter regno is required']
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    }
});

const voterModel = mongoose.model("voter", voterSchema) //args(name of model in db, schema)
module.exports = voterModel