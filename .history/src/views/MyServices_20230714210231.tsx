import React, { FunctionComponent } from "react";

const MyServices: FunctionComponent = () => {
  return (
    <div className="col-10 px-5 pt-5 ms-auto vh-100 gap-5 d-flex flex-column align-items-center custom-color">
      <div className="text-start vstack gap-2">
        <h2 className="fw-bold">My Services</h2>
        <hr className="border-2" />
      </div>
      <section>
        <h5>Track your service</h5>
      </section>
    </div>
  );
};

export default MyServices;
