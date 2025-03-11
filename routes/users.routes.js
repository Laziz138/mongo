const express = require("express");

const {
  findAllUsers,
  findUsersById,
} = require("../controller/users.controller");
let router = express.Router();
router.route("/").get(findAllUsers);
router.route("/:id").get(findUsersById);
module.exports = router;
