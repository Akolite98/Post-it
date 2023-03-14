const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const model = mongoose.model;

const comment = new Schema(
  {
    text:{type: String, required: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    post: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
  },
  { timestamps: true }
);


module.exports = model("Comment", comment);
