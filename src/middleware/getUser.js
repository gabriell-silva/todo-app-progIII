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

module.exports = getUser;