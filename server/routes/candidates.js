const express = require("express")
const router = express.Router()

//requiring this tables since candidate should GET list of voters and may require to see competitors

const candidateModel = require("../models/candidate")

const voterModel = require("../models/voter")


//get all voters route
//get all candidates route