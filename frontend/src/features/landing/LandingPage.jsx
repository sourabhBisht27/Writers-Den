import Header from "../../common/Header";
import BlogList from "../blogs/BlogList";
import "./LandingPage.css";

const LandingPage = ({ blogs, deleteBlog, handleSearch }) => {
  return (
    <div>
      <Header handleSearch={handleSearch} />
      <BlogList
        blogs={blogs}
        deleteBlog={deleteBlog}
      />
    </div>
  );
};

export default LandingPage;
