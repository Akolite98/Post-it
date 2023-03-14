const express = require('express');
const userRoutes = require("./allRoutes/userRoutes")
const postRoutes = require("./allRoutes/postRoutes")
const commentRoutes = require("./allRoutes/commentRoutes")


const router = express.Router();

// Define main routes
router.get('/', function(req, res) {
  res.send('Welcome to Post-it!');
});

// Use routes defined in userRoute.js
router.use('/users', userRoutes());
router.use('/posts', postRoutes());
router.use('/comments', commentRoutes());


module.exports = router;
