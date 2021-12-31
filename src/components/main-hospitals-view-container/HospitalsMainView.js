import { useQuery } from "@apollo/client";
import { GET_ALL_HOSPITALS } from "../../queries/hospitals.query";

const HospitalsMainView = () => {
  const { loading, error, data } = useQuery(GET_ALL_HOSPITALS);

  return (
    <div>
      <h1>Hospitals view works!!</h1>
    </div>
  );
};

export default HospitalsMainView;
