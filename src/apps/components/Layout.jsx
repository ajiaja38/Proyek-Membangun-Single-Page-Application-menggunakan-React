import Navbar from "./Navbar";
import PropTypes from "prop-types";
import SpeedDial from "./SpeedDial";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container w-full mx-auto p-4 lg:px-7">{children}</div>
      <SpeedDial />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
