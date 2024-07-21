const Blog = require("../models/blog.model");

exports.getAllBlogs = async (_, res) => {
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
  // console.log(blog);
  try {
    const newBlog = await blog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    // console.log(
    //   "Error editing blog! AxiosError: Request failed with status code 404 : ",
    //   req.params.blogId
    // );
    // console.log("Update data : ", req.body);

    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.blogId,
      req.body,
      {
        new: true,
      }
    );

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found!" });
    }

    res.json(updatedBlog);
  } catch (err) {
    console.log("error updating blog", err);
    res.status(400).json({ message: err.message });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.blogId);
    res.json({ message: "Blog deleted!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
