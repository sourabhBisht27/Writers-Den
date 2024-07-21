import { NavLink } from "react-router-dom";
import "./HeaderLink.css";

const HeaderLink = ({ to, label, Icon }) => {
  return (
    <li>
      <NavLink
        to={to}
        className="nav-items"
      >
        {Icon && <Icon size={20} />} {label}
      </NavLink>
    </li>
  );
};

export default HeaderLink;
