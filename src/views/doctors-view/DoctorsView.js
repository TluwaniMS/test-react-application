import "./DoctorsView.css";
import { Link } from "react-router-dom";

const DoctorsView = ({ doctor }) => {
  return (
    <div className="doctors-main-container">
      <Link to={`/detailed-doctors-view/${doctor.id}`}>
        {doctor.firstName} {doctor.lastName}
      </Link>
    </div>
  );
};

export default DoctorsView;
