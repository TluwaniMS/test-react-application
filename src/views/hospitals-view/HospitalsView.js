import "./HospitalsView.css";
import { Link } from "react-router-dom";

const HospitalsView = ({ hospital }) => {
  return (
    <div className="hospitals-main-container">
      <Link to={`/detailed-hospital-view/${hospital.hospitalKey}`}>{hospital.hospitalName}</Link>
      <div>X</div>
    </div>
  );
};

export default HospitalsView;
