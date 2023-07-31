import React, { FunctionComponent, useRef } from "react";

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
  // const divRef: unknown = ref.current?.innerText;
  const divRef = useRef<HTMLDivElement>(null);

  const divText = divRef.current?.innerText;
  const trimmedText = divText?.replace("drag-target", "");

  console.log(trimmedText);
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
