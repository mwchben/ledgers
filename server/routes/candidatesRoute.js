const express = require("express")
const router = express.Router()
const candidateModel = require("../models/candidateModel")

//middleware to getID................................................................
async function getUser(req, res, next) {
    let user
    try {
        user = await candidateModel.findById(req.params.id)
        if (user == null) {
            return res.status(404).json({ message: "Cannot find user" })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
    res.user = user
    next()
}
//...................................................................................


//get all candidates route { by Moderator }
router.get("/", async (req, res) => {
    try {
        const candidates = await candidateModel.find()
        res.send(candidates)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//det one candidate route { by Moderator}
router.get("/:id", getUser, (req, res) => {
    res.json(res.user)
})

//create a candidate { SignUp }
router.post("/", async (req, res) => {
    try {
        const newCandidate = await candidateModel.create({
            name: req.body.name,
            email: req.body.email,
            regno: req.body.regno,
            password: req.body.password
        })

        res.status(201).json(newCandidate)
    } catch (error) {
        res.status(400).json({
            message: error.message,
            // error: 'Duplicate email (check paper sheet on email unique) perrform in the create email splitting**'
        })
    }
})


//delete a candidate { By Moderator }
router.delete("/:id", getUser, async (req, res) => {
    try {
        await res.user.remove()
        res.json({ message: "deleted the candidate" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router