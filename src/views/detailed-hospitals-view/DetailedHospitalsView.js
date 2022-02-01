import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_HOSPITAL_BY_KEY } from "../../queries/hospitals.query";
import Spinner from "../loading-spinner/Spinner";

const DetailedHospitalsView = () => {
  const { hospitalKey } = useParams();
  const { loading, data } = useQuery(GET_HOSPITAL_BY_KEY, { variables: { _id: hospitalKey } });

  return (
    <div>
      {loading && <Spinner />}
      {data && <h1>hospital data retrieved succesfully</h1>}
    </div>
  );
};

export default DetailedHospitalsView;
