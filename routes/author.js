import express from 'express';
import Author from '../models/Author.js';

// author mini api
const authorRouter = express.Router();

// prefix route /authors
authorRouter.get('/', async (req, res) => {
  const authorsAll = await Author.find()

  res.json( authorsAll );
});

authorRouter.get("/:id", async (req, res) => {

  const { id } = req.params
  console.log({id})


  const author = await Author.findById( id )
  res.json(author)
})


export default authorRouter;
