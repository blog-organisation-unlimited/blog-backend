import express from 'express';
import Blog from '../models/Blog.js';

// blog mini api
const blogRouter = express.Router();

// prefix route /blogs
blogRouter.get('/', async (req, res) => {

  const blogsAll = await Blog.find()
  res.json( blogsAll );
});

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
