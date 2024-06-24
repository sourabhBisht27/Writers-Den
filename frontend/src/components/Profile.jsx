import { Link } from "react-router-dom";
import Footer from "../common/Footer";
import "../styles/Profile.css";

// creating profile dropdown for header component
const Profile = () => {
  return (
    <div className="dropdown">
      <button
        type="button"
        className="dropdown-btn"
      >
        P
      </button>
      <Link to="/profile">Profile</Link>
      <Link to="/lists">Lists</Link>
      <Link to="/profile">Stats</Link>
      <Footer />
    </div>
  );
};

export default Profile;
