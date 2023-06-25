import React, { FunctionComponent } from "react";
import { Tabs, Tab } from "react-bootstrap";
import { mockServiceData } from "src/data/mockData";
const BookService: FunctionComponent = () => {
  return (
    <div className="col-10 px-5 pt-5 py-5 ms-auto vh-100 vstack gap-5 d-flex flex-column custom-color">
      <Tabs justify className="mb-3 fs-6 custom-color">
        {mockServiceData.map((element, index) => (
          <Tab
            key={index}
            eventKey={`${element.category.toLowerCase()}`}
            title={element.category}
          >
            {element.category}
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default BookService;
