import { useQuery } from "@apollo/client";
import { GET_ALL_HOSPITALS } from "../../queries/hospitals.query";

import Spinner from "../../views/loading-spinner/Spinner";
import HospitalsView from "../../views/hospitals-view/HospitalsView";

const HospitalsMainView = () => {
  const { loading, error, data } = useQuery(GET_ALL_HOSPITALS);

  return (
    <div>
      {loading && <Spinner />}
      {data && <HospitalsView hospitals={data.getAllHospitals} />}
    </div>
  );
};

export default HospitalsMainView;
