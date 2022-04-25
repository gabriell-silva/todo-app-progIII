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

module.exports = {
  list, find
}