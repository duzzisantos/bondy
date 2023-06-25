import React, { FunctionComponent } from "react";
import ServiceTemplate from "src/components/Services/ServiceTemplate";
import { mockServiceData } from "src/data/mockData";
const BodyWork: FunctionComponent = () => {
  return (
    <>
      <ServiceTemplate data={mockServiceData} serviceCategory="Body Work" />
    </>
  );
};

export default BodyWork;
