const Genre = require("../models/Genre.model");

module.exports.GenreController = {
  addGenre: async (req, res) => {
    try {
      const { genreName, genreDescription } = req.body;
      const genre = await Genre.create({
        genreName,
        genreDescription,
      });
      res.json(genre);
    } catch (error) {
      res.json(error.message);
    }
  },

  deleteGenre: async (req, res) => {
    try {
      await Genre.findByIdAndDelete(req.params.id);
      res.json("genre deleted");
    } catch (error) {
      res.json(error.message);
    }
  },

  getGenres: async (req, res) => {
    try {
      const genre = await Genre.find({});
      res.json(genre);
    } catch (error) {
      res.json(error.message);
    }
  },
};
