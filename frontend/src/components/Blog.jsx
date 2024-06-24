import SubmitBtn from "../common/SubmitBtn";
import "../styles/Blog.css";

const Blog = () => {
  return (
    <div className="main-container common">
      <form
        // action=""
        className="form"
      >
        <h1>Start writing!</h1>
        <input
          type="text"
          placeholder="Title"
          className="form-title"
        />
        <br />
        <textarea
          name="content"
          placeholder="Tell your story"
        />
        <br />
        <SubmitBtn text="publish" />
      </form>
      {/* <SubmitBtn text="publish" /> */}
    </div>
  );
};

export default Blog;
