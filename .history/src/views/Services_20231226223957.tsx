import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import ServiceTemplate from "src/components/Services/ServiceTemplate";
import { mockServiceData } from "src/data/mockData";
const Services: FunctionComponent = () => {
  const { category } = useParams();
  return (
    <>
      <ServiceTemplate data={mockServiceData} serviceCategory={category} />
    </>
  );
};

export default Services;
