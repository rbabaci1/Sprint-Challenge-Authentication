const jwt = require("jsonwebtoken");

const { jwtSecret } = require("../utils/secrets");
const HALF_HOUR = 60 * 30;

const generateToken = ({ id, username, password }) => {
  const payload = { subject: id, username };

  const options = {
    expiresIn: HALF_HOUR,
    audience: "user",
  };

  return jwt.sign(payload, jwtSecret, options);
};

module.exports = generateToken;
