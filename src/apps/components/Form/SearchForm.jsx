import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const SearchForm = ({ searchParams, setSearchParams }) => {
  const { pathname } = useLocation();

  return (
    <input
      type="text"
      className="w-full mt-2 outline-none p-2 border rounded-md focus:ring-2 focus:ring-blue-500 transition-all ease-linear duration-100"
      placeholder={`Cari Catatan ${
        pathname === "/arsip" ? "Arsip" : "Aktif"
      }...`}
      onChange={(e) => setSearchParams({ search: e.target.value })}
      value={searchParams || ""}
    ></input>
  );
};

SearchForm.propTypes = {
  searchParams: PropTypes.string,
  setSearchParams: PropTypes.func,
};

export default SearchForm;
