import React, { FunctionComponent } from "react";
import "react-bootstrap";
import "../../App.css";
import { Link } from "react-router-dom";
import {
  HouseFill,
  CartFill,
  BookFill,
  PersonBadgeFill,
  Power,
  EvFrontFill,
} from "react-bootstrap-icons";

const commonLinkClasses =
  "d-flex flex-column justify-content-center align-items-center p-1 gap-2 text-light text-decoration-none fw-bold";
const SideBar: FunctionComponent = () => {
  return (
    <div className="col-2 vh-100 custom-bg-color shadow-sm p-5 text-light d-flex flex-column vstack gap-5">
      <Link to={"/"} className={commonLinkClasses + " fs-3"}>
        <span>
          <EvFrontFill /> Bondy
        </span>
      </Link>
      <Link to={"/home"} className={commonLinkClasses}>
        <HouseFill />
        Home
      </Link>

      <Link to={"/services"} className={commonLinkClasses}>
        <CartFill />
        Services
      </Link>

      <Link to={"/book-service"} className={commonLinkClasses}>
        <BookFill />
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
