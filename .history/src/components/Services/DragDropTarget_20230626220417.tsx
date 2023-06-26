import React, { FunctionComponent } from "react";

interface Props {
  uniqueID: string;
  index: number;
  handleDrop: any;
  handleDragOver: any;
  children: string;
}

const DragDropTarget: FunctionComponent<Props> = ({
  uniqueID,
  children,
  index,
  handleDrop,
  handleDragOver,
}) => {
  return (
    <div
      className="p-3 col-md-4 chosen-services shadow-sm text-center"
      id={`drop-target-${index + 1}`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      +
    </div>
  );
};

export default DragDropTarget;
