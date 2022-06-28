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
    }
});

const voterModel = mongoose.model("voters", voterSchema) //args(name of model in db, schema)
module.exports = voterModel