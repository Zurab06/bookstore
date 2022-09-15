const mongoose = require("mongoose")

const reviewSchema = mongoose.Schema({

    reviewText: String,
    reviewAuthor: String,
    reviewOfBook: {
        type: mongoose.SchemaTypes.ObjectId,
        require: true,
        ref: "Book"
    },
}
)

const Review = mongoose.model("Review", reviewSchema)
module.exports = Review