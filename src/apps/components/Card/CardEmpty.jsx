import { useLocation } from "react-router-dom";
import ilustration from "../../assets/ilustration/no-data.svg";

const CardEmpty = () => {
  const { pathname } = useLocation();

  return (
    <div className="w-full h-96 mt-3 flex flex-col justify-center items-center">
      <img src={ilustration} alt="ilustration" className="w-72 lg:w-80" />
      <p className="text-gray-500">
        Belum ada catatan {pathname === "/arsip" ? "yang di arsipkan" : "aktif"}
      </p>
    </div>
  );
};

export default CardEmpty;
