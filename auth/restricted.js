const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets");

const restricted = (req, res, next) => {
    const token = req.headers.authorization;
    console.log("Julie wuz here.")
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
    })

    if (token) {
        jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ message: "Something went wrong"})
            } else {
                req.user = {
                    username: decodedToken.username,
                    department: decodedToken.department
                }
                next()
            }
        })

    } else {
        res.status(400).json({ message: "no token provided"})
    }
}

module.exports = restricted;