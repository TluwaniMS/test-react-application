import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/nav-bar/Navbar";
import DoctorsMainView from "./components/main-doctors-view-container/DoctorsMainView";
import HospitalsMainView from "./components/main-hospitals-view-container/HospitalsMainView";
import MunicipalitiesMainView from "./components/main-municipalities-view-container/MunicipalitiesMainView";
import DetailedDoctorsView from "./views/detailed-doctors-view/DetailedDoctorsView";
import DetailedHospitalsView from "./views/detailed-hospitals-view/DetailedHospitalsView";
import DetailedMunicipalitiesView from "./views/detailed-municipalities-view/DetailedMunicipalitiesView";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<MunicipalitiesMainView />} />
        <Route path="/municipalities" element={<MunicipalitiesMainView />} />
        <Route path="/doctors" element={<DoctorsMainView />} />
        <Route path="/hospitals" element={<HospitalsMainView />} />
        <Route path="/detailed-municipality-view/:municipalityKey" element={<DetailedMunicipalitiesView />} />
        <Route path="/detailed-hospital-view/:hospitalKey" element={<DetailedHospitalsView />} />
        <Route path="/detailed-doctors-view/:doctorId" element={<DetailedDoctorsView />} />
      </Routes>
    </div>
  );
}

export default App;
