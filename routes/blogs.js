import express from 'express';

const blogs = [
  {
    _id: 'b1',
    title: 'Blogs Unlimited launched. Check it out!',
    text: "Lorem ipsum. Lorem ipsum",
    author: 'Rob',
    createdAt: '2021-11-26',
    likes: 5,
    dislikes: 1,
    comments: [
      { 
        _id: "c1",
        text: "Cannot agree more! Nice stuff",
        author: "Lover",
        likes: 0,
        dislikes: 0,
        createdAt: '2021-11-26'
      },
      {
        _id: "c2",
        text: "I don't like that fucking shit.",
        author: "Hater",
        likes: 1,
        dislikes: 15,
        createdAt: '2021-11-26'
      },
    ]
  },
  { _id: 'b2', title: 'Dummy 2', author: 'Nikolas' },
  { _id: 'b3', title: 'Dummy 3', author: 'Nikolas' }
];

// blog mini api
const blogRouter = express.Router();

// prefix route /blogs
blogRouter.get('/', (req, res) => {
  res.json(blogs);
});

blogRouter.post('/', (req, res) => {
  const { title, author } = req.body;

  // validate incoming body => we expect minimum "title" and "author"
  if (!title || !author) {
    return res.status(400).json({ error: 'Please provide title and author!' });
  }

  console.log('Body received: ', req.body);
  const blogNew = { title, author, _id: Date.now().toString() };
  blogs.push(blogNew);
  res.json(blogNew);
});

export default blogRouter;
