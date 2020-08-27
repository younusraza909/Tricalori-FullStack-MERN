const express = require("express");
const router = express.Router();

//@route    GET api/items
//@dec     TO Get All Items
//@access  Private
router.get("/", (req, res) => {
  console.log("To get All Items From User");
});

//@route    POST api/items
//@dec     Add User Item
//@access  Private
router.post("/", (req, res) => {
  console.log("To Add User Item");
});

//@route    DELETE api/items
//@dec     Delete User Item
//@access  Private
router.post("/:id", (req, res) => {
  console.log("To Delete User Item");
});

//@route    PUT api/items
//@dec     Update User Item
//@access  Public
router.post("/:id", (req, res) => {
  console.log("To Update User Item");
});

module.exports = router;
