import "./HospitalsView.css";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { DELETE_HOSPITAL_BY_ID } from "../../mutations/hospitals.mutation";

const HospitalsView = ({ hospital }) => {
  return (
    <div className="hospitals-main-container">
      <Link to={`/detailed-hospital-view/${hospital.hospitalKey}`}>{hospital.hospitalName}</Link>
      <div>X</div>
    </div>
  );
};

export default HospitalsView;
