import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_DOCTOR_BY_ID } from "../../queries/doctors.query";
import Spinner from "../loading-spinner/Spinner";

const DetailedDoctorsView = () => {
  const { doctorId } = useParams();
  const { loading, error, data } = useQuery(GET_DOCTOR_BY_ID, { variables: { _id: doctorId } });

  return (
    <div>
      {loading && <Spinner />}
      {data && <h1>doctor retrieved successfully</h1>}
    </div>
  );
};

export default DetailedDoctorsView;
