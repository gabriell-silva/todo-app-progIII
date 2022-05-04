const User = require("../models/User");
const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = await jwt.verify(token, process.env['JWT_SECRET']);
    const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });
    if (!user) {
      throw new Error();
    }
    req.token = token;
    req.user = user;

    next();
  } catch (error) {
    res.status(401).send({ error: 'Unauthorized' });
  }
}

const isValidUserBody = (req, res, next) => {
  let validFields = ['name', 'email', 'password', 'age'];

  Object.keys(req.body).forEach(key => {

    if (!validFields.includes(key)) {
      return res.status(400).send({ error: 'Invalid body' });
    }

    if (req.body[key] === undefined) {
      return res.status(400).send({ error: 'Missing fields' });
    };
  });
  next();
};
module.exports = { isValidUserBody, auth };