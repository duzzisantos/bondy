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

  const commonLinkClasses = `d-flex flex-column justify-content-center align-items-center p-1 gap-2 ${
    hoverHome || hoverServices || hoverBookService || hoverAdmin || hoverLogout
      ? "brand-icon-color"
      : "text-light"
  } text-decoration-none fw-bold`;

  return (
    <div className="col-1 vh-100 custom-bg-color shadow-sm p-5 text-light d-flex flex-column vstack gap-5">
      <Link to={"/"} className={commonLinkClasses + " fs-3"}>
        <span>
          <EvFrontFill className="brand-icon-color" /> Bondy
        </span>
      </Link>
      <Link
        to={"/home"}
        id="home"
        className={commonLinkClasses + "home"}
        onMouseEnter={() => setHoverHome(true)}
        onMouseLeave={() => setHoverHome(false)}
      >
        <HouseFill />
        Home
      </Link>

      <Link
        to={"/services"}
        id="services"
        className={commonLinkClasses}
        onMouseEnter={() => setHoverServices(true)}
        onMouseLeave={() => setHoverServices(false)}
      >
        <MenuButtonWideFill />
        Services
      </Link>

      <Link
        to={"/book-service"}
        id="book-service"
        className={commonLinkClasses}
      >
        <BagFill />
        Book Service
      </Link>

      <Link to={"/admin"} id="admin" className={commonLinkClasses}>
        <PersonBadgeFill />
        Admin
      </Link>

      <Link to={"/logout"} id="logout" className={commonLinkClasses}>
        <Power />
        Log Out
      </Link>
    </div>
  );
};

export default SideBar;
