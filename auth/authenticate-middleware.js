const jwt = require("jsonwebtoken");

const { jwtSecret } = require("../utils/secrets");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (token) {
      jwt.verify(token, jwtSecret, (err, decodedToken) => {
        if (err) {
          res.status(401).json({ message: "Invalid credential. Try again?" });
        } else {
          req.decodedToken = decodedToken;
          next();
        }
      });
    }
  } catch (error) {
    res.status(401).json({ message: "shall not pass!", reason: error.message });
  }
};
