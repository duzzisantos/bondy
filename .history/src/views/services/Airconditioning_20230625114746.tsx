import React, { FunctionComponent } from "react";
import ServiceTemplate from "src/components/Services/ServiceTemplate";
import { mockServiceData } from "src/data/mockData";
const Airconditioning: FunctionComponent = () => {
  return (
    <>
      <ServiceTemplate
        data={mockServiceData}
        category="Airconditioning & Heating"
      />
    </>
  );
};

export default Airconditioning;
