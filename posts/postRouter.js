const express = require('express');
const knex = require('../database/dbConfig');
const post_db = require('./postController.js');

const postRouter = express.Router()

// Posts routes
postRouter.post('/', (req, res) => {
  const post = req.body;
  // const { text } = req.body.text;
  // const { id } = req.body.userId;
  post_db.addPost(post)
    .then((ids) => {
      res.status(201).json(ids);
    })
    .catch((error) => {
      res.status(500).json({message: 'cannot add post to database.'})
    })
})

module.exports = postRouter;