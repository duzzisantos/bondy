import React, { FunctionComponent } from "react";

import { Button, Form, FormControl } from "react-bootstrap";
import useBookService from "src/hooks/useBookService";

const BookingForm: FunctionComponent = () => {
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

  const handleSubmit = () => {
    console.log("booked a service!");
  };
  return (
    <Form>
      <div className="d-none">
        <FormControl
          name={wishListOne}
          id={wishListOne}
          value={wishListOne}
          onChange={changeOne}
          onSubmit={handleSubmit}
        />
        <FormControl
          name={wishListTwo}
          id={wishListTwo}
          value={wishListTwo}
          onChange={changeTwo}
        />
        <FormControl
          name={wishListThree}
          id={wishListThree}
          value={wishListThree}
          onChange={changeThree}
        />
        <FormControl
          name={wishListFour}
          id={wishListFour}
          value={wishListFour}
          onChange={changeFour}
        />
        <FormControl
          name={wishListFive}
          id={wishListFive}
          value={wishListFive}
          onChange={changeFive}
        />
        <FormControl
          name={wishListSix}
          id={wishListSix}
          value={wishListSix}
          onChange={changeSix}
        />
      </div>
      <Button
        type="submit"
        className="btn btg-transparent border-secondary custom-color"
      >
        Book
      </Button>
    </Form>
  );
};

export default BookingForm;
