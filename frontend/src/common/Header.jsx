import { SiGravatar } from "react-icons/si";
import { CiBellOn } from "react-icons/ci";
import { SlNote } from "react-icons/sl";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-inner">
        <div className="logo">LOGO</div>
        <input
          type="text"
          placeholder="Search"
          size={20}
        />
      </div>
      <nav className="nav-links">
        <HiOutlineDotsHorizontal
          className="links link-four"
          size={25}
          color="#8d99ae"
        />
        <SlNote
          className="links link-first"
          size={25}
          color="#8d99ae"
        />
        <p>Write</p>
        <CiBellOn
          className="links link-second"
          size={25}
          color="#8d99ae"
        />

        {/* TODO: change later & create a dropdown */}
        <SiGravatar
          className="links link-three"
          size={25}
          color="#8d99ae"
        />
      </nav>
    </div>
  );
};

export default Header;
