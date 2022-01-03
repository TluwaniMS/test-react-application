import "./MunicipalitiesView.css";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { DELETE_MUNICIPALITY_BY_ID } from "../../mutations/municipalities.mutation";
import { GET_ALL_MUNICIPALITIES } from "../../queries/municipalities.query";

const MunicipalitiesView = ({ municipality }) => {
  const [deleteMunicipalityByMunicipalKey, { data, loading, error }] = useMutation(DELETE_MUNICIPALITY_BY_ID, {
    refetchQueries: [GET_ALL_MUNICIPALITIES]
  });

  return (
    <div className="municipalities-content-container">
      <Link to={`/detailed-municipality-view/${municipality.municipalityKey}`}>{municipality.municipalityName}</Link>
      <div
        className="content-deletion"
        onClick={() =>
          deleteMunicipalityByMunicipalKey({ variables: { municipalityKey: municipality.municipalityKey } })
        }
      >
        X
      </div>
    </div>
  );
};

export default MunicipalitiesView;
