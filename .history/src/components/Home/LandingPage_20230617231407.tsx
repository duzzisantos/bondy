import React, { FunctionComponent } from "react";
import { Card } from "react-bootstrap";

interface ScrollContainerProps {
  content: any[];
}
const LandingPageScrollContainer: FunctionComponent<ScrollContainerProps> = ({
  content,
}) => {
  return (
    <div className="col-9 bg-danger">
      {content.map((element) => (
        <Card></Card>
      ))}
    </div>
  );
};

export default LandingPageScrollContainer;
