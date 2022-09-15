const {Router} = require("express")
const {booksController} = require("../controllers/book.controller")

const router = Router()

router.post("/books", booksController.addBook)
router.delete("/books/:id",booksController.deleteBook)
router.patch("/books/:id",booksController.changeBook)
router.get("/books/:id",booksController.getBooksByGenre)
router.get("/books",booksController.getBooks)

module.exports = router