require("dotenv").config({ path: "./config.env" });
const jwt = require("jsonwebtoken")

const authJWT = (req, res, next) => {
    const voterToken = req.cookie.voterLoginJWT;
    const candidateToken = req.cookie.candidateLoginJWT;

    if (voterToken || candidateToken) { //remove the identification (either voter or candidate) on JWT or look for method for both verification 
        jwt.verify(voterToken, JWTOKEN, (err, decodedToken) => {
            if (err) {
                console.log(err);
                res.redirect('/login')
            } else {
                console.log(decodedToken);
                next();
            }
        })
    } else {
        res.redirect('/login')
    }
}

module.exports = { authJWT };