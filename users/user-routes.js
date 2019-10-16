const express = require("express");
const bcrypt = require("bcryptjs");
const userRouter = express.Router();
const Users = require("./user-model.js");

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

})

module.exports = userRouter;