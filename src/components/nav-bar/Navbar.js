import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="main-navbar-content-container">
      <Link className="navbar-item" to="municipalities">
        municipalities
      </Link>
      <Link className="navbar-item" to="hospitals">
        hospitals
      </Link>
      <Link className="navbar-item" to="doctors">
        doctors
      </Link>
    </div>
  );
};

export default Navbar;
