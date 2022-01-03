import "./DoctorsView.css";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { DELETE_DOCTOR_BY_ID } from "../../mutations/doctors.mutation";

const DoctorsView = ({ doctor }) => {
  const [deleteDoctorById, { data, loading, error }] = useMutation(DELETE_DOCTOR_BY_ID);

  return (
    <div className="doctors-main-container">
      <Link to={`/detailed-doctors-view/${doctor.id}`}>
        {doctor.firstName} {doctor.lastName}
      </Link>
      <div onClick={() => deleteDoctorById({ variables: { doctorsId: parseInt(doctor.id) } })}>X</div>
    </div>
  );
};

export default DoctorsView;
