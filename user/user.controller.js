const Users = require("./user.model");

const createUser = async (req, res) => {
    const user = req.body;
    result = await Users.create(user)
    res.send(result)
}

const getUser = async (req, res) => {
    const filter = {};
    const allUsers = await Users.find(filter);
    res.send(allUsers)
}

module.exports = { createUser, getUser };