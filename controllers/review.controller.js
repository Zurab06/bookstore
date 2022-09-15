const Review = require("../models/Review.model");

module.exports.ReviewController = {
  addReviewById: async (req, res) => {
    try {
      const { reviewText, reviewAuthor, reviewOfBook } = req.body;
      const review = await Review.create({
        reviewText,
        reviewAuthor,
        reviewOfBook
      });
      res.json(review);
    } catch (error) {
      res.json(error.message);
    }
  },
  deleteReview: async (req, res) => {
    try {
      await Review.findByIdAndDelete(req.params.id);
      res.json("review deleted");
    } catch (error) {
      res.json(error.message);
    }
  },
  getReviewById: async (req, res) => {
    try {
      const review = await Review.findById({});
      res.json(review);
    } catch (error) {
      res.json(error.message);
    }
  },
};
