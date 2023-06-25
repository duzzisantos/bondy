import React, { FunctionComponent } from "react";

import { Tabs, Tab, Card, Button } from "react-bootstrap";
import { mockServiceData } from "src/data/mockData";
const BookService: FunctionComponent = () => {
  const handleDragStart = (event: any) => {
    event.dataTransfer.setData("Text", event.target.id);
  };

  const handleDragOver = (event: any) => {
    event.preventDefault();
  };

  const handleDrop = (event: any) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
  };

  return (
    <div className="col-10 px-5 pt-5 py-5 ms-auto vh-100 vstack gap-2 d-flex flex-column custom-color">
      <h2 className="text-start fw-bold">Book Service</h2>
      <hr />
      <div className="vstack gap-5">
        <Tabs justify className={`fs-6 border-0 align-items-end`}>
          {mockServiceData.map((element, index) => (
            <Tab
              key={index}
              eventKey={`${element.category}`}
              title={element.category}
              className={`border-0 text-start overflow-x-auto`}
            >
              <span>
                <strong>
                  Drag any {element.category.toLowerCase()} service into your
                  wishlist below.
                </strong>
              </span>
              <div
                className="d-flex flex-row flex-wrap hstack gap-4 py-5 px-5 mt-4 border border-4 border-light shadow-sm rounded-4"
                id="drop-target"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              >
                {Object.values(element.images).map((item, i) => (
                  <Card
                    key={i}
                    className="p-3 shadow-sm text-light custom-bg-color draggable-cards"
                    draggable="true"
                    id={item.serviceName + "drag-target"}
                    onDragStart={handleDragStart}
                  >
                    <small>{item.serviceName}</small>
                  </Card>
                ))}
              </div>
            </Tab>
          ))}
        </Tabs>
      </div>
      <div className="text-start mb-5">
        <span>
          <strong>Wishlist</strong>
        </span>
        <div className="hstack gap-4 mt-4 py-4 d-flex flex-row flex-wrap">
          <div
            className="col-sm-3 chosen-services shadow-sm text-center"
            id="drop-target1"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            +
          </div>
          <div
            className="col-sm-3 chosen-services shadow-sm text-center"
            id="drop-target2"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            +
          </div>
          <div
            className="col-sm-3 chosen-services shadow-sm text-center"
            id="drop-target3"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            +
          </div>
          <div
            className=" col-sm-3 chosen-services shadow-sm text-center"
            id="drop-target4"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            +
          </div>
        </div>
        <Button className="btn btn-secondary bg-transparent custom-color">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default BookService;
