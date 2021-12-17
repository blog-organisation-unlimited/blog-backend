import express from 'express';
import User from '../models/User.js';

// user mini api
const userRouter = express.Router();

// prefix route /users
userRouter.get('/', async (req, res) => {
  const usersAll = await User.find()

  res.json( usersAll );
});

userRouter.get("/:id", async (req, res) => {

  const { id } = req.params
  console.log({id})


  const user = await User.findById( id )
  res.json(user)
})


export default userRouter;
