import BlogItem from "./BlogItem";
import "./BlogList.css";

const BlogList = ({ blogs, deleteBlog }) => {
  return (
    <div className="blogs">
      {blogs && blogs.length > 0 ? (
        blogs.map((blog) => (
          <BlogItem
            key={blog._id}
            blog={blog}
            deleteBlog={deleteBlog}
          />
        ))
      ) : (
        <p>No blogs found!</p>
      )}
    </div>
  );
};

export default BlogList;
