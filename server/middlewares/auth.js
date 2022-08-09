require("dotenv").config({ path: "./config.env" });
const jwt = require("jsonwebtoken")

const authJWT = (req, res, next) => {
    const voterToken = req.cookie.voterLoginJWT;
    const candidateToken = req.cookie.candidateLoginJWT;

    if (voterToken || candidateToken) { //remove the identification (either voter or candidate) on JWT or look for method for both verification 
        jwt.verify(voterToken, JWTOKEN, (err, decodedToken) => {
            if (err) {
                console.log(err);
                res.json({
                    error: err
                })
                res.redirect('/login')

            } else {
                console.log(decodedToken);
                //can set the req.autheticated = true and access it in react from tutorial "Protected Routes in React _ Router Redirect _ React Router Dom _ React Tutorial .mp4"
                next();
            }
        })
    } else {
        res.json({
            error: "not authenticated, login or register to access"
        })
        res.redirect('/login')
    }
}

module.exports = { authJWT };