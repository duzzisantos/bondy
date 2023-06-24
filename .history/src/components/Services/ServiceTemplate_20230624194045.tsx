import React, { FunctionComponent } from "react";

interface Props {
  data: any[];
  category: string;
}

const ServiceTemplate: FunctionComponent<Props> = ({ data, category }) => {
  return (
    <div className="col-10 px-5 pt-5 py-5 ms-auto vh-100 vstack gap-5 d-flex flex-column align-items-center">
      {data
        .filter((element) => element.category.includes(category))
        .map((item) => (
          <h2>{item.category}</h2>
        ))}
    </div>
  );
};

export default ServiceTemplate;
