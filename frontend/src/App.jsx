import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./features/landing/LandingPage";
import CreateBlogForm from "./features/blogs/CreateBlogForm";
import { useEffect, useState } from "react";
import instance from "./instance";
import EditBlogForm from "./features/blogs/EditBlogForm";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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

  // (1)Add
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

  // (2)Edit
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

  // (3)Delete
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

  // (4)Search
  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchQuery) ||
      blog.description.toLowerCase().includes(searchQuery)
  );

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              blogs={filteredBlogs}
              deleteBlog={deleteBlog}
              handleSearch={handleSearch}
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
