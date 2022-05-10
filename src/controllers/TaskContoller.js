const Task = require("../models/Task");

const list = async (request, response) => {
  const tasks = await Task.find({ owner: request.user._id });
  response.send(tasks);
}

const find = async (request, response) => {
  const { task } = request;
  response.send(task);
}

const create = async (request, response) => {
  try {
    const { description, completed } = request.body;
    const task = new Task({
      description,
      completed,
      owner: request.user._id,
    });
    await task.save();
    response.status(201).send(task);
  } catch (error) {
    response.status(500).send({ error: error.message });
  }
}

const remove = async (request, response) => {
  try {
    const { id } = request.params;
    await Task.findByIdAndDelete(id);
    response.send();
  } catch (error) {
    response.status(500).send({ error: error.message });
  }
}

const edit = async (request, response) => {
  try {
    const { task } = request;
    Object.assign(task, request.body);
    await task.save();
    return response.send(task)
  } catch (error) {
    response.status(500).send({ error: error.message });
  }
}

const complete = async (request, response) => {
  try {
    const { task } = request;
    task.completed = true;
    await task.save();
    return response.send(task)
  } catch (error) {
    response.status(500).send({ error: error.message });
  }
}

module.exports = { list, create, find, remove, edit, complete }