const express = require('express');
const router = express.Router();
const { getTasks, createTask } = require('../controllers/TaskController');

router.get('/api/tasks', getTasks);
router.post('/api/tasks', create);