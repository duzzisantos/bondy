import "./App.css";
import "bootstrap";
import SideBar from "./components/Navigation/SideBar";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import SuspensionSystems from "./views/services/SuspensionSystems";
function App() {
  return (
    <div className="App d-flex flex-row flex-nowrap vh-100">
      <SideBar />
      <main className="col-12 ms-auto d-flex flex-column vh-100">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/Suspension Systems" element={<SuspensionSystems />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
