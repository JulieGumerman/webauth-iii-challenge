const express = require("express");

const server = express();

const port = 2468;

server.use(express.json());

server.listen(port, () => {
    console.log(`up and running on ${port}`)
})

server.get("/", (req, res) => {
    res.send("In business...")
})