import express from 'express'
import cors from 'cors'

const app = express() // create an API instance

app.use( express.json() ) // parse incoming HTTP BODY into => req.body

const blogs = [
  { title: "Blogs Unlimited launched. Check it out!", author: "Rob" },
  { title: "Dummy 2" },
  { title: "Dummy 3" }
]

// blog mini api
const blogRouter = express.Router()

// prefix route /blogs
blogRouter.get("/", (req, res) => {
  res.json( blogs )
})

blogRouter.post("/", (req, res) => {
  console.log( "Body received: ", req.body )
  res.json( req.body )
  //req.body // => here you will get POST data
})

// HOME ROUTE / LANDING PAGE API
app.get("/", (req, res) => {
  res.send("<h2>Welcome broInnen to blogs API unlimited</h2>")
})

app.use("/blogs", blogRouter) // hook in subapi into main api

const PORT = 5000
app.listen( PORT, () => console.log(`API started on http://localhost:${PORT}`) )
