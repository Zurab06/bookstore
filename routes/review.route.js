const {Router}= require("express")
const {ReviewController} = require("../controllers/review.controller")

const router = Router()


router.post ("/review/:id", ReviewController.addReviewById)

module.exports = router