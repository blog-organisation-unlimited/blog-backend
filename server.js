import './config.js'
import './db-connect.js'
import express from 'express'
import cors from 'cors'
import postRouter from './routes/posts.js'
import userRouter from './routes/users.js'
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

app.use("/users", userRouter) // hook in authors supabi into main api
app.use("/posts", postRouter) // hook in blog subapi into main api
app.use("/comments", commentRouter) // hook in comments subapi into main api

// 404 catch missing route handler
app.use((req, res) => {
  res.status(404).json({ error: "This fucking route does not exist" })
})

const PORT = process.env.PORT || 5000
console.log({ PORT })
app.listen( PORT, () => console.log(`API started on http://localhost:${PORT}`) )
