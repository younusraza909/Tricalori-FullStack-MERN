const express = require("express");
const router = express.Router();

//@route    GET api/auth
//@dec     Logged in User
//@access  Private
router.get("/", (req, res) => {
  console.log("To Find Current Logged In User");
});

//@route    POST api/auth
//@dec     Auth User And Get Token
//@access  Public
router.post("/", (req, res) => {
  console.log("To Auth User And Get Token");
});

module.exports = router;
