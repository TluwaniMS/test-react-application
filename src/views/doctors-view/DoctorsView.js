import "./DoctorsView.css";

const DoctorsView = ({ doctors }) => {
  return (
    <div className="doctors-main-container">
      {doctors.map((doctor) => (
        <h4></h4>
      ))}
    </div>
  );
};

export default DoctorsView;
