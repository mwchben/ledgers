const express = require("express")
const router = express.Router()
const candidateLogController = require('../controllers/candidateLogController');

router.get('/', candidateLogController.get)

module.exports = router