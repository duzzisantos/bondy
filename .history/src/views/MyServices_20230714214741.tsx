import React, { FunctionComponent } from "react";
import { HourglassSplit } from "react-bootstrap-icons";
const MyServices: FunctionComponent = () => {
  return (
    <div className="col-10 px-5 pt-5 vh-100 gap-5 d-flex flex-column ms-auto custom-color">
      <div className="text-start">
        <h2 className="fw-bold">My Services</h2>
        <hr className="border-2" />
      </div>
      <section className="text-start d-flex flex-column vstack gap-3">
        <h5 className="fw-bold">Track your service</h5>
        <div
          className="progress"
          role="progressbar"
          aria-label="Example with label"
          aria-valuenow={55}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="progress-bar progress-bar-animated progress-bar-striped text-light bg-info fw-bold"
            style={{ width: "55%" }}
          >
            55% Complete
          </div>
        </div>
        <div className="shadow-sm w-75 p-3 rounded-2 fw-semibold">
          <p className="hstack gap-2">
            <HourglassSplit className="fs-4 hourglass-spin" />
            Current Status
          </p>
        </div>
      </section>
    </div>
  );
};

export default MyServices;
