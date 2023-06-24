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
  const [hover, setHover] = useState(false);

  const commonLinkClasses = `d-flex flex-column justify-content-center align-items-center p-1 gap-2 ${
    hover ? "brand-icon-color" : "text-light"
  } text-decoration-none fw-bold`;

  const handleMouseHover = () => {
    setHover(!hover);
  };
  return (
    <div className="col-1 vh-100 custom-bg-color shadow-sm p-5 text-light d-flex flex-column vstack gap-5">
      <Link to={"/"} className={commonLinkClasses + " fs-3"}>
        <span>
          <EvFrontFill className="brand-icon-color" /> Bondy
        </span>
      </Link>
      <Link
        to={"/home"}
        className={commonLinkClasses}
        onMouseEnter={handleMouseHover}
      >
        <HouseFill />
        Home
      </Link>

      <Link to={"/services"} className={commonLinkClasses}>
        <MenuButtonWideFill />
        Services
      </Link>

      <Link to={"/book-service"} className={commonLinkClasses}>
        <BagFill />
        Book Service
      </Link>

      <Link to={"/admin"} className={commonLinkClasses}>
        <PersonBadgeFill />
        Admin
      </Link>

      <Link to={"/logout"} className={commonLinkClasses}>
        <Power />
        Log Out
      </Link>
    </div>
  );
};

export default SideBar;
