const express = require("express")
const router = express.Router()
const voterModel = require("../models/voterModel")

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
router.post("/", async (req, res) => {
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
router.delete("/:id", getUser, async (req, res) => {
    try {
        await res.user.remove()
        res.json({ message: "deleted the user" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


module.exports = router



//res.json vs res.send
//res.json eventually calls res.send, but before that it:
// respects the json spaces and json replacer app settings
// ensures the response will have utf-8 charset and application/json Content-Type