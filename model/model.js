
const dotenv = require("dotenv").config();
const Moonshine = require("../model/model");
const mongoose = require("mongoose")
const MongoUrl = process.env.Mongo_URL;
const Connection = async () => {
  try {
    await mongoose.connect(MongoUrl);
    console.log("Database connected successfully");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
  }
};

Connection();

const moonSchema = new mongoose.Schema({
  firstname: {
    type: String,
  },
  userEmail: {
    type: String,
  },
  userPassword: {
    type: String,
  },
});

const userModel = mongoose.model("moonshine", moonSchema);
module.exports = { userModel };
