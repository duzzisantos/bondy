import React, { FunctionComponent } from "react";

const MyServices: FunctionComponent = () => {
  return (
    <div className="col-10 px-5 pt-5 vh-100 gap-5 d-flex flex-column ms-auto custom-color">
      <div className="text-start">
        <h2 className="fw-bold">My Services</h2>
        <hr className="border-2" />
      </div>
      <section className="text-start">
        <h5 className="fw-medium">Track your service</h5>
      </section>
    </div>
  );
};

export default MyServices;
