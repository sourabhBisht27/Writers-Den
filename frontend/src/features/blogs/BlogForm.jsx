import React, { useEffect, useState } from "react";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import Button from "../../common/Button";
import { useNavigate } from "react-router-dom";

function BlogForm({ initialFormData, onSubmit, submitButtonText }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (initialFormData) {
      setForm(initialFormData);
    }
  }, [initialFormData]);

  const validateForm = () => {
    const newErrors = {};
    if (form.title.length < 2 || form.title.length > 80) {
      newErrors.title = "Title must be between 2 and 80 characters.";
    }
    if (!form.description) {
      newErrors.description = "Description is required.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    onSubmit(form);
    setErrors({});
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <form
      className="form"
      name="blogForm"
      onSubmit={handleSubmit}
    >
      {errors.title && <p className="error">{errors.title}</p>}
      <Input
        type="text"
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
      />
      {errors.description && <p className="error">{errors.description}</p>}
      <TextArea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
      />
      <br />
      <Button
        type="submit"
        btnText={submitButtonText}
      />
    </form>
  );
}

export default BlogForm;
