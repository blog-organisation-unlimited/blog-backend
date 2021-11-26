import './config.js'
import './db-connect.js'
import mongoose from 'mongoose'
import Blog from './models/Blog.js'


const blogsJs = [
  {
    title: 'Blogs Unlimited launched. Check it out!',
    text: "Lorem ipsum. Lorem ipsum",
    author: 'Rob',
    likes: 5,
    dislikes: 1,
    comments: [
      { 
        text: "Cannot agree more! Nice stuff",
        author: "Lover",
        likes: 0,
        dislikes: 0
      },
      {
        text: "I don't like that fucking shit.",
        author: "Hater",
        likes: 1,
        dislikes: 15,
      },
    ]
  },
  { title: 'Dummy 2', text: "Dummy Text", author: 'Nikolas' },
  { title: 'Dummy 3', text: "Dummy Text", author: 'Nikolas' }
];


// clear dummy data
await Blog.deleteMany({})

// seeeeed in some initial blogs
const blogsDb = await Blog.create( blogsJs )
console.log(blogsDb)


mongoose.connection.close() // close connection and quit script