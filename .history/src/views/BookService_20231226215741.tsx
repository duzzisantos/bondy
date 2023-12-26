import React, { FunctionComponent } from "react";

import { Tabs, Tab, Card } from "react-bootstrap";

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
    console.log(data);
    event.target.appendChild(document.getElementById(data));
  };

  return (
    <div className="col-10 px-5 pt-5 py-5 ms-auto vh-100 vstack gap-2 d-flex flex-column custom-color">
      <h2 className="text-start fw-bold">Book Service</h2>
      <hr />
      <div className="vstack gap-5">
        <Tabs justify className={`fs-6 border-0 align-items-end`}>
          {mockServiceData.map((element: any, index: number) => (
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
                {Object.values(element.images).map((item: any, i: number) => (
                  <Card
                    key={i}
                    className="p-3 bg-transparent border border-secondary draggable-cards"
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
    </div>
  );
};

export default BookService;
