import React, { FunctionComponent } from "react";

interface Props {
  data: any[];
}

const ServiceTemplate: FunctionComponent<Props> = ({ data }) => {
  return (
    <div className="col-10 px-5 pt-5 py-5 ms-auto vh-100 vstack gap-5 d-flex flex-column align-items-center"></div>
  );
};

export default ServiceTemplate;
