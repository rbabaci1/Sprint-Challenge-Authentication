const router = require("express").Router();
const bcrypt = require("bcrypt");

const Users = require("../users/users-model");
const generateToken = require("../utils/generateToken");

router.post("/register", async (req, res) => {
  try {
    const user = req.body;
    const hash = bcrypt.hashSync(user.password, 8);

    const addedUser = await Users.insert({ ...user, password: hash });

    res.status(201).json(addedUser);
  } catch (error) {
    res.status(500).json({
      message: "This user could not be added at this moment.",
      reason: error.message,
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await Users.findBy({ username });

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user);

      res.status(200).json({ message: "Welcome in!", token });
    } else {
      res.status(401).json({ message: "Invalid credentials. Try again?" });
    }
  } catch (error) {
    res.status(500).json({
      message: "This user could not login at this moment.",
      reason: error.message,
    });
  }
});

module.exports = router;
