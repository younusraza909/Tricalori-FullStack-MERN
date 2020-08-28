const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../models/Users");
const Items = require("../models/Items");
const auth = require("../middleware/auth");

//@route    GET api/items
//@dec     TO Get All Items
//@access  Private
router.get("/", auth, async (req, res) => {
  try {
    const items = await Items.find({ user: req.user.id }).sort({ date: -1 });
    res.json(items);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

//@route    POST api/items
//@dec     Add User Item
//@access  Private
router.post(
  "/",
  [
    auth,
    [
      body("meal", "Meal Is Required Field").not().isEmpty(),
      body("calories", "Calories Is Required Field").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { meal, calories } = req.body;

    try {
      const newItem = new Items({
        meal,
        calories,
        user: req.user.id,
      });

      const item = await newItem.save();

      res.json(item);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

//@route    DELETE api/items
//@dec     Delete User Item
//@access  Private
router.delete("/:id", auth, async (req, res) => {
  try {
    let item = await Items.findById(req.params.id);

    if (!item) return res.status(404).json({ msg: "Item not found" });

    // Make sure user owns contact
    if (item.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    await Items.findByIdAndRemove(req.params.id);

    res.json({ msg: "Item removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route    PUT api/items
//@dec     Update User Item
//@access  Public
router.put("/:id", auth, async (req, res) => {
  const { meal, calories } = req.body;

  // Build item object
  const itemFields = {};
  if (meal) itemFields.meal = meal;
  if (calories) itemFields.calories = calories;

  try {
    let item = await Items.findById(req.params.id);

    if (!item) return res.status(404).json({ msg: "Item not found" });

    // Make sure user owns item
    if (item.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    item = await Items.findByIdAndUpdate(
      req.params.id,
      { $set: itemFields },
      { new: true }
    );

    res.json(item);
  } catch (error) {
    console.error(er.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
