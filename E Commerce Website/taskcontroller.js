const Task = require('../models/Task');

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().exec();
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching tasks' });
  }
};

const createTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating task' });
  }
};

module.exports = { getTasks, createTask };