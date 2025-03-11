const { default: mongoose } = require("mongoose");

let usersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  createdAt: { type: Date, default: Date.now },
});
let users = mongoose.model("Users", usersSchema);
module.exports = users;
