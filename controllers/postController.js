const User = require("../models/userModel.js");
const Post = require('../models/postModel.js');

async function createPost(req, res) {

  try {
    const {user} =req;
    const { title, msg } = req.body;

    const findUser = await User.findById(user._id);

    console.log(findUser)
    const newPost = await Post.create({ "title": title, "msg": msg, "author": findUser });

    res.status(201).json({
      success: true,
      data: newPost
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
};

async function editPost(req, res) {
  try {
    const postId = req.params.id;
    const { title, msg } = req.body;

    const updatedPost = await Post.findByIdAndUpdate(postId, { title, msg }, { new: true });

    res.status(200).json({
      success: true,
      data: updatedPost
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
};

async function softDeletePost(req, res) {
  try {
    const postId = req.params.id;

    const updatedPost = await Post.findByIdAndRemove(postId);

    res.status(200).json({
      success: true,
      data: updatedPost
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
};

async function getAllPosts(req, res) {
  try {
    const posts = await Post.find();
    res.status(200).json({
      success: true,
      data: posts
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
};

async function getPost(req, res) {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json({
      success: true,
      data: post
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
};

module.exports = {createPost, editPost, softDeletePost, getAllPosts, getPost};
