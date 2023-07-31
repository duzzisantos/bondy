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
  // const [wishListOne, setWishListOne] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  // const divRef: unknown = ref.current?.innerText;
  const divRef = ref.current;
  console.log(divRef);
  return (
    <div
      ref={ref}
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
