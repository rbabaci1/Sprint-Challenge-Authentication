const router = require("express").Router();
const bcrypt = require("bcrypt");

const Users = require("../users/users-model");

router.post("/register", async (req, res) => {
  try {
    const user = req.body;
    const hash = bcrypt.hashSync(user.password, 8);

    const addedUser = await Users.insert({ ...user, password: hash });

    res.status(201).json(addedUser);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "This user could not be added at this moment.",
        reason: error.message,
      });
  }
});

router.post("/login", (req, res) => {
  // implement login
});

module.exports = router;
