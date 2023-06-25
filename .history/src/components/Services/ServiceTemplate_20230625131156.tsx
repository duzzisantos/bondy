import React, { FunctionComponent } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeftCircleFill,
  ArrowRightCircleFill,
  EnvelopeFill,
  InfoCircleFill,
  PersonCircle,
  TelephoneFill,
  Tools,
} from "react-bootstrap-icons";

interface Props {
  data: any[];
  serviceCategory: any;
}

const ServiceTemplate: FunctionComponent<Props> = ({
  data,
  serviceCategory,
}) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(`/home`);
  };
  return (
    <div className="col-10 px-5 pt-5 py-5 ms-auto vh-100 vstack gap-5 d-flex flex-column custom-color">
      {data
        .filter((element) => element.category.includes(serviceCategory))
        .map((item) => (
          <div className="text-start vstack gap-3">
            <h2 className="fw-bold">{item.category}</h2>
            <hr className="border-2" />
            <div className="justify-content-between d-flex flex-row flex-nowrap">
              <Button
                className="btn btn-sm bg-transparent custom-color border-0 w-25 text-start"
                onClick={handleGoBack}
              >
                <ArrowLeftCircleFill /> Previous service
              </Button>
              <Button
                className="btn btn-sm bg-transparent custom-color border-0 w-25 text-end"
                onClick={handleGoBack}
              >
                <ArrowRightCircleFill /> Next service
              </Button>
            </div>
            <section className="p-4 shadow-sm custom-border-5">
              <h5 className="fw-bold">
                <InfoCircleFill /> Description
              </h5>
              <p className="lh-2">{item.description}</p>
            </section>
            <section className="p-4 shadow-sm custom-border-5">
              <h5 className="fw-bold mb-3">
                <PersonCircle /> Contact person
              </h5>
              <small className="fw-bold">{item.contactPerson.name}</small>
              <div className="d-flex flex-column">
                <small>
                  <EnvelopeFill /> {item.contactPerson.email}
                </small>
                <small>
                  <TelephoneFill /> {item.contactPerson.fax}
                </small>
              </div>
            </section>
            <Card className="p-4 custom-color border-0 shadow-sm">
              <Card.Title className="fw-bold">
                <Tools /> Service examples
              </Card.Title>
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
