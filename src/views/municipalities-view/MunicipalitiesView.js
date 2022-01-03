import "./MunicipalitiesView.css";
import { Link } from "react-router-dom";

const MunicipalitiesView = ({ municipality }) => {
  return (
    <div className="municipalities-content-container">
      <Link to={`/detailed-municipality-view/${municipality.municipalityKey}`}>{municipality.municipalityName}</Link>
      <div>X</div>
    </div>
  );
};

export default MunicipalitiesView;
