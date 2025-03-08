const express = require("express");
let app = express();

let postRouter = require("../routes/post.route");

app.use(express.json());
app.use("/api/posts", postRouter);

module.exports = app;
