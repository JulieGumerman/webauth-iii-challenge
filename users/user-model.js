const db = require("../data/dbconfig.js");


const findById = (id) => {
    return db("users").where({ id }).first();
}

async function add(user) {
    const [id] = await db("users").insert(user);
    return findById(id);
} 

module.exports = {
    add,
    // find,
    //findBy,
    findById
}