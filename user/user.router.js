const express = require("express");
const router = express.Router();
const { createUser, getUser } = require("./user.controller");

router.post("/users", createUser)
router.get("/users", getUser)

module.exports = router;