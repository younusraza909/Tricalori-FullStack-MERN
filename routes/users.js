const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("config");
const { body, validationResult } = require("express-validator");

const User = require("../models/Users");

//@route    POST api/users
//@dec     To Register A User
//@access  Public
router.post(
  "/",
  [
    body("name", "name is Required").not().isEmpty(),
    body("email", "Please include a valid email").isEmail(),
    body(
      "password",
      "Please Enter a password with 6 or more character"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // To find user with this email we use findOne in mongoose
      let user = await User.findOne({ email: email });

      if (user) {
        return res.status(400).json({ msg: "User Already Exist" });
        // 400 Bad Request
      }

      user = new User({
        name,
        email,
        password,
      });

      // Hashing Password
      const salt = await bcrypt.genSalt(10); //return promises

      user.password = await bcrypt.hash(password, salt); //return promises

      await user.save(); //return promises

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json(token);
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
      // 500 Server Error
    }
  }
);

module.exports = router;
