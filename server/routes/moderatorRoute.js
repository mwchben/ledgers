const express = require("express")
const router = express.Router()

//requiring this tables since moderator should perform CRUD on them
const candidateModel = require("../models/candidateModel")

const voterModel = require("../models/voterModel")



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


//voter login continue with https://youtu.be/Ejg7es3ba2k?t=1287

//delete a voter route

// .........................................CANDIDATES !!........................................................
//get all candidates route

router.get("/", (req, res) => {
    res.render("")
})

//get a candidate route
//delete a candidate route

module.exports = router
