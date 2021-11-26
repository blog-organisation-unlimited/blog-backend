import mongoose from 'mongoose'

const { Schema, model } = mongoose

// rules for each document in blog collection
const BlogSchema = new Schema({
  title: { type: String, required: [true, 'Post without title? Are your serious?'] },
  text: { type: String, required: true },
  author: { type: String },
  likes: { type: Number, default: 0},
  dislikes: { type: Number, default: 0},
  comments: [
    {
      text: { type: String, required: true },
      author: { type: String },
      likes: { type: Number, default: 0},
      dislikes: { type: Number, default: 0},
    }
  ]

}, {
  versionKey: false,
  timestamps: true
})

// create manager to manage blog data for me against database
const Blog = model("Blog", BlogSchema) //  Blog => blogs => searches for this collection in database

export default Blog