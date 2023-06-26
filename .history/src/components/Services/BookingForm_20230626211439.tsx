import React, { FunctionComponent } from "react";

import { Button, Form, FormControl } from "react-bootstrap";

interface FormValues {
  wishListOne: string;
  wishListTwo: string;
  wishListThree: string;
  wishListFour: string;
  wishListFive: string;
  wishListSix: string;
  setWishlistOne: any;
  setWishListTwo: any;
  setWishListThree: any;
  setWishListFour: any;
  setWishListFive: any;
  setWishListSix: any;
  handleSubmit: any;
}
const BookingForm: FunctionComponent<FormValues> = ({
  wishListFive,
  wishListFour,
  wishListOne,
  wishListSix,
  wishListThree,
  wishListTwo,
  setWishListFive,
  setWishListFour,
  setWishListSix,
  setWishListThree,
  setWishListTwo,
  setWishlistOne,
  handleSubmit,
}) => {
  return (
    <Form>
      <FormControl
        name={wishListOne}
        id={wishListOne}
        value={wishListOne}
        onChange={(e: any) => setWishlistOne(e.target.value)}
        onSubmit={handleSubmit}
      />
      <FormControl
        name={wishListTwo}
        id={wishListTwo}
        value={wishListTwo}
        onChange={(e: any) => setWishListTwo(e.target.value)}
      />
      <FormControl
        name={wishListThree}
        id={wishListThree}
        value={wishListThree}
        onChange={(e: any) => setWishListThree(e.target.value)}
      />
      <FormControl
        name={wishListFour}
        id={wishListFour}
        value={wishListFour}
        onChange={(e: any) => setWishListFour(e.target.value)}
      />
      <FormControl
        name={wishListFive}
        id={wishListFive}
        value={wishListFive}
        onChange={(e: any) => setWishListFive(e.target.value)}
      />
      <FormControl
        name={wishListSix}
        id={wishListSix}
        value={wishListSix}
        onChange={(e: any) => setWishListSix(e.target.value)}
      />
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
