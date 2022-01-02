import React from "react";
import { useParams } from "react-router-dom";

const DetailedHospitalsView = () => {
  const { hospitalKey } = useParams();

  return (
    <div>
      <h1>hospital key: {hospitalKey}</h1>
    </div>
  );
};

export default DetailedHospitalsView;
