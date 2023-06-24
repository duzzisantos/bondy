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
          <div className="text-start vstack gap-3">
            <h2 className="fw-bold">{item.category}</h2>
            <hr className="border-2" />
            <section className="p-4 shadow-sm custom-border-5">
              <h5 className="fw-bold">Description</h5>
              <p className="lh-2">{item.description}</p>
            </section>
            <section className="p-4 shadow-sm custom-border-5">
              <h5 className="fw-bold">Contact person</h5>
              <p>{item.contactPerson}</p>
            </section>
            <Card className="p-4 custom-color border-0 shadow-sm">
              <Card.Title className="fw-bold">Service examples</Card.Title>

              <Card.Body className="d-flex flex-row hstack gap-3 overflow-x-auto">
                {Object.values(item.images).map((image: any, index) => (
                  <div
                    key={index}
                    className="col-sm-3 image-height vstack gap-3"
                  >
                    <Card.Img src={`${image.link}`} alt="Fake image" />
                    <Card.Subtitle className="fw-bold">{`Service ${
                      index + 1
                    }`}</Card.Subtitle>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </div>
        ))}
    </div>
  );
};

export default ServiceTemplate;
