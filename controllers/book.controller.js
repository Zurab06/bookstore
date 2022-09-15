
const Book = require("../models/Book.model");

module.exports.booksController = {
  addBook: async (req, res) => {
    try {
      const { name, author, genre } = req.body;
      const book = await Book.create({
        name,
        author,
        genre,
      });
      res.json(book);
    } catch (error) {
      res.json(error.message);
    }
  },
  deleteBook: async (req, res) => {
    try {
      await Book.findByIdAndDelete(req.params.id);
      res.json("book deleted");
    } catch (error) {
      res.json(error.message);
    }
  },
  changeBook: async (req, res) => {
    const { name, author, genre } = req.body;

    try {
      await Book.findByIdAndUpdate(req.params.id, {
        name,
        author,
        genre,
      });
      res.json("book updated");
    } catch (error) {
      res.json(error.message);
    }
  },
  getBookById: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      res.json(book);
    } catch (error) {
      res.json(error.message);
    }
  },
  getBooks: async (req, res) => {
    try {
      const book = await Book.find({}).populate('genre')
      res.json(book);
    } catch (error) {
      res.json(error.message);
    }
  },
  getBooksByGenre: async (req, res) => {
    try {
      
      const book = await Book.find({
        genre: req.params.id,
      });
      res.json(book)
    } catch (error) {
      res.json(error.message)
    }
  },
};
