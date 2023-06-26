import React, { FunctionComponent, useState } from "react";

import { Form, FormControl } from "react-bootstrap";

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
}
const BookingForm: FunctionComponent<FormValues> = ({
  wishListFive,
  wishListFour,
  wishListOne,
  wishListSix,
  wishListThree,
  wishListTwo,
}) => {
  return (
    <Form>
      <FormControl name={wishListOne} id={wishListOne} value={wishListOne} />
    </Form>
  );
};

export default BookingForm;
