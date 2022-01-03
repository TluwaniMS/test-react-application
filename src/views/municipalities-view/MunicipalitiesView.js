import "./MunicipalitiesView.css";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { DELETE_MUNICIPALITY_BY_ID } from "../../mutations/municipalities.mutation";

const MunicipalitiesView = ({ municipality }) => {
  const { data, loading, error } = useMutation(DELETE_MUNICIPALITY_BY_ID, {
    variables: { municipalityKey: municipality.municipalityKey }
  });

  return (
    <div className="municipalities-content-container">
      <Link to={`/detailed-municipality-view/${municipality.municipalityKey}`}>{municipality.municipalityName}</Link>
      <div>X</div>
    </div>
  );
};

export default MunicipalitiesView;
