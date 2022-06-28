const express = require("express")
const router = express.Router()
const candidateModel = require("../models/candidateModel")




//get all candidates route
//det one candidate route
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

//delete a candidate { By Moderator }

module.exports = router