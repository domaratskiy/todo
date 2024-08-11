const mongoose = require("mongoose");
require("dotenv").config();
const URL = process.env.DB_URI;
const connectDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
