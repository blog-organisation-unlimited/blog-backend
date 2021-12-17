import express from 'express';
import Post from '../models/Post.js';

// post mini api
const postRouter = express.Router();

// prefix route /posts
postRouter.get('/', async (req, res) => {
  const postsAll = await Post.find()
    .populate("author") // => author: { email, password }

    // res.json => toJSON() => here we wanna hide some sensitive info, e.g. passwords
  res.json( postsAll ); // => author: { email }

});

postRouter.get("/latest", (req, res) => {
  res.json({ message: "Latest posts", posts:[] })
})


// /posts/123456 => req.params.id  
postRouter.get("/:id", async (req, res) => {

  const { id } = req.params
  console.log({id})


  const post = await Post.findById( id )
  res.json(post)
})



postRouter.post('/', (req, res) => {
  const { title, author } = req.body;

  // validate incoming body => we expect minimum "title" and "author"
  if (!title || !author) {
    return res.status(400).json({ error: 'Please provide title and author!' });
  }

  console.log('Body received: ', req.body);
  const postNew = { title, author };
  posts.push(postNew);
  res.json(postNew);
});

export default postRouter;
