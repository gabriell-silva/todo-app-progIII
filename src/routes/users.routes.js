const express = require('express');
const { list, find, create, remove, edit } = require('../controllers/UserController');
const { getUser, isValidUserBody } = require('../middleware/users.middleware');

const users_routes = express.Router();

users_routes.get('/', list);
users_routes.get('/:id', getUser, find);
users_routes.post('/', create);
users_routes.delete('/:id', getUser, remove)
users_routes.put('/:id', isValidUserBody, getUser, edit)

module.exports = users_routes;