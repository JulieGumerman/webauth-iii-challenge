const express = require("express");
const bcrypt = require("bcryptjs");
const userRouter = express.Router();
const Users = require("./user-model.js");
const generateToken = require("../auth/generateToken")
userRouter.get("/", (req, res) => {
    res.send("ready to go...")
})

userRouter.post("/register", (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password);
    user.password = hash;

    Users.add(req.body)
        .then(saved => res.status(200).json(saved))
        .catch(err => res.status(500).json({ message: "We could not register this user at this time."}))
})

userRouter.post("/login", (req, res) => {
    let { username, password } = req.body;

    Users.findBy({username})
    .first()
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user);
            res.status(200).json({
                message: "Welcome to the jungle!",
                token
            })
        } else {
            res.status(401).json({ message: "invalid credentials" })
        }
    })
    .catch(error => {
        res.status(500).json({ message: "I gave a message even though I am broken"});
    })

})

module.exports = userRouter;