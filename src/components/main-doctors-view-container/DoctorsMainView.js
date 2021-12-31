import { useQuery } from "@apollo/client";
import { GET_ALL_DOCTORS } from "../../queries/doctors.query";

import Spinner from "../../views/loading-spinner/Spinner";
import DoctorsView from "../../views/doctors-view/DoctorsView";

const DoctorsMainView = () => {
  const { loading, error, data } = useQuery(GET_ALL_DOCTORS);

  return (
    <div>
      {loading && <Spinner />}
      {data && <DoctorsView doctors={doctors} />}
    </div>
  );
};

export default DoctorsMainView;
