import React, { FunctionComponent } from "react";

import { Tabs, Tab, Card } from "react-bootstrap";
import BookingForm from "src/components/Services/BookingForm";
import DragDropTarget from "src/components/Services/DragDropTarget";
import { mockServiceData } from "src/data/mockData";
import useBookService from "src/hooks/useBookService";
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

  const targetOne = document.getElementById("drop-target-one");
  console.log(targetOne);
  //call custom hook

  const {
    wishListOne,
    wishListTwo,
    wishListThree,
    wishListFour,
    wishListFive,
    wishListSix,
    changeOne,
    changeTwo,
    changeThree,
    changeFour,
    changeFive,
    changeSix,
  } = useBookService("");

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
      <div className="text-start py-4">
        <span>
          <strong>Wishlist</strong>
        </span>
        <div className="hstack gap-4 mt-4 py-4 d-flex flex-row flex-wrap">
          {[1, 2, 3, 4, 5, 6].map((element) => (
            <DragDropTarget
              key={element}
              uniqueID={`drop-target-${element}`}
              children={"+"}
              handleDrop={handleDrop}
              handleDragOver={handleDragOver}
            />
          ))}
        </div>
        <>
          <BookingForm
            wishListOne={wishListOne}
            wishListTwo={wishListTwo}
            wishListThree={wishListThree}
            wishListFour={wishListFour}
            wishListFive={wishListFive}
            wishListSix={wishListSix}
            setWishlistOne={changeOne}
            setWishListTwo={changeTwo}
            setWishListThree={changeThree}
            setWishListFour={changeFour}
            setWishListFive={changeFive}
            setWishListSix={changeSix}
            handleSubmit={() => console.log("LOOOL")}
          />
        </>
      </div>
    </div>
  );
};

export default BookService;
