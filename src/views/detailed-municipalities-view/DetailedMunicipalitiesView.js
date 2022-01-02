import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_MUNICIPALITY_BY_KEY } from "../../queries/municipalities.query";
import Spinner from "../loading-spinner/Spinner";

const DetailedMunicipalitiesView = () => {
  const { municipalityKey } = useParams();
  const { loading, error, data } = useQuery(GET_MUNICIPALITY_BY_KEY, {
    variables: { municipalityKey: municipalityKey }
  });

  return (
    <div>
      {loading && <Spinner />}
      {data && <h1>municipality data retrieved succesfully</h1>}
    </div>
  );
};

export default DetailedMunicipalitiesView;
