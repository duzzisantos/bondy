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
          <div className="text-start vstack gap-4">
            <h2>{item.category}</h2>
            <hr />
            <section className="p-4 shadow-sm custom-border-5">
              <h5>Description</h5>
              <p className="lh-2">{item.description}</p>
            </section>
            <section className="py-3 shadow-sm custom-border-5">
              <h5>Contact person</h5>
              <p>{item.contactPerson}</p>
            </section>
            <Card className="p-2">
              <h6>Service Examples</h6>
              <Card.Body>
                {Object.values(item.images).map((image, index) => (
                  <Card.Img key={index} src={`${image}`} alt="Fake image" />
                ))}
              </Card.Body>
            </Card>
          </div>
        ))}
    </div>
  );
};

export default ServiceTemplate;
