import "./App.css";
import "bootstrap";
import SideBar from "./components/Navigation/SideBar";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./views/LandingPage";
function App() {
  return (
    <div className="App d-flex flex-row flex-nowrap vh-100">
      <SideBar />
      <main className="col-12 mx-auto justify-content-center align-items-center d-flex flex-row">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
