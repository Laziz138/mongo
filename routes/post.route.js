const express = require("express");
const {
  findAllPost,
  findPostById,
  addPost,
  updatePostById,
  deletePostById,
} = require("../controller/post.controller");

let router = express.Router();
let path = require("path");

router.route("/").get(findAllPost).post(addPost);

router
  .route("/:id")
  .get(findPostById)
  .put(updatePostById)
  .delete(deletePostById);

module.exports = router;
