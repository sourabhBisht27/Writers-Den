import HeaderLinks from "./HeaderLinks";
import SearchBar from "./SearchBar";
import "./Header.css";

const Header = ({ handleSearch }) => {
  return (
    <header className="header">
      <div className="header-left">
        <h2>WritersDen</h2>
        <SearchBar handleSearch={handleSearch} />
      </div>
      <HeaderLinks />
    </header>
  );
};

export default Header;
