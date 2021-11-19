import express from 'express'
import cors from 'cors'

const app = express() // create an API instance

// HOME ROUTE / LANDING PAGE API
app.get("/", (req, res) => {
  res.send("<h2>Welcome broInnen to blogs API unlimited</h2>")
})

const PORT = 5000
app.listen( PORT, () => console.log(`API started on http://localhost:${PORT}`) )
