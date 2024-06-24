import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/SubmitBtn.css";

const SubmitBtn = ({ buttonText = "Button" }) => {
  const toastMessage = () => toast.success("Form submitted succesfully!");

  return (
    <button
      id="btn"
      type="button"
      onClick={toastMessage}
    >
      {buttonText}
      {/* <ToastContainer /> */}
    </button>
  );
};

export default SubmitBtn;
