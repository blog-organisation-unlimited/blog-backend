import './config.js'
import './db-connect.js'
import mongoose from 'mongoose'
import Post from './models/Post.js'
import User from './models/User.js'

// clear dummy data
await Post.deleteMany({})
await User.deleteMany({})


const authors = [
  { name: "Nikolas", email: "nik@nik.nik", password: "nik23" }, 
  { name: "Rob", email: "rob@rob.rob", password: "rob13" },
  { name: "Lover", email: "love@love.love", password: "l§v§e23" },
  { name: "Hater", email: "hate@hate.hate", password: "hate312" },
]

// SEED authors first
const authorsDb = await User.create( authors )

console.log( authorsDb )

const posts = [
  {
    title: 'Posts Unlimited launched. Check it out!',
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


// // seeeeed in some initial posts
const postsDb = await Post.create( posts )
console.log(postsDb)


mongoose.connection.close() // close connection and quit script