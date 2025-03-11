const express = require("express");
let app = express();

let postRouter = require("../routes/post.route");
let usersRouter = require("../routes/users.routes");

app.use(express.json());

app.use(express.urlencoded({ extended: true })); // for form data
app.use("/api/posts", postRouter);
app.use("/api/users", usersRouter);

module.exports = app;
