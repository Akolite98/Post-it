const mongoose = require("mongoose");


const Schema = mongoose.Schema;
const model = mongoose.model;

const post = new Schema(
  {
    msg:{type: String, required: true },
    title: { type: String, required: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);


module.exports = model("Post", post);


