const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
  title: String,
  description: String,
  progress: Number,
});

module.exports = mongoose.model("Goals", goalSchema);
