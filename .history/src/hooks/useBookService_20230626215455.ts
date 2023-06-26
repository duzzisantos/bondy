import { useState } from "react";

const useBookService = (init: string) => {
  const [wishListOne, setWishListOne] = useState(init);
  const [wishListTwo, setWishListTwo] = useState(init);
  const [wishListThree, setWishListThree] = useState(init);
  const [wishListFour, setWishListFour] = useState(init);
  const [wishListFive, setWishListFive] = useState(init);
  const [wishListSix, setWishListSix] = useState(init);

  console.log(wishListFive);
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
    setWishListFour(e.target.value);
  };

  const changeFive = (e: any) => {
    setWishListFive(e.target.value);
  };

  const changeSix = (e: any) => {
    setWishListSix(e.target.value);
  };

  return {
    wishListFive,
    wishListFour,
    wishListSix,
    wishListThree,
    wishListTwo,
    wishListOne,
    changeFive,
    changeFour,
    changeSix,
    changeThree,
    changeTwo,
    changeOne,
  };
};

export default useBookService;
