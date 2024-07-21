import "./TextArea.css";

const TextArea = ({ ...textareaProps }) => {
  // console.log("textarea : ", textareaProps);
  return (
    <textarea
      className="textarea"
      {...textareaProps}
    />
  );
};

export default TextArea;
