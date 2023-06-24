import React, { FunctionComponent } from "react";
import { Card } from "react-bootstrap";
interface Props {
  data: any[];
  category: string;
}

const ServiceTemplate: FunctionComponent<Props> = ({ data, category }) => {
  return (
    <div className="col-10 px-5 pt-5 py-5 ms-auto vh-100 vstack gap-5 d-flex flex-column custom-color">
      {data
        .filter((element) => element.category.includes(category))
        .map((item) => (
          <div className="text-start">
            <h2>{item.category}</h2>
            <hr />
            <h5>Description</h5>
            <p className="lh-2">{item.description}</p>
            <h5>Contact person</h5>
            <p>{item.contactPerson}</p>
            <Card className="p-2">
              <h6>Service Examples</h6>
              <Card.Body></Card.Body>
            </Card>
          </div>
        ))}
    </div>
  );
};

export default ServiceTemplate;
