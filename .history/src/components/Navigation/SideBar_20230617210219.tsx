import React, { FunctionComponent } from "react";
import "react-bootstrap";

const SideBar: FunctionComponent = () => {
  return (
    <div className="col-2 vh-100 bg-light shadow-sm p-3">
      <a href="google.com" className="href">
        Hello world
      </a>
    </div>
  );
};

export default SideBar;
