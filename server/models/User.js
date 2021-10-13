const { Schema, model } = require("mongoose");

const User = new Schema({
  phone: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

module.exports = model("User", User);
