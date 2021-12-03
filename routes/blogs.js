import express from 'express';
import Blog from '../models/Blog.js';

// blog mini api
const blogRouter = express.Router();

// prefix route /blogs
blogRouter.get('/', async (req, res) => {
  const blogsAll = await Blog.find()
    .populate("author")

  res.json( blogsAll );
});

blogRouter.get("/latest", (req, res) => {
  res.json({ message: "Latest posts", posts:[] })
})


// /blogs/123456 => req.params.id  
blogRouter.get("/:id", async (req, res) => {

  const { id } = req.params
  console.log({id})


  const blog = await Blog.findById( id )
  res.json(blog)
})



blogRouter.post('/', (req, res) => {
  const { title, author } = req.body;

  // validate incoming body => we expect minimum "title" and "author"
  if (!title || !author) {
    return res.status(400).json({ error: 'Please provide title and author!' });
  }

  console.log('Body received: ', req.body);
  const blogNew = { title, author };
  blogs.push(blogNew);
  res.json(blogNew);
});

export default blogRouter;
