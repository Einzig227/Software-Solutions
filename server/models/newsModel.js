const mongoose = require("mongoose");

const { Schema } = mongoose;

const NewsSchema = new Schema(
  {
    imgURL: String,
    title: String,
    text: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("News", NewsSchema);
