const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const PostUsurio = new Schema({
  name: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true, unique: true },
});

module.exports = model("Usuario", PostUsurio);
