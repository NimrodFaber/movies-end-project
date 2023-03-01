const mongoose = require("mongoose");
const joi = require("joi");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, require: "first name is require" },
    lastName: { type: String, require: "last name is require" },
    password: { type: String, require: "password is require" },
    email: { type: String, require: "email is require", unique: true },
    phone: { type: String, require: "phone is require" },
    notes: Array,
    favorite: Array,
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);
userSchema.methods.validateUserSchema = function () {
  const validateUserSchema = joi.object({
    firstName: joi.string().min(3).max(30).required(),
    lastName: joi.string().min(3).max(30).required(),
    email: joi
      .string()
      .email({ tlds: { allow: false } })
      .required(),
    password: joi.string().required(),

    phone: joi
      .string()
      .length(10)
      .pattern(/^[0-9]+$/)
      .required(),
    // favorite: joi.required(),
  });
  return validateUserSchema;
};
userSchema.methods.hashPassword = async function () {
  this.password = await bcrypt.hash(this.password, 10);
};
function validateNotes(data) {
  const schema = Joi.object({
    notes: Joi.array().min(1).required(),
  });

  return schema.validate(data);
}
exports.validateNotes = validateNotes;
module.exports = mongoose.model("User", userSchema, "users");
