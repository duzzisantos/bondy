import React, { FunctionComponent } from "react";
import { Tabs, Tab, Card } from "react-bootstrap";
import { mockServiceData } from "src/data/mockData";
const BookService: FunctionComponent = () => {
  return (
    <div className="col-10 px-5 pt-5 py-5 ms-auto vh-100 vstack gap-5 d-flex flex-column custom-color">
      <Tabs justify className=" fs-6 custom-color">
        {mockServiceData.map((element, index) => (
          <Tab
            key={index}
            eventKey={`${element.category.toLowerCase()}`}
            title={element.category}
            className="border-0 text-start"
          >
            <h4>Drag any service into your wishlist below.</h4>
            <div className="d-flex flex-row flex-wrap hstack gap-2">
              {Object.values(element.images).map((item) => (
                <Card className="p-3 border-0 shadow-sm custom-color">
                  <small>
                    <strong>{item.serviceName}</strong>
                  </small>
                </Card>
              ))}
            </div>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default BookService;
