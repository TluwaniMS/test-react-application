import "./DoctorsView.css";

const DoctorsView = ({ doctor }) => {
  return (
    <div className="doctors-main-container">
      <h4>
        {doctor.firstName} {doctor.lastName}
      </h4>
    </div>
  );
};

export default DoctorsView;
