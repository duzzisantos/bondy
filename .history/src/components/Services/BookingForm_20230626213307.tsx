import React, { FunctionComponent } from "react";

import { Button, Form, FormControl } from "react-bootstrap";
import useBookService from "src/hooks/useBookService";

// interface FormValues {
//   wishListOne: string;
//   wishListTwo: string;
//   wishListThree: string;
//   wishListFour: string;
//   wishListFive: string;
//   wishListSix: string;
//   setWishlistOne: any;
//   setWishListTwo: any;
//   setWishListThree: any;
//   setWishListFour: any;
//   setWishListFive: any;
//   setWishListSix: any;
//   handleSubmit: any;
// }
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
