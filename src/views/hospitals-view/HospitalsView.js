import "./HospitalsView.css";

const HospitalsView = ({ hospitals }) => {
  return (
    <div className="hospitals-main-container">
      {hospitals.map((hospital) => (
        <h4></h4>
      ))}
    </div>
  );
};

export default HospitalsView;
