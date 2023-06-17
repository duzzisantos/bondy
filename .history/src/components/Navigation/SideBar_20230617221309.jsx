import React from "react";
import "react-bootstrap";
import "../../App.css";
import { Link } from "react-router-dom";
import {
  HouseFill,
  CartFill,
  BookFill,
  PersonBadgeFill,
  Power,
} from "react-bootstrap-icons";

const commonlinkClasses = "text-light text-decoration-none";

const SideBar = () => {
  return (
    <div className="col-2 vh-100 custom-bg-color shadow-sm p-3 text-light d-flex flex-column vstack gap-1">
      <div className="d-flex d-column">
        <HouseFill />
        <Link to={"/home"} className={commonlinkClasses}>
          Home
        </Link>
      </div>
      <div className="d-flex d-column">
        <CartFill />
        <Link to={"/services"} className={commonlinkClasses}>
          Services
        </Link>
      </div>
      <div className="d-flex d-column">
        <BookFill />
        <Link to={"/book-service"} className={commonlinkClasses}>
          Book Service
        </Link>
      </div>
      <div className="d-flex d-column">
        <PersonBadgeFill />
        <Link to={"/admin"} className={commonlinkClasses}>
          Administrator
        </Link>
      </div>
      <div className="d-flex d-column vstack gap-2">
        <Power />
        <Link to={"/logout"} className={commonlinkClasses}>
          Log Out
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
