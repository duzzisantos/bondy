import React, { FunctionComponent } from "react";

interface Props {
  index: number;
  handleDrop: any;
  handleDragOver: any;
  children: string;
}

const DragDropTarget: FunctionComponent<Props> = ({
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
      {children}
    </div>
  );
};

export default DragDropTarget;
