import React, { FunctionComponent } from "react";
import ServiceTemplate from "src/components/Services/ServiceTemplate";
import { mockServiceData } from "src/data/mockData";
const OilChange: FunctionComponent = () => {
  return (
    <>
      <ServiceTemplate data={mockServiceData} serviceCategory="Oil Change" />
    </>
  );
};

export default OilChange;
