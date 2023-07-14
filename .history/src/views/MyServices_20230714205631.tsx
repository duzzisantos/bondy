import React, { FunctionComponent } from "react";
import { Button } from "react-bootstrap";

const MyServices: FunctionComponent = () => {
  return (
    <div className="col-10 px-5 pt-5 ms-auto vh-100 gap-5 d-flex flex-column align-items-center">
      <h1>Hello World</h1>
      <label htmlFor="lol">Lol</label>
      <input
        type="number"
        className="form-control align-content-lg-between"
      ></input>
      <Button>Lol</Button>
    </div>
  );
};

export default MyServices;
