import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/nav-bar/Navbar";
import DoctorsMainView from "./components/main-doctors-view-container/DoctorsMainView";
import HospitalsMainView from "./components/main-hospitals-view-container/HospitalsMainView";
import MunicipalitiesMainView from "./components/main-municipalities-view-container/MunicipalitiesMainView";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<MunicipalitiesMainView />} />
        <Route path="/municipalities" element={<MunicipalitiesMainView />} />
        <Route path="/doctors" element={<DoctorsMainView />} />
        <Route path="/hospitals" element={<HospitalsMainView />} />=
      </Routes>
    </div>
  );
}

export default App;
