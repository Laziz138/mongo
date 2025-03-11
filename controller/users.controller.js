const Users = require("../models/users.model");
let findAllUsers = async (req, res, next) => {
  let users = await Users.find();
  res.status(200).json({ users });
};
let findUsersById = async (req, res, next) => {
  let id = req.params.id;
  let users = await Users.findById(id);
  res.status(200).json({ name: "users", users });
};

module.exports = { findAllUsers, findUsersById };
