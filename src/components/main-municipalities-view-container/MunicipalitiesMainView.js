import { useQuery } from "@apollo/client";
import { GET_ALL_MUNICIPALITIES } from "../../queries/municipalities.query";

import Spinner from "../../views/loading-spinner/Spinner";

const MunicipalitiesMainView = () => {
  const { loading, error, data } = useQuery(GET_ALL_MUNICIPALITIES);

  return (
    <div>
      {loading && <Spinner />}
      {data && <h1>Hello World!!</h1>}
    </div>
  );
};

export default MunicipalitiesMainView;
