import HeaderLinks from "./HeaderLinks";
import SearchBar from "./SearchBar";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h2>WritersDen</h2>
        <SearchBar />
      </div>
      <HeaderLinks />
    </header>
  );
};

export default Header;
