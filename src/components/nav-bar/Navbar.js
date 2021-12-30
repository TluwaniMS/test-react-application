import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="main-navbar-content-container">
      <Link to="municipalities">municipalities</Link>
      <Link to="hospitals">hospitals</Link>
      <Link to="doctors">doctors</Link>
    </div>
  );
};

export default Navbar;
