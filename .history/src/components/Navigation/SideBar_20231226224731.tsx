import React, { FunctionComponent, useState } from "react";
import "react-bootstrap";
import "../../App.css";
import "./Navigation.scss";
import { Link } from "react-router-dom";
import {
  HouseFill,
  BagFill,
  PersonBadgeFill,
  Power,
  EvFrontFill,
  // MenuButtonWideFill,
  SunFill,
  MoonFill,
} from "react-bootstrap-icons";

const SideBar: FunctionComponent = () => {
  //Refactor this
  const [hoverHome, setHoverHome] = useState(false);
  const [hoverMyServices, setHoverMyServices] = useState(false);
  const [hoverBookService, setHoverBookService] = useState(false);
  const [hoverAdmin, setHoverAdmin] = useState(false);
  const [hoverLogout, setHoverLogout] = useState(false);
  const [theme, setTheme] = useState(false);

  const handleChangeTheme = () => {
    const mainFile = document.querySelector("html");
    mainFile?.setAttribute("data-bs-theme", "dark");
    setTheme(true);
    if (theme) {
      mainFile?.setAttribute("data-bs-theme", "light");
      setTheme(false);
    }
  };

  const commonLinkClasses = `d-flex flex-column justify-content-center align-items-center p-1 gap-2 brand-icon-color
   text-decoration-none fw-bold`;

  return (
    <div className="col-2 vh-100 custom-bg-color shadow-sm p-5 text-light d-flex flex-column vstack gap-5 sidebar-fixed">
      <Link to={"/"} className={commonLinkClasses + " fs-3"}>
        <span>
          <EvFrontFill className="brand-icon-color" /> Bondy
        </span>
      </Link>
      <Link
        to={"/home"}
        id="home"
        className={`d-flex flex-column justify-content-center align-items-center p-1 gap-2 text-decoration-none fw-bold ${
          hoverHome ? "brand-icon-color" : "text-light"
        }`}
        onMouseEnter={() => setHoverHome(true)}
        onMouseLeave={() => setHoverHome(false)}
        title="Home"
      >
        <HouseFill />
        Home
      </Link>

      <Link
        to={"/book-service"}
        id="book-service"
        className={`d-flex flex-column justify-content-center align-items-center p-1 gap-2 text-decoration-none fw-bold ${
          hoverBookService ? "brand-icon-color" : "text-light"
        }`}
        onMouseEnter={() => setHoverBookService(true)}
        onMouseLeave={() => setHoverBookService(false)}
        title="Book Service"
      >
        <BagFill />
        Book Service
      </Link>

      <Link
        to={"/my-services"}
        id="my-services"
        className={`d-flex flex-column justify-content-center align-items-center p-1 gap-2 text-decoration-none fw-bold ${
          hoverMyServices ? "brand-icon-color" : "text-light"
        }`}
        onMouseEnter={() => setHoverMyServices(true)}
        onMouseLeave={() => setHoverMyServices(false)}
        title="Book Service"
      >
        <BagFill />
        My Services
      </Link>

      <Link
        to={"/admin"}
        id="admin"
        className={`d-flex flex-column justify-content-center align-items-center p-1 gap-2 text-decoration-none fw-bold ${
          hoverAdmin ? "brand-icon-color" : "text-light"
        }`}
        onMouseEnter={() => setHoverAdmin(true)}
        onMouseLeave={() => setHoverAdmin(false)}
        title="Admin"
      >
        <PersonBadgeFill />
        Admin
      </Link>

      <div className="form-check form-switch px-5 d-flex flex-row flex-nowrap">
        <SunFill className="mx-auto mt-1" />
        <input
          className="form-check-input mx-auto"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
          title="Switch display mode"
          onChange={handleChangeTheme}
        />
        <MoonFill className="mx-auto mt-1" />
      </div>

      <Link
        to={"/logout"}
        id="logout"
        className={`d-flex flex-column justify-content-center align-items-center p-1 gap-2 text-decoration-none fw-bold ${
          hoverLogout ? "brand-icon-color" : "text-light"
        }`}
        onMouseEnter={() => setHoverLogout(true)}
        onMouseLeave={() => setHoverLogout(false)}
        title="Logout"
      >
        <Power />
        Log Out
      </Link>
    </div>
  );
};

export default SideBar;
