import Input from "./Input";
import SubmitBtn from "./SubmitBtn";
import "../styles/Form.css";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Form = ({
  title,
  linkText,
  linkTo,
  formData,
  handleSubmit,
  handleChange,
}) => {
  return (
    <div className="form-container common">
      <form onSubmit={handleSubmit}>
        <h1>{title}</h1>
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="Username"
          required
          autoComplete="off"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Email address"
          required
          autoComplete="off"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
          autoComplete="off"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        {title === "Register" && (
          <Input
            type="password"
            id="confirm"
            name="confirm"
            placeholder="Confirm Password"
            required
            autoComplete="off"
            value={formData.confirm}
            onChange={handleChange}
          />
        )}
        <br />
        <Link to={linkTo}>{linkText}</Link>
        <br />
        {title === "Register" ? (
          <SubmitBtn buttonText="Register" />
        ) : (
          <SubmitBtn buttonText="Login" />
        )}
      </form>
      <ToastContainer />
    </div>
  );
};

export default Form;
