const express = require("express")
const router = express.Router()

//requiring this tables since moderator should perform CRUD on them
const candidateSchema = require("../models/candidate")
const voterSchema = require("../models/voter")
