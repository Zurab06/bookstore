const { Router } = require("express");
const { GenreController } = require("../controllers/genre.controller");

const router = Router();

router.get("/genre", GenreController.getGenres);
router.delete("/genre/:id", GenreController.deleteGenre);
router.post("/genre", GenreController.addGenre);

module.exports = router;
