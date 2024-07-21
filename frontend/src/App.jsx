import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./features/landing/LandingPage";
import CreateBlogForm from "./features/blogs/CreateBlogForm";
import { useEffect, useState } from "react";
import instance from "./instance";
import EditBlogForm from "./features/blogs/EditBlogForm";

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    instance
      .get("/api/v1/blogs")
      .then((response) => {
        // console.log(response.data);
        setBlogs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addBlog = (newBlog) => {
    // console.log("Adding blog : ", newBlog);
    instance
      .post("/api/v1/blogs", newBlog)
      .then((response) => {
        // console.log(response);
        setBlogs((prevBlogs) => [...prevBlogs, response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const editBlog = (blogId, updateBlog) => {
    // console.log("Updating blog with ID: ", blogId, "Data: ", updateBlog);

    instance
      .put(`/api/v1/blogs/${blogId}`, updateBlog)
      .then((response) => {
        if (response && response.data) {
          console.log("response data : ", response.data);
          setBlogs((prevBlogs) =>
            prevBlogs.map((blog) =>
              blog._id === blogId ? response.data : blog
            )
          );
        } else {
          console.log("No data received in response");
        }
      })
      .catch((error) => {
        console.log(`Error editing blog! ${error}`);
      });
  };

  const deleteBlog = (blogId) => {
    instance
      .delete(`/api/v1/blogs/${blogId}`)
      .then(() => {
        setBlogs((prevBlogs) =>
          prevBlogs.filter((blog) => blog._id !== blogId)
        );
      })
      .catch((error) => {
        console.log(`Error deleting blog! ${error}`);
      });
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              blogs={blogs}
              deleteBlog={deleteBlog}
            />
          }
        />
        <Route
          path="/write"
          element={<CreateBlogForm addBlog={addBlog} />}
        />
        <Route
          path="/edit/:blogId"
          element={
            <EditBlogForm
              blogs={blogs}
              editBlog={editBlog}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
