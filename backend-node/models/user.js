const mongoose = require("mongoose");
const joi = require("joi");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    firstName: { String, require: "first name is require" },
    lastName: { String, require: "last name is require" },
    password: { String, require: "password is require" },
    email: { String, require: "email is require", unique: true },
    phone: { String, require: "phone is require", unique: true },
    favorite: { type: [String] },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);
userSchema.methods.validateUserSchema = function () {
  const userValidition = joi.object({
    firstName: joi.string().min(3).max(30).required(),
    lastName: joi.string().min(3).max(30).required(),
    email: joi
      .string()
      .email({ tlds: { allow: false } })
      .required(),
    password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    phone: joi.string().required(),
  });
  return userValidition;
};
userSchema.methods.hashPassword = async function () {
  this.password = await bcrypt.hash(this.password, 10);
};
module.exports = mongoose.model("User", userSchema, "users");
