const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config({ path: "../config.env" });
const { findMembershipById } = require('../controllers/userController.js');

const authentication = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ message: 'Authentication failed, missing token' });;
    }

    const token = authorization.replace('Bearer ', '');

    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ message: 'Authentication failed, Invalid token, user is not authorized' });
    }
    
    const user = await findMembershipById(decoded.userId);

    if (!user) {
      return res.status(401).json({ message: 'Authentication failed, User is not authorized' });
    }

    req.user = user;
    req.token = token;

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authentication;
