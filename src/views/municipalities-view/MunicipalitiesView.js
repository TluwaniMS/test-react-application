import "./MunicipalitiesView.css";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { DELETE_MUNICIPALITY_BY_ID } from "../../mutations/municipalities.mutation";
import { GET_ALL_MUNICIPALITIES } from "../../queries/municipalities.query";

const MunicipalitiesView = ({ municipality }) => {
  const [deleteMunicipalityByMunicipalId] = useMutation(DELETE_MUNICIPALITY_BY_ID, {
    refetchQueries: [GET_ALL_MUNICIPALITIES]
  });

  return (
    <div className="municipalities-content-container">
      <Link to={`/detailed-municipality-view/${municipality._id}`} className="content-title">
        {municipality.municipalityName}
      </Link>
      <div
        className="content-deletion"
        onClick={() => deleteMunicipalityByMunicipalId({ variables: { _id: municipality._id } })}
      >
        X
      </div>
    </div>
  );
};

export default MunicipalitiesView;
