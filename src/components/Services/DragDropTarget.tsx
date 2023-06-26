import React, { FunctionComponent } from "react";

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
  return (
    <div
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
