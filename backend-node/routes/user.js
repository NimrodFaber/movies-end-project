const express = require("express");
const app = express();
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const { signupUser, signInUser } = require("../controllers/user");
router.post("/signup", (req, res) => {
  let { firstName, lastName, password, email, phone } = req.body;
  let user = { firstName, lastName, password, email, phone };
  signupUser(user)
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(400).json(err));
});

router.post("/signin", (req, res) => {
  let { password, email } = req.body;
  if (!(email && password)) res.status(400).send("All input is required");

  signInUser(email, password)
    .then((token) => res.status(200).json(token))
    .catch((err) => res.status(400).json(err));
});
module.exports = router;
