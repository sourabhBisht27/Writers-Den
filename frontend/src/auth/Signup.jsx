import Form from "../common/Form";
import { useLocation } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Signup.css";

const Signup = ({ title }) => {
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
    confirm: "",
  });

  const handleChange = (e) => {
    console.log(e.target);
    console.log(e.target.name);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toastMessage = () => toast.error("Password does not match!");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirm) {
      // TODO: add toast
      toastMessage();
      return;
    }

    try {
      const response = await axiosInstance.post("/register", formData);
      console.log("Registration successful:", response.data);
      // TODO: redirect to login page after successful signup
    } catch (error) {
      console.log("Error during registration:", error);
    }
  };

  return (
    <div className="register">
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

export default Signup;
