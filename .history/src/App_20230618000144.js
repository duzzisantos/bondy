import "./App.css";
import "bootstrap";
import SideBar from "./components/Navigation/SideBar";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./views/LandingPage";
function App() {
  return (
    <div className="App">
      <SideBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
