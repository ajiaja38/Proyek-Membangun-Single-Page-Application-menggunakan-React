import PropTypes from "prop-types";
import { showFormattedDate } from "../../utils/local-data";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { NavLink } from "react-router-dom";

const CardItem = ({ id, title, createdAt, body }) => {
  return (
    <div className="relative w-full h-80 max-h-fit p-4 bg-white border hover:shadow-md rounded-lg transition-all ease-linear duration-150 flex flex-col gap-4">
      <div className="flex flex-col mt-3">
        <NavLink to={`/detail-catatan/${id}`}>
          <h1 className="font-bold text-xl hover:underline active:text-gray-500 cursor-pointer">
            {title}
          </h1>
        </NavLink>
        <span className="text-xs">{showFormattedDate(createdAt)}</span>
      </div>
      <ReactQuill
        value={body}
        readOnly={true}
        theme="bubble"
        className="text-xs"
      />
      <div className="flex gap-2 absolute bottom-3 right-3 text-white text-sm">
        <NavLink to={`/detail-catatan/${id}`}>
          <button className="px-2 py-1 bg-green-500 hover:bg-green-300 active:bg-green-400 transition-all ease-linear duration-100 rounded">
            Detail
          </button>
        </NavLink>
      </div>
      <div className="inset-x-0 top-0 h-2 absolute rounded-t-md bg-blue-600"></div>
    </div>
  );
};

CardItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default CardItem;
