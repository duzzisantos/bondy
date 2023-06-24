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
  MenuButtonWideFill,
} from "react-bootstrap-icons";

const SideBar: FunctionComponent = () => {
  //Refactor this
  const [hoverHome, setHoverHome] = useState(false);
  const [hoverServices, setHoverServices] = useState(false);
  const [hoverBookService, setHoverBookService] = useState(false);
  const [hoverAdmin, setHoverAdmin] = useState(false);
  const [hoverLogout, setHoverLogout] = useState(false);

  const commonLinkClasses = `d-flex flex-column justify-content-center align-items-center p-1 gap-2 custom-color
   text-decoration-none fw-bold`;

  return (
    <div className="col-1 vh-100 custom-bg-color shadow-sm p-5 text-light d-flex flex-column vstack gap-5">
      <Link to={"/"} className={commonLinkClasses + " fs-3"}>
        <span>
          <EvFrontFill className="custom-color" /> Bondy
        </span>
      </Link>
      <Link
        to={"/home"}
        id="home"
        className={`d-flex flex-column justify-content-center align-items-center p-1 gap-2 text-decoration-none fw-bold ${
          hoverHome ? "custom-color" : "text-light"
        }`}
        onMouseEnter={() => setHoverHome(true)}
        onMouseLeave={() => setHoverHome(false)}
      >
        <HouseFill />
        Home
      </Link>

      <Link
        to={"/services"}
        id="services"
        className={`d-flex flex-column justify-content-center align-items-center p-1 gap-2 text-decoration-none fw-bold ${
          hoverServices ? "custom-color" : "text-light"
        }`}
        onMouseEnter={() => setHoverServices(true)}
        onMouseLeave={() => setHoverServices(false)}
      >
        <MenuButtonWideFill />
        Services
      </Link>

      <Link
        to={"/book-service"}
        id="book-service"
        className={`d-flex flex-column justify-content-center align-items-center p-1 gap-2 text-decoration-none fw-bold ${
          hoverBookService ? "custom-color" : "text-light"
        }`}
        onMouseEnter={() => setHoverBookService(true)}
        onMouseLeave={() => setHoverBookService(false)}
      >
        <BagFill />
        Book Service
      </Link>

      <Link
        to={"/admin"}
        id="admin"
        className={`d-flex flex-column justify-content-center align-items-center p-1 gap-2 text-decoration-none fw-bold ${
          hoverAdmin ? "custom-color" : "text-light"
        }`}
        onMouseEnter={() => setHoverAdmin(true)}
        onMouseLeave={() => setHoverAdmin(false)}
      >
        <PersonBadgeFill />
        Admin
      </Link>

      <Link
        to={"/logout"}
        id="logout"
        className={`d-flex flex-column justify-content-center align-items-center p-1 gap-2 text-decoration-none fw-bold ${
          hoverLogout ? "custom-color" : "text-light"
        }`}
        onMouseEnter={() => setHoverLogout(true)}
        onMouseLeave={() => setHoverLogout(false)}
      >
        <Power />
        Log Out
      </Link>
    </div>
  );
};

export default SideBar;
