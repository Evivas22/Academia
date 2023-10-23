import { FaSearch } from 'react-icons/fa';

const SearchBar = ({placeholder}) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        className="border border-color-trasparente rounded-lg py-2 pl-10 pr-4 w-64 focus:outline-none focus:ring focus:border-blue-300"
      />
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
        <FaSearch className="text-color-trasparente" />
      </div>
    </div>
  );
};

export default SearchBar;
