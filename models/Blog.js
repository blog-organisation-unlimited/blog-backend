import mongoose from 'mongoose'

const { Schema, model } = mongoose


// SUB-SCHEMA / CHILD-SCHEMA for NESTED comments!
const CommentSchema = new Schema(    {
  text: { type: String, required: true },
  author: {
    ref: 'Author',
    type: Schema.Types.ObjectId
  },
  likes: { type: Number, default: 0},
  dislikes: { type: Number, default: 0},
}, 
{ 
  timestamps: true 
  // _id: false } // disable creation of IDs for subdocuments
}
)

// rules for each document in blog collection
const BlogSchema = new Schema({
  title: { type: String, required: [true, 'Post without title? Are your serious?'] },
  text: { type: String, required: true },
  author: {
    ref: 'Author',
    type: Schema.Types.ObjectId
    // ID des Authors => points to an Author in authors collection
  },
  likes: { type: Number, default: 0},
  dislikes: { type: Number, default: 0},
  comments: [ CommentSchema ]

}, {
  versionKey: false,
  timestamps: true // => creates createdAt and updatedAt fields and manages them for us
})

// create manager to manage blog data for me against database
const Blog = model("Blog", BlogSchema) //  Blog => blogs => searches for this collection in database

export default Blog