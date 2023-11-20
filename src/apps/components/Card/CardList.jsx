import PropTypes from "prop-types";
import CardItem from "./CardItem";

const CardList = ({ notes }) => {
  return (
    <div className="mt-3 mb-20 grid grid-cols-1 lg:grid-cols-4 gap-6">
      {notes.map((note) => (
        <CardItem key={note.id} {...note} />
      ))}
    </div>
  );
};

CardList.propTypes = {
  notes: PropTypes.array.isRequired,
};

export default CardList;
