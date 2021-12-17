import mongoose from 'mongoose'
const { Schema, model } = mongoose

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
}, {
  versionKey: false,
  timestamps: true,
  // hook into JSON responses and hide fields
  toJSON: {
    transform: (originalDoc, returnDoc) => {
      delete returnDoc.password;
      return returnDoc
    }
  }
})

const User = model("User", UserSchema) // User => collection: users 

export default User