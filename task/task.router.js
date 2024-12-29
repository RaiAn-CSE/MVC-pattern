const express = require("express");
const { taskCreate, taskGet, taskDelete, taskUpdate } = require("./task.controller");
const router = express.Router();

router.post("/task", taskCreate);
router.get("/task", taskGet);
router.delete("/task/:id", taskDelete);
router.patch("/task/:id", taskUpdate);

module.exports = router;