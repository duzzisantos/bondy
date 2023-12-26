import React, { FunctionComponent } from "react";

import { Tabs, Tab, Form } from "react-bootstrap";

import { mockServiceData } from "src/data/mockData";

const BookService: FunctionComponent = () => {
  return (
    <div className="col-10 px-5 pt-5 py-5 ms-auto vh-100 vstack gap-2 d-flex flex-column text-secondary">
      <h2 className="text-start fw-bold">Book Service</h2>
      <hr />
      <div className="vstack gap-5">
        <Tabs justify className={`fs-6 border-0 align-items-end`}>
          {mockServiceData.map((element: any, index: number) => (
            <Tab
              key={index}
              eventKey={`${element.category}`}
              title={element.category}
              className={`border-0 text-start overflow-x-auto px-3 text-secondary`}
            >
              {Object.values(element.images).map((item: any, index: number) => (
                <div key={index}>
                  <Form.Label
                    htmlFor={`${index}-${item.serviceName}`}
                    className="fw-semibold"
                  >
                    {item.serviceName}
                  </Form.Label>
                  <Form.Switch
                    id={`${index}-${item.serviceName}`}
                    type="switch"
                    name={`${index}-${item.serviceName}`}
                  />
                </div>
              ))}
            </Tab>
          ))}
        </Tabs>
      </div>
      <div className="shadow-sm"></div>
    </div>
  );
};

export default BookService;
