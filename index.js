const express = require("express");

const server = express();
const userRouter = require("./users/user-routes");

const port = 2468;

server.use(express.json());
server.use("/api", userRouter);

server.listen(port, () => {
    console.log(`up and running on ${port}`)
})

server.get("/", (req, res) => {
    res.send("In business...")
})