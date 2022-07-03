const voterModel = require("../models/voterModel")
const candidateModel = require("../models/candidateModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

//VOTER!!!
//middleware to register wth req, res..................................................................
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
                res.json({ message: "You are now a voter" })
            })
            .catch(error => {
                res.json({ message: "An err occured!" })
            })
    })
}
//middleware to login with req, res....................................................................
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
                            message: "Voter successfull login!",
                            token: token
                        })
                    }
                    else {
                        res.json({ message: "Password mismatch!" })
                    }
                })
            } else {
                res.json({ message: "Voter does not exist" })
            }
        })
}
//middleware to getID..................................................................................
async function getVoter(req, res, next) {
    let voter
    try {
        voter = await voterModel.findById(req.params.id)
        if (voter == null) {
            return res.status(404).json({ message: "Cannot find voter" })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
    res.voter = voter
    next()
}



//CANDIDATE!!!!
//middleware to register with req, res..................................................................
const registerCandidate = (req, res, next) => {

    bcrypt.hash(req.body.password, 5, function (err, hashedPassword) {
        if (err) {
            res.json({ error: err })
        }
        let voter = new candidateModel({
            name: req.body.name,
            email: req.body.email,
            regno: req.body.regno,
            password: hashedPassword
        })
        voter.save()
            .then(voter => {
                res.json({ message: "You are now a candidate" })
            })
            .catch(error => {
                res.json({ message: "An error occured!" })
            })
    })
}
//middleware to login with req, res.....................................................................
const loginCandidate = (req, res, next) => {
    let email = req.body.email
    let password = req.body.password

    candidateModel.findOne({ email: email })
        .then(voter => {
            if (voter) {
                bcrypt.compare(password, voter.password, function (err, result) {
                    if (err) {
                        res.json({ error: err })
                    }
                    if (result) {
                        let token = jwt.sign({ regno: voter.regno }, "tokenValue", { expiresIn: "1hr" })
                        res.json({
                            message: "Candidate successfull login!",
                            token: token
                        })
                        // res.redirect('../../../vote-app/client/src/pages/Candidate')
                    }
                    else {
                        res.json({ message: "Password mismatch!" })
                    }
                })
            } else {
                res.json({ message: "Candidate does not exist" })
            }
        })
}
//middleware to getID....................................................................................
async function getCandidate(req, res, next) {
    let candidate
    try {
        candidate = await candidateModel.findById(req.params.id)
        if (candidate == null) {
            return res.status(404).json({ message: "Cannot find candidate" })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
    res.candidate = candidate
    next()
}

module.exports = { registerVoter, loginVoter, registerCandidate, loginCandidate, getVoter, getCandidate }