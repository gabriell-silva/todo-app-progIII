const express = require('express');
const { list, create, find, remove, edit, complete } = require('../controllers/TaskContoller');
const { getTask, isValidBody } = require('../middleware/tasks.middleware');
const { auth } = require('../middleware/users.middleware');

const tasks_routes = express.Router();

tasks_routes.get('/', auth, list);

tasks_routes.get('/:id', auth, getTask, find);

tasks_routes.post('/', auth, isValidBody, create);

tasks_routes.delete('/:id', auth, getTask, remove);

tasks_routes.put('/:id', auth, isValidBody, getTask, edit);

tasks_routes.patch('/:id/complete', auth, getTask, complete);


module.exports = tasks_routes;