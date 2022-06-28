const express = require("express")
const router = express.Router()

//requiring this tables since voter should GET list of candidates
const candidateModel = require("../models/candidateModel")
const voterModel = require("../models/voterModel")




//get all candidates route

//create a voter { SignUp }
router.get("/createVoter", async (req, res) => {
    const voter = req.body
    const newVoter = new voterModel(voter)
    await newVoter.save()

    res.json(voter) //actually getting correct info on the backend

    //or

    try {
        const voter = await voterModel.create({
            name: req.body.name,
            email: req.body.email,
            regno: req.body.regno,
            password: req.body.password,
            privateKey: req.body.privateKey
        })

        res.json({ status: 'ok' })
    } catch (error) {
        res.json({
            status: 'error',
            error: 'Duplicate email (check paper sheet on email unique) perrform in the create email splitting**'
        })
    }
})

module.exports = router
