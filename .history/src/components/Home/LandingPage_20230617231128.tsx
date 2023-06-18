import React, { FunctionComponent } from "react";

interface ScrollContainerProps {
  content: any;
}
const LandingPageScrollContainer: FunctionComponent<ScrollContainerProps> = ({
  content,
}) => {
  return (
    <div className="col-9 bg-danger">
      <h3>Hello world</h3>
    </div>
  );
};

export default LandingPageScrollContainer;
