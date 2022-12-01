const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  let token =
    req.body.token ||
    req.params.token ||
    req.query.token ||
    req.headers["x-access-token"] ||
    req.headers["authorization"];
  if (!token) {
    return res.status(401).send("A token is required for authentication");
  }
  if (token.split(" ").length > 1) token = token.split(" ")[1];
  try {
    const decoded = jwt.verify(token, "mySecretKey");
    req.user._id = decoded.user._id;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};
