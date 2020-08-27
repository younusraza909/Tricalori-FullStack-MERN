const express = require("express");
const router = express.Router();

//@route    POST api/users
//@dec     To Register A User
//@access  Public
router.post("/", (req, res) => {
  console.log("To Register A User ");
});

module.exports = router;
