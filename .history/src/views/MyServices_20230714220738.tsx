import React, { FunctionComponent } from "react";
import { HourglassSplit, ClockHistory } from "react-bootstrap-icons";
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
            className="progress-bar progress-bar-animated progress-bar-striped text-light bg-primary fw-bold"
            style={{ width: "55%" }}
          >
            55% Complete
          </div>
        </div>
        <div className="shadow-sm w-75 p-3 rounded-2">
          <p className="hstack gap-2 fw-semibold">
            <HourglassSplit className="fs-4 hourglass-spin" />
            Status report
          </p>
          <div className="mt-4 shadow-sm p-4 rounded-2 w-75">
            <p className="hstack gap-1 fw-semibold">
              <ClockHistory /> 12:34 PM <sub>July 12, 2023</sub>
            </p>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
              aspernatur quaerat ex ab cum eum soluta nisi, delectus.
            </span>
          </div>

          <div className="mt-4 shadow-sm p-4 rounded-2 w-75">
            <p className="hstack gap-1 fw-semibold text-secondary">
              <ClockHistory /> 12:24 PM <sub>July 12, 2023</sub>
            </p>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
              aspernatur quaerat ex ab cum eum soluta nisi, delectus.
            </span>
          </div>
          <div className="mt-4 shadow-sm p-4 rounded-2 w-75">
            <p className="hstack gap-1 fw-semibold text-secondary">
              <ClockHistory /> 12:14 PM <sub>July 12, 2023</sub>
            </p>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
              aspernatur quaerat ex ab cum eum soluta nisi, delectus.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyServices;
