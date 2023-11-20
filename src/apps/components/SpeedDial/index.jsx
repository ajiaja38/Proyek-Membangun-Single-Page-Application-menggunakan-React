import { FaPlus } from "react-icons/fa";
import { NavLink, useLocation, useParams } from "react-router-dom";

const SpeedDial = () => {
  const { pathname } = useLocation();
  const { id } = useParams();

  return (
    <NavLink to="/tambah-catatan" hidden={pathname === "/tambah-catatan" || id}>
      <button className="fixed bottom-5 right-5 w-12 h-12 lg:w-14 lg:h-14 text-white flex justify-center items-center bg-blue-500 hover:bg-blue-400 active:bg-blue-700 transition-all ease-linear duration-100 rounded-full text-xl shadow-lg">
        <FaPlus />
      </button>
    </NavLink>
  );
};

export default SpeedDial;
