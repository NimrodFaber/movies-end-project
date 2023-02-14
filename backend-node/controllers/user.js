const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
function signUpUser(user) {
  return new Promise(async (resolve, reject) => {
    const newUser = new User(user);
    const { error, value } = newUser.validateUserSchema().validate(user);
    if (error) reject(error);
    else {
      const regex = new RegExp(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=(.*?[0-9]){4})(?=.*?[#?!@$%^&*-]).{7,18}$"
      );
      let statusRegex = regex.test(newUser.password);
      if (statusRegex) {
        await newUser.hashPassword();
        newUser
          .save()
          .then((user) => resolve(user))
          .catch((err) => {
            if (err.message) {
              reject({
                details: [
                  {
                    message: "this email is alredy in use.",
                  },
                ],
              });
            } else {
              reject(err);
            }
          });
      } else {
        reject({
          details: [
            {
              message:
                "password must includes small and camel letters,4digits,lenght:7 to 18,and one !@#$%^&*",
            },
          ],
        });
      }
    }
  });
}
const genareteToken = (user) => {
  return jwt.sign({ user_id: user._id, isAdmin: user.isAdmin }, "mySecretKey", {
    expiresIn: "31111m",
  });
};
function addFavMovie(card, userId) {
  return new Promise(async (resolve, reject) => {
    const user = await User.findById(userId);
    if (user) {
      user.favorite.push(card);
      user.save();
      resolve(card);
    } else {
      reject("no card to save");
    }
  });
}
function getAllFavorite(userId) {
  return new Promise(async (resolve, reject) => {
    const user = await User.findById(userId);
    if (user) {
      resolve(user.favorite);
    } else {
      reject("plz sign in first");
    }
  });
}
function signInUser(email, password) {
  return new Promise(async (resolve, reject) => {
    const user = await User.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, async function (err, res) {
        if (res) {
          const token = await genareteToken(user);
          resolve(token);
        } else {
          reject("check your email and password");
        }
      });
    } else {
      reject("the user dosent exist pls check your email");
    }
  });
}
function deleteFromFav(userId, favorite) {
  return new Promise(async (resolve, reject) => {
    const user = await User.findById(userId);

    if (user) {
      const titleToDelete = user.favorite.filter(function (e) {
        return e !== favorite;
      });
      user.favorite = titleToDelete;
      user.save();
      resolve(user);
    } else {
      reject("no card to delete");
    }
  });
}
module.exports = {
  signUpUser,
  signInUser,
  genareteToken,
  addFavMovie,
  getAllFavorite,
  deleteFromFav,
};
