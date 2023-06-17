import React from "react";
import "react-bootstrap";
import "../../App.css";
import { Link } from "react-router";

const SideBar = () => {
  return (
    <div className="col-2 vh-100 custom-bg-color shadow-sm p-3">
      <div className="d-flex d-column vstack gap-2">
        <Link to={"/home"}>Home</Link>
      </div>
      <div className="d-flex d-column vstack gap-2">
        <Link to={"/services"}>Services</Link>
      </div>
      <div className="d-flex d-column vstack gap-2">
        <Link to={"/book-service"}>Book Service</Link>
      </div>
      <div className="d-flex d-column vstack gap-2">
        <Link to={"/admin"}>Administrator</Link>
      </div>
      <div className="d-flex d-column vstack gap-2">
        <Link to={"/logout"}>Log Out</Link>
      </div>
    </div>
  );
};

export default SideBar;
