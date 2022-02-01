import "./DoctorsView.css";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { DELETE_DOCTOR_BY_ID } from "../../mutations/doctors.mutation";
import { GET_ALL_DOCTORS } from "../../queries/doctors.query";

const DoctorsView = ({ doctor }) => {
  const [deleteDoctorById] = useMutation(DELETE_DOCTOR_BY_ID, {
    refetchQueries: [GET_ALL_DOCTORS]
  });

  return (
    <div className="doctors-main-container">
      <Link to={`/detailed-doctors-view/${doctor._id}`} className="content-title">
        {doctor.firstName} {doctor.lastName}
      </Link>
      <div className="content-deletion" onClick={() => deleteDoctorById({ variables: { _id: doctor._id } })}>
        X
      </div>
    </div>
  );
};

export default DoctorsView;
