import React, { FunctionComponent, useState, useRef } from "react";

interface Props {
  uniqueID: string;
  handleDrop: any;
  handleDragOver: any;
  children: any;
}

const DragDropTarget: FunctionComponent<Props> = ({
  children,
  uniqueID,
  handleDrop,
  handleDragOver,
}) => {
  const [wishListOne, setWishListOne] = useState("");
  const divRef = useRef<HTMLDivElement>(null);
  const extractedText = divRef!.current!.innerText;

  setWishListOne(extractedText);
  console.log(wishListOne);
  return (
    <div
      ref={divRef}
      className="p-3 col-md-4 chosen-services shadow-sm text-center"
      id={uniqueID}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {children}
    </div>
  );
};

export default DragDropTarget;
