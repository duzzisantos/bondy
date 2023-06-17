import React, { FunctionComponent } from "react";
import "react-bootstrap";
import "../../App.css";
import { Link } from "react-router-dom";
import {
  House,
  Tools,
  Book,
  PersonCheckFill,
  Power,
} from "react-bootstrap-icons";

const SideBar: FunctionComponent = () => {
  return (
    <div className="col-2 vh-100 custom-bg-color shadow-sm p-3">
      <div className="d-flex d-column vstack gap-2">
        <House />
        <Link to={"/home"}>Home</Link>
      </div>
    </div>
  );
};

export default SideBar;
