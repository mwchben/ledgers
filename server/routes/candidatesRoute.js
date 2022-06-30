const express = require("express")
const router = express.Router()
const candidateModel = require("../models/candidateModel")
const authMiddleware = require("../middlewares/index")



//get all candidates route { by Moderator }
router.get("/", async (req, res) => {
    try {
        const candidates = await candidateModel.find()
        res.send(candidates)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//get one candidate route { by Moderator}
router.get("/:id", authMiddleware.getCandidate, (req, res) => {
    res.json(res.candidate)
})

//create a candidate { SignUp } and { login }
router.post("/reg", authMiddleware.registerCandidate)
router.post("/log", authMiddleware.loginCandidate)


//delete a candidate { By Moderator }
router.delete("/:id", authMiddleware.getCandidate, async (req, res) => {
    try {
        await res.candidate.remove()
        res.json({ message: "deleted the candidate" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router