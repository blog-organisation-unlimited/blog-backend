import express from 'express'

const blogs = [
  { _id: "b1", title: "Blogs Unlimited launched. Check it out!", author: "Rob" },
  { _id: "b2", title: "Dummy 2", author: "Nikolas" },
  { _id: "b3", title: "Dummy 3", author: "Nikolas" }
]

// blog mini api
const blogRouter = express.Router()

// prefix route /blogs
blogRouter.get("/", (req, res) => {
  res.json( blogs )
})

blogRouter.post("/", (req, res) => {

  const { title, author } = req.body

  // validate incoming body => we expect minimum "title" and "author"
  if(!title || !author) {
    return res.status(400).json({ error: "Please provide title and author!" })
  }

  console.log( "Body received: ", req.body )
  const blogNew = { title, author, _id: Date.now().toString() }
  blogs.push( blogNew )
  res.json( blogNew )

})

export default blogRouter