const express = require('express');
const postController = require('../../controllers/postController.js');
const auth = require('../../middleWares/authorization.js')

const memberAuthRoutes = express.Router();

const postRoutes = function() {
  memberAuthRoutes.post('/post', auth, postController.createPost);
  memberAuthRoutes.get('/all-post', postController.getAllPosts);
  memberAuthRoutes.get('/post/:id', auth, postController.getPost);
  memberAuthRoutes.patch('/update-post/:id', auth,postController.editPost);
  memberAuthRoutes.delete('/delete/:id', auth, postController.softDeletePost)
  return memberAuthRoutes;
};

module.exports = postRoutes;