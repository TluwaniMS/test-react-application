import React from "react";
import { useParams } from "react-router-dom";

const DetailedDoctorsView = () => {
  const { doctorId } = useParams();

  return (
    <div>
      <h1>doctors Id: {doctorId}</h1>
    </div>
  );
};

export default DetailedDoctorsView;
