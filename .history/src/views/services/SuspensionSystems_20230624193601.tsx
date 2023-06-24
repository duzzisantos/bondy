import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import ServiceTemplate from "src/components/Services/ServiceTemplate";
import { mockServiceData } from "src/data/mockData";
const SuspensionSystems: FunctionComponent = () => {
  const { category } = useParams();
  return (
    <>
      <ServiceTemplate data={[...mockServiceData]} />
    </>
  );
};

export default SuspensionSystems;
