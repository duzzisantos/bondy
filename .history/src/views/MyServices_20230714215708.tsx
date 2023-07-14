import React, { FunctionComponent } from "react";
import { HourglassSplit, Clock } from "react-bootstrap-icons";
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
          <div className="mt-4 border border-secondary-subtle p-2 rounded-2 w-50">
            <p className="hstack gap-2 fw-medium">
              <Clock /> 12:34 PM
            </p>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
              aspernatur quaerat ex ab cum eum soluta nisi, delectus, officiis
              enim vitae, veritatis repellendus ducimus minima dolore sed!
              Cumque, pariatur minus!
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyServices;
