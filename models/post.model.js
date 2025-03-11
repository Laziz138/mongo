const { default: mongoose } = require("mongoose");

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  images: { type: String },
  createdAt: { type: Date, default: Date.now },
});

let post = mongoose.model("Posts", postSchema);

module.exports = post;
