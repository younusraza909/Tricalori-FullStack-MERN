const mongoose = require("mongoose");

const ItemSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  meal: {
    type: String,
    require: true,
  },
  calories: {
    type: Number,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("items", ItemSchema);
