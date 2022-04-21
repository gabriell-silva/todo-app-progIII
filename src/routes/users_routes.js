const express = require('express');

const users_routes = express.Router();

const users = [
    {id: 1, username: 'Gabriel', password: 'asadadsasfaa'},
    {id: 2, username: 'Elton', password: 'gdfryjty'},
    {id: 3, username: 'Daniel', password: 'fjykykuy'},
    {id: 4, username: 'Samuel', password: 'rktyejyjr'},
    {id: 5, username: 'Julio', password: 'yertyrtyri'},
    {id: 6, username: 'Victor', password: 'jkylykollu'},
    {id: 7, username: 'George', password: 'trthrtdr'}
];

const generateId = () => {
    return users[users.length - 1].id + 1;
}

const getUser = (req, res, next) => {
    const { id } = req.params;
    const user = users.find((user) => user.id == id);
    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    };
    req.user = user;
    next();
}

const isValidBody = (req, res, next) => {
    const allowedFields = ['login', 'password'];

    Object.keys(req.body).forEach(key => {
        if (!allowedFields.includes(key))
            return res.status(400).send({ error: 'Invalid body!' });

        if (req.body[key] === undefined)
            return res.status(400).send({ error: 'Missing fields!' });
    });

    next();
};

users_routes.patch('/:id/username', getUser, (req, res) => {
    const { user } = req;
    user.username = req.body.username;
    return res.status(200).json(user);
});

users_routes.patch('/:id/password', getUser, (req, res) => {
    const { user } = req;
    user.password = req.body.password;
    return res.status(200).json(user);
});

users_routes.get('/', (req, res) => {
    res.json(users);
});

users_routes.get('/:id', getUser, (req, res) => {
    const { user } = req;
    res.json(user);
});

users_routes.post('/', (req, res) => {
    const { username, password } = req.body;
    
    const { id } = generateId();
    
    const newUser = {
        id: generateId(),
        username,
        password
    }

    users.push(newUser);

    res.status(201).json(newUser);
});

users_routes.put(':/id', isValidBody, getUser, (req,res) => {
    const { user } = req;
    
    Object.assign(user, req.body);

    return res.json(user);
});

users_routes.delete('/:id', (req, res) => {
    const { id } = req.params;
    const userIndex = users.findIndex(user => user.id === parseInt(id));

    if (userIndex < 0) {
        return res.status(404).send({ error: 'User not found' });
    }

    users.splice(userIndex, 1);

    
    return res.status(204).send();
});



module.exports = users_routes;