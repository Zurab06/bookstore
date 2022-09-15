const {Router} =require("express")
const { AuthorController}= require("../controllers/author.controller")

const router = Router()

router.post("/author",AuthorController.postAuthor )
module.exports=router 