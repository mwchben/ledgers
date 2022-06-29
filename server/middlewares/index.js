const voterModel = require("../models/voterModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

//middleware to register a voter with req, res................................................................
const registerVoter = (req, res, next) => {

    bcrypt.hash(req.body.password, 5, function (err, hashedPassword) {
        if (err) {
            res.json({ error: err })
        }
        let voter = new voterModel({
            name: req.body.name,
            email: req.body.email,
            regno: req.body.regno,
            password: hashedPassword
        })
        voter.save()
            .then(voter => {
                res.json({ message: "Success! You are added as a voter" })
            })
            .catch(error => {
                res.json({ message: "An err occured!" })
            })
    })
}

//middleware to login a voter with req, res................................................................
const loginVoter = (req, res, next) => {
    let email = req.body.email
    let password = req.body.password

    voterModel.findOne({ email: email })
        .then(voter => {
            if (voter) {
                bcrypt.compare(password, voter.password, function (err, result) {
                    if (err) {
                        res.json({ error: err })
                    }
                    if (result) {
                        let token = jwt.sign({ regno: voter.regno }, "tokenValue", { expiresIn: "1hr" })
                        res.json({
                            message: "login successful!",
                            token: token
                        })
                    }
                    else {
                        res.json({ message: "Password does not match!" })
                    }
                })
            } else {
                res.json({ message: "Voter does not exist" })
            }
        })
}


//middleware to getID................................................................
async function getUser(req, res, next) {
    let user
    try {
        user = await voterModel.findById(req.params.id)
        if (user == null) {
            return res.status(404).json({ message: "Cannot find user" })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
    res.user = user
    next()
}

module.exports = { registerVoter, loginVoter, getUser }