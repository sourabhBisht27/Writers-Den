import React, { useEffect, useState } from "react";
import BlogForm from "./BlogForm";
import { useNavigate, useParams } from "react-router-dom";

function EditBlogForm({ blogs, editBlog }) {
  const { blogId } = useParams();
  const [initialFormData, setInitialFormData] = useState({
    title: "",
    description: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const blogToEdit = blogs.find((blog) => blog._id === blogId);
    if (blogToEdit) {
      setInitialFormData({
        title: blogToEdit.title,
        description: blogToEdit.description,
      });
    }
  }, [blogs, blogId]);

  const handleEditBlog = (formData) => {
    editBlog(blogId, formData);
    navigate("/");
  };
  return (
    <BlogForm
      initialFormData={initialFormData}
      onSubmit={handleEditBlog}
      submitButtonText="Update"
    />
  );
}

export default EditBlogForm;
