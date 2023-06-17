import React from "react";
import "react-bootstrap";
import "../../App.css";
import { Link } from "react-router-dom";
import {
  HouseFill,
  CartFill,
  BookFill,
  PersonBadgeFill,
  Toggle2Off,
} from "react-bootstrap-icons";

const commonLinkClasses =
  "d-flex flex-column justify-content-center align-items-center p-1 gap-2 text-light text-decoration-none";
const SideBar = () => {
  return (
    <div className="col-2 vh-100 custom-bg-color shadow-sm p-5 text-light d-flex flex-column vstack gap-5">
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
        <Toggle2Off />
        Log Out
      </Link>
    </div>
  );
};

export default SideBar;
