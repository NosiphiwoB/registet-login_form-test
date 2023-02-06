var jwt = require("jsonwebtoken");

const createToken = (user) => {
  var token = jwt.sign(
    { email: user.email, hashedPassword: user.hashedPassword },
    "biyela0301"
  );
  return token;
};

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    try {
      var decoded = jwt.verify(token.split(" ")[1], "biyela0301");
      console.log("tokentokentoken", decoded);
      next();
    } catch (e) {
      return res.send(401);
    }
  }
};

module.exports = { createToken, verifyToken };