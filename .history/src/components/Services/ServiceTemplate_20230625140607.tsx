import React, { FunctionComponent, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeftCircleFill,
  ArrowRightCircleFill,
  EnvelopeFill,
  HouseFill,
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
  const { category } = useParams();
  const [previous, setPrevious] = useState(null);
  const [next, setNext] = useState(null);

  const getCategories = data.map((element) => element.category);

  //pagination of the services content

  //move to the previous content as long there is still data in the previous index of the array
  const handlePrev = () => {
    const currentIndex = getCategories.indexOf(category);
    if (currentIndex !== -1 && currentIndex - 1 >= 0) {
      const previousCategory = getCategories[currentIndex - 1];
      navigate(`/services/${previousCategory}`);
    }
  };

  //find out current index and test if we can move to the next element in the test array as long as it does not exceed the array length
  const handleNext = () => {
    const currentIndex = getCategories.indexOf(category);
    if (currentIndex !== -1 && currentIndex + 1 < getCategories.length) {
      const nextCategory = getCategories[currentIndex + 1];
      navigate(`/services/${nextCategory}`);
    }
  };

  const gohome = () => {
    navigate("/home");
  };

  useEffect(() => {
    const currentIndex = getCategories.indexOf(category);
    if (currentIndex !== -1) {
      if (currentIndex - 1 >= 0) {
        setPrevious(getCategories[currentIndex - 1]);
      } else {
        setPrevious(null);
      }
      if (currentIndex + 1 < getCategories.length) {
        setNext(getCategories[currentIndex + 1]);
      } else {
        setNext(null);
      }
    }
  }, [category, getCategories]);
  return (
    <div className="col-10 px-5 pt-5 py-5 ms-auto vh-100 vstack gap-5 d-flex flex-column custom-color">
      {data
        .filter((element) => element.category.includes(serviceCategory))
        .map((item) => (
          <div className="text-start vstack gap-3">
            <h2 className="fw-bold">{item.category}</h2>
            <hr className="border-2" />
            <div className="justify-content-between d-flex flex-row flex-nowrap">
              <>
                {previous && (
                  <Button
                    className="btn btn-sm bg-transparent custom-color border-0 w-25 text-start"
                    onClick={handlePrev}
                  >
                    <ArrowLeftCircleFill /> Previous service
                  </Button>
                )}
              </>
              <>
                {next && (
                  <Button
                    className={`btn btn-sm bg-transparent custom-color border-0 w-25 ${
                      !previous ? "text-start" : "text-end"
                    }`}
                    onClick={handleNext}
                  >
                    <ArrowRightCircleFill /> Next service
                  </Button>
                )}
              </>
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
            <Button
              onClick={gohome}
              className="custom-color btn btn-sm text-start w-25 bg-transparent border-0"
            >
              <ArrowLeftCircleFill /> Go home
            </Button>
          </div>
        ))}
    </div>
  );
};

export default ServiceTemplate;
