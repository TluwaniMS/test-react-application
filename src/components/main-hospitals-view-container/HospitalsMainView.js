import { useQuery } from "@apollo/client";
import { GET_ALL_HOSPITALS } from "../../queries/hospitals.query";
import "./HospitalsMainView.css";
import Spinner from "../../views/loading-spinner/Spinner";
import HospitalsView from "../../views/hospitals-view/HospitalsView";

const HospitalsMainView = () => {
  const { loading, error, data } = useQuery(GET_ALL_HOSPITALS);

  return (
    <div className="main-hospitals-view-container">
      {loading && <Spinner />}
      {data &&
        data.getAllHospitals.map((hospital) => (
          <div className="main-hospital-container" key={hospital.hospitalKey}>
            <HospitalsView hospital={hospital} />
          </div>
        ))}
    </div>
  );
};

export default HospitalsMainView;
