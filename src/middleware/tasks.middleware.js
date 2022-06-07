const Task = require('../models/Task');

const isValidBody = (req, res, next) => {
  let validFields = ['description', 'completed'];

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

const getTask = async (req, res, next) => {
  const { id } = req.params;
  const task = await Task.findOne({ _id: id, owner: req.user._id });
  if (!task) {
    return res.status(404).send({ error: 'Task not found' });
  };
  req.task = task;
  next();
}

module.exports = { isValidBody, getTask };