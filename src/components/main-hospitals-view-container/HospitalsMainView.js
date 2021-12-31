import { useQuery } from "@apollo/client";
import { GET_ALL_HOSPITALS } from "../../queries/hospitals.query";

import Spinner from "../../views/loading-spinner/Spinner";

const HospitalsMainView = () => {
  const { loading, error, data } = useQuery(GET_ALL_HOSPITALS);

  return (
    <div>
      {loading && <Spinner />}
      {data && <h1>Hello World!!</h1>}
    </div>
  );
};

export default HospitalsMainView;
