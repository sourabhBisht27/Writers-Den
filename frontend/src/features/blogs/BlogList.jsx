import BlogItem from "./BlogItem";
import "./BlogList.css";

const BlogList = ({ blogs, deleteBlog }) => {
  return (
    <div className="blogs">
      {blogs && blogs.length > 0 ? (
        blogs.map((blog, index) => (
          <BlogItem
            key={blog._id}
            blog={blog}
            deleteBlog={deleteBlog}
          />
        ))
      ) : (
        <p>Error loading blogs</p>
      )}
    </div>
  );
};

export default BlogList;
