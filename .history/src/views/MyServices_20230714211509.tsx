import React, { FunctionComponent } from "react";

const MyServices: FunctionComponent = () => {
  return (
    <div className="col-10 px-5 pt-5 vh-100 gap-5 d-flex flex-column ms-auto custom-color">
      <div className="text-start">
        <h2 className="fw-bold">My Services</h2>
        <hr className="border-2" />
      </div>
      <section className="text-start">
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
            className="progress-bar text-dark-emphasis bg-info-subtle"
            style={{ width: "55%" }}
          >
            55%
          </div>
        </div>
        <div className="h-50 w-50 rounded-5 bg-dark"></div>
      </section>
    </div>
  );
};

export default MyServices;
