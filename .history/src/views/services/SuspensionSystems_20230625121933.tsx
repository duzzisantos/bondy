import React, { FunctionComponent } from "react";
import ServiceTemplate from "src/components/Services/ServiceTemplate";
import { mockServiceData } from "src/data/mockData";
const SuspensionSystems: FunctionComponent = () => {
  return (
    <>
      <ServiceTemplate
        data={mockServiceData}
        serviceCategory="Suspension Systems"
      />
    </>
  );
};

export default SuspensionSystems;
