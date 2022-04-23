const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: { type: String },
    author: { type: String},
    price: { type: Number},
    page: {type: Number},
  },
  {
    collection: "books",
  }
);
const books = mongoose.model("book", schema);

module.exports = books;