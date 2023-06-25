import React, { FunctionComponent } from "react";
import ServiceTemplate from "src/components/Services/ServiceTemplate";
import { mockServiceData } from "src/data/mockData";
const WheelServices: FunctionComponent = () => {
  return (
    <>
      <ServiceTemplate data={mockServiceData} category="Wheel Service" />
    </>
  );
};

export default WheelServices;
