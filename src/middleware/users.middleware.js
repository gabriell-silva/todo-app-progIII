const User = require("../models/User");

const getUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    };
    req.user = user;
    next();
  } catch (error) {
    return res.status(500).send({ error: 'Internal server error' });
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
module.exports = { getUser, isValidUserBody };