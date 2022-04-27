const express = require('express');
const { list, create, find, remove, edit, complete } = require('../controllers/TaskContoller');
const { getTask, isValidBody } = require('../middleware/tasks.middleware');

const tasks_routes = express.Router();

tasks_routes.get('/', list);

tasks_routes.get('/:id', getTask, find);

tasks_routes.post('/', isValidBody, create);

tasks_routes.delete('/:id', getTask, remove);

tasks_routes.put('/:id', isValidBody, getTask, edit);

tasks_routes.patch('/:id/complete', getTask, complete);


module.exports = tasks_routes;