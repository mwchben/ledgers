const express = require("express")
const router = express.Router()

//requiring this tables since voter should GET list of candidates
const voterModel = require("../models/voterModel")




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
router.get("/:id", (req, res) => {
    res.send(req.params.id)
})

//create a voter { SignUp }
router.post("/newVoter", async (req, res) => {
    try {
        const newVoter = await voterModel.create({
            name: req.body.name,
            email: req.body.email,
            regno: req.body.regno,
            password: req.body.password
        })

        res.status(201).json(newVoter)
    } catch (error) {
        res.status(400).json({
            message: error.message,
            // error: 'Duplicate email (check paper sheet on email unique) perrform in the create email splitting**'
        })
    }
})

//delete a voter { By Moderator }
router.get("/:id", (req, res) => {

})


module.exports = router
