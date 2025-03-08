const { default: mongoose } = require("mongoose");

const postSchema = new mongoose.Schema({
  title: { type: String },
  content: { type: String },
  author: { type: String },
  image: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
});

let post = mongoose.model("Post", postSchema);

module.exports = post;
