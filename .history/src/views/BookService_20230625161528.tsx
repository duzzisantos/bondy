import React, { FunctionComponent } from "react";
import { Tabs, Tab, Card } from "react-bootstrap";
import { mockServiceData } from "src/data/mockData";
const BookService: FunctionComponent = () => {
  return (
    <div className="col-10 px-5 pt-5 py-5 ms-auto vh-100 vstack gap-5 d-flex flex-column custom-color">
      <h2 className="text-start">Book Service</h2>
      <Tabs justify className=" fs-6 custom-color">
        {mockServiceData.map((element, index) => (
          <Tab
            key={index}
            eventKey={`${element.category.toLowerCase()}`}
            title={element.category}
            className="border-0 text-start"
          >
            <span>
              <strong>
                Drag any {element.category.toLowerCase()} service into your
                wishlist below.
              </strong>
            </span>
            <div className="d-flex flex-row flex-wrap hstack gap-4 py-2">
              {Object.values(element.images).map((item, i) => (
                <Card
                  key={i}
                  className="p-3 shadow-sm  text-light custom-bg-color"
                >
                  <small>{item.serviceName}</small>
                </Card>
              ))}
            </div>
          </Tab>
        ))}
      </Tabs>
      <hr className="border-2 border-secondary" />
    </div>
  );
};

export default BookService;
