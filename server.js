import express from 'express'
import cors from 'cors'
import blogRouter from './routes/blogs.js'
import commentRouter from './routes/comments.js'
import morgan from 'morgan'

const app = express() // create an API instance

app.use( cors() ) // allow access from everyone
app.use( morgan("dev") ) // log all requests to routes to console
app.use( express.json() ) // parse incoming HTTP BODY into => req.body


// HOME ROUTE / LANDING PAGE API
app.get("/", (req, res) => {
  res.send("<h2>Welcome broInnen to blogs API unlimited</h2>")
})

app.use("/blogs", blogRouter) // hook in blog subapi into main api
app.use("/comments", commentRouter) // hook in comments subapi into main api

// 404 catch missing route handler
app.use((req, res) => {
  res.status(404).json({ error: "This fucking route does not exist" })
})

const PORT = 5000
app.listen( PORT, () => console.log(`API started on http://localhost:${PORT}`) )
