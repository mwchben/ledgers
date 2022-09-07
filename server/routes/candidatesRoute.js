const express = require("express")
const router = express.Router()
const candidateModel = require("../models/candidateModel")
const indexMiddleware = require("../middlewares/index")
const candidateController = require("../controllers/candidateController")


/*
    create a candidate { SignUp } and { login }
*/
router.post("/reg", indexMiddleware.registerCandidate)
router.post("/log", indexMiddleware.loginCandidate)

/*
    get candidate page
*/
router.get("/candidatesDashboard", candidateController.get)

/*
    get one candidate route { by Moderator}
*/

router.get("/:id", indexMiddleware.getCandidate, (req, res) => {
    res.json(res.candidate)
})

/*
    get all candidates route { by Moderator }
*/
router.get("/", async (req, res) => {
    try {
        const candidates = await candidateModel.find()
        res.send(candidates)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

/*
    delete a candidate { By Moderator }
*/
router.delete("/:id", indexMiddleware.getCandidate, async (req, res) => {
    try {
        await res.candidate.remove()
        res.json({ message: "deleted the candidate" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


module.exports = router