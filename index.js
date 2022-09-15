const mongoose = require("mongoose")
const express = require("express")


const app = express()

app.use(express.json())

app.use( require('./routes/book.route'))
app.use( require('./routes/genre.route'))
app.use( require('./routes/review.route'))
app.use(require('./routes/author.route'))

mongoose.connect("mongodb+srv://gaunt0066:Panzerkampf06@cluster0.6m4r7dq.mongodb.net/books?retryWrites=true&w=majority"
)
app.listen(3000,()=>{
    console.log("server has been started")
})
