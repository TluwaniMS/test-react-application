import React from "react";
import { useParams } from "react-router-dom";

const DetailedMunicipalitiesView = () => {
  const { municipalityKey } = useParams();

  return (
    <div>
      <h1>municipality key: {municipalityKey}</h1>
    </div>
  );
};

export default DetailedMunicipalitiesView;
