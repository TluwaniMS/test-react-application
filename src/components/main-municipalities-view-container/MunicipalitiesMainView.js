import { useQuery } from "@apollo/client";
import { GET_ALL_MUNICIPALITIES } from "../../queries/municipalities.query";

const MunicipalitiesMainView = () => {
  const { loading, error, data } = useQuery(GET_ALL_MUNICIPALITIES);

  return (
    <div>
      <h1>Municipalities view works!!</h1>
    </div>
  );
};

export default MunicipalitiesMainView;
