const express = require("express")
const router = express.Router()

//requiring this tables since candidate should GET list of voters and may require to see competitors

const candidateModel = require("../models/candidateModel")

const voterModel = require("../models/voterModel")


//get all voters route
//get all candidates route

//create a candidate { SignUp }
router.get("/signUp", (req, res) => {
    voterModel.find({}, (error, result) => {
        if (error) {
            res.json(error)
        } else {
            res.json(result)
        }
    })
})

module.exports = router