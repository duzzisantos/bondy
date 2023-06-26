import { useState } from "react";

const useBookService = (init: string) => {
  const [wishListOne, setWishListOne] = useState("");
  const [wishListTwo, setWishListTwo] = useState("");
  const [wishListThree, setWishListThree] = useState("");
  const [wishListFour, setWishListFour] = useState("");
  const [wishListFive, setWishListFive] = useState("");
  const [wishListSix, setWishListSix] = useState("");

  const changeOne = (e: any) => {
    setWishListOne(e.target.value);
  };

  const changeTwo = (e: any) => {
    setWishListTwo(e.target.value);
  };

  const changeThree = (e: any) => {
    setWishListThree(e.target.value);
  };

  const changeFour = (e: any) => {
    setWishListThree(e.target.value);
  };

  const changeFive = (e: any) => {
    setWishListFive(e.target.value);
  };

  const changeSix = (e: any) => {
    setWishListSix(e.target.value);
  };
};
