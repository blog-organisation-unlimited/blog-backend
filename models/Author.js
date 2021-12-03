import mongoose from 'mongoose'
const { Schema, model } = mongoose

const AuthorSchema = new Schema({
  name: { type: String, required: true }
}, {
  versionKey: false,
  timestamps: true
})

const Author = model("Author", AuthorSchema) // Author => collection: authors 

export default Author