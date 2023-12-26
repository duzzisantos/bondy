import React, { FunctionComponent } from "react";
import {
  HourglassSplit,
  ClockHistory,
  PersonCircle,
} from "react-bootstrap-icons";
const MyServices: FunctionComponent = () => {
  return (
    <div className="col-10 px-5 pt-5 vh-100 gap-5 d-flex flex-column ms-auto text-secondary">
      <div className="text-start">
        <h2 className="fw-bold">My Services</h2>
        <hr className="border-2" />
      </div>
      <section className="text-start d-flex flex-column vstack gap-3">
        <h5 className="fw-bold">Tracking service 2122T21</h5>
        <div
          className="progress"
          role="progressbar"
          aria-label="Example with label"
          aria-valuenow={55}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="progress-bar progress-bar-animated progress-bar-striped text-light custom-bg-color fw-bold"
            style={{ width: "55%" }}
          >
            55% Complete
          </div>
        </div>
        <div className=" w-75 p-3 rounded-2">
          <p className="hstack gap-2 fw-semibold">
            <HourglassSplit className="fs-4 hourglass-spin" />
            Status report
          </p>
          <div className="mt-4 shadow-sm p-4 rounded-2 w-75">
            <div className="d-flex flex-row justify-content-between fw-semibold text-secondary">
              <p className="hstack gap-1">
                <ClockHistory /> 15:32 PM <sub>July 12, 2023</sub>
              </p>
              <span className="status-badge rounded-5 fs-5">
                <PersonCircle />
              </span>
            </div>
            <span>Kennedy changed oil and cleansed oil filter.</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyServices;
