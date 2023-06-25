import React, { FunctionComponent } from "react";
import ServiceTemplate from "src/components/Services/ServiceTemplate";
import { mockServiceData } from "src/data/mockData";
const Brakeservices: FunctionComponent = () => {
  return (
    <>
      <ServiceTemplate data={mockServiceData} category="Brake Service" />
    </>
  );
};

export default Brakeservices;
