import React, { FunctionComponent } from "react";
import "react-bootstrap";
import "../../App.css";
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
      <div>
        <House />
      </div>
    </div>
  );
};

export default SideBar;
