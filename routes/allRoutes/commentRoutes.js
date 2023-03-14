const express = require('express');
const commentController = require('../../controllers/commentController.js');
const auth = require('../../middleWares/authorization.js')

const memberAuthRoutes = express.Router();

const commentRoutes = function() {
  memberAuthRoutes.post('/:_id', auth, commentController.createComment);
  memberAuthRoutes.get('/:commentId', auth, commentController.deleteComment);
  memberAuthRoutes.get('/all/:_id', commentController.getAllComments);
  return memberAuthRoutes;
};

module.exports = commentRoutes;
