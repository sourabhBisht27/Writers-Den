import "./Input.css";

const Input = ({ ...input }) => {
  // console.log("Input : ", input);
  return (
    <input
      className="input"
      {...input}
    />
  );
};

export default Input;
