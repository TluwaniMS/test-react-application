import "./DoctorsView.css";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { DELETE_DOCTOR_BY_ID } from "../../mutations/doctors.mutation";

const DoctorsView = ({ doctor }) => {
  return (
    <div className="doctors-main-container">
      <Link to={`/detailed-doctors-view/${doctor.id}`}>
        {doctor.firstName} {doctor.lastName}
      </Link>
      <div>X</div>
    </div>
  );
};

export default DoctorsView;
