import { useState } from "react";
import Form from "../common/Form";
import { useLocation } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";

const Login = ({ title }) => {
  const location = useLocation();
  const linkText =
    location.pathname === "/register"
      ? "Already registered? Login!"
      : "Do you want to register?";
  const linkTo = location.pathname === "/register" ? "/login" : "/register";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/login", formData);
    } catch (error) {
      console.log("Error while logging-In!", error);
    }
  };

  return (
    <div>
      <Form
        title={title}
        linkText={linkText}
        linkTo={linkTo}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Login;
