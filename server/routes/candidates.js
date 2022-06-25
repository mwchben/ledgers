const express = require("express")
const router = express.Router()

//requiring this tables since candidate should GET list of voters and may require to see competitors
const candidateSchema = require("../models/candidate")
const voterSchema = require("../models/voter")

//get all voters route
//get all candidates route