const express = require("express")
const router = express.Router()
const voterLogController = require('../controllers/voterLogController');

router.get('/', voterLogController.get)

module.exports = router