import React, { FunctionComponent } from "react";

import { Tabs, Tab, Card } from "react-bootstrap";
import { mockServiceData } from "src/data/mockData";
const BookService: FunctionComponent = () => {
  const dropTarget = document.querySelectorAll(".drop-targets");
  console.log(dropTarget);

  const handleDragStart = (e: any) => {
    e.dataTransfer.setData("Text", e.target.id);
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    const data = e.transferData.getData("Text");
    e.target.appendChild(document.getElementById(data));
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
                className="d-flex flex-row flex-wrap hstack gap-4 py-2 mt-4 drop-targets"
                onDrop={handleDrop}
                id="drag-target"
              >
                {Object.values(element.images).map((item, i) => (
                  <Card
                    key={i}
                    className="p-3 shadow-sm text-light custom-bg-color draggable-cards"
                    draggable="true"
                    id={item.serviceName}
                    onDragStart={handleDragStart}
                    onDragOver={handleDragOver}
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
          <strong>Drag into these boxes</strong>
        </span>
        <div
          className="hstack gap-4 mt-4 py-4 d-flex flex-row flex-wrap"
          id="drop-target"
        >
          <div
            className="col-sm-3 chosen-services shadow-sm"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          ></div>
          <div
            className="col-sm-3 chosen-services shadow-sm"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          ></div>
          <div
            className="col-sm-3 chosen-services shadow-sm"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          ></div>
          <div
            className=" col-sm-3 chosen-services shadow-sm"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BookService;
