import { useQuery } from "@apollo/client";
import { GET_ALL_DOCTORS } from "../../queries/doctors.query";

import "./DoctorsMainView.css";

import Spinner from "../../views/loading-spinner/Spinner";
import DoctorsView from "../../views/doctors-view/DoctorsView";

const DoctorsMainView = () => {
  const { loading, error, data } = useQuery(GET_ALL_DOCTORS);

  return (
    <div className="main-doctors-view-container">
      {loading && <Spinner />}
      {data &&
        data.getAllDoctors.map((doctor) => (
          <div key={doctor.id} className="main-doctor-container">
            <DoctorsView doctor={doctor} />
          </div>
        ))}
    </div>
  );
};

export default DoctorsMainView;
