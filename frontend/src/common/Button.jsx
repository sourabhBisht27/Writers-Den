import "./Button.css";

const Button = ({ type, btnText }) => {
  return (
    <button
      className="button"
      type={type}
    >
      {btnText}
    </button>
  );
};

export default Button;
