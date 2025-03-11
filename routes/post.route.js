const express = require("express");
const {
  findAllPost,
  findPostById,
  addPost,
  updatePostById,
  deletePostById,
} = require("../controller/post.controller");
const multer = require("multer");
let router = express.Router();
let path = require("path");

let storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() +
        "_" +
        Math.floor(Math.random() * 1500 + 1700) +
        "-" +
        "user" +
        path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 200 },
  fileFilter: (req, file, cb) => {
    let extraname = path.extname(file.originalname);
    if ([".jpg", ".png"].includes(extraname)) {
      cb(null, true);
    } else {
      cb(new Error("it is not nice type"), false);
    }
  },
});
router.route("/").get(findAllPost).post(upload.array("images"), addPost);

router
  .route("/:id")
  .get(findPostById)
  .put(updatePostById)
  .delete(deletePostById);

module.exports = router;
