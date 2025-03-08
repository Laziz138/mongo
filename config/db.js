const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DATABASE).then(() => {
      console.log("Db connected");
    });
  } catch (error) {
    console.log("Mongo connection error", error);
  }
};

module.exports = connectDb;
