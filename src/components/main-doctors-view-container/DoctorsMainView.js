import { useQuery } from "@apollo/client";
import { GET_ALL_DOCTORS } from "../../queries/doctors.query";

import Spinner from "../../views/loading-spinner/Spinner";

const DoctorsMainView = () => {
  const { loading, error, data } = useQuery(GET_ALL_DOCTORS);

  return (
    <div>
      {loading && <Spinner />}
      {data && <h1>Hello World!!</h1>}
    </div>
  );
};

export default DoctorsMainView;
