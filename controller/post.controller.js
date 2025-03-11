let path = require("path");

const Post = require("../models/post.model");

let findAllPost = async (req, res, next) => {
  let posts = await Post.find();
  res.status(200).json({ name: "post", posts });
};

let findPostById = async (req, res, next) => {
  let id = req.params.id;
  let post = await Post.findById(id);
  res.status(200).json({ name: "post", post });
};

let addPost = async (req, res, next) => {
  let data = req.body;
  let post = await Post.create(data);
  res.status(201).json({ name: "post", post });
};

let updatePostById = async (req, res, next) => {
  let id = req.params.id;
  let data = req.body;
  let post = await Post.findByIdAndUpdate(id, data, { new: true });
  res.status(200).json({ name: "post", post });
};

let deletePostById = async (req, res, next) => {
  let id = req.params.id;

  await Post.findByIdAndDelete(id);
  res.status(204).json({ name: "post" });
};

module.exports = {
  findAllPost,
  findPostById,
  addPost,
  updatePostById,
  deletePostById,
};
