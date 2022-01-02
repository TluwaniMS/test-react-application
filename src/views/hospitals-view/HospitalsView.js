import "./HospitalsView.css";

const HospitalsView = ({ hospital }) => {
  return (
    <div className="hospitals-main-container">
      <h4>{hospital.hospitalName}</h4>
    </div>
  );
};

export default HospitalsView;
