import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo/notes.png";

const Navbar = () => {
  return (
    <div className="w-full bg-white px-2 lg:px-5 py-4 shadow-md sticky top-0 flex justify-between z-50">
      <NavLink to="/" className="flex items-center gap-2">
        <img src={Logo} alt="Logo" className="w-7 h-7" />
        <h1 className="font-bold">Notes App</h1>
      </NavLink>
      <div className="flex gap-1 lg:gap-2">
        <NavLink
          to="/"
          className="navbar rounded-md px-2 flex justify-center items-center hover:bg-blue-300 transition-all ease-linear duration-150"
        >
          Beranda
        </NavLink>
        <NavLink
          to="/arsip"
          className="navbar rounded-md px-2 flex justify-center items-center hover:bg-blue-300 transition-all ease-linear duration-150"
        >
          Arsip
        </NavLink>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"></div>
    </div>
  );
};

export default Navbar;
