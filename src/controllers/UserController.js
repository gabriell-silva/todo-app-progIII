const res = require("express/lib/response");
const User = require("../models/User");

const list = async (request, response) => {
  const users = await User.find({});
  response.send(users);
}

const find = async (request, response) => {
  const { user } = request;
  response.send(user);
}

const create = async (request, response) => {
  try {
    const { body } = request;
    const user = new User(body);
    await user.save();
    response.status(201).send(user);
  } catch (error) {
    response.status(400).send({ error: error.message });
  }

}

const remove = async (request, response) => {
  try {
    const { id } = request.params;
    await User.findByIdAndRemove(id);
    response.status(200).send();
  } catch (error) {
    response.status(500).send({ error: "Internal server error!" });
  }
}

const edit = async (request, response) => {
  try {
    const { body } = request;
    const { user } = request;
    Object.assign(user, body);
    await user.save();
    response.status(200).send(user);
  } catch (error) {
    response.status(500).send({ error: error.message });
  }
}

module.exports = {
  list, find, create, remove, edit
}