
const Author = require("../models/Author.model");

module.exports.AuthorController = {
  postAuthor: async (req, res) => {
    try {
      const { authorName, authorInfo } = req.body;
      const author = await Author.create({
        authorName,
        authorInfo,
      });
      res.json(author);
    } catch (error) {
      res.json(error.message);
    }
  },
};
