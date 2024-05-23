const Blog = require("../models/blog.model");

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
    // console.log(blogs); 
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found!" });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createBlog = async (req, res) => {
  const blog = new Blog(req.body);
  try {
    const newBlog = await blog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const uodatedBlog = await Blog.updateById(req.params.id, req.body, {
      new: true,
    });
    res.json(uodatedBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDeleted(req.params.id);
    res.json({ message: "Blog deleted!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
