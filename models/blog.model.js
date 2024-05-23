const { Schema, model, Types } = require("mongoose");

const blogSchema = new Schema(
  {
    title: {
      type: String,
      minLength: 2,
      maxLength: 80,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    keyTerms: {
      type: [String],
      default: 0,
    },
  },
  { timestamps: true }
);

const Blog = model("Blog", blogSchema);
module.exports = Blog;
