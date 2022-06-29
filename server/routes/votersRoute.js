const express = require("express")
const router = express.Router()
const voterModel = require("../models/voterModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

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
//....................................................................................


//get all voters route { by Moderator}
router.get("/", async (req, res) => {
    try {
        const voters = await voterModel.find()
        res.send(voters)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//get one voter route { by Moderator}
router.get("/:id", getUser, (req, res) => {
    res.json(res.user)
})

//create a voter { SignUp }
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
const loginVoter = (req, res, next) => {
    let emailLogin = req.body.email
    let password = req.body.password

    voterModel.findOne({ email: emailLogin })
        .then(voter => {
            if (voter) {
                bcrypt.compare(password, voter.password, function (err, result) {
                    if (err) {
                        res.json({ error: err })
                    }
                    if (result) {
                        let token = jwt.sign({})
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
router.post("/", registerVoter, async (req, res) => {
    // try {
    //     const newVoter = await voterModel.create({
    //         name: req.body.name,
    //         email: req.body.email,
    //         regno: req.body.regno,
    //         password: req.body.password
    //     })

    //     res.status(201).json(newVoter)
    // } catch (error) {
    //     res.status(400).json({
    //         message: error.message,
    //         // error: 'Duplicate email (check paper sheet on email unique) perrform in the create email splitting**'
    //     })
    // }
})

//delete a voter { By Moderator }
router.delete("/:id", getUser, async (req, res) => {
    try {
        await res.user.remove()
        res.json({ message: "deleted the voter" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


module.exports = router



//res.json vs res.send
//res.json eventually calls res.send, but before that it:
// respects the json spaces and json replacer app settings
// ensures the response will have utf-8 charset and application/json Content-Type