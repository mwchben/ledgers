const express = require("express")
const router = express.Router()
const moderatorController = require('../controllers/moderatorController');

router.get('/', moderatorController.get)

module.exports = router
