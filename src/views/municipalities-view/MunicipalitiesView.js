import "./MunicipalitiesView.css";

const MunicipalitiesView = ({ municipality }) => {
  return (
    <div className="municipalities-content-container">
      <h1>{municipality.municipalityName}</h1>
    </div>
  );
};

export default MunicipalitiesView;
