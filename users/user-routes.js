const express = require("express");
const userRouter = express.Router();
const Users = require("./user-model.js");

userRouter.get("/", (req, res) => {
    res.send("ready to go...")
})

userRouter.post("/register", (req, res) => {
    Users.add(req.body)
        .then(user => res.status(200).json(user))
        .catch(err => res.status(500).json({ message: "We could not register this user at this time."}))
})

userRouter.post("/login", (req, res) => {

})

module.exports = userRouter;