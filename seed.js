import './config.js'
import './db-connect.js'
import mongoose from 'mongoose'
import Blog from './models/Blog.js'
import Author from './models/Author.js'

// clear dummy data
await Blog.deleteMany({})
await Author.deleteMany({})


const authors = [
  { name: "Nikolas" }, 
  { name: "Rob" },
  { name: "Lover" },
  { name: "Hater" },
]

// SEED authors first
const authorsDb = await Author.create( authors )

console.log( authorsDb )

const blogs = [
  {
    title: 'Blogs Unlimited launched. Check it out!',
    text: "Lorem ipsum. Lorem ipsum",
    author: authorsDb[1], // => Rob
    likes: 5,
    dislikes: 1,
    comments: [
      { 
        text: "Cannot agree more! Nice stuff",
        author: authorsDb[2], // => Lover
        likes: 0,
        dislikes: 0
      },
      {
        text: "I don't like that fucking shit.",
        author: authorsDb[3], // => Hater
        likes: 1,
        dislikes: 15,
      },
    ]
  },
  { title: 'Dummy 2', text: "Dummy Text", author: authorsDb[0] }, // => Nikolas },
  { title: 'Dummy 3', text: "Dummy Text", author: authorsDb[0] }, // => Nikolas }
];


// // seeeeed in some initial blogs
const blogsDb = await Blog.create( blogs )
console.log(blogsDb)


mongoose.connection.close() // close connection and quit script