const mongoose = require("mongoose");

const authorSchema = {
  authorName: String,
  authorInfo: String,
  
};

const Author = mongoose.model("Author", authorSchema);
module.exports = Author;
