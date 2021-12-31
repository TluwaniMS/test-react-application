import { useQuery } from "@apollo/client";
import { GET_ALL_MUNICIPALITIES } from "../../queries/municipalities.query";

import Spinner from "../../views/loading-spinner/Spinner";
import MunicipalitiesView from "../../views/municipalities-view/MunicipalitiesView";

const MunicipalitiesMainView = () => {
  const { loading, error, data } = useQuery(GET_ALL_MUNICIPALITIES);

  return (
    <div>
      {loading && <Spinner />}
      {data && <MunicipalitiesView municipalities={data.getAllMunicipalities} />}
    </div>
  );
};

export default MunicipalitiesMainView;
