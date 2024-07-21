import React from "react";
import BlogForm from "./BlogForm";
import "../blogs/CreateBlogForm.css";

function CreateBlogForm({ addBlog }) {
  const handleCreateBlog = (formData) => {
    addBlog(formData);
  };

  return (
    <BlogForm
      initialFormData={{ title: "", description: "" }}
      onSubmit={handleCreateBlog}
      submitButtonText="Publish"
    />
  );
}

export default CreateBlogForm;
