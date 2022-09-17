require("dotenv").config({ path: "../config.env" });
const jwt = require("jsonwebtoken")

const voterAuthJWT = (req, res, next) => {
    const voterToken = req.cookies.voterLoginJWT;
    //const voterToken = req.headers.authorization.split('')[1]

    if (voterToken) {
        jwt.verify(voterToken, process.env.JWTOKEN, (err, decodedToken) => {
            if (err) {
                console.log(err);
                res.json({
                    error: err
                })
                res.redirect('/voterLog')

            } else {
                console.log(decodedToken);
                //can set the req.autheticated = true and access it in react from tutorial "Protected Routes in React _ Router Redirect _ React Router Dom _ React Tutorial .mp4"
                next();
            }
        })
    } else {
        // res.json({
        //     error: "not authenticated (login or register to access)"
        // })
        res.redirect('/voterLog')
    }
}


module.exports = voterAuthJWT;