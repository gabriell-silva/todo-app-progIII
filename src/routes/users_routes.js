const express = require('express');
const { list, find } = require('../controllers/UserController');
const getUser = require('../middleware/getUser');

const users_routes = express.Router();

users_routes.get('/', list);
users_routes.get('/:id', getUser, find);

module.exports = users_routes;