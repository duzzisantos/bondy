import "./App.css";
import "bootstrap";
import SideBar from "./components/Navigation/SideBar";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./views/LandingPage";
function App() {
  return (
    <div className="App d-flex flex-row flex-nowrap vh-100">
      <SideBar />
      <main className="col-10 mx-auto d-flex flex-column">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
