import "./HospitalsView.css";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { DELETE_HOSPITAL_BY_ID } from "../../mutations/hospitals.mutation";
import { GET_ALL_HOSPITALS } from "../../queries/hospitals.query";

const HospitalsView = ({ hospital }) => {
  const [deleteHospitalById, { data, loading, error }] = useMutation(DELETE_HOSPITAL_BY_ID, {
    refetchQueries: [GET_ALL_HOSPITALS]
  });

  return (
    <div className="hospitals-main-container">
      <Link to={`/detailed-hospital-view/${hospital.hospitalKey}`}>{hospital.hospitalName}</Link>
      <div
        className="content-deletion"
        onClick={() => deleteHospitalById({ variables: { hospitalKey: hospital.hospitalKey } })}
      >
        X
      </div>
    </div>
  );
};

export default HospitalsView;
