import "./App.css";
import "bootstrap";
import SideBar from "./components/Navigation/SideBar";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./views/LandingPage";
// import SuspensionSystems from "./views/services/SuspensionSystems";
// import Brakeservices from "./views/services/BrakeServices";
// import WheelServices from "./views/services/WheelService";
// import Airconditioning from "./views/services/Airconditioning";
// import OilChange from "./views/services/OilChange";
// import BodyWork from "./views/services/BodyWork";
import Services from "./views/Services";
function App() {
  return (
    <div className="App d-flex flex-row flex-nowrap vh-100">
      <SideBar />
      <main className="col-12 ms-auto d-flex flex-column vh-100">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
          {/* <Route
            path="services/Suspension Systems"
            element={<SuspensionSystems />}
          />
          <Route path="services/Brake Service" element={<Brakeservices />} />
          <Route path="services/Wheel Service" element={<WheelServices />} />
          <Route
            path="services/Airconditioning & Heating"
            element={<Airconditioning />}
          />
          <Route path="services/Oil Change" element={<OilChange />} />
          <Route path="services/Body Work" element={<BodyWork />} /> */}
          <Route path="services/:category" element={<Services />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
