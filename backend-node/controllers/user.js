const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
function signupUser(user) {
  return new Promise(async (resolve, reject) => {
    const newUser = new User(user);
    const { error, value } = newUser.validateUserSchema().validate(user);
    if (error) reject(error);
    else {
      await newUser.hashPassword();
      newUser
        .save()
        .then((user) => resolve(user))
        .catch((err) => reject(err));
    }
  });
}
const genareteToken = (user) => {
  return jwt.sign({ user_id: user._id, isAdmin: user.isAdmin }, "mySecretKey", {
    expiresIn: "31111m",
  });
};
function signInUser(email, password) {
  return new Promise(async (resolve, reject) => {
    const user = await User.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, async function (err, res) {
        if (res) {
          const token = await genareteToken(user);
          resolve(token);
        } else {
          reject(err);
        }
      });
    } else {
      reject("the user dosent exist pls check your email");
    }
  });
}

module.exports = { signupUser, signInUser, genareteToken };
