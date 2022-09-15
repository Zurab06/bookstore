const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  name: String,
  author: String,
  genre: { type: mongoose.SchemaTypes.ObjectId, require: true, ref: "Genre" },
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
