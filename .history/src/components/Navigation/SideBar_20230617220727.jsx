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

const SideBar = () => {
  return (
    <div className="col-2 vh-100 custom-bg-color shadow-sm p-3 text-light">
      <div className="d-flex d-column vstack gap-2">
        <HouseFill />
        <Link to={"/home"}>Home</Link>
      </div>
      <div className="d-flex d-column vstack gap-2">
        <CartFill />
        <Link to={"/services"}>Services</Link>
      </div>
      <div className="d-flex d-column vstack gap-2">
        <BookFill />
        <Link to={"/book-service"}>Book Service</Link>
      </div>
      <div className="d-flex d-column vstack gap-2">
        <PersonBadgeFill />
        <Link to={"/admin"}>Administrator</Link>
      </div>
      <div className="d-flex d-column vstack gap-2">
        <Power />
        <Link to={"/logout"}>Log Out</Link>
      </div>
    </div>
  );
};

export default SideBar;
