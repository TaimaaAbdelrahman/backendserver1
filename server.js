const express = require("express")
const cors = require("cors")

const app = express()
// Middleware
app.use(cors())
app.use(express.json())

let books = []

//create books
app.post("/books", (req, res) => {
    const newBook = {
        id: crypto.randomUUID(),
        title: req.body.title,
        author: req.body.author,
        pdate: req.body.pdate
    }
    books.push(newBook)
    res.json(newBook)

})

// get all books
app.get("/books", (req, res) => {
    res.json(books)
})

//DELETE
app.delete("/books/:id", (req, res) => {
    books = books.filter((b) => b.id != req.params.id)
    res.json({ message: "Deleted" })
})

//UPDATE
app.put("/books/:id", (req, res) => {
    const book = books.find((b) => b.id == req.params.id)
    if (book) {
        book.title = req.body.title
        book.author = req.body.author
        book.pdate = req.body.pdate
        res.json(book)
    }
})


// Route
app.get("/", (req, res) => {
    res.json({ "message": "welcome to our app" })
})




// Start server
const PORT = 5000
app.listen(PORT, () => {
    console.log("Server running")
})