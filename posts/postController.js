const knex = require('../database/dbConfig');

const post_db = {
  addPost: function(post) {
    return knex.insert(post).into('posts');
  },
  allPosts: function() {
    return knex('posts');
  },
  getID: function(postId) {
    return knex('posts').where({ postId });
  },
  updatePost: function(postId, post) {
    return knex('posts').where({ postId }).update(post);
  },
  deletePost: function(postId) {
    return knex('posts').where({ postId }).del();
  }

}

module.exports = post_db;