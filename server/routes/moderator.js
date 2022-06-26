const express = require("express")
const router = express.Router()

//requiring this tables since moderator should perform CRUD on them
const candidateModel = require("../models/candidate")

const voterModel = require("../models/voter")



// .........................................VOTERS !!........................................................
//get all voters route
router.get("/getVoters", (req, res) => {
    voterModel.find({}, (error, result) => {
        if (error) {
            res.json(error)
        } else {
            res.json(result)
        }
    })
})

//get a voter route

//create a voter route (signUp form)
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

//voter login continue with https://youtu.be/Ejg7es3ba2k?t=1287

//delete a voter route

// .........................................CANDIDATES !!........................................................
//get all candidates route

router.get("/", (req, res) => {
    res.render("")
})

//get a candidate route
//delete a candidate route
