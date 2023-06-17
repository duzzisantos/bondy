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
const commonLinkWrapperClass =
  "d-flex flex-column justify-content-center align-items-center bg-success p-1 gap-2";
const SideBar = () => {
  return (
    <div className="col-2 vh-100 custom-bg-color shadow-sm p-5 text-light d-flex flex-column vstack gap-5">
      <div className={commonLinkWrapperClass}>
        <HouseFill />
        <Link to={"/home"} className={commonlinkClasses}>
          Home
        </Link>
      </div>
      <div className={commonLinkWrapperClass}>
        <CartFill />
        <Link to={"/services"} className={commonlinkClasses}>
          Services
        </Link>
      </div>
      <div className={commonLinkWrapperClass}>
        <BookFill />
        <Link to={"/book-service"} className={commonlinkClasses}>
          Book Service
        </Link>
      </div>
      <div className={commonLinkWrapperClass}>
        <PersonBadgeFill />
        <Link to={"/admin"} className={commonlinkClasses}>
          Administrator
        </Link>
      </div>
      <div className={commonLinkWrapperClass}>
        <Power />
        <Link to={"/logout"} className={commonlinkClasses}>
          Log Out
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
