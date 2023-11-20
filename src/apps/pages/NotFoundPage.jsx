import { NavLink } from "react-router-dom";
import ilustration from "../assets/ilustration/page-not-found.svg";

const NotFoundPage = () => {
  return (
    <div className="h-screen bg-white w-full flex flex-col justify-center items-center gap-2">
      <img src={ilustration} alt="ilustration" className="w-72 lg:w-80" />
      <h1 className="font-extrabold text-red-500 text-5xl text-center">Oops</h1>
      <h2 className="font-bold text-lg text-center">
        Halaman Tidak Ditemukan!
      </h2>
      <NavLink to="/">
        <button className="p-2 bg-blue-500 hover:bg-blue-300 active:bg-blue-700 text-white rounded-md shadow-lg transition-all ease-linear duration-150">
          Kembali Ke Beranda
        </button>
      </NavLink>
    </div>
  );
};

export default NotFoundPage;
