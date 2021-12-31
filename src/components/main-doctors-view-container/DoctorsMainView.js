import { useQuery } from "@apollo/client";
import { GET_ALL_DOCTORS } from "../../queries/doctors.query";

const DoctorsMainView = () => {
  const { loading, error, data } = useQuery(GET_ALL_DOCTORS);

  return (
    <div>
      <h1>Doctors view works!!</h1>
    </div>
  );
};

export default DoctorsMainView;
