import { RiDeleteBin5Line, RiEditLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import "./BlogItem.css";

const BlogItem = ({ blog, deleteBlog }) => {
  // console.log("Blogs : ", blog);
  const { _id, title, description } = blog;
  // console.log("_id is : ", _id);
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/edit/${_id}`);
  };

  const handleDelete = () => {
    deleteBlog(_id);
  };

  return (
    <div className="blog">
      <div className="blog-header">
        <h2>{title ? title : <span>Error loading title</span>}</h2>
        <div className="blog-actions">
          <RiEditLine
            onClick={handleEdit}
            className="blog-icon"
          />
          <RiDeleteBin5Line
            onClick={handleDelete}
            className="blog-icon"
          />
        </div>
      </div>
      <p>
        {description ? description : <span>Error loading description</span>}
      </p>
    </div>
  );
};

export default BlogItem;
