import { PiShoppingBagOpenFill } from "react-icons/pi";
import PropTypes from "prop-types";

export default function Searchbar({ search, setSearch }) {
  return (
    <div className="relative flex items-center justify-center md:w-[600px] w-full mx-auto p-2 border-2 hover:border-[#732498] border-[#F9F2FC] shadow-sm">
      <input
        type="search"
        name="search"
        value={search}
        id="search"
        placeholder="جستجو کنید .."
        className="flex-grow outline-none placeholder:text-sm flex p-1"
        onChange={(e) => setSearch(e.target.value)}
      />
      <PiShoppingBagOpenFill className="text-[#8e03d0] bottom-3 ml-2 w-5 h-5" />
    </div>
  );
}

Searchbar.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
};
