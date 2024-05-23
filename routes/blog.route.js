const { Router } = require("express");
const router = Router();

const {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blog.controller");

router.get("/blogs", getAllBlogs);
router.get("/blogs/:blogId", getBlogById);
router.post("/blogs", createBlog);
router.put("./blogs/:blogId", updateBlog);
router.delete("./blogs/:blogId", deleteBlog);

module.exports = router;
