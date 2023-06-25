import React, { FunctionComponent } from "react";
import { Tabs, Tab, Card } from "react-bootstrap";
import { mockServiceData } from "src/data/mockData";
const BookService: FunctionComponent = () => {
  return (
    <div className="col-10 px-5 pt-5 py-5 ms-auto vh-100 vstack gap-5 d-flex flex-column custom-color">
      <h2 className="text-start">Book Service</h2>
      <Tabs justify className={`fs-6 border-0 align-items-end `}>
        {mockServiceData.map((element, index) => (
          <Tab
            key={index}
            eventKey={`${element.category.toLowerCase()}`}
            title={element.category}
            className={`border-0 text-start px-3 `}
          >
            <span>
              <strong>
                Drag any {element.category.toLowerCase()} service into your
                wishlist below.
              </strong>
            </span>
            <div className="d-flex flex-row flex-wrap hstack gap-4 py-2 mt-4">
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
      <div className="text-start mb-5 px-3">
        <span>
          <strong>Drag into these boxes</strong>
        </span>
        <div className="hstack gap-4 mt-4 py-4 d-flex flex-row flex-wrap">
          <div className="col-sm-3 chosen-services shadow-sm"></div>
          <div className="col-sm-3 chosen-services shadow-sm"></div>
          <div className="col-sm-3 chosen-services shadow-sm"></div>
          <div className=" col-sm-3 chosen-services shadow-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default BookService;
