const express = require("express")
const router = express.Router()

//requiring this tables since moderator should perform CRUD on them
const candidateModel = require("../models/candidate")

const voterModel = require("../models/voter")



// .........................................VOTERS !!........................................................
//get all voters route
router.get("/", (req, res) => {
    res.render("")
})

//get a voter route
//delete a voter route

// .........................................CANDIDATES !!........................................................
//get all candidates route
router.get("/", (req, res) => {
    res.render("")
})

//get a candidate route
//delete a candidate route
