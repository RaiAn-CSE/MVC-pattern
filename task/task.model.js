const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    taskType: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    githubLink: {
        type: String,
    },
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;