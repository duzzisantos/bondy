import "./App.css";
import "bootstrap";
import SideBar from "./components/Navigation/SideBar";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import Services from "./views/Services";
import BookService from "./views/BookService";
function App() {
  return (
    <div className="App d-flex flex-row flex-nowrap vh-100">
      <SideBar />
      <main className="col-12 ms-auto d-flex flex-column vh-100">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="services/:category" element={<Services />} />
          <Route path="book-service" element={<BookService />} />
          <Route path="my-services" element={<LandingPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
