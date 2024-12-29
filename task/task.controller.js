const Task = require("./task.model");
const redisClient = require('../config/redis');

// Create task
const taskCreate = async (req, res) => {
    const task = req.body;
    const result = await Task.create(task);
    res.send(result)
}

// Get all task
const taskGet = async (req, res) => {
    const result = await Task.find({});
    res.send(result)
}

//Delete task by /:id
const taskDelete = async (req, res) => {
    const taskId = req.params.id;
    const result = await Task.findByIdAndDelete(taskId);
    res.send(result)
}

// Update task
const taskUpdate = async (req, res) => {
    const taskId = req.params.id;
    const updatedData = req.body;

    const updatedTask = await Task.findByIdAndUpdate(taskId, updatedData, {
        new: true, // Return the updated document
        runValidators: true // Ensure the updated data passes validation
    });
    res.send(updatedTask);
}

module.exports = { taskCreate, taskGet, taskDelete, taskUpdate };