import "./MunicipalitiesView.css";

const MunicipalitiesView = ({ municipalities }) => {
  return (
    <div className="municipalities-main-container">
      {municipalities.map((municipality) => (
        <h4></h4>
      ))}
    </div>
  );
};

export default MunicipalitiesView;
