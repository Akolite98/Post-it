const User = require("../models/userModel.js");
const Post = require('../models/postModel.js');
const Comment = require('../models/commentModel.js')

async function createComment(req, res) {
  try {
    const { user } = req;
    const { _id } = req.params;
    const { text } = req.body;
  
    const post = await Post.findById(_id);
    if (!post) {
      return res.status(404).json({
        success: false,
        error: 'Post not found',
      });
    }
    const findUser = await User.findById(user._id);
    console.log("POST", post);
  
    const newComment = await Comment.create({ "text": text, "author": findUser, "post": post });
  
  
    post.comments.push(newComment);
    post.save()

    console.log("postt",post)
  
    res.status(201).json({
      success: true,
      data: { newComment }
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
  
};

async function deleteComment(req, res) {
  const { commentId } = req.params;
  
  try {
    const deletedComment = await Comment.findByIdAndDelete(commentId);
    
    if (!deletedComment) {
      res.status(404).json({ success: false, message: "Comment not found" });
    } else {
      res.status(200).json({ success: true, message: "Comment deleted successfully", data: deletedComment });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: "Error deleting comment", error: err.message });
  }
}

async function getAllComments(req, res) {
  try {
    const postId = req.params._id;
    const post = await Post.find({postId}).populate('comments');
    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }
    res.status(200).json({
      success: true,
      data: post.comments
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }  
};


module.exports = {createComment, deleteComment, getAllComments};
