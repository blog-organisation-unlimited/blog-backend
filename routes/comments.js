import express from 'express'

const comments = [
  { title: "That's all not true!", author: "Rob" },
  { title: "What? Stop spreading fake news", author: "Hater" },
  { title: "No idea, look up this study: http://sutdies.com/123", author: "Rob" },
]

// blog mini api
const commentRouter = express.Router()

// prefix route /blogs
commentRouter.get("/", (req, res) => {
  res.json( comments )
})

commentRouter.post("/", (req, res) => {
  const { title, author } = req.body

  // validate incoming body => we expect minimum "title" and "author"
  if(!title || !author) {
    return res.status(400).json({ error: "Please provide title and author!" })
  }

  console.log( "Body received: ", req.body )
  const commentNew = { title, author, _id: Date.now().toString() }
  comments.push( commentNew )
  res.json( commentNew )
})

export default commentRouter