import { FiSearch } from "react-icons/fi";
import "./SearchBar.css";

const SearchBar = ({ handleSearch }) => {
  const handleChange = (event) => {
    handleSearch(event.target.value);
  };

  return (
    <div className="search-bar-wrapper">
      <input
        className="search-bar"
        type="text"
        placeholder="Search..."
        onChange={handleChange}
      />
      <FiSearch className="search-icon" />
    </div>
  );
};

export default SearchBar;
